// ==========================================
// PATITAS DE ALGODÓN - MAIN JAVASCRIPT
// Modular JavaScript with component loading
// ==========================================

// ========== CONFIGURATION ==========
const CONFIG = {
  whatsapp: {
    number: '51987654321', // Cambia esto por tu número de WhatsApp (código país + número sin espacios)
    defaultMessage: 'Hola! Estoy interesado en los productos de Patitas de Algodón.'
  }
};

// ========== COMPONENTS MODULE ==========
const Components = {
  async init() {
    await this.loadHeader();
    await this.loadFooter();
    this.setActiveNavLink();
  },

  async loadHeader() {
    const headerPlaceholder = document.getElementById('header-placeholder');
    if (!headerPlaceholder) return;

    try {
      const response = await fetch('components/header.html');
      const html = await response.text();
      headerPlaceholder.innerHTML = html;

      // Initialize navigation after loading header
      Navigation.setupMobileMenu();
    } catch (error) {
      console.error('Error loading header:', error);
    }
  },

  async loadFooter() {
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (!footerPlaceholder) return;

    try {
      const response = await fetch('components/footer.html');
      const html = await response.text();
      footerPlaceholder.innerHTML = html;

      // Initialize footer after loading
      Footer.updateCopyrightYear();
      Footer.setupNewsletter();
    } catch (error) {
      console.error('Error loading footer:', error);
    }
  },

  setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link[data-page]');

    navLinks.forEach(link => {
      const linkPage = link.getAttribute('data-page');
      // Remove any existing active class first
      link.classList.remove('active');

      // Add active class if current page matches
      if (currentPage === `${linkPage}.html` || currentPage.includes(linkPage)) {
        link.classList.add('active');
      }
    });
  }
};

// ========== NAVIGATION MODULE ==========
const Navigation = {
  init() {
    this.setupMobileMenu();
    this.setupScrollHeader();
    this.setupSmoothScroll();
  },

  setupMobileMenu() {
    const toggle = document.getElementById('mobile-toggle');
    const menu = document.getElementById('mobile-menu');
    const hamburger = document.querySelector('.hamburger');

    if (!toggle || !menu) return;

    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      hamburger.classList.toggle('open');
    });

    // Close menu when clicking on a link
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
        hamburger.classList.remove('open');
      });
    });
  },

  setupScrollHeader() {
    const header = document.getElementById('main-nav');
    if (!header) return;

    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.classList.add('scrolled-header');
      } else {
        header.classList.remove('scrolled-header');
      }
    });
  },

  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') return;

        e.preventDefault();
        const target = document.querySelector(href);

        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
};

// ========== ANIMATIONS MODULE ==========
const Animations = {
  init() {
    this.setupScrollReveal();
  },

  setupScrollReveal() {
    const revealElements = document.querySelectorAll('.reveal');

    if (revealElements.length === 0) return;

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    revealElements.forEach(el => {
      observer.observe(el);
    });
  }
};

// ========== PRODUCT MODULE ==========
const Product = {
  init() {
    this.setupGallery();
    this.setupMaterialSelector();
  },

  setupGallery() {
    const mainImage = document.getElementById('main-image');
    const thumbnails = document.querySelectorAll('.thumbnail');

    if (!mainImage || thumbnails.length === 0) return;

    thumbnails.forEach(thumb => {
      thumb.addEventListener('click', () => {
        const newSrc = thumb.dataset.img;
        if (newSrc) {
          mainImage.src = newSrc;

          // Update active thumbnail
          thumbnails.forEach(t => {
            t.classList.remove('border-primary');
            t.classList.add('border-transparent');
          });
          thumb.classList.add('border-primary');
          thumb.classList.remove('border-transparent');
        }
      });
    });
  },

  setupMaterialSelector() {
    const materialButtons = document.querySelectorAll('.material-btn');

    if (materialButtons.length === 0) return;

    materialButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        // Remove active state from all buttons
        materialButtons.forEach(b => {
          b.classList.remove('border-primary', 'bg-primary-fixed/20');
          b.classList.add('border-transparent', 'bg-surface-container');
        });

        // Add active state to clicked button
        btn.classList.remove('border-transparent', 'bg-surface-container');
        btn.classList.add('border-primary', 'bg-primary-fixed/20');
      });
    });
  }
};

