/* ============================================
   ARTANOVA - Main Application JS
   ============================================ */

// ─── State ───────────────────────────────────
const state = {
  cart: JSON.parse(localStorage.getItem('artanova_cart') || '[]'),
  wishlist: JSON.parse(localStorage.getItem('artanova_wishlist') || '[]'),
  customImages: JSON.parse(localStorage.getItem('artanova_custom_images') || '{}'),
  theme: localStorage.getItem('artanova_theme') || 'light',
  lang: localStorage.getItem('artanova_lang') || 'fr',
  heroSlide: 0,
};

// ─── Artworks Data ────────────────────────────
const artworks = [
  {
    id: 1, title: 'Lumière du Matin', artist: 'Safinase', price: 2400, originalPrice: 3200,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/800px-Monet_-_Impression%2C_Sunrise.jpg',
    category: 'Peinture', style: 'Impressionnisme', technique: 'Huile sur toile', size: '60×80 cm',
    badge: 'new', available: true, rating: 4.9, reviews: 24, year: 2023,
    description: 'Une explosion de lumière dorée au lever du jour — l\'instant suspendu entre la nuit et l\'aube.',
  },
  {
    id: 2, title: 'Ciel de Minuit', artist: 'Safinase', price: 3800,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1024px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg',
    category: 'Peinture', style: 'Expressionnisme', technique: 'Huile sur toile', size: '80×100 cm',
    badge: 'featured', available: true, rating: 5.0, reviews: 41, year: 2024,
    description: 'Un ciel nocturne tourbillonnant, où les étoiles dansent dans un mouvement perpétuel.',
  },
  {
    id: 3, title: 'L\'Étreinte', artist: 'Safinase', price: 4200,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Art_Project.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Art_Project.jpg',
    category: 'Art Décoratif', style: 'Symbolisme', technique: 'Acrylique et feuille d\'or', size: '100×100 cm',
    badge: 'featured', available: true, rating: 5.0, reviews: 67, year: 2023,
    description: 'L\'amour universel capturé en or et couleurs, une ode à la tendresse et à l\'union des âmes.',
  },
  {
    id: 4, title: 'Élan de Liberté', artist: 'Safinase', price: 2900,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg/800px-Eug%C3%A8ne_Delacroix_-_La_libert%C3%A9_guidant_le_peuple.jpg',
    category: 'Peinture', style: 'Romantisme', technique: 'Huile sur toile', size: '120×150 cm',
    badge: null, available: true, rating: 4.8, reviews: 33, year: 2022,
    description: 'Un souffle de rébellion et de vie — la force qui pousse l\'humanité vers l\'avant.',
  },
  {
    id: 5, title: 'L\'Angoisse Bleue', artist: 'Safinase', price: 3500,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg',
    category: 'Peinture', style: 'Expressionnisme', technique: 'Huile et tempera', size: '90×70 cm',
    badge: null, available: false, rating: 4.9, reviews: 28, year: 2023,
    description: 'L\'émotion brute portée à son paroxysme — une œuvre qui touche à l\'essence même de l\'être.',
  },
  {
    id: 6, title: 'La Fête des Lumières', artist: 'Safinase', price: 2200,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Auguste_Renoir_-_Dance_at_Le_Moulin_de_la_Galette_-_Mus%C3%A9e_d%27Orsay_RF_2739_%281876%29.jpg/800px-Auguste_Renoir_-_Dance_at_Le_Moulin_de_la_Galette_-_Mus%C3%A9e_d%27Orsay_RF_2739_%281876%29.jpg',
    category: 'Peinture', style: 'Impressionnisme', technique: 'Huile sur toile', size: '80×100 cm',
    badge: null, available: true, rating: 4.7, reviews: 19, year: 2024,
    description: 'La joie de vivre saisie dans la lumière vibrante d\'une fête, entre rires et couleurs éclatantes.',
  },
  {
    id: 7, title: 'Naissance', artist: 'Safinase', price: 5100,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1024px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
    category: 'Peinture', style: 'Classique', technique: 'Tempera sur toile', size: '140×200 cm',
    badge: 'sale', available: true, rating: 4.8, reviews: 45, year: 2022,
    description: 'L\'émergence de la beauté pure — une renaissance, un souffle nouveau qui surgit des flots.',
  },
  {
    id: 8, title: 'Jungle Intérieure', artist: 'Safinase', price: 1800,
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Henri_Rousseau_-_Surprised%21.jpg/1024px-Henri_Rousseau_-_Surprised%21.jpg',
    category: 'Peinture', style: 'Naïf', technique: 'Huile sur toile', size: '70×90 cm',
    badge: null, available: true, rating: 4.6, reviews: 15, year: 2024,
    description: 'Un voyage dans la forêt imaginaire de l\'âme, où la nature sauvage reflète nos instincts profonds.',
  },
];

