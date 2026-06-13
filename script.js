// PRODUCTS DATA — 18 products
const products = [
  
  // PHONES 
  {
    id: 1,
    name: "Pixel 4a",
    category: "phones",
    price: 2500,
    rating: 4.5,
    reviews: 128,
    badge: "hot",
    img: "pixel-4a.jpg",
    desc: "Google Pixel 4a with 5G support, 6GB RAM, 128GB storage and an incredible camera system for stunning photos."
  },
  {
    id: 2,
    name: "iPhone 14 Pro",
    category: "phones",
    price: 7500,
    rating: 4.8,
    reviews: 342,
    badge: "new",
    img: "iphone-14.jpg",
    desc: "Apple iPhone 14 Pro with Dynamic Island, 48MP camera, A16 Bionic chip and all-day battery life."
  },
  {
    id: 3,
    name: "Samsung Galaxy S23",
    category: "phones",
    price: 4000,
    rating: 4.6,
    reviews: 215,
    badge: "",
    img: "samsung-s23.jpg",
    desc: "Samsung Galaxy S23 with Snapdragon 8 Gen 2, 200MP camera and advanced AI photography features."
  },

  // LAPTOPS 
  {
    id: 4,
    name: "Macbook Air M2",
    category: "laptops",
    price: 11000,
    rating: 4.9,
    reviews: 512,
    badge: "hot",
    img: "macbook-air.jpg",
    desc: "Apple Macbook Air with M2 chip, 8GB RAM, 256GB SSD. Incredibly fast and silent with up to 18 hours battery."
  },
  {
    id: 5,
    name: "Dell XPS 15",
    category: "laptops",
    price: 8800,
    rating: 4.7,
    reviews: 189,
    badge: "",
    img: "dell-xps.jpg",
    desc: "Dell XPS 15 with Intel Core i7, 16GB RAM, NVIDIA RTX 3050 Ti and a stunning 4K OLED display."
  },
  {
    id: 6,
    name: "HP Spectre x360",
    category: "laptops",
    price: 21000,
    rating: 4.5,
    reviews: 97,
    badge: "sale",
    img: "hp-spectre.jpg",
    desc: "HP Spectre x360 2-in-1 laptop with Intel Evo platform, touchscreen and premium build quality."
  },

  // GAMING 
  {
    id: 7,
    name: "PS5",
    category: "gaming",
    price: 8300,
    rating: 4.9,
    reviews: 876,
    badge: "hot",
    img: "ps5.jpg",
    desc: "Sony PlayStation 5 with ultra-high-speed SSD, haptic feedback DualSense controller and 4K gaming."
  },
  {
    id: 8,
    name: "Xbox Series X",
    category: "gaming",
    price: 8500,
    rating: 4.7,
    reviews: 445,
    badge: "",
    img: "xbox-series-x.jpg",
    desc: "Microsoft Xbox Series X with 12 teraflops of GPU power, 1TB SSD and up to 120fps gaming."
  },
  {
    id: 9,
    name: "Nintendo Switch OLED",
    category: "gaming",
    price: 4800,
    rating: 4.6,
    reviews: 632,
    badge: "new",
    img: "nintendo-switch.jpg",
    desc: "Nintendo Switch OLED model with vivid 7-inch OLED screen, enhanced audio and 64GB storage."
  },

  // WEARABLES
  {
    id: 10,
    name: "Apple Watch Series 9",
    category: "wearables",
    price: 4500,
    rating: 4.8,
    reviews: 267,
    badge: "new",
    img: "apple-watch.jpg",
    desc: "Apple Watch Series 9 with S9 chip, double tap gesture, always-on display and advanced health tracking."
  },
  {
    id: 11,
    name: "Samsung Galaxy Watch 6",
    category: "wearables",
    price: 4190,
    rating: 4.5,
    reviews: 143,
    badge: "",
    img: "galaxy-watch.jpg",
    desc: "Samsung Galaxy Watch 6 with advanced sleep coaching, heart rate monitoring and 40 hour battery."
  },
  {
    id: 12,
    name: "Fitbit Charge 6",
    category: "wearables",
    price: 2485,
    rating: 4.3,
    reviews: 88,
    badge: "sale",
    img: "fitbit.jpg",
    desc: "Fitbit Charge 6 fitness tracker with built-in GPS, stress management tools and Google integration."
  },

  // AUDIO
  {
    id: 13,
    name: "AirPods Pro 2",
    category: "audio",
    price: 3200,
    rating: 4.9,
    reviews: 934,
    badge: "hot",
    img: "airpods.jpg",
    desc: "Apple AirPods Pro 2nd generation with active noise cancellation, adaptive transparency and USB-C charging."
  },
  {
    id: 14,
    name: "Sony WH-1000XM5",
    category: "audio",
    price: 4490,
    rating: 4.8,
    reviews: 521,
    badge: "",
    img: "sony-headphones.jpg",
    desc: "Sony WH-1000XM5 headphones with industry-leading noise cancellation and 30 hours battery life."
  },
  {
    id: 15,
    name: "Samsung Galaxy Buds 2",
    category: "audio",
    price: 1390,
    rating: 4.4,
    reviews: 176,
    badge: "sale",
    img: "galaxy-buds.jpg",
    desc: "Samsung Galaxy Buds 2 with active noise cancellation, 3-mic system and compact design."
  },

  // ACCESSORIES
  {
    id: 16,
    name: "Samsung QLED 4K TV",
    category: "accessories",
    price: 20000,
    rating: 4.7,
    reviews: 312,
    badge: "",
    img: "samsung-tv.jpg",
    desc: "Samsung 55-inch QLED 4K Smart TV with Quantum HDR, built-in Alexa and gaming mode."
  },
  {
    id: 17,
    name: "iPad Pro M2",
    category: "accessories",
    price: 16500,
    rating: 4.8,
    reviews: 423,
    badge: "new",
    img: "ipad-pro.jpg",
    desc: "Apple iPad Pro with M2 chip, Liquid Retina XDR display, ProMotion technology and Apple Pencil support."
  },
  {
    id: 18,
    name: "Logitech MX Master 3",
    category: "accessories",
    price: 1799,
    rating: 4.6,
    reviews: 199,
    badge: "sale",
    img: "logitech-mouse.jpg",
    desc: "Logitech MX Master 3 wireless mouse with MagSpeed scrolling, ergonomic design and 70-day battery."
  }
];

