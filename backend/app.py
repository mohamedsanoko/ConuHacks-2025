from flask import Flask, render_template, Response
import cv2
import mediapipe as mp
import numpy as np
import time

app = Flask(__name__)

# Initialize MediaPipe Pose
mp_pose = mp.solutions.pose
pose = mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5)
mp_drawing = mp.solutions.drawing_utils

# Open the webcam
cap = cv2.VideoCapture(0)

def calculate_angle(a, b, c):
    """Calculate angle between three points"""
    a = np.array(a)
    b = np.array(b)
    c = np.array(c)
    
    radians = np.arctan2(c[1]-b[1], c[0]-b[0]) - np.arctan2(a[1]-b[1], a[0]-b[0])
    angle = np.abs(radians*180.0/np.pi)
    
    if angle > 180.0:
        angle = 360-angle
        
    return angle

class PostureTracker:
    def __init__(self):
        self.bad_posture_start = None
        self.bad_posture_time = 0.0
        
    def update(self, neck_angle, back_angle):
        # Updated thresholds based on ergonomic guidelines
        is_bad_posture = neck_angle > 45 or back_angle > 45  # Updated thresholds
        current_time = time.time()
        
        if is_bad_posture:
            if self.bad_posture_start is None:
                self.bad_posture_start = current_time
            self.bad_posture_time = current_time - self.bad_posture_start
        else:
            self.bad_posture_start = None
            
        return self.bad_posture_time

def generate_frames():
    posture_tracker = PostureTracker()
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
            
        # Convert the frame to RGB
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)
        results = pose.process(rgb_frame)
        
        if results.pose_landmarks:
            landmarks = results.pose_landmarks.landmark
            
            # Get key landmarks for posture analysis
            ear = landmarks[mp_pose.PoseLandmark.RIGHT_EAR]
            shoulder = landmarks[mp_pose.PoseLandmark.RIGHT_SHOULDER]
            hip = landmarks[mp_pose.PoseLandmark.RIGHT_HIP]
            
            # Convert to pixel coordinates
            frame_height, frame_width, _ = frame.shape
            ear_point = (int(ear.x * frame_width), int(ear.y * frame_height))
            shoulder_point = (int(shoulder.x * frame_width), int(shoulder.y * frame_height))
            hip_point = (int(hip.x * frame_width), int(hip.y * frame_height))
            
            # Create vertical reference points
            vertical_neck = (shoulder_point[0], shoulder_point[1] - 100)
            vertical_back = (hip_point[0], hip_point[1] - 100)
            
            # Calculate angles
            neck_angle = calculate_angle(ear_point, shoulder_point, vertical_neck)
            back_angle = calculate_angle(shoulder_point, hip_point, vertical_back)
            
            # Draw reference points (green dots)
            cv2.circle(frame, ear_point, 5, (0, 255, 0), -1)
            cv2.circle(frame, shoulder_point, 5, (0, 255, 0), -1)
            cv2.circle(frame, hip_point, 5, (0, 255, 0), -1)
            
            # Draw posture lines
            # Neck line (red)
            cv2.line(frame, ear_point, shoulder_point, (0, 0, 255), 2)
            # Back line (red)
            cv2.line(frame, shoulder_point, hip_point, (0, 0, 255), 2)
            
            # Draw vertical reference lines (blue)
            cv2.line(frame, shoulder_point, vertical_neck, (255, 0, 0), 2)
            cv2.line(frame, hip_point, vertical_back, (255, 0, 0), 2)
            
            # Update posture tracking
            bad_posture_time = posture_tracker.update(neck_angle, back_angle)
            
            # Display measurements
            cv2.putText(frame, f"Neck angle: {int(neck_angle)}°", (10, 30),
                       cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
            cv2.putText(frame, f"Back angle: {int(back_angle)}°", (10, 60),
                       cv2.FONT_HERSHEY_SIMPLEX, 0.7, (255, 255, 255), 2)
            
            if bad_posture_time > 0:
                cv2.putText(frame, f"Poor posture: {bad_posture_time:.1f}s",
                           (10, frame_height - 20),
                           cv2.FONT_HERSHEY_SIMPLEX, 0.7, (0, 0, 255), 2)
        
        ret, buffer = cv2.imencode('.jpg', frame)
        frame = buffer.tobytes()
        
        yield (b'--frame\r\n'
               b'Content-Type: image/jpeg\r\n\r\n' + frame + b'\r\n\r\n')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/video_feed')
def video_feed():
    return Response(generate_frames(),
                   mimetype='multipart/x-mixed-replace; boundary=frame')

if __name__ == '__main__':
    app.run(debug=True)