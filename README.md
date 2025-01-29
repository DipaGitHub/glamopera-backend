# GlamOpera - Backend
GlamOpera - Backend is the server-side application built with Node.js and MongoDB, providing the core functionality and API support for the GlamOpera beauty e-commerce website. This backend handles all user and product data management, including user authentication, product listings, order processing, and more.

# Features:
User Management: Secure signup, login, and authentication (JWT) for users to create accounts, view order histories, and manage their profiles.

Product Management: CRUD operations for managing beauty, skincare, and makeup products. Includes product details, pricing, stock quantities, and more.

Order Management: Handling orders from checkout to fulfillment. Ensures products are properly added, processed, and tracked for delivery.

Database Integration: Uses MongoDB to store product details, user profiles, order information, and reviews.

Authentication & Authorization: JWT (JSON Web Tokens) for secure authentication. Ensures that users have proper access to their data and allows for admin management of the products.

API Endpoints: RESTful API providing endpoints for all client-side interactions, including product listings, adding items to the cart, checking out, and tracking orders.

Error Handling & Validation: Handles errors such as missing products, insufficient stock, and user login errors. Ensures user input validation for robust and secure interactions.

# Technology Stack:
Node.js: JavaScript runtime environment for building the backend API.

Express: Web application framework for simplifying routing and middleware management.

MongoDB: NoSQL database used to store user, product, and order data.

Mongoose: MongoDB ODM to interact with the database more easily.

JWT (JSON Web Token): For secure user authentication and maintaining user sessions.

Bcrypt.js: For securely hashing passwords before saving them to the database.

CORS: For managing cross-origin resource sharing between the backend and frontend.
