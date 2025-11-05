/* Base styles and variables - Bootstrap inspired */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root {
    /* Bootstrap-like color mapping (kept current values for black/gray theme) */
    --primary: #000; /* Dark for primary actions */
    --primary-hover: #333;
    --secondary: #6c757d; /* Muted color */
    --success: #198754;
    --danger: #dc3545;
    
    /* Utility colors */
    --bg-light: #f8f9fa; /* Light background */
    --bg-gray: #f9fafb;
    --border: #dee2e6; /* Standard border color */
    
    /* Text colors */
    --text-dark: #212529;
    --text-gray: #6c757d;
    
    /* Spacing and radius */
    --spacer: 1rem;
    --border-radius: 0.375rem;
}

body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; /* Standard sans-serif stack */
    line-height: 1.5;
    color: var(--text-dark);
    background-color: #fff; /* White body background */
}

/* Utility Class for Content Centering (Equivalent to Bootstrap .container) */
.section-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: var(--spacer) 2rem;
}

/* Navbar - Fixed top and elevated (equivalent to Bootstrap .navbar-expand-lg .fixed-top) */
#navbar {
    background: white;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075); /* Subtle shadow */
    position: sticky;
    top: 0;
    z-index: 1000;
}

.nav-container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h1 {
    font-size: 1.5rem;
    cursor: pointer;
}

.nav-links {
    display: flex;
    gap: 1.5rem; /* Reduced gap slightly */
}

.nav-links a {
    text-decoration: none;
    color: var(--text-dark);
    padding: 0.5rem 0; /* Align with standard nav links */
    transition: color 0.3s;
}

.nav-links a:hover {
    color: var(--primary); /* Hover uses primary color */
}

.nav-actions {
    display: flex;
    align-items: center;
    gap: 0.75rem; /* Reduced gap */
}

.cart-btn {
    position: relative;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: background 0.3s;
}

.cart-btn:hover {
    background: var(--bg-light);
}

.cart-count {
    position: absolute;
    top: -5px; /* Adjusted position */
    right: -5px;
    background: var(--danger); /* Red badge for count */
    color: white;
    font-size: 0.75rem;
    padding: 0.125rem 0.375rem;
    border-radius: 50%; /* Perfect circle */
    min-width: 1.5rem;
    height: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
}

/* Buttons - Standardized padding and border radius (equivalent to Bootstrap .btn) */
.btn-primary, .btn-outline, .btn-secondary, .btn-danger {
    padding: 0.5rem 1rem;
    border-radius: var(--border-radius);
    cursor: pointer;
    font-size: 1rem;
    transition: all 0.2s ease-in-out;
    font-weight: 600;
    text-align: center;
    text-decoration: none; /* For links styled as buttons */
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
}

.btn-primary {
    background: var(--primary);
    color: white;
    border: 1px solid var(--primary);
}

.btn-primary:hover {
    background: var(--primary-hover);
    border-color: var(--primary-hover);
}

.btn-outline {
    background: transparent;
    border: 1px solid var(--border);
    color: var(--text-dark);
}

.btn-outline:hover {
    background: var(--bg-light);
    color: var(--text-dark);
}

.btn-secondary {
    background: white;
    color: var(--primary);
    border: 1px solid var(--primary);
}

.btn-secondary:hover {
    background: var(--bg-light);
}

.btn-danger {
    background: var(--danger);
    color: white;
    border: 1px solid var(--danger);
}

.btn-danger:hover {
    background: #c0392b; /* Darker red */
    border-color: #c0392b;
}

.mobile-menu-btn {
    display: none;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0.5rem;
}

.mobile-menu {
    display: none;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 2rem;
    border-top: 1px solid var(--border);
}

.mobile-menu a {
    text-decoration: none;
    color: var(--text-dark);
    padding: 0.5rem 0;
}