// SVG ICON STRINGS
// for toast notifications
const icons = {
  success: `<svg xmlns="http://www.w3.org/2000/svg"
    width="18" height="18" viewBox="0 0 24 24"
    fill="#27ae60">
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19
      21 7l-1.41-1.41L9 16.17z"/>
  </svg>`,

  error: `<svg xmlns="http://www.w3.org/2000/svg"
    width="18" height="18" viewBox="0 0 24 24"
    fill="#e74c3c">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48
      10 10 10 10-4.48 10-10S17.52 2 12 2zm1
      15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
  </svg>`,

  info: `<svg xmlns="http://www.w3.org/2000/svg"
    width="18" height="18" viewBox="0 0 24 24"
    fill="#3498db">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48
      10 10 10 10-4.48 10-10S17.52 2 12 2zm1
      15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
  </svg>`,

  cart: `<svg xmlns="http://www.w3.org/2000/svg"
    width="18" height="18" viewBox="0 0 24 24"
    fill="#ff6b35">
    <path d="M7 18c-1.1 0-2 .9-2 2s.9 2 2
      2 2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-2 .9
      -2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zM7.8
      13h9.4l1.45-7.18.3-1.82H5.21l-.94-2H1v
      2h2l3.6 7.59L5.25 13H19v2H7l-.2-2zm2
      .2L7.42 7h9.15l-1.18 6H9.8z"/>
  </svg>`,

  delete: `<svg xmlns="http://www.w3.org/2000/svg"
    width="18" height="18" viewBox="0 0 24 24"
    fill="#e74c3c">
    <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0
      2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1
      1H5v2h14V4z"/>
  </svg>`,

  truck: `<svg xmlns="http://www.w3.org/2000/svg"
    width="18" height="18" viewBox="0 0 24 24"
    fill="#ff6b35">
    <path d="M20 8h-3V4H3c-1.1 0-2 .9-2
      2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0
      1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6
      18.5c-.83 0-1.5-.67-1.5-1.5S5.17 15.5
      6 15.5s1.5.67 1.5 1.5S6.83 18.5 6
      18.5zm13.5-9l1.96 2.5H17V9.5h2.5zM18
      18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5
      1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5
      1.5z"/>
  </svg>`,

  sun: `<svg xmlns="http://www.w3.org/2000/svg"
    width="18" height="18" viewBox="0 0 24 24"
    fill="#f1c40f">
    <path d="M6.76 4.84l-1.8-1.79-1.41
      1.41 1.79 1.79 1.42-1.41zM4 11H1v2h3v
      -2zm9-9h-2v2.99h2V2zm7.45 3.91l-1.41
      -1.41-1.79 1.79 1.41 1.41 1.79-1.79zm
      -3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79
      -1.4 1.4zM20 11v2h3v-2h-3zm-8-5a6 6
      0 1 0 0 12A6 6 0 0 0 12 6zm-1 16.93V20
      h2v2.93c-.33.05-.66.07-1 .07s-.67-.02
      -1-.07zm-7.14-3.28l1.41 1.41-1.79 1.8
      -1.41-1.41 1.79-1.8z"/>
  </svg>`,

  moon: `<svg xmlns="http://www.w3.org/2000/svg"
    width="18" height="18" viewBox="0 0 24 24"
    fill="#a29bfe">
    <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04
      -.92-.1-1.36a5.389 5.389 0 0 1-4.4
      2.26 5.403 5.403 0 0 1-3.14-9.8c-.44
      -.06-.9-.1-1.36-.1z"/>
  </svg>`
};

