# URL Shortener README

## Overview
This is a simple URL Shortener application built using **Node.js**, **EJS** for templating, **Nano ID** for generating unique IDs, and **MongoDB** for storing URLs. The application allows users to shorten long URLs and provides a way to access them easily.

## Features
- Shorten long URLs into compact links.
- Intrective user interface for easy usage.
- Redirect to the original URL when accessing the shortened link.

## Installation

### Prerequisites
- Node.js (v12 or higher)
- MongoDB installed or access to a MongoDB database
- npm (Node Package Manager)

### Steps to Install
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/url-shortener.git
   cd url-shortener
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Environment Variables**
   - Create a `.env` file in the root directory and add your MongoDB connection string:
   ```plaintext
   MONGODB_URI=mongodb://<username>:<password>@localhost:27017/<database>
   ```

4. **Run MongoDB**
   - Ensure your MongoDB server is running.

## Starting the Project
To start the server, run the following command:
```bash
npm start
```

The application will be available at `http://localhost:3000`.

## Usage
- Open a web browser and navigate to `http://localhost:3000`.
- Enter the URL you want to shorten.
- Click on the “Shorten” button.
- Copy the generated short URL to share it.

## Dependencies
- **EJS**: A templating engine for rendering HTML.
- **NanoID**: A tiny, secure, URL-friendly unique string ID generator.
- **MongoDB Node.js Driver**: For interacting with the MongoDB database.

## License
This project is licensed under the MIT License. 

---