/* Hero Section - Jumbotron style */
.hero {
    background: linear-gradient(to right, #2c3e50, #4c627a); /* Dark blue/gray gradient */
    color: white;
    padding: 6rem 2rem;
}

.hero-container {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
}

.hero h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.hero p {
    font-size: 1.25rem;
    color: #e9ecef;
    margin-bottom: 2rem;
}

.hero-image img {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: var(--border-radius);
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15); /* Elevated shadow */
}

/* Features - Card-like display */
.features {
    background: var(--bg-light);
    padding: 4rem 2rem;
}

.features-container {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
}

.feature-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 1.5rem;
    background: white;
    border-radius: var(--border-radius);
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.feature-icon {
    width: 56px;
    height: 56px;
    background: var(--bg-light);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    border: 1px solid var(--border);
    flex-shrink: 0;
}

.feature-icon svg {
    color: var(--primary);
    stroke-width: 1.5;
}

.feature h3 {
    margin-bottom: 0.5rem;
}

.feature p {
    color: var(--text-gray);
    font-size: 0.9rem;
}

/* Products Grid */
.featured-products {
    padding: 4rem 0;
}

.products-page {
    padding: 3rem 0;
}

.section-header {
    text-align: center;
    margin-bottom: 3rem;
}

.section-header h2 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
}

.section-header p {
    color: var(--text-gray);
    font-size: 1.125rem;
}

.filter-bar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    gap: 1rem;
    flex-wrap: wrap;
    padding: 0 2rem;
}

.search-bar input, .filters select {
    /* Form control standardization */
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    font-size: 1rem;
    cursor: pointer;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.search-bar input:focus, .filters select:focus {
    border-color: #adb5bd;
    outline: 0;
    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.25);
}

.products-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
    padding: 0 2rem;
}

.product-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.product-card:hover {
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
}

.product-image-container {
    position: relative;
    overflow: hidden;
}

.product-image {
    width: 100%;
    height: 280px;
    object-fit: cover;
    transition: transform 0.3s;
}

.product-card:hover .product-image {
    transform: scale(1.05);
}

.product-rating {
    position: absolute;
    top: 0.75rem;
    right: 0.75rem;
    background: white;
    padding: 0.3rem 0.6rem;
    border-radius: var(--border-radius);
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.star {
    color: #ffc107;
    fill: #ffc107;
}

.product-info {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    height: 100%; /* Ensure content fills card */
}

.product-category {
    color: var(--text-gray);
    font-size: 0.875rem;
    margin-bottom: 0.25rem;
}

.product-name {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.product-price {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
    color: var(--primary);
}

/* Product Details - Layout & Alignment */
.product-details {
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 2rem;
}

.product-details-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    margin-bottom: 4rem;
}

.product-images img.main-image {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: var(--border-radius);
    border: 1px solid var(--border);
}

.product-info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.product-details .price {
    font-size: 1.75rem;
    font-weight: bold;
    color: var(--primary);
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
}

.product-details .description {
    color: var(--text-gray);
    line-height: 1.6;
    margin-bottom: 1rem;
}

.options {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-top: 1rem;
    border-top: 1px solid var(--border);
}

.option-group {
    display: flex;
    flex-direction: column;
}

.option-group label {
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: var(--text-dark);
}

.option-group select, .option-group input[type="number"] {
    padding: 0.5rem 0.75rem;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    font-size: 1rem;
    max-width: 200px;
}

.product-meta {
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--border);
}


/* Cart Page - Card list alignment */
.cart-page {
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 2rem;
}

.cart-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
}

.cart-item {
    background: white;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    padding: 1rem;
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 0.0625rem 0.125rem rgba(0, 0, 0, 0.05); /* Lighter shadow */
}

.cart-item-image {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: var(--border-radius);
    flex-shrink: 0;
}

.cart-item-info {
    flex: 1;
}

.cart-item-info h3 {
    margin-bottom: 0.25rem;
}

.cart-item-details {
    display: flex;
    gap: 1rem;
    font-size: 0.875rem;
    color: var(--text-gray);
}