// ========== INTERACTIONS MODULE ==========
const Interactions = {
  init() {
    this.setupButtonHovers();
    this.setupCardHovers();
  },

  setupButtonHovers() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(btn => {
      btn.addEventListener('mouseenter', () => {
        btn.style.transform = 'scale(1.05)';
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'scale(1)';
      });
    });
  },

  setupCardHovers() {
    const cards = document.querySelectorAll('.feature-card, .product-card');

    cards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-8px)';
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
      });
    });
  }
};

// ========== WHATSAPP MODULE ==========
const WhatsApp = {
  init() {
    this.setupWhatsAppLinks();
  },

  setupWhatsAppLinks() {
    // Update all WhatsApp links with the configured number
    const whatsappLinks = document.querySelectorAll('a[href*="wa.me"]');

    whatsappLinks.forEach(link => {
      // Replace placeholder with actual number
      const currentHref = link.getAttribute('href');
      const newHref = currentHref.replace('yournumber', CONFIG.whatsapp.number);
      link.setAttribute('href', newHref);

      link.addEventListener('click', (e) => {
        // You can add custom tracking or analytics here
        console.log('WhatsApp link clicked:', CONFIG.whatsapp.number);
      });
    });
  },

  // Helper function to generate WhatsApp message
  generateMessage(productName = '', customization = {}) {
    let message = `Hola! Estoy interesado en ${productName || 'los productos de Patitas de Algodón'}. `;

    if (customization.petName) {
      message += `Nombre: ${customization.petName}. `;
    }

    if (customization.phone) {
      message += `Teléfono: ${customization.phone}. `;
    }

    if (customization.material) {
      message += `Material: ${customization.material}. `;
    }

    return encodeURIComponent(message);
  },

  // Get WhatsApp URL with message
  getWhatsAppURL(message = '') {
    const msg = message || CONFIG.whatsapp.defaultMessage;
    return `https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(msg)}`;
  }
};

// ========== FOOTER MODULE ==========
const Footer = {
  init() {
    this.updateCopyrightYear();
    this.setupNewsletter();
  },

  updateCopyrightYear() {
    const yearElement = document.getElementById('copyright-year');
    if (yearElement) {
      const currentYear = new Date().getFullYear();
      yearElement.textContent = currentYear;
    }
  },

  setupNewsletter() {
    const newsletterForm = document.querySelector('footer form');
    const emailInput = document.querySelector('footer input[type="email"]');
    const submitButton = document.querySelector('footer button[type="submit"]');

    if (!emailInput) return;

    // Handle newsletter submission (you'd connect this to your backend)
    const handleSubmit = (e) => {
      if (e) e.preventDefault();

      const email = emailInput.value.trim();

      if (!email) {
        alert('Por favor ingresa tu email');
        return;
      }

      if (!this.validateEmail(email)) {
        alert('Por favor ingresa un email válido');
        return;
      }

      // Here you would send to your backend
      console.log('Newsletter subscription:', email);
      alert('¡Gracias por suscribirte!');
      emailInput.value = '';
    };

    if (newsletterForm) {
      newsletterForm.addEventListener('submit', handleSubmit);
    } else if (submitButton) {
      submitButton.addEventListener('click', handleSubmit);
    }
  },

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
};

// ========== UTILS MODULE ==========
const Utils = {
  // Debounce function for performance optimization
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Throttle function for scroll events
  throttle(func, limit) {
    let inThrottle;
    return function(...args) {
      if (!inThrottle) {
        func.apply(this, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', async () => {
  // Load components first
  await Components.init();

  // Then initialize all modules
  Navigation.setupScrollHeader();
  Navigation.setupSmoothScroll();
  Animations.init();
  Product.init();
  Interactions.init();

  // Initialize WhatsApp after components are loaded
  WhatsApp.init();

  // Footer is initialized inside Components.loadFooter()

  // Log initialization
  console.log('Patitas de Algodón - Website initialized');
});

// ========== EXPORT FOR POTENTIAL MODULE USE ==========
// If you want to use these modules elsewhere, you can export them
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Components,
    Navigation,
    Animations,
    Product,
    Interactions,
    WhatsApp,
    Footer,
    Utils
  };
}
