# AI Image Generator

This project is an AI Image Generator built using React and OpenAI. The application allows users to generate images based on text prompts using OpenAI's image generation capabilities.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Download Image](#download-image)
- [Contributing](#contributing)


## Introduction
The AI Image Generator is a web application that lets users create unique images by providing descriptive text prompts. Leveraging OpenAI's image generation API, the application processes the text input to generate corresponding images.

## Features
- Generate images from text prompts using AI.
- Download generated images.
- User-friendly interface.

## Demo
[Live Demo](#) (Add link to live demo if available)

## Installation

### Prerequisites
- Node.js and npm installed on your local machine.
- OpenAI API key.

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/abhishekujale/ai-imagegenerator.git
    cd ai-image-generator
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your OpenAI API key:
    ```env
    REACT_APP_OPENAI_API_KEY=your_openai_api_key
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage
1. Enter a descriptive text prompt in the input field.
2. Click the "Generate" button to generate an image based on the prompt.
3. The generated image will be displayed on the screen.

## Download Image
1. Once the image is generated, click the "Download" button to download the image.
2. The image will be saved to your local machine as `generated_image.png`.

## Contributing
We welcome contributions to enhance the functionality and features of this project. To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature-name
    ```
3. Make your changes and commit them:
    ```bash
    git commit -m 'Add some feature'
    ```
4. Push to the branch:
    ```bash
    git push origin feature-name
    ```
5. Open a pull request.



