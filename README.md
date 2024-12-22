# PulseAI

PulseAI is a cutting-edge healthcare web application that predicts the risk of heart disease using machine learning. It is designed to provide users with secure, accurate, and accessible health insights.

## Features
- Heart Disease Prediction: Leverages pre-trained machine learning models to predict heart disease risks based on user inputs.
- User Authentication: Secure user login and registration system.
- Informative Blog: Provides users with articles and resources on heart health.
- Responsive Design: User-friendly interface optimized for mobile and desktop devices.
- Cloud Deployment: Deployed on Netlify (frontend) and a backend hosting platform, ensuring scalability and performance.

## Tech Stack
- Frontend: HTML, CSS, Bootstrap, JavaScript
- Backend: Python, Django Framework
- Database: SQLite (development phase)
- Hosting: Netlify (frontend), Azure/Heroku (backend)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/pulseai.git
   cd pulseai
   ```

2. Set up a virtual environment:
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows: env\Scripts\activate
   ```

3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run migrations:
   ```bash
   python manage.py migrate
   ```

5. Start the development server:
   ```bash
   python manage.py runserver
   ```

6. Access the application:
   Open your browser and navigate to `http://127.0.0.1:8000`

## Deployment

### Frontend
- The frontend is deployed on **Netlify**, ensuring fast and reliable delivery of static assets.
- Steps:
  - Use Django's `collectstatic` command to gather static files.
  - Deploy the static files on Netlify.

### Backend
- The backend is deployed on platforms like **Azure** or **Heroku** for managing API requests and data.
- Ensure environment variables (e.g., secret keys) are configured correctly in the hosting platform.

## API Endpoints

- User Authentication:
  - `POST /login`: Authenticate users.
  - `POST /register`: Create a new user account.

- Heart Disease Prediction:
  - `POST /predict`: Accepts user medical data and returns prediction results.

## Directory Structure
```
PulseAI/
├── blog/           # Blog app for health articles
├── patient/        # Patient app for prediction and data handling
├── static/         # Static files for frontend
├── templates/      # HTML templates
├── db.sqlite3      # Database file
├── manage.py       # Django project management script
├── pulseai/        # Project settings and configuration
└── requirements.txt# Python dependencies
```

## Contributing
We welcome contributions to PulseAI! To contribute:
1. Fork the repository.
2. Create a new branch.
3. Make your changes.
4. Submit a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact
For inquiries or support, please contact [dbikashkumar2003@example.com].
