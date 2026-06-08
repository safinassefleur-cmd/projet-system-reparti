/* ============================================
   ARTANOVA - Main Application JS
   ============================================ */

// ─── State ───────────────────────────────────
const state = {
  cart: JSON.parse(localStorage.getItem('artanova_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('artanova_wishlist') || '[]'),
  theme: localStorage.getItem('artanova_theme') || 'light',
  lang: localStorage.getItem('artanova_lang') || 'fr',
  heroSlide: 0,
};

// ─── Sample Data ─────────────────────────────
const artworks = [
  { id: 1, title: 'Lumières de l\'Aube', artist: 'Élise Morel', price: 2400, originalPrice: 3200, emoji: '🌅', category: 'Peinture', style: 'Impressionnisme', technique: 'Huile sur toile', size: '80×100 cm', color: '#E8C97A', badge: 'new', available: true, rating: 4.9, reviews: 24, year: 2023 },
  { id: 2, title: 'Rêverie Nocturne', artist: 'Karim Benzara', price: 1800, emoji: '🌌', category: 'Peinture', style: 'Surréalisme', technique: 'Acrylique', size: '60×80 cm', color: '#4A2C90', badge: null, available: true, rating: 4.7, reviews: 18, year: 2024 },
  { id: 3, title: 'Méditation Bleue', artist: 'Sofia Chen', price: 3600, emoji: '🔵', category: 'Art Abstrait', style: 'Abstrait', technique: 'Huile sur toile', size: '100×120 cm', color: '#2D5A8E', badge: 'featured', available: true, rating: 5.0, reviews: 31, year: 2023 },
  { id: 4, title: 'Le Marché aux Épices', artist: 'Hassan Tazi', price: 950, emoji: '🌶️', category: 'Illustration', style: 'Réalisme', technique: 'Aquarelle', size: '40×50 cm', color: '#C0392B', badge: null, available: true, rating: 4.8, reviews: 15, year: 2024 },
  { id: 5, title: 'Danse des Flammes', artist: 'Élise Morel', price: 5200, emoji: '🔥', category: 'Peinture', style: 'Expressionnisme', technique: 'Huile sur toile', size: '120×150 cm', color: '#E74C3C', badge: 'featured', available: false, rating: 4.9, reviews: 42, year: 2022 },
  { id: 6, title: 'Sérénité d\'Automne', artist: 'Marie Dubois', price: 1200, emoji: '🍂', category: 'Photographie', style: 'Naturalisme', technique: 'Photographie', size: '50×70 cm', color: '#D35400', badge: null, available: true, rating: 4.6, reviews: 9, year: 2024 },
  { id: 7, title: 'Géométrie Dorée', artist: 'Karim Benzara', price: 2100, emoji: '✦', category: 'Art Abstrait', style: 'Art Géométrique', technique: 'Acrylique sur toile', size: '70×70 cm', color: '#F1C40F', badge: 'sale', available: true, rating: 4.8, reviews: 20, year: 2023 },
  { id: 8, title: 'Forêt Enchantée', artist: 'Sofia Chen', price: 1600, emoji: '🌲', category: 'Peinture', style: 'Fantastique', technique: 'Huile sur toile', size: '60×90 cm', color: '#27AE60', badge: null, available: true, rating: 4.7, reviews: 12, year: 2024 },
];

const artists = [
  { id: 1, name: 'Élise Morel', specialty: 'Peinture Classique', works: 24, emoji: '👩‍🎨', country: '🇫🇷' },
  { id: 2, name: 'Karim Benzara', specialty: 'Art Contemporain', works: 18, emoji: '👨‍🎨', country: '🇲🇦' },
  { id: 3, name: 'Sofia Chen', specialty: 'Art Abstrait', works: 31, emoji: '👩‍🎨', country: '🇨🇳' },
  { id: 4, name: 'Hassan Tazi', specialty: 'Aquarelle', works: 15, emoji: '👨‍🎨', country: '🇲🇦' },
  { id: 5, name: 'Marie Dubois', specialty: 'Photographie', works: 9, emoji: '📸', country: '🇫🇷' },
  { id: 6, name: 'Léo Fontaine', specialty: 'Art Numérique', works: 22, emoji: '💻', country: '🇧🇪' },
];

const translations = {
  fr: {
    nav_home: 'Accueil', nav_gallery: 'Galerie', nav_artists: 'Artistes',
    nav_about: 'À propos', nav_contact: 'Contact',
    hero_tagline: 'L\'art qui transforme vos espaces',
    hero_sub: 'Découvrez des œuvres d\'art uniques, sélectionnées par des experts, pour sublimer votre intérieur.',
    btn_explore: 'Explorer la galerie', btn_discover: 'Découvrir les artistes',
    section_featured: 'Œuvres en vedette', section_artists: 'Artistes vedettes',
    section_categories: 'Catégories', section_testimonials: 'Témoignages',
    newsletter_title: 'Restez inspiré(e)', newsletter_cta: 'S\'abonner',
    newsletter_placeholder: 'Votre adresse email',
    add_cart: 'Ajouter au panier', buy_now: 'Acheter maintenant',
    quick_view: 'Vue rapide', in_wishlist: 'Retiré des favoris', added_wishlist: 'Ajouté aux favoris',
    added_cart: 'Ajouté au panier',
  },
  en: {
    nav_home: 'Home', nav_gallery: 'Gallery', nav_artists: 'Artists',
    nav_about: 'About', nav_contact: 'Contact',
    hero_tagline: 'Art that transforms your spaces',
    hero_sub: 'Discover unique artworks, curated by experts, to elevate your interior.',
    btn_explore: 'Explore gallery', btn_discover: 'Discover artists',
    section_featured: 'Featured works', section_artists: 'Featured artists',
    section_categories: 'Categories', section_testimonials: 'Testimonials',
    newsletter_title: 'Stay inspired', newsletter_cta: 'Subscribe',
    newsletter_placeholder: 'Your email address',
    add_cart: 'Add to cart', buy_now: 'Buy now',
    quick_view: 'Quick view', in_wishlist: 'Removed from wishlist', added_wishlist: 'Added to wishlist',
    added_cart: 'Added to cart',
  },
  ar: {
    nav_home: 'الرئيسية', nav_gallery: 'المعرض', nav_artists: 'الفنانون',
    nav_about: 'عنا', nav_contact: 'اتصل بنا',
    hero_tagline: 'الفن الذي يحوّل فضاءاتك',
    hero_sub: 'اكتشف أعمالاً فنية فريدة، منتقاة من قِبل الخبراء، لتزيين منزلك.',
    btn_explore: 'استكشف المعرض', btn_discover: 'اكتشف الفنانين',
    section_featured: 'أعمال مميزة', section_artists: 'فنانون مميزون',
    section_categories: 'الفئات', section_testimonials: 'شهادات',
    newsletter_title: 'ابقَ مُلهَماً', newsletter_cta: 'اشترك',
    newsletter_placeholder: 'بريدك الإلكتروني',
    add_cart: 'أضف إلى السلة', buy_now: 'اشتر الآن',
    quick_view: 'عرض سريع', in_wishlist: 'أُزيل من المفضلة', added_wishlist: 'أُضيف إلى المفضلة',
    added_cart: 'أُضيف إلى السلة',
  },
};

// ─── i18n ─────────────────────────────────────
function t(key) {
  return (translations[state.lang] && translations[state.lang][key]) || key;
}

function setLang(lang) {
  state.lang = lang;
  localStorage.setItem('artanova_lang', lang);
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  updateTranslations();
}

function updateTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (el.tagName === 'INPUT') el.placeholder = t(key);
    else el.textContent = t(key);
  });
}