// STATE
let cart             = [];
let shippingCost     = 0;
let currentCategory  = 'all';
let currentSearch    = '';
let currentProductId = null;
let orderHistory     = JSON.parse(
  localStorage.getItem('ems_orders') || '[]'
);
let customerProfile  = JSON.parse(
  localStorage.getItem('ems_profile') || 'null'
);

// INITIALISE
window.addEventListener('load', function () {
  renderProducts(products);
  loadProfile();
  loadTheme();

  // Load saved cart
  const savedCart = localStorage.getItem('ems_cart');
  if (savedCart) {
    cart = JSON.parse(savedCart);
    updateCartCount();
  }
});

// RENDER PRODUCTS
function renderProducts(list) {
  const grid = document.getElementById('productsGrid');
  const noResults = document.getElementById('noResults');
  grid.innerHTML = '';

  if (list.length === 0) {
    noResults.style.display = 'block';
    return;
  }

  noResults.style.display = 'none';

  list.forEach(product => {
    const inCart = cart.find(i => i.id === product.id);
    const card   = document.createElement('div');
    card.className = 'product-card';
    card.id        = `card-${product.id}`;

    card.innerHTML = `
      <div class="product-img-wrap"
        onclick="openProductModal(${product.id})">
        ${product.badge
          ? `<div class="product-badge ${product.badge}">
              ${product.badge.toUpperCase()}
            </div>`
          : ''}
        <img src="${product.img}"
          alt="${product.name}"
          onerror="this.src='https://via.placeholder.com/300x200?text=${product.name}'"/>
      </div>
      <div class="product-body">
        <div class="product-category">
          ${product.category}
        </div>
        <div class="product-name">${product.name}</div>
        <div class="star-rating">
          <span class="stars">
            ${renderStars(product.rating)}
          </span>
          <span class="rating-count">
            (${product.reviews})
          </span>
        </div>
        <div class="product-price">
          ${formatPrice(product.price)}
        </div>
        <button
          class="cart-action-btn ${inCart ? 'in-cart' : ''}"
          id="btn-${product.id}"
          onclick="toggleCart(event, ${product.id})">
          ${inCart ? 'REMOVE FROM CART' : 'ADD TO CART'}
        </button>
      </div>
    `;

    grid.appendChild(card);
  });
}

