# Plant Leaf Disease Detection

A React-based plant leaf disease detection web application. The project allows users to upload a leaf image, preview it in the browser, run a disease detection flow, and view the detected disease name with a suggested cure.

> **Note:** This project currently works as a front-end detection prototype. It simulates disease prediction using predefined disease outputs and deterministic image hashing. It is suitable for demonstrating UI flow, image upload handling, result display, and future integration with a trained machine learning model.

## Preview

<img width="1912" height="867" alt="1plant" src="https://github.com/user-attachments/assets/cfe11dfd-755d-4fa3-9811-2e9559114bc9" />



<img width="1887" height="862" alt="2plant" src="https://github.com/user-attachments/assets/327668c6-2893-4545-9b00-8091e462562a" />



## Overview

This project was created to demonstrate how a plant disease detection system can be presented through a simple and user-friendly web interface. The application accepts a leaf image from the user, displays a preview, validates whether the uploaded file appears to be a leaf image, and then shows a disease result with a recommended cure.

The current version focuses on front-end implementation and project presentation. It can later be extended with a real trained deep learning model or an API-based prediction backend.

## Features

- Upload plant/leaf images from the browser
- Preview the selected image before detection
- Basic filename-based validation for leaf images
- Disease detection result display
- Suggested cure/recommendation for each disease
- Loading state during detection
- Toast notification for invalid uploads
- Clean React component structure
- Vite-based development setup

## Tech Stack

| Area | Technology |
|---|---|
| Frontend | React |
| Build Tool | Vite |
| Styling | CSS |
| Notifications | React Toastify |
| Image Hashing | SparkMD5 |
| Language | JavaScript |

## How It Works

1. User uploads a plant leaf image.
2. The app generates a hash of the uploaded image.
3. The image is previewed on the screen.
4. The app validates whether the file name appears to be related to a leaf/plant image.
5. A disease result is selected from predefined disease outputs.
6. The disease name and suggested cure are displayed to the user.

## Project Structure

```text
plant-leaf-disease-detection/
├── README.md
└── plant-disease-detection/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── App.jsx
        ├── App.css
        ├── data/
        │   └── data.js
        ├── assets/
        └── componnets/
```

## Run Locally

1. Clone the repository:

```bash
git clone https://github.com/FAZALURREHMAN12/plant-leaf-disease-detection.git
```

2. Open the project folder:

```bash
cd plant-leaf-disease-detection/plant-disease-detection
```

3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local Vite URL shown in the terminal, usually:

```text
http://localhost:5173
```

## Future Improvements

- Integrate a real trained CNN/deep learning model
- Add backend API for model inference
- Add confidence score for predictions
- Support more plant categories and disease classes
- Improve validation beyond filename checking
- Add proper dataset documentation
- Deploy the app online using Vercel, Netlify, or Render

## Author

**Fazal Ur Rehman**  
GitHub: [FAZALURREHMAN12](https://github.com/FAZALURREHMAN12)
