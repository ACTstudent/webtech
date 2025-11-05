// Main Application Logic
let currentPage = 'home';
let currentProduct = null;
let currentFilters = {
    category: 'all',
    priceRange: 'all',
    search: ''
};

// NEW: Global variable for current checkout state
let currentOrder = {
    id: null,
    shippingInfo: {},
    paymentMethod: 'credit-card',
    total: 0
};

// MODIFIED: Added orderId parameter
function navigateTo(page, productId = null, orderId = null) {
    currentPage = page;
    if (productId) {
        // Ensure products array is available (from data.js)
        if (typeof products !== 'undefined') {
            currentProduct = products.find(p => p.id === productId);
        }
    }
    if (orderId) {
        currentOrder.id = orderId;
    }
    renderPage();
    window.scrollTo(0, 0);
}

// MODIFIED: Added new cases for checkout and confirmation
function renderPage() {
    const mainContent = document.getElementById('main-content');
    switch (currentPage) {
        case 'home':
            mainContent.innerHTML = renderHomePage();
            break;
        case 'products':
            mainContent.innerHTML = renderProductsPage();
            break;
        case 'product-details':
            mainContent.innerHTML = renderProductDetailsPage();
            break;
        case 'cart':
            mainContent.innerHTML = renderCartPage();
            break;
        case 'checkout-details': // NEW
            mainContent.innerHTML = renderCheckoutDetailsPage();
            break;
        case 'order-confirmation': // NEW
            mainContent.innerHTML = renderOrderConfirmationPage();
            break;
        case 'login':
            mainContent.innerHTML = renderLoginPage();
            break;
        case 'signup':
            mainContent.innerHTML = renderSignupPage();
            break;
        case 'account':
            mainContent.innerHTML = renderAccountPage();
            break;
        case 'about':
            mainContent.innerHTML = renderAboutPage();
            break;
        case 'contact':
            mainContent.innerHTML = renderContactPage();
            break;
        default:
            mainContent.innerHTML = renderHomePage();
    }
    // Re-initialize any dynamic elements
    initPage();
}

function initPage() {
    // Add event listeners for dynamically created elements
    const addToCartButtons = document.querySelectorAll('.add-to-cart-btn');
    addToCartButtons.forEach(button => {
        // Removed old inline handlers from cards, now relying solely on this robust listener
        button.addEventListener('click', handleAddToCart);
    });

    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }

    const signupForm = document.getElementById('signup-form');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignup);
    }

    const profileForm = document.getElementById('profile-form');
    if (profileForm) {
        profileForm.addEventListener('submit', handleProfileUpdate);
    }

    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContact);
    }
    
    // NEW: Checkout form handler
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        checkoutForm.addEventListener('submit', handleCheckout);
    }

    // FIX: Cart Action Handler using delegation
    // This is the listener that makes the +,-, and remove buttons work after every render.
    const cartItemsContainer = document.getElementById('cart-items-container');
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', handleCartAction);
    }
}