.quantity-controls {
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

.quantity-controls button {
    width: 35px;
    height: 35px;
    border: 1px solid var(--border);
    background: var(--bg-light);
    border-radius: var(--border-radius);
    cursor: pointer;
    flex-shrink: 0;
    font-weight: bold;
}

.quantity-display {
    width: 50px;
    text-align: center;
    font-size: 1rem;
    border: 1px solid var(--border);
    padding: 0.25rem 0;
    border-radius: var(--border-radius);
    background: white;
    flex-shrink: 0;
}

.item-total {
    font-weight: bold;
    min-width: 80px;
    text-align: right;
    flex-shrink: 0;
    font-size: 1.1rem;
}

.remove-btn {
    flex-shrink: 0;
    padding: 0.5rem 0.75rem;
    font-size: 0.875rem;
}

.cart-summary {
    background: var(--bg-light);
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    height: fit-content;
    position: sticky;
    top: 5rem;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.75rem;
    color: var(--text-dark);
}

.summary-row.total {
    border-top: 1px solid var(--border);
    padding-top: 1rem;
    margin-top: 1rem;
    font-size: 1.3rem;
    font-weight: bold;
    color: var(--primary);
}

/* NEW: Checkout Page Styles */
.checkout-page {
    padding: 3rem 0;
}

.checkout-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    padding: 0 2rem;
}

.checkout-form-container {
    padding: 1.5rem;
    background: white;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.checkout-summary {
    background: var(--bg-light);
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    height: fit-content;
}

.checkout-items {
    max-height: 250px; /* Limit height for summary list */
    overflow-y: auto;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--border);
}

.checkout-item {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.75rem;
    align-items: center;
}

.checkout-item-image {
    width: 48px;
    height: 48px;
    object-fit: cover;
    border-radius: var(--border-radius);
    flex-shrink: 0;
}

.checkout-item-info {
    flex: 1;
}

.checkout-item-meta {
    font-size: 0.8rem;
    color: var(--text-gray);
}

/* Forms - Card and Control styling */
.form-container {
    min-height: calc(100vh - 200px);
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 3rem 2rem;
    background: var(--bg-light);
}

.form-card {
    background: white;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    padding: 2rem;
    width: 100%;
    max-width: 450px;
}

.form-group {
    margin-bottom: 1rem;
}

.form-group label {
    font-weight: 500;
}

/* Standardized form controls */
.form-group input, .form-group textarea, .form-group select {
    display: block;
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    font-size: 1rem;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.form-group input:focus, .form-group textarea:focus, .form-group select:focus {
    outline: none;
    border-color: #adb5bd;
    box-shadow: 0 0 0 0.25rem rgba(108, 117, 125, 0.25);
}

.form-footer a {
    color: var(--primary);
}

/* Account Page - Tabs and Card */
.account-page {
    max-width: 1280px;
    margin: 0 auto;
    padding: 3rem 2rem;
}

.tabs {
    border-bottom: 1px solid var(--border);
}

.tab-btn {
    padding: 0.75rem 1rem;
    margin-bottom: -1px; /* Overlap border */
    border: 1px solid transparent;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    transition: all 0.2s;
}

.tab-btn.active {
    border-color: var(--border) var(--border) white;
    border-bottom-color: transparent;
    font-weight: 600;
    color: var(--primary);
}

.card {
    background: white;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    padding: 2rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.form-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
}

/* About Page */
.about-hero {
    background: linear-gradient(to right, #2c3e50, #4c627a);
    color: white;
    padding: 4rem 2rem;
    text-align: center;
}

.about-section {
    max-width: 1280px;
    margin: 0 auto;
    padding: 4rem 2rem;
}

.about-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    align-items: center;
    margin-bottom: 4rem;
}

.about-image {
    width: 100%;
    height: 400px;
    object-fit: cover;
    border-radius: var(--border-radius);
    box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
}

.values-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: 3rem;
}

