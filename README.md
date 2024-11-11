# Sprint 2 IT Academy | Shop

Customized by [Lali](https://github.com/laligb)

## Project Description

This project is part of Sprint 2 for IT Academy. It is a demo e-commerce application that allows users to manage a shopping cart and apply promotions on the final price. This initial version focuses on setting up core features of the application, such as product listings, cart functionality, and checkout calculations.

---

## Table of Contents

- [Live Demo](#live-demo)
- [Requirements](#requirements)
- [Project Setup](#project-setup)
- [Contributing](#contributing)

---

## Live Demo

You can view the live version of this project here: [starter-code-frontend-shop](https://starter-code-frontend-shop.vercel.app/)

---

## Requirements

To set up this project, ensure that you have the following:

- [Node.js](https://nodejs.org/) (version 14.x or above)
- [Git](https://git-scm.com/)

---

## Project Setup

1. **Clone this repository**:

   ```bash
   git clone https://github.com/laligb/starter-code-frontend-shop
   cd starter-code-frontend-shop
   ```

2. **Run a Local Server**:

   - To serve the project on `localhost`, you can use any simple HTTP server. Here are a couple of options:

     **Using Node.js HTTP Server**:

     - If you have Node.js installed, you can install `http-server` globally and run it in the project directory:
       ```bash
       npm install -g http-server
       http-server -p 8080 .
       ```

     **Using Live Server in VS Code**:

     - Open the project folder in [VS Code](https://code.visualstudio.com/).
     - Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
     - Right-click on the `index.html` file and select "Open with Live Server".
     - This will typically open the project on `http://localhost:5500` or similar; adjust the port if needed to match `8080`.

3. **View in Browser**:
   - After starting the server, open your browser and go to `http://localhost:8080` to view the application.

## Features

- **Shopping Cart Management**: Add, remove, and update products in the cart.
- **Promotions**: Apply discounts and promotions on selected products.
- **Product Categories**: View a small selection of 9 hardcoded products divided into 3 categories.
- **Console Output for Logic Functions**: View results of functions via the console, as this version doesn’t yet include a full backend.

---

## Acknowledgments

- Thanks to IT Academy for providing the starter code and project guidelines.
- Built with guidance from the frontend manager at IT Academy.

---

This is a demo project for educational purposes. For more information, visit the [original repository](https://github.com/IT-Academy-BCN/starter-code-frontend-shop).
