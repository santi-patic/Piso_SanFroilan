// Interactive logic for San Froilán 1 Microsite

// Language Toggle
const htmlTag = document.documentElement;
function setLang(lang) {
    if (lang === 'en') {
        htmlTag.classList.add('en-active');
    } else {
        htmlTag.classList.remove('en-active');
    }

    // Update button states
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.innerText.toLowerCase() === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Re-render gallery labels based on language (Not needed with current setLang logic)
}

// Gallery Data
const galleryData = [
    { id: 'living1', es: 'Salón', en: 'Living room', real: 'https://i.postimg.cc/ncb35TfP/salon1.jpg' },
    { id: 'living2', es: 'Salón', en: 'Living room', real: 'https://i.postimg.cc/28Q0fvCw/salon2.jpg' },
    { id: 'living3', es: 'Salón', en: 'Living room', real: 'https://i.postimg.cc/c4RFNYdF/salon3.jpg' },
    { id: 'kitchen1', es: 'Cocina', en: 'Kitchen', real: 'https://i.postimg.cc/SQzZD33R/cocina1.jpg' },
    { id: 'kitchen2', es: 'Cocina', en: 'Kitchen', real: 'https://i.postimg.cc/QNW60wwF/cocina2.jpg' },
    { id: 'bed1_1', es: 'Dormitorio principal', en: 'Main bedroom', real: 'https://i.postimg.cc/Vsb7DppM/habitacion1-2.jpg' },
    { id: 'bed1_2', es: 'Dormitorio principal', en: 'Main bedroom', real: 'https://i.postimg.cc/zXZxMpYv/habitacion1-3.jpg' },
    { id: 'vestidor1', es: 'Vestidor', en: 'Walk-in closet', real: 'https://i.postimg.cc/pXfst8PS/vestidor1.jpg' },
    { id: 'vestidor2', es: 'Vestidor', en: 'Walk-in closet', real: 'https://i.postimg.cc/yYmLz972/vestidor2.jpg' },
    { id: 'bed2', es: 'Dormitorio 2', en: 'Bedroom 2', real: 'https://i.postimg.cc/vHF0jXwf/habitacion2-1.jpg' },
    { id: 'bed3', es: 'Dormitorio 3', en: 'Bedroom 3', real: 'https://i.postimg.cc/4NkWMwRv/habitacion3-1.jpg' },
    { id: 'bath1_1', es: 'Baño 1', en: 'Bathroom 1', real: 'https://i.postimg.cc/1X6JXVwM/banho1-1.jpg' },
    { id: 'bath1_2', es: 'Baño 1', en: 'Bathroom 1', real: 'https://i.postimg.cc/fW0HBppZ/banho1-2.jpg' },
    { id: 'bath2_1', es: 'Baño principal', en: 'Main bathroom', real: 'https://i.postimg.cc/HW7SBRRc/banho2-1.jpg' },
    { id: 'bath2_2', es: 'Baño principal', en: 'Main bathroom', real: 'https://i.postimg.cc/bY263WWN/banho2-2.jpg' },
    { id: 'hall1', es: 'Pasillo', en: 'Corridor', real: 'https://i.postimg.cc/wT8wPFY0/pasillo1.jpg' },
    { id: 'hall2', es: 'Pasillo', en: 'Corridor', real: 'https://i.postimg.cc/fTn8F5Q2/pasillo2.jpg' },
    { id: 'terrace', es: 'Balcón / Terraza', en: 'Balcony / Terrace', real: 'https://i.postimg.cc/BbDMbPHj/balcon1.jpg' },
    { id: 'garage1', es: 'Garaje', en: 'Garage', real: 'https://placehold.co/800x600/1e293b/ffffff?text=Plaza+de+Garaje' },
    { id: 'storage1', es: 'Trastero', en: 'Storage', real: 'https://placehold.co/800x600/334155/ffffff?text=Bodega/Trastero' }
];

// Interactive Floorplan Logic

let currentRoomId = 'living';
let currentImages = [];
let currentIndex = 0;