// RENDER STARS
function renderStars(rating) {
  let stars = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '★';
    } else if (i - rating < 1 && i - rating > 0) {
      stars += '½';
    } else {
      stars += '☆';
    }
  }
  return stars;
}

// FILTER BY SEARCH
function filterProducts() {
  currentSearch = document
    .getElementById('searchInput').value
    .toLowerCase().trim();
  applyFilters();
}

// FILTER BY CATEGORY
function filterByCategory(category, btn) {
  currentCategory = category;

  document.querySelectorAll('.cat-btn')
    .forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  applyFilters();
}

// APPLY ALL FILTERS
function applyFilters() {
  let filtered = products;

  if (currentCategory !== 'all') {
    filtered = filtered.filter(
      p => p.category === currentCategory
    );
  }

  if (currentSearch) {
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(currentSearch) ||
      p.category.toLowerCase().includes(currentSearch) ||
      p.desc.toLowerCase().includes(currentSearch)
    );
  }

  renderProducts(filtered);
}

// OPEN PRODUCT DETAIL MODAL
function openProductModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  currentProductId = productId;
  const inCart = cart.find(i => i.id === productId);

  document.getElementById('modalImg').src =
    product.img;
  document.getElementById('modalImg').onerror =
    function () {
      this.src = `https://via.placeholder.com/300x200?text=${product.name}`;
    };
  document.getElementById('modalCategory').textContent =
    product.category.toUpperCase();
  document.getElementById('modalName').textContent =
    product.name;
  document.getElementById('modalRating').innerHTML = `
    <span class="stars">
      ${renderStars(product.rating)}
    </span>
    <span class="rating-count">
      ${product.rating} (${product.reviews} reviews)
    </span>
  `;
  document.getElementById('modalDesc').textContent =
    product.desc;
  document.getElementById('modalPrice').textContent =
    formatPrice(product.price);

  const modalBtn =
    document.getElementById('modalCartBtn');
  modalBtn.textContent =
    inCart ? 'REMOVE FROM CART' : 'ADD TO CART';
  modalBtn.className =
    'modal-cart-btn' + (inCart ? ' in-cart' : '');
  modalBtn.onclick = () => toggleCart(null, productId);

  document.getElementById('productOverlay')
    .classList.add('open');
}

// CLOSE PRODUCT MODAL
function closeProductModal() {
  document.getElementById('productOverlay')
    .classList.remove('open');
  currentProductId = null;
}

// TOGGLE CART
function toggleCart(event, productId) {
  if (event) event.stopPropagation();

  const product  = products.find(p => p.id === productId);
  const existing = cart.find(i => i.id === productId);

  if (existing) {
    cart = cart.filter(i => i.id !== productId);
    updateProductBtn(productId, false);
    showToast(`${product.name} removed from cart`, 'info', 'delete');
  } else {
    cart.push({ ...product, quantity: 1 });
    updateProductBtn(productId, true);
    showToast(`${product.name} added to cart!`, 'success', 'cart');
  }

  updateCartCount();
  saveCart();

  // Update modal button if open
  if (currentProductId === productId) {
    const inCart = cart.find(i => i.id === productId);
    const modalBtn =
      document.getElementById('modalCartBtn');
    modalBtn.textContent =
      inCart ? 'REMOVE FROM CART' : 'ADD TO CART';
    modalBtn.className =
      'modal-cart-btn' + (inCart ? ' in-cart' : '');
  }
}

// UPDATE PRODUCT BUTTON
function updateProductBtn(productId, inCart) {
  const btn =
    document.getElementById(`btn-${productId}`);
  if (!btn) return;
  btn.textContent =
    inCart ? 'REMOVE FROM CART' : 'ADD TO CART';
  btn.className =
    'cart-action-btn' + (inCart ? ' in-cart' : '');
}

// UPDATE CART COUNT
function updateCartCount() {
  const count = cart.length;
  document.getElementById('cartCount')
    .textContent = count;
  document.getElementById('cartCountModal')
    .textContent = count;
}

// OPEN CART
document.getElementById('cartBtn')
  .addEventListener('click', openCart);

function openCart() {
  renderCartItems();
  updateTotals();
  document.getElementById('cartOverlay')
    .classList.add('open');
}


