

// PRODUCTS DATA
const products = [
  { id: 1, name: "Samsung TV",   price: 500000 },
  { id: 2, name: "Pixel 4a",     price: 250000 },
  { id: 3, name: "PS 5",         price: 300000 },
  { id: 4, name: "Macbook Air",  price: 800000 },
  { id: 5, name: "Apple Watch",  price: 95000  },
  { id: 6, name: "Air Pods",     price: 75000  },
];


// CART STATE
let cart = [];


// FORMAT PRICE
function formatPrice(amount) {
  return "₵" + amount.toLocaleString();
}


// TOGGLE CART (ADD / REMOVE)
function toggleCart(productId) {
  const product = products.find(p => p.id === productId);
  const existingItem = cart.find(item => item.id === productId);
  const btn = document.querySelector(`#product-${productId} .cart-action-btn`);

  if (existingItem) {
    // Remove from cart
    cart = cart.filter(item => item.id !== productId);
    btn.textContent = "ADD TO CART";
    btn.classList.remove("in-cart");
  } else {
    // Add to cart
    cart.push({ ...product, quantity: 1 });
    btn.textContent = "REMOVE FROM CART";
    btn.classList.add("in-cart");
  }

  updateCartCount();
}

// UPDATE CART COUNT BADGE
function updateCartCount() {
  const count = cart.length;
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartCountModal").textContent = count;
}


// OPEN CART MODAL
function openCart() {
  renderCartItems();
  document.getElementById("cartOverlay").classList.add("open");
}

// CLOSE CART MODAL
function closeCart() {
  document.getElementById("cartOverlay").classList.remove("open");
}

// RENDER CART ITEMS IN TABLE
function renderCartItems() {
  const tbody = document.getElementById("cartTableBody");
  tbody.innerHTML = "";

  if (cart.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center; padding:20px; color:#999;">
          Your cart is empty
        </td>
      </tr>`;
    updateTotal();
    return;
  }

  cart.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${formatPrice(item.price * item.quantity)}</td>
      <td>
        <button class="qty-btn" onclick="decreaseQty(${item.id})">−</button>
        <span class="qty-display">${item.quantity}</span>
        <button class="qty-btn" onclick="increaseQty(${item.id})">+</button>
      </td>
      <td>
        <button class="remove-btn" onclick="removeFromCart(${item.id})">
          Remove
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });

  updateTotal();
}


// INCREASE QUANTITY
function increaseQty(productId) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity += 1;
    renderCartItems();
  }
}


// DECREASE QUANTITY
function decreaseQty(productId) {
  const item = cart.find(item => item.id === productId);
  if (item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      removeFromCart(productId);
      return;
    }
    renderCartItems();
  }
}


// REMOVE FROM CART
function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);

  // Change button back to ADD TO CART
  const btn = document.querySelector(
    `#product-${productId} .cart-action-btn`
  );
  if (btn) {
    btn.textContent = "ADD TO CART";
    btn.classList.remove("in-cart");
  }

  updateCartCount();
  renderCartItems();
}


// UPDATE TOTAL AMOUNT
function updateTotal() {
  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );
  document.getElementById("totalAmount").textContent = formatPrice(total);
}


// VALIDATE NAME
function validateName() {
  const name = document.getElementById("userName").value.trim();
  const error = document.getElementById("nameError");
  if (name === "") {
    error.textContent = "Name cannot be empty.";
    return false;
  }
  error.textContent = "";
  return true;
}


// VALIDATE EMAIL
function validateEmail() {
  const email = document.getElementById("userEmail").value.trim();
  const error = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === "") {
    error.textContent = "Email cannot be empty.";
    return false;
  }
  if (!emailRegex.test(email)) {
    error.textContent = "Please enter a valid email address.";
    return false;
  }
  error.textContent = "";
  return true;
}


// VALIDATE PHONE
function validatePhone() {
  const phone = document.getElementById("userPhone").value.trim();
  const error = document.getElementById("phoneError");
  if (phone === "") {
    error.textContent = "Phone number cannot be empty.";
    return false;
  }
  if (phone.length < 10) {
    error.textContent = "Phone number must be at least 10 digits.";
    return false;
  }
  if (isNaN(phone)) {
    error.textContent = "Phone number must contain only numbers.";
    return false;
  }
  error.textContent = "";
  return true;
}


// VALIDATE ALL FIELDS
function validateAll() {
  const nameValid  = validateName();
  const emailValid = validateEmail();
  const phoneValid = validatePhone();
  return nameValid && emailValid && phoneValid;
}


// CHECKOUT — PAYSTACK
function checkout() {
  if (cart.length === 0) {
    alert("Your cart is empty. Add items before checking out.");
    return;
  }

  if (!validateAll()) {
    alert("Please fill in all your details correctly.");
    return;
  }

  const name  = document.getElementById("userName").value.trim();
  const email = document.getElementById("userEmail").value.trim();
  const phone = document.getElementById("userPhone").value.trim();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  // Close cart modal before Paystack opens
  closeCart();

  // PAYSTACK HANDLER
  const handler = PaystackPop.setup({
    key: "pk_test_a404eccdd768ad70bb6f793facdf823dae6c9b48",
    email: email,
    amount: total * 100,
    currency: "GHS",
    ref: "iiBUY_" + Math.floor(Math.random() * 1000000000),
    metadata: {
      custom_fields: [
        { display_name: "Customer Name",  value: name  },
        { display_name: "Phone Number",   value: phone }
      ]
    },
    callback: function(response) {
      // Payment successful
      showSummary(name);
    },
    onClose: function() {
      // User closed Paystack without paying
      console.log("Payment cancelled.");
    }
  });

  handler.openIframe();
}


// SHOW SUMMARY MODAL
function showSummary(name) {
  document.getElementById("summaryMessage").textContent =
    `Thank You, ${name}. Your Order Has been Received.`;

  const tbody = document.getElementById("summaryTableBody");
  tbody.innerHTML = "";

  cart.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.quantity}</td>
    `;
    tbody.appendChild(row);
  });

  document.getElementById("summaryOverlay").classList.add("open");
}


// CLOSE SUMMARY + RESET
function closeSummary() {
  document.getElementById("summaryOverlay").classList.remove("open");
  location.reload(); // clears cart and resets page
}


// CLOSE MODAL ON OVERLAY CLICK
document.getElementById("cartOverlay").addEventListener("click", function(e) {
  if (e.target === this) closeCart();
});

document.getElementById("summaryOverlay").addEventListener("click", function(e) {
  if (e.target === this) closeSummary();
});


// CART BUTTON OPENS MODAL
document.getElementById("cartBtn").addEventListener("click", openCart);
document.getElementById("cartModalBtn").addEventListener("click", closeCart);