// ─── Theme ────────────────────────────────────
function initTheme() {
  if (state.theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-theme', state.theme);
  localStorage.setItem('artanova_theme', state.theme);
}

// ─── Cart ─────────────────────────────────────
function saveCart() {
  localStorage.setItem('artanova_cart', JSON.stringify(state.cart));
  updateCartUI();
}

function addToCart(artworkId) {
  const artwork = artworks.find(a => a.id === artworkId);
  if (!artwork) return;
  if (!state.cart.find(i => i.id === artworkId)) {
    state.cart.push({ ...artwork, qty: 1 });
  }
  saveCart();
  showToast('🛒 ' + t('added_cart'));
}

function removeFromCart(artworkId) {
  state.cart = state.cart.filter(i => i.id !== artworkId);
  saveCart();
  renderCartItems();
}

function updateCartUI() {
  const count = state.cart.length;
  document.querySelectorAll('.cart-count').forEach(el => {
    el.textContent = count;
    el.style.display = count > 0 ? 'flex' : 'none';
  });
  renderCartItems();
}

function renderCartItems() {
  const container = document.getElementById('cart-items-list');
  if (!container) return;

  if (state.cart.length === 0) {
    container.innerHTML = '<p style="text-align:center;color:var(--color-gray-400);padding:2rem;">Votre panier est vide</p>';
  } else {
    container.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-image">${item.emoji}</div>
        <div>
          <div class="cart-item-name">${item.title}</div>
          <div class="cart-item-artist">${item.artist}</div>
          <div class="cart-item-price">${item.price.toLocaleString('fr-FR')} €</div>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${item.id})" title="Retirer">✕</button>
      </div>
    `).join('');
  }

  const total = state.cart.reduce((s, i) => s + i.price, 0);
  const totalEl = document.getElementById('cart-total');
  if (totalEl) totalEl.textContent = total.toLocaleString('fr-FR') + ' €';
}

// ─── Wishlist ─────────────────────────────────
function toggleWishlist(artworkId) {
  const idx = state.wishlist.indexOf(artworkId);
  if (idx === -1) {
    state.wishlist.push(artworkId);
    showToast('♥ ' + t('added_wishlist'));
  } else {
    state.wishlist.splice(idx, 1);
    showToast('♡ ' + t('in_wishlist'));
  }
  localStorage.setItem('artanova_wishlist', JSON.stringify(state.wishlist));
  document.querySelectorAll(`[data-wishlist-id="${artworkId}"]`).forEach(btn => {
    btn.classList.toggle('active', state.wishlist.includes(artworkId));
  });
}

function isInWishlist(id) { return state.wishlist.includes(id); }

// ─── Toast ────────────────────────────────────
function showToast(message, duration = 2500) {
  let container = document.querySelector('.toast-container');
  if (!container) {
    container = document.createElement('div');
    container.className = 'toast-container';
    document.body.appendChild(container);
  }
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.textContent = message;
  container.appendChild(toast);
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, duration);
}

// ─── Navigation ───────────────────────────────
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  });

  const hamburger = document.querySelector('.hamburger');
  const mobileMenu = document.querySelector('.mobile-menu');
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
    });
    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        mobileMenu.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // Active nav link
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPath) link.classList.add('active');
  });
}

// ─── Hero Slider ──────────────────────────────
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides.length) return;

  function goToSlide(idx) {
    slides[state.heroSlide].classList.remove('active');
    if (dots[state.heroSlide]) dots[state.heroSlide].classList.remove('active');
    state.heroSlide = idx % slides.length;
    slides[state.heroSlide].classList.add('active');
    if (dots[state.heroSlide]) dots[state.heroSlide].classList.add('active');
  }

  dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));
  setInterval(() => goToSlide(state.heroSlide + 1), 6000);
}

// ─── Cart Sidebar ─────────────────────────────
function openCart() {
  document.querySelector('.cart-sidebar')?.classList.add('open');
  document.querySelector('.cart-overlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  renderCartItems();
}

function closeCart() {
  document.querySelector('.cart-sidebar')?.classList.remove('open');
  document.querySelector('.cart-overlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

// ─── Quick View Modal ────────────────────────
function openQuickView(artworkId) {
  const artwork = artworks.find(a => a.id === artworkId);
  if (!artwork) return;

  const modal = document.getElementById('quick-view-modal');
  if (!modal) return;

  modal.querySelector('.modal-image').textContent = artwork.emoji;
  modal.querySelector('.modal-artwork-title').textContent = artwork.title;
  modal.querySelector('.modal-artwork-artist').textContent = artwork.artist;
  modal.querySelector('.modal-artwork-price').textContent = artwork.price.toLocaleString('fr-FR') + ' €';
  modal.querySelector('.modal-artwork-technique').textContent = artwork.technique;
  modal.querySelector('.modal-artwork-size').textContent = artwork.size;
  modal.querySelector('.modal-cart-btn').onclick = () => { addToCart(artwork.id); closeModal(); };

  modal.parentElement.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.querySelectorAll('.modal-overlay').forEach(m => m.classList.remove('open'));
  document.body.style.overflow = '';
}

// ─── Chat Widget ──────────────────────────────
function initChat() {
  const toggle = document.getElementById('chat-toggle');
  const box = document.getElementById('chat-box');
  const sendBtn = document.getElementById('chat-send');
  const input = document.getElementById('chat-input');
  const messages = document.getElementById('chat-messages');

  if (!toggle) return;

  toggle.addEventListener('click', () => box.classList.toggle('open'));

  const botResponses = [
    'Bonjour ! Je suis votre assistant ArtaNova. Comment puis-je vous aider ?',
    'Je serais ravi de vous aider à trouver l\'œuvre parfaite pour vous.',
    'Nos experts sont disponibles pour des conseils personnalisés.',
    'Souhaitez-vous en savoir plus sur un artiste en particulier ?',
  ];

  function addMessage(text, type) {
    const msg = document.createElement('div');
    msg.className = `chat-msg ${type}`;
    msg.textContent = text;
    messages.appendChild(msg);
    messages.scrollTop = messages.scrollHeight;
  }

  if (sendBtn && input) {
    sendBtn.addEventListener('click', sendMessage);
    input.addEventListener('keydown', e => { if (e.key === 'Enter') sendMessage(); });
  }

  function sendMessage() {
    const text = input?.value?.trim();
    if (!text) return;
    addMessage(text, 'user');
    input.value = '';
    setTimeout(() => {
      addMessage(botResponses[Math.floor(Math.random() * botResponses.length)], 'bot');
    }, 800);
  }
}

// ─── Intersection Observer (animations) ───────
function initAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in, .stagger-children').forEach(el => {
    observer.observe(el);
  });
}

// ─── Filters (Gallery page) ───────────────────
function initFilters() {
  const filterTitles = document.querySelectorAll('.filter-title');
  filterTitles.forEach(title => {
    title.addEventListener('click', () => {
      const section = title.parentElement;
      const options = section.querySelector('.filter-options');
      const toggle = title.querySelector('.filter-toggle');
      if (options) {
        options.style.display = options.style.display === 'none' ? '' : 'none';
        toggle?.classList.toggle('open');
      }
    });
  });

  const filterCheckboxes = document.querySelectorAll('.filter-option input');
  filterCheckboxes.forEach(cb => {
    cb.addEventListener('change', applyFilters);
  });

  const searchInput = document.getElementById('gallery-search');
  if (searchInput) {
    searchInput.addEventListener('input', debounce(applyFilters, 300));
  }

  const sortSelect = document.getElementById('sort-select');
  if (sortSelect) sortSelect.addEventListener('change', applyFilters);
}

function applyFilters() {
  const searchTerm = document.getElementById('gallery-search')?.value?.toLowerCase() || '';
  const activeFilters = Array.from(document.querySelectorAll('.filter-option input:checked')).map(cb => cb.value);
  const sortValue = document.getElementById('sort-select')?.value || 'featured';

  let filtered = artworks.filter(a => {
    const matchSearch = !searchTerm || a.title.toLowerCase().includes(searchTerm) || a.artist.toLowerCase().includes(searchTerm);
    const matchFilter = !activeFilters.length || activeFilters.some(f => a.style === f || a.technique.includes(f) || a.category === f);
    return matchSearch && matchFilter;
  });

  filtered.sort((a, b) => {
    if (sortValue === 'price-asc') return a.price - b.price;
    if (sortValue === 'price-desc') return b.price - a.price;
    if (sortValue === 'rating') return b.rating - a.rating;
    if (sortValue === 'newest') return b.year - a.year;
    return 0;
  });

  const grid = document.getElementById('artwork-grid');
  if (grid) {
    grid.innerHTML = filtered.length ? filtered.map(a => renderArtworkCard(a)).join('') : '<p style="color:var(--color-gray-400);grid-column:1/-1;text-align:center;padding:3rem;">Aucune œuvre trouvée.</p>';
    document.getElementById('results-count').textContent = filtered.length + ' œuvres';
    initWishlistButtons();
    initQuickViewButtons();
  }
}

// ─── Artwork Card Renderer ────────────────────
function renderArtworkCard(artwork) {
  const inWishlist = isInWishlist(artwork.id);
  const badge = artwork.badge ? `<span class="artwork-card-badge ${artwork.badge === 'sale' ? '' : artwork.badge}">${artwork.badge === 'new' ? 'Nouveau' : artwork.badge === 'featured' ? 'Vedette' : 'Promo'}</span>` : '';
  const soldBadge = !artwork.available ? '<span class="artwork-card-badge sold">Vendu</span>' : '';
  const stars = '★'.repeat(Math.floor(artwork.rating)) + (artwork.rating % 1 ? '☆' : '');

  return `
    <div class="artwork-card" data-id="${artwork.id}">
      <div class="artwork-card-image">
        <div class="artwork-placeholder" style="background:linear-gradient(135deg, ${artwork.color}22, ${artwork.color}44)">${artwork.emoji}</div>
        ${badge}${soldBadge}
        <button class="artwork-wishlist ${inWishlist ? 'active' : ''}" data-wishlist-id="${artwork.id}" onclick="toggleWishlist(${artwork.id})" title="Favoris">
          ${inWishlist ? '♥' : '♡'}
        </button>
        <div class="artwork-card-overlay"></div>
        <div class="artwork-card-actions">
          <button class="artwork-card-btn" onclick="addToCart(${artwork.id})" ${!artwork.available ? 'disabled' : ''}>${artwork.available ? t('add_cart') : 'Vendu'}</button>
          <button class="artwork-card-btn-icon" onclick="openQuickView(${artwork.id})" title="Vue rapide">👁</button>
        </div>
      </div>
      <div class="artwork-card-info">
        <div class="artwork-artist-name">${artwork.artist}</div>
        <div class="artwork-title">${artwork.title}</div>
        <div class="artwork-price-row">
          <div>
            <span class="artwork-price">${artwork.price.toLocaleString('fr-FR')} €</span>
            ${artwork.originalPrice ? `<span class="artwork-price-original">${artwork.originalPrice.toLocaleString('fr-FR')} €</span>` : ''}
          </div>
          <div class="artwork-rating">
            <span class="stars">${stars}</span>
            <span>(${artwork.reviews})</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function initWishlistButtons() {
  document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
    const id = Number(btn.getAttribute('data-wishlist-id'));
    btn.classList.toggle('active', isInWishlist(id));
  });
}

