// DOM Elements
const navbar = document.getElementById('navbar');
const navMenu = document.getElementById('nav-menu');
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const categoryBtns = document.querySelectorAll('.category-btn');
const menuCategories = document.querySelectorAll('.menu-category');
const langBtns = document.querySelectorAll('.lang-btn');
const reviewNavBtns = document.querySelectorAll('.review-nav-btn');
const reviewsSlider = document.querySelector('.reviews-slider');

// Initialize
window.addEventListener('DOMContentLoaded', () => {
    initNavbar();
    initMenu();
    initLanguageSwitch();
    initReviews();
    initScrollAnimations();
    initSmoothScroll();
    initContactForm();
});

// Navbar scroll effect
function initNavbar() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// Menu category switching
function initMenu() {
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            
            // Update active button
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Update active category
            menuCategories.forEach(cat => {
                cat.classList.remove('active');
                if (cat.id === category) {
                    cat.classList.add('active');
                }
            });
        });
    });
}

// Language switch - ОБНОВЛЕННАЯ ВЕРСИЯ
function initLanguageSwitch() {
    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            
            // Update active button
            langBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Translate the page
            translatePage(lang);
            
            // Save language preference
            localStorage.setItem('preferred-language', lang);
            
            console.log('Language switched to:', lang);
        });
    });
    
    // Initialize translation on page load
    initTranslation();
}

// Reviews slider
function initReviews() {
    let currentReview = 0;
    const reviewCards = document.querySelectorAll('.review-card');
    
    if (reviewNavBtns.length > 0) {
        reviewNavBtns.forEach((btn, index) => {
            btn.addEventListener('click', () => {
                currentReview = index;
                updateReviewSlider();
            });
        });
        
        // Auto-scroll reviews
        setInterval(() => {
            currentReview = (currentReview + 1) % reviewNavBtns.length;
            updateReviewSlider();
        }, 5000);
    }
    
    function updateReviewSlider() {
        reviewNavBtns.forEach((btn, index) => {
            btn.classList.toggle('active', index === currentReview);
        });
        
        if (reviewsSlider && reviewCards[currentReview]) {
            const cardWidth = reviewCards[currentReview].offsetWidth + 32; // Include gap
            reviewsSlider.scrollTo({
                left: cardWidth * currentReview,
                behavior: 'smooth'
            });
        }
    }
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.about-content, .menu-item, .special-card, .news-card, .review-card, .contact-content'
    );
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
        observer.observe(el);
    });
    
    // Add animation class styles
    const style = document.createElement('style');
    style.textContent = `
        .animate-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
}

// Smooth scroll for navigation links
function initSmoothScroll() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // Account for fixed navbar
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-bg-img');
    
    if (heroBackground && scrolled < window.innerHeight) {
        const rate = scrolled * -0.5;
        heroBackground.style.transform = `translateY(${rate}px) scale(1.1)`;
    }
});

// Add floating animation to menu items
const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach((item, index) => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateY(-8px) scale(1.02)';
        item.style.boxShadow = '0 20px 40px rgba(139, 69, 19, 0.15)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateY(0) scale(1)';
        item.style.boxShadow = '0 5px 20px rgba(139, 69, 19, 0.1)';
    });
    
    // Stagger animation
    item.style.animationDelay = `${index * 0.1}s`;
});

// Add hover effect to buttons
const buttons = document.querySelectorAll('.btn');
buttons.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Gallery hover effects
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) rotate(1deg)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) rotate(0deg)';
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger hero animations after load
    const heroElements = document.querySelectorAll('.title-line, .title-highlight, .hero-subtitle, .hero-description, .hero-buttons, .hero-image');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add CSS for loading animations
const loadingStyle = document.createElement('style');
loadingStyle.textContent = `
    .title-line, .title-highlight, .hero-subtitle, .hero-description, .hero-buttons, .hero-image {
        opacity: 0;
        transform: translateY(30px);
        transition: opacity 0.8s ease-out, transform 0.8s ease-out;
    }
    
    .loaded .title-line { transition-delay: 0.3s; }
    .loaded .title-highlight { transition-delay: 0.5s; }
    .loaded .hero-subtitle { transition-delay: 0.7s; }
    .loaded .hero-description { transition-delay: 0.9s; }
    .loaded .hero-buttons { transition-delay: 1.1s; }
    .loaded .hero-image { transition-delay: 1.3s; }
`;
document.head.appendChild(loadingStyle);

// Add interactive cursor effect
document.addEventListener('mousemove', (e) => {
    const cursor = document.querySelector('.cursor');
    if (!cursor) {
        const newCursor = document.createElement('div');
        newCursor.className = 'cursor';
        newCursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(139, 69, 19, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transform: translate(-50%, -50%);
            transition: transform 0.1s ease-out;
        `;
        document.body.appendChild(newCursor);
    }
    
    const cursorElement = document.querySelector('.cursor');
    cursorElement.style.left = e.clientX + 'px';
    cursorElement.style.top = e.clientY + 'px';
});

