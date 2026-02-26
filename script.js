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
    { id: 'living1', es: 'Salón', en: 'Living room', real: 'https://i.postimg.cc/G3MJ3zfP/salon1.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=living_ai_01.jpg' },
    { id: 'living2', es: 'Salón', en: 'Living room', real: 'https://i.postimg.cc/MZsbZtL7/salon2.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=living_ai_02.jpg' },
    { id: 'living3', es: 'Salón', en: 'Living room', real: 'https://i.postimg.cc/SQZ7QVPG/salon3.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=living_ai_03.jpg' },
    { id: 'kitchen1', es: 'Cocina', en: 'Kitchen', real: 'https://i.postimg.cc/SQvNVXNX/cocina1.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=kitchen_ai_01.jpg' },
    { id: 'kitchen2', es: 'Cocina', en: 'Kitchen', real: 'https://i.postimg.cc/jqFdvWd5/cocina2.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=kitchen_ai_02.jpg' },
    { id: 'bed1_1', es: 'Dormitorio principal', en: 'Main bedroom', real: 'https://i.postimg.cc/xCDqZtbR/habitacion1-2.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=bedroom1_ai_01.jpg' },
    { id: 'bed1_2', es: 'Dormitorio principal', en: 'Main bedroom', real: 'https://i.postimg.cc/V6Q5hDbg/habitacion1-3.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=bedroom1_ai_02.jpg' },
    { id: 'vestidor1', es: 'Vestidor', en: 'Walk-in closet', real: 'https://i.postimg.cc/tTQ7c2V2/vestidor1.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=walkin_ai_01.jpg' },
    { id: 'vestidor2', es: 'Vestidor', en: 'Walk-in closet', real: 'https://i.postimg.cc/DZkmNBb5/vestidor2.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=walkin_ai_02.jpg' },
    { id: 'bed2', es: 'Dormitorio 2', en: 'Bedroom 2', real: 'https://i.postimg.cc/mLDpYhcd/habitacion2-1.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=bedroom2_ai_01.jpg' },
    { id: 'bed3', es: 'Dormitorio 3', en: 'Bedroom 3', real: 'https://i.postimg.cc/D0YqCysz/habitacion3-1.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=bedroom3_ai_01.jpg' },
    { id: 'bath1_1', es: 'Baño 1', en: 'Bathroom 1', real: 'https://i.postimg.cc/sXd1LwZ4/banho1-1.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=bathroom_ai_01.jpg' },
    { id: 'bath1_2', es: 'Baño 1', en: 'Bathroom 1', real: 'https://i.postimg.cc/3R5WqnDj/banho1-2.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=bathroom_ai_02.jpg' },
    { id: 'bath2_1', es: 'Baño principal', en: 'Main bathroom', real: 'https://i.postimg.cc/yd4WGvSX/banho2-1.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=bathroom_ai_03.jpg' },
    { id: 'bath2_2', es: 'Baño principal', en: 'Main bathroom', real: 'https://i.postimg.cc/V6Q5hDbF/banho2-2.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=bathroom_ai_04.jpg' },
    { id: 'hall1', es: 'Pasillo', en: 'Corridor', real: 'https://i.postimg.cc/pV0YVkSj/pasillo1.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=hall_ai_01.jpg' },
    { id: 'hall2', es: 'Pasillo', en: 'Corridor', real: 'https://i.postimg.cc/C56jvLDd/pasillo2.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=hall_ai_02.jpg' },
    { id: 'terrace', es: 'Balcón / Terraza', en: 'Balcony / Terrace', real: 'https://i.postimg.cc/RhdmFTXJ/balcon1.jpg', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=terrace_ai_01.jpg' },
    { id: 'garage1', es: 'Garaje', en: 'Garage', real: 'https://placehold.co/800x600/1e293b/ffffff?text=Plaza+de+Garaje', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=garage_ai.jpg' },
    { id: 'storage1', es: 'Trastero', en: 'Storage', real: 'https://placehold.co/800x600/334155/ffffff?text=Bodega/Trastero', ai: 'https://placehold.co/800x600/f0f9ff/0369a1?text=storage_ai.jpg' }
];

// Interactive Floorplan Logic

let currentRoomId = 'living';
let currentImages = [];
let currentIndex = 0;

function showRoomImages(roomId) {
    currentRoomId = roomId;

    // In our new setup, we map roomId to the prefix of id in galleryData (e.g. 'living', 'kitchen', 'bath1')
    currentImages = galleryData.filter(item => item.id.startsWith(roomId));

    if (currentImages.length === 0) return;

    currentIndex = 0;

    // Update active state on SVG polygons
    document.querySelectorAll('.floor-area').forEach(area => {
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
            es: 'Baño completo secundario con plato de ducha.',
            en: 'Secondary full bathroom with walk-in shower.'
        },
        'bath2': {
            es: 'Baño principal en suite con bañera.',
            en: 'En-suite main bathroom featuring a bathtub.'
        },
        'hall': {
            es: 'Zona de paso y vestíbulo con distribución eficiente.',
            en: 'Efficiently distributed hallway and entrance area.'
        },
        'terrace': {
            es: 'Vistas desde el balcón de la vivienda.',
            en: 'Views from the property balcony.'
        },
        'garage': {
            es: 'Plaza de garaje amplia y de fácil acceso.',
            en: 'Spacious and easily accessible garage space.'
        },
        'storage': {
            es: 'Bodega de 4 m² para almacenamiento adicional.',
            en: '4 sqm storage room for additional storage.'
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
        const isAi = document.querySelector('.gallery-tab[onclick*="ai"]').classList.contains('active');
        imgEl.src = isAi ? currentImages[currentIndex].ai : currentImages[currentIndex].real;
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

function resetForm() {
    const contactForm = document.getElementById('contact-form');
    const successMsg = document.getElementById('form-success');
    const errorMsg = document.getElementById('form-error');

    contactForm.style.display = 'block';
    successMsg.style.display = 'none';
    errorMsg.style.display = 'none';

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = document.documentElement.classList.contains('en-active') ?
            '<span>Send request</span>' : '<span>Enviar solicitud</span>';
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

    // Form Submission Handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;

            // Loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = htmlTag.classList.contains('en-active') ? 'Sending...' : 'Enviando...';

            const formData = new FormData(contactForm);
            const dataObj = {};
            formData.forEach((value, key) => dataObj[key] = value);

            // Real API call to FormSubmit.co via AJAX (using JSON for better compatibility)
            fetch("https://formsubmit.co/ajax/soy@santigil.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(dataObj)
            })
                .then(response => response.json())
                .then(data => {
                    if (data.success === "true" || data.success === true || data.message) {
                        contactForm.style.display = 'none';
                        document.getElementById('form-success').style.display = 'block';
                        document.getElementById('form-success').scrollIntoView({ behavior: 'smooth', block: 'center' });
                    } else {
                        throw new Error("FormSubmit response not successful");
                    }
                })
                .catch(error => {
                    console.error('Error submitting form:', error);
                    contactForm.style.display = 'none';
                    document.getElementById('form-error').style.display = 'block';
                    document.getElementById('form-error').scrollIntoView({ behavior: 'smooth', block: 'center' });
                });
        });
    }

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