function initQuickViewButtons() {}

// ─── Newsletter ───────────────────────────────
function initNewsletter() {
  const form = document.getElementById('newsletter-form');
  if (!form) return;
  form.addEventListener('submit', e => {
    e.preventDefault();
    const email = form.querySelector('input')?.value;
    if (email) {
      showToast('✉️ Merci ! Vous êtes abonné(e).');
      form.reset();
    }
  });
}

// ─── Product Thumbnails ───────────────────────
function initProductThumbs() {
  const thumbs = document.querySelectorAll('.product-thumb');
  const mainImg = document.querySelector('.product-main-image .artwork-placeholder');
  const emojis = ['🎨', '🖼️', '✦', '🌅'];
  thumbs.forEach((thumb, i) => {
    thumb.addEventListener('click', () => {
      thumbs.forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      if (mainImg && emojis[i]) mainImg.textContent = emojis[i];
    });
  });
}

// ─── Language Selector ────────────────────────
function initLangSelector() {
  document.querySelectorAll('[data-lang]').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.getAttribute('data-lang')));
  });
}

// ─── Theme Toggle ─────────────────────────────
function initThemeToggle() {
  document.querySelectorAll('.theme-toggle, [data-toggle-theme]').forEach(btn => {
    btn.addEventListener('click', toggleTheme);
  });
}

// ─── Smooth scroll ────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth' }); }
    });
  });
}

// ─── Utility ──────────────────────────────────
function debounce(fn, delay) {
  let timer;
  return (...args) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), delay); };
}

// ─── Init ─────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initNav();
  initHeroSlider();
  initChat();
  initAnimations();
  initFilters();
  initNewsletter();
  initProductThumbs();
  initLangSelector();
  initThemeToggle();
  initSmoothScroll();
  updateCartUI();
  updateTranslations();
  setLang(state.lang);
});

// Close cart/modal on overlay click
document.addEventListener('click', e => {
  if (e.target.classList.contains('cart-overlay')) closeCart();
  if (e.target.classList.contains('modal-overlay')) closeModal();
});

// Keyboard close
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') { closeCart(); closeModal(); }
});