// Add click ripple effect
function createRipple(e) {
    const ripple = document.createElement('span');
    const rect = this.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: rgba(255, 255, 255, 0.3);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;
    
    this.style.position = 'relative';
    this.style.overflow = 'hidden';
    this.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// Add ripple effect to buttons
buttons.forEach(btn => {
    btn.addEventListener('click', createRipple);
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Optimized scroll handler
const optimizedScrollHandler = debounce(() => {
    // Handle scroll-based animations here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Contact Form
function initContactForm() {
    const form = document.getElementById('contact-form');
    const formInputs = form.querySelectorAll('input, select, textarea');
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const formSuccess = document.getElementById('form-success');
    
    // Form validation rules
    const validationRules = {
        name: {
            required: true,
            minLength: 2,
            message: 'Vennligst oppgi ditt navn (minst 2 tegn)'
        },
        email: {
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Vennligst oppgi en gyldig e-postadresse'
        },
        phone: {
            pattern: /^[\+]?[1-9][\d]{0,15}$/,
            message: 'Vennligst oppgi et gyldig telefonnummer'
        },
        subject: {
            required: true,
            message: 'Vennligst velg et emne'
        },
        message: {
            required: true,
            minLength: 10,
            message: 'Vennligst skriv en melding (minst 10 tegn)'
        },
        privacy: {
            required: true,
            message: 'Du må godta vilkårene for å sende meldingen'
        }
    };
    
    // Real-time validation
    formInputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => clearFieldError(input));
    });
    
    // Form submission
    form.addEventListener('submit', handleSubmit);
    
    function validateField(field) {
        const fieldName = field.name;
        const fieldValue = field.value.trim();
        const rules = validationRules[fieldName];
        const errorElement = document.getElementById(`${fieldName}-error`);
        const formGroup = field.closest('.form-group');
        
        if (!rules) return true;
        
        let errorMessage = '';
        
        // Required validation
        if (rules.required && (!fieldValue || fieldValue === '')) {
            errorMessage = rules.message;
        }
        
        // Minimum length validation
        if (rules.minLength && fieldValue.length < rules.minLength) {
            errorMessage = rules.message;
        }
        
        // Pattern validation
        if (rules.pattern && fieldValue && !rules.pattern.test(fieldValue)) {
            errorMessage = rules.message;
        }
        
        // Checkbox validation
        if (field.type === 'checkbox' && rules.required && !field.checked) {
            errorMessage = rules.message;
        }
        
        // Display error or success
        if (errorMessage) {
            showFieldError(formGroup, errorElement, errorMessage);
            return false;
        } else {
            showFieldSuccess(formGroup);
            return true;
        }
    }
    
    function showFieldError(formGroup, errorElement, message) {
        formGroup.classList.remove('success');
        formGroup.classList.add('error');
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
    
    function showFieldSuccess(formGroup) {
        formGroup.classList.remove('error');
        formGroup.classList.add('success');
        const errorElement = formGroup.querySelector('.error-message');
        if (errorElement) {
            errorElement.classList.remove('show');
        }
    }
    
    function clearFieldError(field) {
        const formGroup = field.closest('.form-group');
        formGroup.classList.remove('error');
        const errorElement = formGroup.querySelector('.error-message');
        if (errorElement) {
            errorElement.classList.remove('show');
        }
    }
    
    async function handleSubmit(e) {
        e.preventDefault();
        
        // Validate all fields
        let isValid = true;
        formInputs.forEach(input => {
            if (!validateField(input)) {
                isValid = false;
            }
        });
        
        if (!isValid) {
            // Scroll to first error
            const firstError = form.querySelector('.form-group.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.style.display = 'none';
        btnLoading.style.display = 'inline-block';
        
        try {
            // Simulate form submission (replace with actual endpoint)
            await submitForm(new FormData(form));
            
            // Show success message
            form.style.display = 'none';
            formSuccess.style.display = 'block';
            
            // Scroll to success message
            formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
        } catch (error) {
            // Show error message
            showFormError('Det oppstod en feil ved sending av meldingen. Vennligst prøv igjen senere.');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.style.display = 'inline';
            btnLoading.style.display = 'none';
        }
    }
    
    function submitForm(formData) {
        // Replace this with actual form submission
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('Form submitted with data:', Object.fromEntries(formData));
                // Simulate success - in real implementation, this would be a fetch request
                resolve({ success: true });
            }, 2000);
        });
    }
    
    function showFormError(message) {
        // Create or update error message
        let errorDiv = form.querySelector('.form-error');
        if (!errorDiv) {
            errorDiv = document.createElement('div');
            errorDiv.className = 'form-error';
            errorDiv.style.cssText = `
                background: #fee2e2;
                border: 1px solid #fecaca;
                color: #dc2626;
                padding: 1rem;
                border-radius: 10px;
                margin-bottom: 1rem;
                text-align: center;
            `;
            form.insertBefore(errorDiv, form.firstChild);
        }
        errorDiv.textContent = message;
        
        // Remove error after 5 seconds
        setTimeout(() => {
            if (errorDiv.parentNode) {
                errorDiv.remove();
            }
        }, 5000);
    }
    
    // Add floating labels effect
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
        
        // Check if field has value on load
        if (input.value) {
            input.parentElement.classList.add('focused');
        }
    });
    
    // Add form field animation styles
    const formStyle = document.createElement('style');
    formStyle.textContent = `
        .form-group {
            position: relative;
        }
        
        .form-group.focused::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: linear-gradient(135deg, rgba(139, 69, 19, 0.05), rgba(205, 133, 63, 0.05));
            border-radius: 15px;
            pointer-events: none;
            z-index: 1;
        }
        
        .form-group input,
        .form-group select,
        .form-group textarea {
            position: relative;
            z-index: 2;
        }
        
        .contact-info-form {
            display: flex;
            flex-direction: column;
            gap: 2rem;
        }
        
        @media (max-width: 1024px) {
            .contact-content {
                grid-template-columns: 1fr;
                gap: 2rem;
            }
            
            .contact-info-form {
                order: 1;
            }
            
            .contact-map {
                order: 2;
            }
        }
        
        @media (max-width: 768px) {
            .contact-info {
                padding: 1.5rem;
            }
            
            .contact-form-container {
                padding: 1.5rem;
            }
            
            .contact-form {
                gap: 1rem;
            }
        }
    `;
    document.head.appendChild(formStyle);
}