// CLOSE CART
function closeCart() {
  document.getElementById('cartOverlay')
    .classList.remove('open');
}

// RENDER CART ITEMS
function renderCartItems() {
  const tbody =
    document.getElementById('cartTableBody');
  tbody.innerHTML = '';

  if (cart.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5"
          style="text-align:center;
          padding:20px; color:var(--text2)">
          Your cart is empty
        </td>
      </tr>`;
    return;
  }

  cart.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${formatPrice(item.price * item.quantity)}</td>
      <td>
        <button class="qty-btn"
          onclick="decreaseQty(${item.id})">−</button>
        <span class="qty-display">
          ${item.quantity}
        </span>
        <button class="qty-btn"
          onclick="increaseQty(${item.id})">+</button>
      </td>
      <td>
        <button class="remove-btn"
          onclick="removeFromCart(${item.id})">
          Remove
        </button>
      </td>
    `;
    tbody.appendChild(row);
  });
}

// INCREASE QUANTITY
function increaseQty(productId) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    item.quantity += 1;
    saveCart();
    renderCartItems();
    updateTotals();
  }
}

// DECREASE QUANTITY
function decreaseQty(productId) {
  const item = cart.find(i => i.id === productId);
  if (item) {
    if (item.quantity > 1) {
      item.quantity -= 1;
    } else {
      removeFromCart(productId);
      return;
    }
    saveCart();
    renderCartItems();
    updateTotals();
  }
}

// REMOVE FROM CART
function removeFromCart(productId) {
  const product =
    products.find(p => p.id === productId);
  cart = cart.filter(i => i.id !== productId);
  updateProductBtn(productId, false);
  updateCartCount();
  saveCart();
  renderCartItems();
  updateTotals();
  showToast(`${product.name} removed from cart`, 'info', 'delete');
}


// CALCULATE SHIPPING
function calculateShipping() {
  const region =
    document.getElementById('shippingRegion').value;

  const rates = {
    accra:         0,
    kumasi:        150,
    takoradi:      120,
    tamale:        250,
    lagos:         278,
    abuja:         300,
    nairobi:       350,
    international: 700
  };

  shippingCost = rates[region] || 0;

  document.getElementById('shippingCost')
    .textContent = formatPrice(shippingCost);

  updateTotals();

  showToast(`Shipping: ${formatPrice(shippingCost)}`, 'info', 'truck');
}

// UPDATE TOTALS
function updateTotals() {
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingCost;

  document.getElementById('subtotalAmount')
    .textContent = formatPrice(subtotal);
  document.getElementById('shippingAmount')
    .textContent = formatPrice(shippingCost);
  document.getElementById('totalAmount')
    .textContent = formatPrice(total);
}

// VALIDATE NAME
function validateName() {
  const name =
    document.getElementById('userName').value.trim();
  const error =
    document.getElementById('nameError');
  if (!name) {
    error.textContent = 'Name cannot be empty.';
    return false;
  }
  error.textContent = '';
  return true;
}

// VALIDATE EMAIL
function validateEmail() {
  const email =
    document.getElementById('userEmail').value.trim();
  const error =
    document.getElementById('emailError');
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    error.textContent = 'Email cannot be empty.';
    return false;
  }
  if (!regex.test(email)) {
    error.textContent = 'Enter a valid email.';
    return false;
  }
  error.textContent = '';
  return true;
}

// VALIDATE PHONE
function validatePhone() {
  const phone =
    document.getElementById('userPhone').value.trim();
  const error =
    document.getElementById('phoneError');
  if (!phone) {
    error.textContent = 'Phone cannot be empty.';
    return false;
  }
  if (phone.length < 10 || isNaN(phone)) {
    error.textContent =
      'Enter a valid phone number.';
    return false;
  }
  error.textContent = '';
  return true;
}

// VALIDATE ALL
function validateAll() {
  return validateName() &&
    validateEmail() &&
    validatePhone();
}

