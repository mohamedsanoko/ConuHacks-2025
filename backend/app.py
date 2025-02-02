from flask import Flask, render_template, Response
import cv2
import mediapipe as mp

app = Flask(__name__)

# Initialize MediaPipe Pose
import cv2
import mediapipe as mp

# Initialize MediaPipe Pose
mp_pose = mp.solutions.pose
pose = mp_pose.Pose(min_detection_confidence=0.5, min_tracking_confidence=0.5)
mp_drawing = mp.solutions.drawing_utils

# Open the webcam
cap = cv2.VideoCapture(0)  # Change if using a different camera

def generate_frames():
    while True:
        ret, frame = cap.read()
        if not ret:
            break

        # Convert the frame to RGB
        rgb_frame = cv2.cvtColor(frame, cv2.COLOR_BGR2RGB)

        # Process the frame to get pose landmarks
        results = pose.process(rgb_frame)

        if results.pose_landmarks:
            # Get key landmark positions
            shoulder = results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_SHOULDER]
            eye = results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_EYE]
            hip = results.pose_landmarks.landmark[mp_pose.PoseLandmark.LEFT_HIP]

            # Convert landmarks to pixel coordinates
            frame_height, frame_width, _ = frame.shape
            shoulder_coords = (int(shoulder.x * frame_width), int(shoulder.y * frame_height))
            eye_coords = (int(eye.x * frame_width), int(eye.y * frame_height))
            hip_coords = (int(hip.x * frame_width), int(hip.y * frame_height))

            # Draw custom lines and points
            cv2.line(frame, shoulder_coords, eye_coords, (0, 0, 255), 3)  # Red line (shoulder to eye)
            cv2.line(frame, shoulder_coords, hip_coords, (255, 255, 0), 3)  # Yellow line (shoulder to hip)

            # Draw circular points at key landmarks
            cv2.circle(frame, shoulder_coords, 6, (0, 255, 255), -1)  # Yellow point on shoulder
            cv2.circle(frame, eye_coords, 6, (255, 0, 255), -1)  # Pink point on eye
            cv2.circle(frame, hip_coords, 6, (0, 255, 0), -1)  # Green point on hip

            # Add labels to points
            cv2.putText(frame, "49", eye_coords, cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 2)
            cv2.putText(frame, "12", hip_coords, cv2.FONT_HERSHEY_SIMPLEX, 0.6, (255, 255, 255), 2)

        # Convert the frame to JPEG for web display
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
