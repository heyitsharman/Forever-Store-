# Forever Store

A full-stack e-commerce application for fashion retail with separate customer and admin interfaces.

## Description

Forever Store is a modern e-commerce platform built with React and Node.js. Customers can browse products, add items to cart, and complete purchases using Stripe payment gateway. Administrators have access to a dedicated panel for managing products, orders, and inventory.

## Technologies Used

**Frontend:**
- React with Vite
- Tailwind CSS
- React Router DOM
- Axios
- React Toastify

**Backend:**
- Node.js with Express
- MongoDB with Mongoose
- JSON Web Tokens (JWT) for authentication
- Bcrypt for password hashing

**Third-Party Services:**
- Cloudinary for image storage and management
- Stripe for payment processing
- MongoDB Atlas for database hosting

## Project Structure

- **vite-project/** - Customer-facing frontend application
- **admin/** - Admin dashboard for managing store operations
- **Backend/** - RESTful API server

## Live Preview

**Frontend:** [Add your deployed frontend URL here]

**Admin Panel:** [Add your deployed admin URL here]

**Backend API:** [Add your deployed backend URL here]

## Features

- User authentication and authorization
- Product catalog with search and filtering
- Shopping cart functionality
- Secure payment processing with Stripe
- Order management system
- Admin product management
- Order status tracking
- Responsive design for mobile and desktop

## Environment Variables

Create `.env` files in respective directories:

**Backend:**
```
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
CLOUDINARY_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_SECRET_KEY=your_cloudinary_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=your_admin_password
```

**Frontend & Admin:**
```
VITE_BACKEND_URL=your_backend_url
```

## Local Development

**Backend:**
```bash
cd Backend
npm install
npm run server
```

**Frontend:**
```bash
cd vite-project
npm install
npm run dev
```

**Admin:**
```bash
cd admin
npm install
npm run dev
```
