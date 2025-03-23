# EdTech App

This project is an EdTech application that provides various services for students. The project includes a frontend built with React and a backend using AWS Lambda functions. This README provides detailed instructions for setting up the project locally, running the frontend and backend separately, and setting up infrastructure using Terraform.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14.x or later)
- npm (v6.x or later)
- AWS CLI
- Terraform (v0.14.x or later)

## Local Setup

1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Cherun204/edtech-app.git
cd edtech-app

2. Install Dependencies
Install the dependencies for both the frontend and backend:

# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend/lambda/checkCreditScore
npm install

======================
Running the Frontend
To run the frontend locally, follow these steps:

Navigate to the frontend directory:


cd frontend
Start the development server:

npm start

cd ../backend
sam local start-api
cd ../terraform
cd ../terraform
terraform init