const artists = [
  { id: 1, name: 'Safinase', specialty: 'Peinture Contemporaine', works: 8, country: '🎨' },
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
        <div class="cart-item-image" style="overflow:hidden;border-radius:0.3rem;">
          <img src="${getArtworkImage(item.id)}" alt="${item.title}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.display='none'">
        </div>
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

  const imgEl = modal.querySelector('.modal-image');
  if (imgEl) {
    imgEl.innerHTML = '';
    const img = document.createElement('img');
    img.src = getArtworkImage(artwork.id);
    img.alt = artwork.title;
    img.setAttribute('data-artwork-img', artwork.id);
    img.style.cssText = 'width:100%;height:100%;object-fit:cover;';
    img.onerror = () => { img.style.display='none'; };
    imgEl.appendChild(img);
  }
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

// ─── Image helpers ────────────────────────────
function getArtworkImage(artworkId) {
  const artwork = artworks.find(a => a.id === artworkId);
  return state.customImages[artworkId] || (artwork && artwork.image) || '';
}

function saveCustomImages() {
  localStorage.setItem('artanova_custom_images', JSON.stringify(state.customImages));
}

// ─── Change Image Modal ───────────────────────
function openChangeImageModal(artworkId, event) {
  if (event) event.stopPropagation();
  const artwork = artworks.find(a => a.id === artworkId);
  if (!artwork) return;

  const existing = document.getElementById('change-image-modal-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.id = 'change-image-modal-overlay';
  overlay.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px);';
  overlay.innerHTML = `
    <div style="background:var(--color-white);color:var(--color-black);border-radius:1rem;padding:2rem;max-width:500px;width:90%;box-shadow:0 30px 80px rgba(0,0,0,0.4);position:relative;">
      <button onclick="document.getElementById('change-image-modal-overlay').remove()" style="position:absolute;top:1rem;right:1rem;font-size:1.5rem;cursor:pointer;background:none;border:none;color:var(--color-gray-500);">✕</button>
      <h3 style="font-family:var(--font-serif);font-size:1.4rem;margin-bottom:0.4rem;">Changer l'image</h3>
      <p style="color:var(--color-gray-500);font-size:0.85rem;margin-bottom:1.5rem;">«${artwork.title}» — ${artwork.artist}</p>
      <div style="margin-bottom:1rem;">
        <div style="font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-gray-500);margin-bottom:0.5rem;">URL de l'image</div>
        <input id="img-url-input" type="url" placeholder="https://... (JPG, PNG, WebP)" value="${state.customImages[artworkId] || artwork.image}"
          style="width:100%;padding:0.8rem 1rem;border:1px solid var(--color-gray-300);border-radius:0.5rem;font-size:0.9rem;background:var(--color-gray-100);color:var(--color-black);outline:none;">
      </div>
      <div style="margin-bottom:1.5rem;">
        <div style="font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-gray-500);margin-bottom:0.5rem;">Ou importer un fichier</div>
        <input id="img-file-input" type="file" accept="image/*"
          style="width:100%;padding:0.6rem;border:1px dashed var(--color-gray-300);border-radius:0.5rem;font-size:0.85rem;cursor:pointer;">
      </div>
      <div id="img-preview-box" style="margin-bottom:1.5rem;display:${state.customImages[artworkId] || artwork.image ? 'block' : 'none'};">
        <div style="font-size:0.75rem;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;color:var(--color-gray-500);margin-bottom:0.5rem;">Aperçu</div>
        <img id="img-preview" src="${state.customImages[artworkId] || artwork.image}" alt="aperçu"
          style="width:100%;max-height:200px;object-fit:cover;border-radius:0.5rem;border:1px solid var(--color-gray-200);">
      </div>
      <div style="display:flex;gap:1rem;">
        <button onclick="applyImageChange(${artworkId})" style="flex:1;padding:0.85rem;background:var(--gradient-main);color:#fff;border:none;border-radius:0.5rem;font-weight:600;cursor:pointer;font-size:0.9rem;">Appliquer</button>
        ${state.customImages[artworkId] ? `<button onclick="resetImage(${artworkId})" style="padding:0.85rem 1.2rem;border:1px solid var(--color-gray-300);background:none;color:var(--color-black);border-radius:0.5rem;cursor:pointer;font-size:0.85rem;">Réinitialiser</button>` : ''}
      </div>
    </div>`;
  document.body.appendChild(overlay);
  overlay.addEventListener('click', e => { if (e.target === overlay) overlay.remove(); });

  const urlInput = document.getElementById('img-url-input');
  const fileInput = document.getElementById('img-file-input');
  const preview = document.getElementById('img-preview');
  const previewBox = document.getElementById('img-preview-box');

  urlInput.addEventListener('input', () => {
    if (urlInput.value) { preview.src = urlInput.value; previewBox.style.display = 'block'; }
  });
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = e => {
      urlInput.value = e.target.result;
      preview.src = e.target.result;
      previewBox.style.display = 'block';
    };
    reader.readAsDataURL(file);
  });
}