// CHECKOUT — PAYSTACK
function checkout() {
  if (cart.length === 0) {
    showToast('Your cart is empty!', 'error', 'error');
    return;
  }

  if (!validateAll()) {
    showToast('Please fill in your details correctly.', 'error', 'error');
    return;
  }

  const name  =
    document.getElementById('userName').value.trim();
  const email =
    document.getElementById('userEmail').value.trim();
  const phone =
    document.getElementById('userPhone').value.trim();

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const total = subtotal + shippingCost;

  closeCart();

  const handler = PaystackPop.setup({
    key: 'pk_test_a404eccdd768ad70bb6f793facdf823dae6c9b48',
    email: email,
    amount: total * 100,
    currency: 'GHS',
    ref: 'EMARKOLA_' + Math.floor(Math.random() * 1000000000),
    metadata: {
      custom_fields: [
        { display_name: 'Customer Name', value: name },
        { display_name: 'Phone',         value: phone }
      ]
    },
    callback: function (response) {
      saveOrder(name, total);
      showSummary(name);
    },
    onClose: function () {
      showToast('Payment cancelled.', 'info', 'info');
    }
  });

  handler.openIframe();
}

// SAVE ORDER TO HISTORY
function saveOrder(name, total) {
  const order = {
    date:  new Date().toLocaleDateString(),
    name:  name,
    items: cart.map(i => ({
      name:     i.name,
      quantity: i.quantity
    })),
    total: total
  };

  orderHistory.unshift(order);
  localStorage.setItem(
    'ems_orders',
    JSON.stringify(orderHistory)
  );
}

