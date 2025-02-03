# ConuHacks-2025

## Demo Video
https://youtu.be/S_ZlMJUoMLU

# Inspiration

Do you work in tech? Do you work long hours every day? Does your back hurt?

We’ve all experienced neck pain, back pain, and fatigue from sitting in front of screens for hours. Bad posture is an invisible problem that leads to serious long-term health issues, but most people don’t even realize when they’re slouching.

We wanted to build a simple, AI-powered solution that keeps you aware of your posture in real-time! Without needing wearable devices or expensive ergonomic setups.

# What It Does

StraightUp is an AI powered posture tracking system that:

Uses computer vision to analyze your posture via your webcam or phone.
Provides real-time feedback to help you maintain good posture.
Alerts you when you're slouching or leaning too far forward.
Works entirely in your browser no extra hardware needed.
Dancing sessions after 20 minutes of good posture to keep the blood flowing.
How We Built It

### Backend: Flask, OpenCV, and Mediapipe for real-time body tracking.
### Frontend: Served through Flask with dynamic HTML, CSS, and JavaScript.
### AI Model: Mediapipe's Pose Estimation framework for detecting posture deviations.
### Deployment: Runs on any computer with a webcam no installation required.
gTTS Voice over assistant used to tell if the user is slouched.

# Challenges We Ran Into

Webcam Latency Optimizing the video stream while keeping real-time processing smooth.
Posture Detection Accuracy Fine-tuning the detection logic to reduce false alerts.
Frontend & Backend Integration Connecting the Flask backend to a seamless user experience.
Accomplishments That We're Proud Of

Built a fully functional AI powered posture tracker in record time.
Integrated real-time video processing without the need for expensive sensors.
Created a solution that anyone can use to improve their health and productivity.
What We Learned

The power of computer vision in analyzing human posture.
How to efficiently process video streams while keeping the UI responsive.
The importance of ergonomics and posture health in productivity.
What's Next for StraightUp

Posture Improvement Tips Adding AI-driven recommendations for better sitting habits.
Workplace Integration A desktop app version for seamless workplace monitoring.
Gamification A reward system for maintaining good posture throughout the day.
Multi-User Mode A version that tracks posture across teams in a co-working space.
