

# ProShop eCommerce Platform

Welcome to the ProShop eCommerce platform! This is a comprehensive eCommerce solution built with the MERN stack (MongoDB, Express, React, Node.js) and Redux Toolkit for state management. 


## Live Demo

Check out the live demo here: [https://proshop-25vr.onrender.com/](https://proshop-25vr.onrender.com/)

<img width="1412" alt="image" src="https://github.com/mylittleZ/proshop/assets/30174451/e7f58ec0-ba13-4529-b230-22344ebc5592">

<img width="1095" alt="image" src="https://github.com/mylittleZ/proshop/assets/30174451/5e82b662-d08e-4f91-be9b-1d4c42ca1ba6">

<img width="1168" alt="image" src="https://github.com/mylittleZ/proshop/assets/30174451/f7c39cca-8b51-479e-a64a-d4c15fa073cc">

<img width="1053" alt="image" src="https://github.com/mylittleZ/proshop/assets/30174451/ef785d61-4a42-463f-8c2f-b66890c39652">


## Work Flow

<img width="993" alt="Untitled" src="https://github.com/mylittleZ/proshop/assets/30174451/f9d0aee7-19a2-4fce-b7ab-b94795b84d35">

## Features

- Full-featured shopping cart with quantity adjustment
- Product reviews and ratings
- Top products carousel
- Product pagination for easy navigation
- Product search feature to quickly find products
- User profiles with order history
- Admin dashboard for product management
- Admin features for user management and order details
- Option to mark orders as delivered
- Seamless checkout process (shipping, payment method selection, etc.)
- Integration with PayPal and credit card payments
- Custom database seeder for products & users

## Usage

### Prerequisites

- MongoDB database (MongoDB Atlas)
- PayPal Developer account for client ID

### Environment Variables

Copy `.env.example` to `.env` and fill in your details:

```plaintext
NODE_ENV=development
PORT=5000
MONGO_URI=<your_mongodb_uri>
JWT_SECRET='abc123'
PAYPAL_CLIENT_ID=<your_paypal_client_id>
PAGINATION_LIMIT=8
```

### Install Dependencies

```bash
npm install
cd frontend
npm install
```

### Run the Application

```bash
# Run both frontend (:3000) and backend (:5000)
npm run dev

# Run backend only
npm run server
```

### Build & Deploy

```bash
# Create a production build of the frontend
cd frontend
npm run build
```

### Seed Database

To seed the database with sample data or destroy all data:

```bash
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

### Sample User Logins

- Admin: `admin@email.com` (Password: `123456`)
- Customer: `john@email.com` (Password: `123456`)
- Customer: `jane@email.com` (Password: `123456`)

## Deployment

This project is deployed at [https://proshop-25vr.onrender.com/](https://proshop-25vr.onrender.com/). 