.value-card {
    text-align: center;
    padding: 2rem 1rem;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    background: var(--bg-light);
}

.value-icon {
    width: 64px;
    height: 64px;
    background: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 1rem;
    color: var(--primary);
    border: 1px solid var(--border);
}

.btn-outline { /* Align the social media button icons */
    display: inline-flex;
    align-items: center;
}

/* Contact Page */
.contact-hero {
    background: linear-gradient(to right, #2c3e50, #4c627a);
    color: white;
    padding: 4rem 2rem;
    text-align: center;
}

.contact-page {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 2rem 4rem 2rem;
}

.contact-content-grid {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 2rem;
    margin-top: 3rem;
}

.contact-form-container {
    padding: 1.5rem;
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    background: white;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
}

.contact-info-card {
    background: var(--bg-light);
    border: 1px solid var(--border);
    border-radius: var(--border-radius);
    padding: 1.5rem;
    height: fit-content;
}

.contact-info-item {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    margin-bottom: 1.5rem;
}

.contact-info-item svg {
    flex-shrink: 0;
    color: var(--primary);
    margin-top: 2px;
}

/* FOOTER STYLES */
footer {
    background: #212529; /* Dark footer */
    color: white;
    padding: 3rem 2rem;
}

.footer-grid {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr; /* First column wider */
    gap: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #343a40;
}

.footer-col h3, .footer-col h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: white;
}

.footer-col p {
    font-size: 0.9rem;
    color: #adb5bd;
    line-height: 1.6;
}

.footer-col ul {
    list-style: none;
    padding: 0;
}

.footer-col li {
    margin-bottom: 0.5rem;
}

.footer-col a {
    color: #adb5bd;
    text-decoration: none;
    transition: color 0.3s;
    font-size: 0.9rem;
}

.footer-col a:hover {
    color: white;
}

.footer-bottom {
    text-align: center;
    padding-top: 2rem;
    font-size: 0.875rem;
    color: #adb5bd;
}

/* Responsive (equivalent to Bootstrap breakpoints) */
/* Medium devices (tablets, 768px and up) */
@media (max-width: 992px) {
    .features-container {
        grid-template-columns: repeat(2, 1fr);
    }
    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Small devices (landscape phones, 576px and up) */
@media (max-width: 768px) {
    .desktop-nav {
        display: none;
    }

    .mobile-menu-btn {
        display: block;
    }

    .mobile-menu.active {
        display: flex;
    }

    .hero-container, .product-details-grid, .cart-grid, .contact-content-grid, .checkout-grid {
        grid-template-columns: 1fr;
    }

    .features-container {
        grid-template-columns: 1fr;
    }

    .values-grid, .form-grid {
        grid-template-columns: 1fr;
    }

    .hero h1 {
        font-size: 2.5rem;
    }

    .hero-image {
        display: none;
    }

    .filter-bar {
        flex-direction: column;
        align-items: stretch;
    }

    /* Responsive Footer Fix */
    .footer-grid {
        grid-template-columns: 1fr;
        text-align: center;
    }
    .footer-col {
        text-align: center;
    }
    .footer-col ul {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0;
    }

    /* Responsive Cart Fix */
    .cart-item {
        flex-wrap: wrap;
        text-align: center;
        justify-content: center;
    }
    .cart-item-image {
        margin-bottom: 0.5rem;
    }
    .cart-item-info {
        flex-basis: 100%;
        margin-bottom: 1rem;
    }
    .item-total {
        min-width: unset;
        text-align: center;
    }
    .quantity-controls {
        /* Center controls group */
        margin: 0 auto;
    }
}

/* Extra small devices (portrait phones, less than 576px) */
@media (max-width: 576px) {
    .products-grid {
        grid-template-columns: 1fr;
    }
    .hero {
        padding: 4rem 1rem;
    }
    .nav-container {
        padding: 1rem 1rem;
    }
}
