//import products from "./products.json" assert { type: "json" };
//console.log(products);
var products = [
  {
    id: 1,
    name: "cooking oil",
    price: 10.5,
    type: "grocery",
    offer: {
      number: 3,
      percent: 20,
    },
  },
  {
    id: 2,
    name: "Pasta",
    price: 6.25,
    type: "grocery",
  },
  {
    id: 3,
    name: "Instant cupcake mixture",
    price: 5,
    type: "grocery",
    offer: {
      number: 10,
      percent: 30,
    },
  },
  {
    id: 4,
    name: "All-in-one",
    price: 260,
    type: "beauty",
  },
  {
    id: 5,
    name: "Zero Make-up Kit",
    price: 20.5,
    type: "beauty",
  },
  {
    id: 6,
    name: "Lip Tints",
    price: 12.75,
    type: "beauty",
  },
  {
    id: 7,
    name: "Lawn Dress",
    price: 15,
    type: "clothes",
  },
  {
    id: 8,
    name: "Lawn-Chiffon Combo",
    price: 19.99,
    type: "clothes",
  },
  {
    id: 9,
    name: "Toddler Frock",
    price: 9.99,
    type: "clothes",
  },
];

// => Reminder, it's extremely important that you debug your code.
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll
// also find errors faster.
// ** Don't hesitate to seek help from your peers or your mentor if you still
// struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects),
// but each one has a quantity field to define its quantity, so these products
// are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {
  console.log(id);
  // 1. Loop for to the array products to get the item to add to cart
  products.forEach((element) => {
    if (element.id === id) {
      console.log(element);

      // 2. Add found product to the cart array
      const productInCart = cart.find((n) => n.id === element.id);
      console.log(productInCart);

      if (productInCart) {
        productInCart.quantity++;
        console.log(
          `quantity of ${productInCart.name} is ${productInCart.quantity}`
        );
      } else {
        cart.push({ ...element, quantity: 1 });
        console.log(`${element.name} added to cart`);
      }
    }
  });
  console.log(cart);
}

// Creating global object for buy
//window.buy = buy;

// Exercise 2
function cleanCart() {
  cart = [];
  console.log(cart);
}
//window.cleanCart = cleanCart;

// Exercise 3
function calculateTotal() {
  // Calculate total price of the cart using the "cartList" array

  let totalPrice = cart.reduce((total, item) => total + item.price, 0);
  console.log(totalPrice);
  return totalPrice;
}

// Exercise 4
function applyPromotionsCart(cart) {
  // Apply promotions to each item in the array "cart"
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {}

function open_modal() {
  printCart();
}
