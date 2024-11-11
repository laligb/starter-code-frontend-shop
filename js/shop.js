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

var cart = [];
let count = 0;
var total = 0;

// Exercise 1
function buy(id) {
  // 1. Loop for to the array products to get the item to add to cart
  products.forEach((element) => {
    if (element.id === id) {
      countProducts();

      // 2. Add found product to the cart array
      const productInCart = cart.find((n) => n.id === element.id);

      if (productInCart) {
        productInCart.quantity++;
      } else {
        cart.push({ ...element, quantity: 1 });
      }
    }
  });
}

// Exercise 2
function cleanCart() {
  cart = [];
  document.getElementById("count_product").innerHTML = 0;
  count = 0;
  printCart();
}

// Exercise 3
function calculateTotal() {
  let totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return totalPrice;
}

// Exercise 4
function applyPromotionsCart(cart) {
  // Apply promotions to each item in the array "cart"
  cart.forEach((item) => {
    if (item.offer) {
      if (item.quantity >= item.offer.number) {
        let discount = (item.price * item.offer.percent) / 100;
        item.subtotalWithDiscount = (item.price - discount) * item.quantity;
      }
    }
  });
}

// Exercise 5
function printCart() {
  // Fill the shopping cart modal manipulating the shopping cart dom
  total = 0;

  applyPromotionsCart(cart);

  let modal = document
    .getElementById("cartModal")
    .getElementsByTagName("tbody")[0];

  modal.innerHTML = "";

  cart.forEach((element) => {
    let row = document.createElement("tr");
    let totalOfElement = element.subtotalWithDiscount
      ? element.subtotalWithDiscount.toFixed(2)
      : (element.price * element.quantity).toFixed(2);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.classList.add("btn", "btn-danger");
    deleteBtn.addEventListener("click", () => removeFromCart(element.id));

    let deleteCell = document.createElement("td");
    deleteCell.appendChild(deleteBtn);

    row.innerHTML = `
      <td>${element.name}</td>
      <td>$${element.price.toFixed(2)}</td>
      <td>${element.quantity}</td>
      <td>$${totalOfElement}</td>
    `;
    row.appendChild(deleteCell);

    modal.appendChild(row);

    total += Number(totalOfElement);
  });

  let totalDom = document.getElementById("total");
  totalDom.innerText = `$${total.toFixed(2)}`;
}

// ** Nivell II **

// Exercise 7
function removeFromCart(id) {
  cart.forEach((item) => {
    if (item.id === id) {
      if (item.quantity > 1) {
        item.quantity--;
        reduceCount();

        if (item.subtotalWithDiscount && item.quantity <= item.offer.number) {
          delete item.subtotalWithDiscount;
        }
      } else {
        cart = cart.filter((item) => item.id !== id);
        reduceCount();
      }
    }
  });

  printCart();
}

function open_modal() {
  printCart();
}

function countProducts() {
  count++;
  let countProduct = document.getElementById("count_product");
  countProduct.innerHTML = count;
}

function reduceCount() {
  if (count !== 0) {
    count--;
    let countProduct = document.getElementById("count_product");
    countProduct.innerHTML = count;
  }
}