// SHOW SUMMARY MODAL
function showSummary(name) {
  document.getElementById('summaryMessage')
    .textContent =
    `Thank You, ${name}. Your Order Has been Received.`;

  const tbody =
    document.getElementById('summaryTableBody');
  tbody.innerHTML = '';

  cart.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>${item.quantity}</td>
    `;
    tbody.appendChild(row);
  });

  document.getElementById('summaryOverlay')
    .classList.add('open');
}

// CLOSE SUMMARY
function closeSummary() {
  document.getElementById('summaryOverlay')
    .classList.remove('open');
  cart = [];
  shippingCost = 0;
  saveCart();
  updateCartCount();
  renderProducts(products);
  location.reload();
}

// CUSTOMER PROFILE
function openProfile() {
  renderOrderHistory();
  document.getElementById('profileOverlay')
    .classList.add('open');
}

function closeProfile() {
  document.getElementById('profileOverlay')
    .classList.remove('open');
}

function saveProfile() {
  const name =
    document.getElementById('profileName').value.trim();
  const email =
    document.getElementById('profileEmail').value.trim();
  const phone =
    document.getElementById('profilePhone').value.trim();
  const region =
    document.getElementById('profileRegion').value.trim();

  if (!name) {
    showToast('Please enter your name.', 'error', 'error');
    return;
  }

  customerProfile = { name, email, phone, region };
  localStorage.setItem(
    'ems_profile',
    JSON.stringify(customerProfile)
  );

  // Auto fill cart form
  if (name)  document.getElementById('userName').value  = name;
  if (email) document.getElementById('userEmail').value = email;
  if (phone) document.getElementById('userPhone').value = phone;

  showToast('Profile saved!', 'success', 'success');
  closeProfile();
}

function loadProfile() {
  if (!customerProfile) return;
  document.getElementById('profileName').value =
    customerProfile.name  || '';
  document.getElementById('profileEmail').value =
    customerProfile.email || '';
  document.getElementById('profilePhone').value =
    customerProfile.phone || '';
  document.getElementById('profileRegion').value =
    customerProfile.region || '';

  // Auto fill cart fields
  if (customerProfile.name)
    document.getElementById('userName').value =
      customerProfile.name;
  if (customerProfile.email)
    document.getElementById('userEmail').value =
      customerProfile.email;
  if (customerProfile.phone)
    document.getElementById('userPhone').value =
      customerProfile.phone;
}

function renderOrderHistory() {
  const list =
    document.getElementById('orderHistoryList');

  if (orderHistory.length === 0) {
    list.innerHTML =
      '<p class="no-orders">No orders yet.</p>';
    return;
  }

  list.innerHTML = '';
  orderHistory.forEach(order => {
    const div = document.createElement('div');
    div.className = 'order-item';
    div.innerHTML = `
      <div class="order-item-date">${order.date}</div>
      <div>${order.items
        .map(i => `${i.name} x${i.quantity}`)
        .join(', ')}
      </div>
      <div class="order-item-total">
        Total: ${formatPrice(order.total)}
      </div>
    `;
    list.appendChild(div);
  });
}

// DARK / LIGHT MODE

// SVG ICONS FOR THEME TOGGLE
const moonSVG = `<svg xmlns="http://www.w3.org/2000/svg"
  width="18" height="18" viewBox="0 0 24 24"
  fill="currentColor">
  <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92
    -.1-1.36a5.389 5.389 0 0 1-4.4 2.26
    5.403 5.403 0 0 1-3.14-9.8c-.44-.06
    -.9-.1-1.36-.1z"/>
</svg>`;

const sunSVG = `<svg xmlns="http://www.w3.org/2000/svg"
  width="18" height="18" viewBox="0 0 24 24"
  fill="currentColor">
  <path d="M6.76 4.84l-1.8-1.79-1.41 1.41
    1.79 1.79 1.42-1.41zM4 11H1v2h3v-2zm9-9h
    -2v2.99h2V2zm7.45 3.91l-1.41-1.41-1.79
    1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79
    1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 11v2h3
    v-2h-3zm-8-5a6 6 0 1 0 0 12A6 6 0 0 0 12
    6zm-1 16.93V20h2v2.93c-.33.05-.66.07-1
    .07s-.67-.02-1-.07zm-7.14-3.28l1.41 1.41
    -1.79 1.8-1.41-1.41 1.79-1.8z"/>
</svg>`;

document.getElementById('themeToggle')
  .addEventListener('click', function () {
    const html = document.documentElement;
    const isDark =
      html.getAttribute('data-theme') === 'dark';

    // Switch theme
    html.setAttribute(
      'data-theme',
      isDark ? 'light' : 'dark'
    );

    // Switch icon — dark mode shows sun,
    // light mode shows moon
    this.innerHTML = isDark ? sunSVG : moonSVG;

    // Save to localStorage
    localStorage.setItem(
      'ems_theme',
      isDark ? 'light' : 'dark'
    );

    // Show toast with SVG icon
    showToast(
      isDark ? 'Light mode on' : 'Dark mode on',
      'info',
      isDark ? 'sun' : 'moon'
    );
  });

function loadTheme() {
  const saved = localStorage.getItem('ems_theme');
  const btn = document.getElementById('themeToggle');

  if (saved) {
    document.documentElement
      .setAttribute('data-theme', saved);

    // Dark mode saved — show sun icon
    // Light mode saved — show moon icon
    btn.innerHTML =
      saved === 'dark' ? sunSVG : moonSVG;
  } else {
    // Default is light mode — show moon icon
    btn.innerHTML = moonSVG;
  }
}

// TOAST NOTIFICATIONS
function showToast(message, type = 'info', iconKey = 'info') {
  const container =
    document.getElementById('toastContainer');

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `
    <span class="toast-icon">
      ${icons[iconKey] || icons.info}
    </span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.animation =
      'toastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// FORMAT PRICE
function formatPrice(amount) {
  return 'GH₵' + amount.toLocaleString();
}

// SAVE CART TO LOCALSTORAGE
function saveCart() {
  localStorage.setItem('ems_cart', JSON.stringify(cart));
}

// CLOSE MODALS ON OVERLAY
// CLICK
document.getElementById('cartOverlay')
  .addEventListener('click', function (e) {
    if (e.target === this) closeCart();
  });

document.getElementById('productOverlay')
  .addEventListener('click', function (e) {
    if (e.target === this) closeProductModal();
  });

document.getElementById('profileOverlay')
  .addEventListener('click', function (e) {
    if (e.target === this) closeProfile();
  });

document.getElementById('summaryOverlay')
  .addEventListener('click', function (e) {
    if (e.target === this) closeSummary();
  });

document.getElementById('cartModalBtn')
  .addEventListener('click', closeCart);