// NEW: Banner Section Renderer
function renderBannerSection() {
    return `
        <section class="banner-section section-container">
            <div class="main-banner" onclick="navigateTo('product-details', 17)">
                <img src="https://images.unsplash.com/photo-1511210168393-270422119c8d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzcHJpbnQlMjBzaG9lc3xlbnwxfHx8fDE3NjIzMTMyODh8MA&lib=rb-4.1.0&q=80&w=1400" alt="Running Shoes Banner">
                <div class="banner-content">
                    <h2>FEEL THE SPEED</h2>
                    <p>Introducing the new Velocity Racer. Lightweight. Dynamic. Unstoppable.</p>
                    <button class="btn-primary">Shop Running</button>
                </div>
            </div>

            <div class="sub-banner-grid">
                <div class="sub-banner card" onclick="navigateTo('product-details', 18)">
                    <img src="https://images.unsplash.com/photo-1600329068065-27a4d6219803?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxiYXNrZXRiYWxsJTIwc2hvZXN8ZW58MXx8fHwxNzYzMDYwMzAxfDA&lib=rb-4.1.0&q=80&w=700" alt="Basketball Banner">
                    <div class="banner-content">
                        <h3>COURT DOMINANCE</h3>
                        <p>High-Top Court collection is here.</p>
                    </div>
                </div>
                <div class="sub-banner card" onclick="navigateTo('product-details', 15)">
                    <img src="https://images.unsplash.com/photo-1547379051-9e79e604752c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx0cmFpbCUyMHJ1bm5pbmclMjBzaG9lc3xlbnwxfHx8fDE3NjIzMTMyMzN8MA&lib=rb-4.1.0&q=80&w=700" alt="Trail Shoes Banner">
                    <div class="banner-content">
                        <h3>TRAIL BLAZERS</h3>
                        <p>Outdoor rugged support.</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// MODIFIED: Added renderBannerSection() call
function renderHomePage() {
    const featuredProducts = loadFeaturedProducts();
    return `
        <section class="hero">
            <div class="hero-container">
                <div class="hero-content">
                    <h1>Step into Style</h1>
                    <p>Discover premium shoes that blend comfort, quality, and fashion. Find your perfect pair today.</p>
                    <button class="btn-primary" onclick="navigateTo('products')">Shop Now</button>
                </div>
                <div class="hero-image">
                    <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzaG9lc3xlbnwxfHx8fDE3NjIyMTkxNjl8MA&lib=rb-4.1.0&q=80&w=1080" alt="Premium Shoes">
                </div>
            </div>
        </section>

        <section class="features">
            <div class="section-container features-container">
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1"/>
                            <polygon points="12,15 17,21 7,21"/>
                        </svg>
                    </div>
                    <h3>Premium Quality</h3>
                    <p>Handcrafted with the finest materials for lasting comfort and style.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="10"/>
                            <polyline points="12,6 12,12 16,14"/>
                        </svg>
                    </div>
                    <h3>Fast Delivery</h3>
                    <p>Free shipping on orders over $100. Get your shoes delivered quickly.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
                        </svg>
                    </div>
                    <h3>Easy Returns</h3>
                    <p>Not satisfied? Return within 30 days for a full refund.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                        </svg>
                    </div>
                    <h3>Secure Checkout</h3>
                    <p>Shop with confidence using our secure payment gateway.</p>
                </div>
            </div>
        </section>

        ${renderBannerSection()}

        <section class="featured-products">
            <div class="section-container">
                <div class="section-header">
                    <h2>Featured Products</h2>
                    <p>Check out our most popular shoes</p>
                </div>
                <div class="products-grid">
                    ${featuredProducts.map(product => renderProductCard(product)).join('')}
                </div>
                <div class="view-all" style="text-align: center;">
                    <button class="btn-secondary" onclick="navigateTo('products')">View All Products</button>
                </div>
            </div>
        </section>
    `;
}

function renderProductsPage() {
    const filteredProducts = filterProducts();
    return `
        <section class="products-page">
            <div class="section-container">
                <div class="section-header">
                    <h1>Our Products</h1>
                    <p>Find the perfect shoes for any occasion</p>
                </div>
                <div class="filter-bar">
                    <div class="search-bar">
                        <input type="text" id="search-input" placeholder="Search products..." value="${currentFilters.search}" oninput="updateSearch(this.value)">
                    </div>
                    <div class="filters">
                        <select id="category-filter" onchange="updateCategory(this.value)">
                            <option value="all" ${currentFilters.category === 'all' ? 'selected' : ''}>All Categories</option>
                            <option value="Running" ${currentFilters.category === 'Running' ? 'selected' : ''}>Running</option>
                            <option value="Casual" ${currentFilters.category === 'Casual' ? 'selected' : ''}>Casual</option>
                            <option value="Athletic" ${currentFilters.category === 'Athletic' ? 'selected' : ''}>Athletic</option>
                            <option value="Formal" ${currentFilters.category === 'Formal' ? 'selected' : ''}>Formal</option>
                            <option value="Basketball" ${currentFilters.category === 'Basketball' ? 'selected' : ''}>Basketball</option>
                            <option value="Outdoor" ${currentFilters.category === 'Outdoor' ? 'selected' : ''}>Outdoor</option>
                        </select>
                        <select id="price-filter" onchange="updatePriceRange(this.value)">
                            <option value="all" ${currentFilters.priceRange === 'all' ? 'selected' : ''}>All Prices</option>
                            <option value="0-100" ${currentFilters.priceRange === '0-100' ? 'selected' : ''}>Under $100</option>
                            <option value="100-150" ${currentFilters.priceRange === '100-150' ? 'selected' : ''}>$100 - $150</option>
                            <option value="150+" ${currentFilters.priceRange === '150+' ? 'selected' : ''}>Over $150</option>
                        </select>
                    </div>
                </div>
                <div class="products-grid">
                    ${filteredProducts.length > 0 
                        ? filteredProducts.map(product => renderProductCard(product)).join('')
                        : '<p style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: var(--text-gray);">No products match your current filters.</p>'
                    }
                </div>
            </div>
        </section>
    `;
}

function renderProductDetailsPage() {
    if (!currentProduct) return renderProductsPage();

    return `
        <section class="product-details">
            <div class="product-details-grid">
                <div class="product-images">
                    <img src="${currentProduct.image}" alt="${currentProduct.name}" class="main-image">
                </div>
                <div class="product-info">
                    <h1>${currentProduct.name}</h1>
                    <div class="rating">
                        ${generateStars(currentProduct.rating)}
                        <span>(${currentProduct.reviews} reviews)</span>
                    </div>
                    <p class="price">$${currentProduct.price.toFixed(2)}</p>
                    <p class="description">${currentProduct.description}</p>
                    <div class="options">
                        <div class="option-group">
                            <label for="size-select">Size:</label>
                            <select id="size-select">
                                ${currentProduct.sizes.map(size => `<option value="${size}">${size}</option>`).join('')}
                            </select>
                        </div>
                        <div class="option-group">
                            <label for="color-select">Color:</label>
                            <select id="color-select">
                                ${currentProduct.colors.map(color => `<option value="${color}">${color}</option>`).join('')}
                            </select>
                        </div>
                        <div class="option-group">
                            <label for="quantity-input">Quantity:</label>
                            <input type="number" id="quantity-input" value="1" min="1" max="10">
                        </div>
                    </div>
                    <button class="btn-primary add-to-cart-btn" data-product-id="${currentProduct.id}">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <path d="M16 10a4 4 0 0 1-8 0"/>
                        </svg>
                        Add to Cart
                    </button>
                    <div class="product-meta">
                        <p><strong>Category:</strong> ${currentProduct.category}</p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderCartPage() {
    const cartItems = cart; // Access global 'cart' variable from src/cart.js
    const total = getCartTotal();

    if (cartItems.length === 0) {
        return `
            <section class="empty-cart">
                <div class="section-container">
                    <h1>Your Cart is Empty</h1>
                    <p>Add some products to get started!</p>
                    <button class="btn-primary" onclick="navigateTo('products')">Shop Now</button>
                </div>
            </section>
        `;
    }

    return `
        <section class="cart-page">
            <div class="cart-grid">
                <div class="cart-items" id="cart-items-container">
                    <h1>Shopping Cart</h1>
                    ${cartItems.map(item => `
                        <div class="cart-item">
                            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                            <div class="cart-item-info">
                                <h3>${item.name}</h3>
                                <div class="cart-item-details">
                                    <p>Size: ${item.selectedSize}</p>
                                    <p>Color: ${item.selectedColor}</p>
                                </div>
                            </div>
                            <div class="quantity-controls">
                                <button 
                                    data-action="decrease" 
                                    data-id="${item.id}" 
                                    data-size="${item.selectedSize}" 
                                    data-color="${item.selectedColor}" 
                                    data-quantity="${item.quantity}"
                                >-</button>
                                <input type="number" value="${item.quantity}" class="quantity-display" data-product-id="${item.id}" min="1" readonly>
                                <button 
                                    data-action="increase" 
                                    data-id="${item.id}" 
                                    data-size="${item.selectedSize}" 
                                    data-color="${item.selectedColor}" 
                                    data-quantity="${item.quantity}"
                                >+</button>
                            </div>
                            <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
                            <button class="remove-btn btn-danger" 
                                data-action="remove" 
                                data-id="${item.id}" 
                                data-size="${item.selectedSize}" 
                                data-color="${item.selectedColor}">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                                </svg>
                            </button>
                        </div>
                    `).join('')}
                </div>
                <div class="cart-summary">
                    <h2>Order Summary</h2>
                    <div class="summary-row">
                        <span>Subtotal:</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                    <div class="summary-row">
                        <span>Shipping:</span>
                        <span>Free</span>
                    </div>
                    <div class="summary-row total">
                        <span>Total:</span>
                        <span>$${total.toFixed(2)}</span>
                    </div>
                    <button class="btn-primary" style="width: 100%;" onclick="navigateTo('checkout-details')">Proceed to Checkout</button>
                </div>
            </div>
        </section>
    `;
}

// NEW: Checkout Details Page
function renderCheckoutDetailsPage() {
    const total = getCartTotal();
    
    if (getCartCount() === 0) {
        displayMessage("Your cart is empty. Please add items before checking out.", 'error');
        return renderProductsPage();
    }
    
    // Redirect unauthenticated users
    if (!currentUser) {
        displayMessage("Please log in to proceed to checkout.", 'info');
        navigateTo('login');
        return '';
    }

    // Prefill data from user profile
    const name = currentUser.name || '';
    const email = currentUser.email || '';
    const address = currentUser.address || '';
    const phone = currentUser.phone || '';

    return `
        <section class="checkout-page">
            <div class="section-container">
                <h1>Checkout</h1>
                <div class="checkout-grid">
                    <div class="checkout-form-container">
                        <h2>Shipping Information</h2>
                        <form id="checkout-form">
                            <div class="form-grid">
                                <div class="form-group">
                                    <label for="shipping-name">Full Name</label>
                                    <input type="text" id="shipping-name" name="name" value="${name}" required>
                                </div>
                                <div class="form-group">
                                    <label for="shipping-email">Email</label>
                                    <input type="email" id="shipping-email" name="email" value="${email}" required>
                                </div>
                                <div class="form-group" style="grid-column: 1 / -1;">
                                    <label for="shipping-address">Shipping Address</label>
                                    <textarea id="shipping-address" name="address" rows="3" required>${address}</textarea>
                                </div>
                                <div class="form-group">
                                    <label for="shipping-city">City</label>
                                    <input type="text" id="shipping-city" name="city" required>
                                </div>
                                <div class="form-group">
                                    <label for="shipping-zip">ZIP Code</label>
                                    <input type="text" id="shipping-zip" name="zip" required>
                                </div>
                            </div>
                            
                            <h2 style="margin-top: 2rem;">Payment</h2>
                            <div class="form-group">
                                <label for="payment-method">Payment Method</label>
                                <select id="payment-method" name="payment-method">
                                    <option value="credit-card">Credit Card (Simulated)</option>
                                    <option value="paypal">PayPal (Simulated)</option>
                                </select>
                            </div>
                            <p style="color: var(--text-gray); font-size: 0.9rem; margin-bottom: 1rem;">Payment simulation: No real payment processing will occur.</p>
                            
                            <button type="submit" class="btn-primary" style="width: 100%;">Place Order ($${total.toFixed(2)})</button>
                        </form>
                    </div>

                    <div class="cart-summary checkout-summary">
                        <h2>Order Summary</h2>
                        <div class="checkout-items">
                            ${cart.map(item => `
                                <div class="checkout-item">
                                    <img src="${item.image}" alt="${item.name}" class="checkout-item-image">
                                    <div class="checkout-item-info">
                                        <p class="font-weight-bold">${item.name}</p>
                                        <p class="checkout-item-meta">${item.selectedSize} / ${item.selectedColor} / Qty: ${item.quantity}</p>
                                    </div>
                                    <div class="item-total">$${(item.price * item.quantity).toFixed(2)}</div>
                                </div>
                            `).join('')}
                        </div>
                        <div class="summary-row">
                            <span>Subtotal:</span>
                            <span>$${total.toFixed(2)}</span>
                        </div>
                        <div class="summary-row">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div class="summary-row total">
                            <span>Total:</span>
                            <span>$${total.toFixed(2)}</span>
                        </div>
                        <p style="margin-top: 1rem; text-align: center;"><a href="#" onclick="navigateTo('cart')">Edit Cart</a></p>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// NEW: Order Confirmation Page
function renderOrderConfirmationPage() {
    const orderId = currentOrder.id || 'N/A';
    const total = currentOrder.total;
    const shipping = currentOrder.shippingInfo;
    
    // Reset temporary order data
    const lastOrderTotal = total;
    const lastOrderShipping = {...currentOrder.shippingInfo};
    currentOrder = { id: null, shippingInfo: {}, paymentMethod: 'credit-card', total: 0 };

    return `
        <section class="order-confirmation">
            <div class="section-container">
                <div class="card" style="max-width: 600px; margin: 0 auto; text-align: center;">
                    <div class="success-icon">
                        <div class="success-circle" style="background: var(--success); margin: 0 auto 1.5rem;">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
                                <path d="M22 11.08V12a10 10 0 1 1-5.93-8.91"/>
                                <path d="M22 4L12 14.01l-3-3"/>
                            </svg>
                        </div>
                    </div>
                    <h1>Order Placed Successfully!</h1>
                    <p class="lead" style="color: var(--text-gray);">Thank you for your purchase. Your order details are below.</p>
                    <h2 style="margin-top: 2rem;">Order #${orderId}</h2>
                    <p><strong>Total Paid:</strong> <span class="price">$${lastOrderTotal.toFixed(2)}</span></p>
                    
                    <div class="card" style="text-align: left; margin-top: 2rem; background: var(--bg-light); border: 1px solid var(--border);">
                        <h4 style="border-bottom: 1px solid var(--border); padding-bottom: 0.5rem; margin-bottom: 1rem; font-size: 1.1rem;">Shipping To:</h4>
                        <p><strong>${lastOrderShipping.name || 'Customer'}</strong></p>
                        <p>${lastOrderShipping.address || 'Address line 1'}</p>
                        <p>${lastOrderShipping.city || 'City'}, ${lastOrderShipping.zip || 'Zip Code'}</p>
                        <p style="margin-top: 0.5rem; font-size: 0.9rem; color: var(--text-gray);">Expected delivery in 5-7 business days.</p>
                    </div>

                    <div style="margin-top: 2rem;">
                        <button class="btn-secondary" onclick="navigateTo('products')">Continue Shopping</button>
                        <button class="btn-primary" onclick="navigateTo('account')" style="margin-left: 1rem;">View Orders</button>
                    </div>
                </div>
            </div>
        </section>
    `;
}

function renderLoginPage() {
    return `
        <section class="form-container">
            <div class="form-card">
                <div class="form-header">
                    <h1>Login</h1>
                </div>
                <form id="login-form">
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit" class="btn-primary" style="width: 100%;">Login</button>
                </form>
                <div class="form-footer">
                    Don't have an account? <a href="#" onclick="navigateTo('signup')">Sign up</a>
                </div>
            </div>
        </section>
    `;
}

function renderSignupPage() {
    return `
        <section class="form-container">
            <div class="form-card">
                <div class="form-header">
                    <h1>Sign Up</h1>
                </div>
                <form id="signup-form">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" id="name" name="name" required>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="email" id="email" name="email" required>
                    </div>
                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" id="password" name="password" required>
                    </div>
                    <button type="submit" class="btn-primary" style="width: 100%;">Sign Up</button>
                </form>
                <div class="form-footer">
                    Already have an account? <a href="#" onclick="navigateTo('login')">Login</a>
                </div>
            </div>
        </section>
    `;
}

function renderAccountPage() {
    // Check for global 'currentUser' from auth.js
    if (typeof currentUser === 'undefined' || !currentUser) {
        navigateTo('login');
        return '';
    }

    return `
        <section class="account-page">
            <div class="section-container">
                <h1>My Account</h1>
                <div class="tabs">
                    <button class="tab-btn active" onclick="switchTab('profile')">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>Profile</button>
                    <button class="tab-btn" onclick="switchTab('orders')">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                            <line x1="3" y1="6" x2="21" y2="6"/>
                            <path d="M16 10a4 4 0 0 1-8 0"/>
                        </svg>Orders</button>
                </div>
                <div id="profile-tab" class="tab-content active card">
                    <div class="card-header">
                        <h2>Personal Information</h2>
                        <p>Update your personal details and contact information.</p>
                    </div>
                    <form id="profile-form">
                        <div class="form-grid">
                            <div class="form-group">
                                <label for="profile-name">Name</label>
                                <input type="text" id="profile-name" name="name" value="${currentUser.name || ''}" required>
                            </div>
                            <div class="form-group">
                                <label for="profile-email">Email</label>
                                <input type="email" id="profile-email" name="email" value="${currentUser.email || ''}" required>
                            </div>
                            <div class="form-group">
                                <label for="profile-phone">Phone</label>
                                <input type="tel" id="profile-phone" name="phone" value="${currentUser.phone || ''}">
                            </div>
                            <div class="form-group">
                                <label for="profile-address">Address</label>
                                <textarea id="profile-address" name="address" rows="3">${currentUser.address || ''}</textarea>
                            </div>
                        </div>
                        <button type="submit" class="btn-primary" style="margin-top: 1rem;">Update Profile</button>
                    </form>
                </div>
                <div id="orders-tab" class="tab-content card">
                    <p>No orders yet. Start shopping now!</p>
                </div>
            </div>
        </section>
    `;
}

function renderAboutPage() {
    return `
        <section class="about-hero">
            <h1>Our Story</h1>
            <p>Blending comfort, quality, and fashion since day one.</p>
        </section>
        <section class="about-section">
            <div class="about-grid">
                <div class="about-content">
                    <h1>About StepStyle</h1>
                    <p>StepStyle was founded with a simple mission: to provide high-quality, stylish shoes that don't compromise on comfort. We believe that everyone deserves to look and feel their best, whether they're running errands, hitting the gym, or attending a formal event.</p>
                    <p>Our team of designers and craftsmen work tirelessly to create shoes that blend the latest fashion trends with cutting-edge technology. Every pair is carefully crafted using premium materials and undergoes rigorous quality testing.</p>
                </div>
                <div class="about-image">
                    <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxzaG9lJTIwZmFjdG9yeXxlbnwxfHx8fDE3NjIyMjAyNTd8MA&lib=rb-4.1.0&q=80&w=1080" alt="Shoe Factory" class="about-image">
                </div>
            </div>
            
            <div class="section-header" style="margin-top: 4rem;">
                <h2>Meet the Team</h2>
            </div>
            <div class="team-grid">
                <div class="team-member card"><h3>jl ardimer</h3></div>
                <div class="team-member card"><h3>john mancao</h3></div>
                <div class="team-member card"><h3>althessa pearl diaz</h3></div>
                <div class="team-member card"><h3>Joshua Pitogo</h3></div>
                <div class="team-member card"><h3>Marc Angelo Ponce</h3></div>
            </div>

            <div class="section-header">
                <h2>Our Core Values</h2>
            </div>
            <div class="values-grid">
                <div class="value-card">
                    <div class="value-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                        </svg>
                    </div>
                    <h3>Quality First</h3>
                    <p>We never compromise on the quality of our materials or craftsmanship.</p>
                </div>
                <div class="value-card">
                    <div class="value-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                        </svg>
                    </div>
                    <h3>Customer Focused</h3>
                    <p>Your satisfaction is our top priority. We're here to help every step of the way.</p>
                </div>
                <div class="value-card">
                    <div class="value-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                            <polyline points="7.5,4.27 7.5,9.36"/>
                            <polyline points="16.5,4.27 16.5,9.36"/>
                        </svg>
                    </div>
                    <h3>Innovation</h3>
                    <p>We continuously innovate to bring you the latest in shoe technology and design.</p>
                </div>
            </div>
            <div class="section-header" style="margin-top: 4rem;">
                <h2>Connect With Us</h2>
                <p>Follow us on social media for the latest updates and promotions!</p>
            </div>
            <div style="text-align: center; margin-top: 1rem;">
                <a href="https://www.facebook.com/StepStyleShoes" target="_blank" class="btn-secondary">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                    </svg>
                    Like us on Facebook
                </a>
                <a href="https://www.instagram.com/StepStyleShoes" target="_blank" class="btn-outline" style="margin-left: 1rem;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                    </svg>
                    Follow on Instagram
                </a>
            </div>
        </section>
    `;
}

function renderContactPage() {
    return `
        <section class="contact-page">
            <div class="contact-hero">
                <h1>Contact Us</h1>
                <p>Have a question? We'd love to hear from you.</p>
            </div>
            <div class="contact-content-grid">
                <div class="contact-form-container">
                    <h2>Send us a message</h2>
                    <form id="contact-form">
                        <div class="form-grid">
                            <div class="form-group">
                                <label for="contact-name">Name</label>
                                <input type="text" id="contact-name" name="name" required>
                            </div>
                            <div class="form-group">
                                <label for="contact-email">Email</label>
                                <input type="email" id="contact-email" name="email" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="contact-subject">Subject</label>
                            <input type="text" id="contact-subject" name="subject" required>
                        </div>
                        <div class="form-group">
                            <label for="contact-message">Message</label>
                            <textarea id="contact-message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn-primary">Send Message</button>
                    </form>
                </div>
                <div class="contact-info-card">
                    <h2>Get in touch</h2>
                    <div class="contact-info-item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        <div>
                            <p><strong>Phone</strong></p>
                            <p>+1 (555) 123-4567</p>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <div>
                            <p><strong>Email</strong></p>
                            <p>support@stepstyle.com</p>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                        </svg>
                        <div>
                            <p><strong>Facebook</strong></p>
                            <p><a href="https://facebook.com/jlkun25" target="_blank" style="color: var(--text-dark);">facebook.com/jlkun25</a></p>
                        </div>
                    </div>
                    <div class="contact-info-item">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <div>
                            <p><strong>Address</strong></p>
                            <p>123 Fashion Street<br>New York, NY 10001</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// MODIFIED: Simplified product card and removed inline handler
function renderProductCard(product) {
    return `
        <div class="product-card" onclick="navigateTo('product-details', ${product.id})">
            <div class="product-image-container">
                <img src="${product.image}" alt="${product.name}" class="product-image">
                <div class="product-rating">
                    ${generateStars(product.rating)}
                </div>
            </div>
            <div class="product-info">
                <p class="product-category">${product.category}</p>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <button class="btn-primary add-to-cart-btn" data-product-id="${product.id}">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
                        <line x1="3" y1="6" x2="21" y2="6"/>
                    </svg>
                    Add to Cart
                </button>
            </div>
        </div>
    `;
}

function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    // Using the .star class from styles.css for solid stars
    return `
        ${'<svg class="star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'.repeat(fullStars)}
        ${hasHalfStar ? '<svg class="star" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2v15.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor"/><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77z" fill="white" fill-opacity="0.5"/></svg>' : ''}
        ${'<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>'.repeat(emptyStars)}
    `;
}

function loadFeaturedProducts() {
    // Load first 4 products
    return products.slice(0, 4);
}

function filterProducts() {
    // Ensure products array is available (from data.js)
    if (typeof products === 'undefined') return [];

    return products.filter(product => {
        const matchesCategory = currentFilters.category === 'all' || product.category === currentFilters.category;
        const matchesSearch = currentFilters.search === '' || product.name.toLowerCase().includes(currentFilters.search.toLowerCase());
        let matchesPrice = true;

        if (currentFilters.priceRange !== 'all') {
            const [min, max] = currentFilters.priceRange.split('-').map(p => p === '+' ? Infinity : parseInt(p));
            matchesPrice = product.price >= min && (max === Infinity || product.price <= max);
        }

        return matchesCategory && matchesSearch && matchesPrice;
    });
}

function updateSearch(value) {
    currentFilters.search = value;
    renderPage();
}

function updateCategory(value) {
    currentFilters.category = value;
    renderPage();
}

function updatePriceRange(value) {
    currentFilters.priceRange = value;
    renderPage();
}

// MODIFIED: Robust single handler for both card and detail page adds
function handleAddToCart(event) {
    event.preventDefault();
    
    // 1. Find the button element reliably using closest()
    const button = event.target.closest('.add-to-cart-btn');
    if (!button || !button.dataset.productId) {
        displayMessage('Error finding product ID.', 'error');
        return;
    }
    
    const productId = parseInt(button.dataset.productId);
    const product = products.find(p => p.id === productId);

    // 2. Check context: are we on the Product Details Page (inputs are present)?
    const sizeSelect = document.getElementById('size-select');
    const colorSelect = document.getElementById('color-select');
    const quantityInput = document.getElementById('quantity-input');
    
    let size, color, quantity;
    
    if (sizeSelect && colorSelect && quantityInput) {
        // Details Page: Use selected values from inputs
        size = sizeSelect.value;
        color = colorSelect.value;
        quantity = parseInt(quantityInput.value);
    } else {
        // Product Card/Default: Use default values
        // Note: products array comes from src/data.js and contains sizes/colors
        size = product.sizes[0].toString();
        color = product.colors[0];
        quantity = 1;
    }
    
    if (!product || isNaN(quantity) || quantity < 1) {
        displayMessage('Invalid product details or quantity.', 'error');
        return;
    }
    
    // Stop the propagation of the click to prevent the product card's parent element 
    // from triggering navigation to the details page (only applies to product cards)
    event.stopPropagation(); 

    addToCart(product, size, color, quantity);
    displayMessage(`Added ${quantity} x ${product.name} to cart!`, 'success');
}

// NEW: Event delegation handler for cart actions (Fixes the cart buttons)
function handleCartAction(event) {
    const target = event.target.closest('button');
    if (!target) return;

    const action = target.dataset.action;
    const productId = parseInt(target.dataset.id);
    const size = target.dataset.size;
    const color = target.dataset.color;
    const currentQuantity = parseInt(target.dataset.quantity);
    
    if (action === 'remove') {
        removeFromCart(productId, size, color);
    } else if (action === 'increase') {
        updateQuantity(productId, size, color, currentQuantity + 1);
    } else if (action === 'decrease') {
        // The updateQuantity function handles quantity <= 0 by removing the item
        updateQuantity(productId, size, color, currentQuantity - 1);
    }
    
    // Re-render the page after any successful cart action
    if (action === 'remove' || action === 'increase' || action === 'decrease') {
        renderPage();
    }
}


function switchTab(tabName) {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => tab.classList.remove('active'));
    contents.forEach(content => content.classList.remove('active'));

    document.querySelector(`[onclick="switchTab('${tabName}')"]`).classList.add('active');
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

function handleLogin(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');

    if (login(email, password)) {
        displayMessage('Login successful!');
        navigateTo('home');
    } else {
        displayMessage('Invalid credentials', 'error');
    }
}

function handleSignup(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    if (signup(name, email, password)) {
        displayMessage('Signup successful! Welcome to StepStyle.', 'success');
        navigateTo('home');
    } else {
        displayMessage('Signup failed', 'error');
    }
}

function handleProfileUpdate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    updateProfile(data);
    displayMessage('Profile updated successfully!');
}

function handleContact(event) {
    event.preventDefault();
    displayMessage('Thank thank you for your message! We\'ll get back to you soon.');
    event.target.reset();
}

// NEW: Checkout Handler
function handleCheckout(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData);
    
    const shippingInfo = {
        name: formValues.name,
        email: formValues.email,
        address: formValues.address,
        city: formValues.city,
        zip: formValues.zip
    };
    
    const total = getCartTotal();
    
    // Call the cart logic to finalize the order
    const orderId = placeOrder(shippingInfo, total);

    // Update the temporary global order object for the confirmation page
    currentOrder.shippingInfo = shippingInfo;
    currentOrder.total = total;
    currentOrder.paymentMethod = formValues['payment-method'];
    
    // Navigate to confirmation page, passing the order ID
    navigateTo('order-confirmation', null, orderId);
}

function displayMessage(message, type = 'success') {
    // Retaining the alert() for visible feedback in the current environment
    console.log(`[${type.toUpperCase()}] ${message}`);
    alert(message);
}

// Initialize the app when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    renderPage();
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.classList.toggle('active');
}