function applyImageChange(artworkId) {
  const url = document.getElementById('img-url-input')?.value?.trim();
  if (!url) return;
  state.customImages[artworkId] = url;
  saveCustomImages();
  document.getElementById('change-image-modal-overlay')?.remove();
  refreshAllArtworkImages(artworkId);
  showToast('🖼 Image mise à jour !');
}

function resetImage(artworkId) {
  delete state.customImages[artworkId];
  saveCustomImages();
  document.getElementById('change-image-modal-overlay')?.remove();
  refreshAllArtworkImages(artworkId);
  showToast('↩ Image réinitialisée');
}

function refreshAllArtworkImages(artworkId) {
  const newSrc = getArtworkImage(artworkId);
  document.querySelectorAll(`[data-artwork-img="${artworkId}"]`).forEach(img => { img.src = newSrc; });
}

// ─── Artwork Card Renderer ────────────────────
function renderArtworkCard(artwork) {
  const inWishlist = isInWishlist(artwork.id);
  const badge = artwork.badge ? `<span class="artwork-card-badge ${artwork.badge === 'sale' ? '' : artwork.badge}">${artwork.badge === 'new' ? 'Nouveau' : artwork.badge === 'featured' ? 'Vedette' : 'Promo'}</span>` : '';
  const soldBadge = !artwork.available ? '<span class="artwork-card-badge sold">Vendu</span>' : '';
  const stars = '★'.repeat(Math.floor(artwork.rating)) + (artwork.rating % 1 ? '☆' : '');
  const imgSrc = getArtworkImage(artwork.id);

  return `
    <div class="artwork-card" data-id="${artwork.id}">
      <div class="artwork-card-image">
        <img data-artwork-img="${artwork.id}" src="${imgSrc}" alt="${artwork.title}" loading="lazy"
          style="width:100%;height:100%;object-fit:cover;position:absolute;inset:0;"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">
        <div style="display:none;position:absolute;inset:0;background:var(--gradient-subtle);align-items:center;justify-content:center;font-size:3rem;">🖼️</div>
        ${badge}${soldBadge}
        <button class="artwork-wishlist ${inWishlist ? 'active' : ''}" data-wishlist-id="${artwork.id}" onclick="toggleWishlist(${artwork.id})" title="Favoris">
          ${inWishlist ? '♥' : '♡'}
        </button>
        <button class="artwork-change-img-btn" onclick="openChangeImageModal(${artwork.id}, event)" title="Changer l'image">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
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
        <div style="color:var(--color-gray-500);font-size:0.75rem;margin-bottom:0.3rem;">${artwork.year} · ${artwork.technique}</div>
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
  // Now handled by inline setProductImg() in product.html
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