function showRoomImages(roomId) {
    if (!roomId) roomId = 'living';
    currentRoomId = roomId;

    // In our new setup, we map roomId to the prefix of id in galleryData (e.g. 'living', 'kitchen', 'bath1')
    if (roomId === 'garage_storage') {
        currentImages = galleryData.filter(item => item.id.startsWith('garage') || item.id.startsWith('storage'));
    } else {
        currentImages = galleryData.filter(item => item.id.startsWith(roomId));
    }

    if (currentImages.length === 0) return;

    currentIndex = 0;

    // Update active state on SVG polygons
    document.querySelectorAll('.floor-area, .floor-button').forEach(area => {
        area.classList.remove('active');
        if (area.getAttribute('data-room') === roomId) {
            area.classList.add('active');
        }
    });

    const isEn = htmlTag.classList.contains('en-active');

    // Custom descriptions for the new elegant layout
    const descriptions = {
        'living': {
            es: 'Vista frontal del salón principal, espacioso y con mucha luz natural orientada al parque.',
            en: 'Front view of the main living room, spacious with plenty of natural light facing the park.'
        },
        'kitchen': {
            es: 'Cocina completamente equipada con encimera de Silestone y ventana exterior.',
            en: 'Fully equipped kitchen with Silestone countertops and exterior window.'
        },
        'bed1': {
            es: 'Dormitorio principal amplio, con acceso directo al vestidor y baño privado (suite).',
            en: 'Spacious master bedroom with direct access to walk-in closet and en-suite bathroom.'
        },
        'vestidor': {
            es: 'Vestidor independiente comunicado con el dormitorio principal.',
            en: 'Independent walk-in closet connected to the master bedroom.'
        },
        'bed2': {
            es: 'Segundo dormitorio doble con armario empotrado, perfecto para invitados o despacho.',
            en: 'Second double bedroom with built-in wardrobe, perfect for guests or home office.'
        },
        'bed3': {
            es: 'Tercer dormitorio con armario empotrado.',
            en: 'Third bedroom featuring a built-in wardrobe.'
        },
        'bath1': {
            es: 'Baño completo con acabados modernos.',
            en: 'Full bathroom with modern finishes.'
        },
        'bath2': {
            es: 'Baño principal en suite, elegante y funcional.',
            en: 'Main en-suite bathroom, elegant and functional.'
        },
        'hall': {
            es: 'Pasillo distribuidor amplio con focos empotrados.',
            en: 'Spacious hallway with recessed spotlights.'
        },
        'terrace': {
            es: 'Pequeña terraza ideal para disfrutar del aire libre.',
            en: 'Small terrace ideal for enjoying the outdoors.'
        },
        'garage_storage': {
            es: 'Plaza de garaje cómoda y trastero adicional de 4m² incluidos.',
            en: 'Comfortable parking space and additional 4sqm storage room included.'
        }
    };

    // Set title and description
    document.getElementById('carousel-title').innerText = isEn ? currentImages[0].en : currentImages[0].es;
    const descEl = document.getElementById('carousel-desc');
    if (descEl) {
        descEl.innerText = descriptions[roomId] ? (isEn ? descriptions[roomId].en : descriptions[roomId].es) : '';
    }

    updateCarouselView();
}

function updateCarouselView() {
    if (currentImages.length === 0) return;

    const imgEl = document.getElementById('carousel-image');
    const counterEl = document.getElementById('carousel-counter');

    imgEl.style.opacity = 0;

    setTimeout(() => {
        imgEl.src = currentImages[currentIndex].real;
        counterEl.innerText = `${currentIndex + 1} / ${currentImages.length}`;
        imgEl.style.opacity = 1;
    }, 200);
}

// Lightbox logic
function openLightbox(src, alt) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightbox.style.display = "block";
    lightboxImg.src = src;
    lightboxCaption.innerHTML = alt;
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = "none";
}

function prevCarouselImage() {
    if (currentImages.length <= 1) return;
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateCarouselView();
}

function nextCarouselImage() {
    if (currentImages.length <= 1) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateCarouselView();
}

/**
 * Scrolls a CSS scroll-snap container by one item width
 * @param {string} containerId - The ID of the carousel container
 * @param {number} direction - 1 for right (next), -1 for left (prev)
 */
function scrollCarousel(containerId, direction) {
    const container = document.getElementById(containerId);
    if (!container) return;

    // Calculate the width of one child (assuming all children have same width)
    const scrollAmount = container.clientWidth;
    if (container.scrollBy) {
        container.scrollBy({
            left: scrollAmount * direction,
            behavior: 'smooth'
        });
    } else {
        container.scrollLeft += scrollAmount * direction;
    }
}

// Bind SVG clicks and Swipe
document.addEventListener('DOMContentLoaded', () => {

    // SVG Polygons
    document.querySelectorAll('.floor-area').forEach(polygon => {
        polygon.addEventListener('click', (e) => {
            const room = e.currentTarget.getAttribute('data-room');
            showRoomImages(room);
        });
    });

    // Extra buttons (Garage/Storage)
    document.querySelectorAll('.floor-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const room = e.currentTarget.getAttribute('data-room');
            showRoomImages(room);
            // Highlight button
            document.querySelectorAll('.floor-button').forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
        });
    });

    // Touch/Swipe for Carousel
    const viewport = document.getElementById('carousel-viewport');
    let touchStartX = 0;
    let touchEndX = 0;

    viewport.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    viewport.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    // Also support mouse drag
    let isDragging = false;
    viewport.addEventListener('mousedown', e => {
        touchStartX = e.screenX;
        isDragging = true;
    });

    viewport.addEventListener('mouseup', e => {
        if (!isDragging) return;
        touchEndX = e.screenX;
        handleSwipe();
        isDragging = false;
    });

    function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextCarouselImage();
        if (touchEndX > touchStartX + 50) prevCarouselImage();
    }

    // Lightbox for all images
    document.body.addEventListener('click', (e) => {
        if (e.target.tagName === 'IMG' && e.target.id !== 'lightbox-img') {
            openLightbox(e.target.src, e.target.alt);
        }
    });

    // Initial render for Living Room
    showRoomImages('living');

    // Check local storage or browser pref for lang (optional)
    const userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('en')) {
        setLang('en');
    }
});

// Smooth sliding for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
