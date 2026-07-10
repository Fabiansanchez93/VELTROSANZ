// ===== NÚMERO DE WHATSAPP =====
const WHATSAPP_NUMBER = '573118378752'; // ← pon aquí el número correcto

// ===== IMÁGENES DE RESPALDO (mientras subes las fotos reales) =====
const IMAGEN_RESPALDO = {
    calzado: 'images/imagenes calzado/zapatilla11.png',
    relojes: 'images/imagenes relojes/reloj-01.jpg',
    lociones: 'images/imagenes lociones/loción1.svg.jpg'
};

// ===== CARPETAS Y PREFIJOS DE IMÁGENES POR CATEGORÍA =====
// Aquí defines en qué carpeta está cada categoría y cómo empiezan sus archivos.
// Ejemplo: relojes -> images/imagenes relojes/reloj-01.jpg
const CARPETA_IMG = {
    calzado: 'images/imagenes calzado',
    relojes: 'images/imagenes relojes',
    lociones: 'images/imagenes lociones'
};

const PREFIJO_IMG = {
    calzado: 'calzado',
    relojes: 'reloj',
    lociones: 'locion'
};

// ===== DESCRIPCIONES GENÉRICAS DE RELOJES (por categoría) =====
// Se usan en producto.html cuando no se tiene una descripción específica
// de marca/modelo para cada reloj individual.
const DESCRIPCION_RELOJ = {
    hombre: 'Reloj elegante para hombre, ideal para uso diario o formal.',
    mujer: 'Reloj femenino que combina estilo y elegancia para cualquier ocasión.',
    deportivo: 'Reloj resistente, perfecto para actividad física y uso diario.'
};

// ===== DATOS DE PRODUCTOS =====
// Formato: [nombre, precio, categoria, disponible, numeroDeImagen]
// La imagen busca en <carpeta>/<prefijo>-XX.jpg — si no existe,
// cae automáticamente en la imagen de respaldo de arriba.

// numImg reasignado el 10-jul-2026 para que cada producto use una foto
// que sí corresponde visualmente a su categoría real (tenis/casual/sandalia).
// Los que no alcanzaron foto real usan números altos (90+, 110+) que no
// existen en la carpeta, así que caen automáticamente en la imagen de respaldo.
const productosCalzado = [
    ['Nike Air Max', 250000, 'tenis', true, 1],
    ['Adidas Runner', 230000, 'tenis', true, 2],
    ['New Balance 574', 280000, 'tenis', true, 3],
    ['Puma RS-X', 260000, 'tenis', true, 4],
    ['Reebok Classic', 210000, 'tenis', true, 5],
    ['Nike Revolution', 190000, 'tenis', true, 6],
    ['Adidas Superstar', 240000, 'tenis', true, 7],
    ['Converse Chuck Taylor', 175000, 'tenis', true, 8],
    ['Vans Old Skool', 200000, 'tenis', true, 9],
    ['Nike Air Force 1', 290000, 'tenis', true, 10],
    ['Sandalia Cuero Tostado', 130000, 'sandalia', true, 12],
    ['Sandalia Deportiva Negra', 110000, 'sandalia', true, 13],
    ['Sandalia Plana Café', 95000, 'sandalia', true, 14],
    ['Chancla Confort Gris', 80000, 'sandalia', true, 15],
    ['Sandalia Negra Doble Hebilla', 220000, 'sandalia', true, 16],
    ['Sandalia Blanca Acolchada', 195000, 'sandalia', true, 17],
    ['Nike Air Zoom', 270000, 'tenis', true, 18],
    ['Adidas Ultraboost', 310000, 'tenis', true, 19],
    ['Puma Suede Classic', 195000, 'tenis', true, 20],
    ['Reebok Nano', 245000, 'tenis', true, 21],
    ['Nike Air Max 90', 275000, 'tenis', true, 22],
    ['Tenis Casual Blanco', 185000, 'tenis', true, 23],
    ['Zapatilla Urbana Gris', 220000, 'tenis', true, 24],
    ['Zapato Náutico Beige', 180000, 'casual', true, 25]
];

const productosRelojes = [
    ['Reloj Clásico Hombre 01', 180000, 'hombre', true, 1],
    ['Reloj Clásico Hombre 02', 320000, 'hombre', true, 2],
    ['Reloj Clásico Hombre 03', 410000, 'hombre', true, 3],
    ['Reloj Clásico Hombre 04', 450000, 'hombre', true, 4],
    ['Reloj Clásico Hombre 05', 350000, 'hombre', true, 5],
    ['Reloj Clásico Hombre 06', 380000, 'hombre', true, 6],
    ['Reloj Clásico Hombre 07', 360000, 'hombre', true, 7],
    ['Reloj Clásico Hombre 08', 300000, 'hombre', true, 8],
    ['Reloj Clásico Hombre 09', 330000, 'hombre', true, 9],
    ['Reloj Clásico Hombre 10', 250000, 'hombre', true, 10],
    ['Reloj Elegante Mujer 01', 320000, 'mujer', true, 11],
    ['Reloj Elegante Mujer 02', 400000, 'mujer', true, 12],
    ['Reloj Elegante Mujer 03', 290000, 'mujer', true, 13],
    ['Reloj Elegante Mujer 04', 220000, 'mujer', true, 14],
    ['Reloj Elegante Mujer 05', 270000, 'mujer', true, 15],
    ['Reloj Elegante Mujer 06', 350000, 'mujer', true, 16],
    ['Reloj Elegante Mujer 07', 380000, 'mujer', true, 17],
    ['Reloj Elegante Mujer 08', 340000, 'mujer', true, 18]
];

const productosLociones = [
    ['One Million Paco Rabanne', 120000, 'masculina', true, 1],
    ['Bleu de Chanel', 240000, 'masculina', true, 2],
    ['Sauvage Dior', 250000, 'masculina', true, 3],
    ['Acqua di Gio Armani', 200000, 'masculina', true, 4],
    ['Polo Blue Ralph Lauren', 180000, 'masculina', true, 5],
    ['Eros Versace', 150000, 'masculina', true, 6],
    ['Invictus Paco Rabanne', 130000, 'masculina', true, 7],
    ['Boss Bottled Hugo Boss', 170000, 'masculina', true, 8],
    ['Fahrenheit Dior', 220000, 'masculina', true, 9],
    ['Aventus Creed', 380000, 'masculina', true, 10],
    ['Coco Mademoiselle Chanel', 150000, 'femenina', true, 11],
    ['Good Girl Carolina Herrera', 210000, 'femenina', true, 12],
    ['La Vie Est Belle Lancôme', 190000, 'femenina', true, 13],
    ['Miss Dior', 230000, 'femenina', true, 14],
    ['Black Opium YSL', 200000, 'femenina', true, 15],
    ['Flowerbomb Viktor & Rolf', 240000, 'femenina', true, 16],
    ['Idôle Lancôme', 195000, 'femenina', true, 17],
    ['Alien Mugler', 205000, 'femenina', true, 18],
    ['Daisy Marc Jacobs', 160000, 'femenina', true, 19],
    ['Light Blue Dolce & Gabbana', 140000, 'femenina', true, 20],
    ['CK One Calvin Klein', 95000, 'unisex', true, 21],
    ['Molecule 01 Escentric', 175000, 'unisex', true, 22],
    ['Le Labo Santal 33', 350000, 'unisex', true, 23],
    ['Jo Malone Lime Basil', 300000, 'unisex', true, 24],
    ['Gucci Bloom', 210000, 'unisex', true, 25],
    ['Bvlgari Omnia', 185000, 'unisex', true, 26],
    ['Versace Eros Unisex', 165000, 'unisex', true, 27],
    ['Tom Ford Black Orchid', 400000, 'unisex', true, 28],
    ['Hermès Terre', 260000, 'unisex', true, 29],
    ['Diptyque Philosykos', 320000, 'unisex', true, 30],
    ['Dior Homme', 260000, 'masculina', true, 31],
    ['Chanel Allure Homme', 270000, 'masculina', true, 32],
    ['Versace Pour Homme', 190000, 'masculina', true, 33],
    ['Hugo Boss Bottled Night', 175000, 'masculina', true, 34],
    ['Giorgio Armani Code', 230000, 'masculina', true, 35],
    ['Chanel No. 5', 280000, 'femenina', true, 36],
    ["Dior J'adore", 260000, 'femenina', true, 37],
    ['Lancôme Trésor', 195000, 'femenina', true, 38],
    ['Carolina Herrera 212', 165000, 'femenina', true, 39],
    ['Versace Bright Crystal', 175000, 'femenina', true, 40],
    ['Calvin Klein Eternity Unisex', 155000, 'unisex', true, 41],
    ['Byredo Gypsy Water', 390000, 'unisex', true, 42],
    ['Maison Margiela Replica', 340000, 'unisex', true, 43],
    ['Comme des Garçons Unisex', 300000, 'unisex', true, 44],
    ['Tom Ford Tobacco Vanille', 420000, 'unisex', true, 45],
    ['Prada Luna Rossa', 245000, 'masculina', true, 46],
    ['Burberry Her', 210000, 'femenina', true, 47],
    ['Yves Saint Laurent Libre', 235000, 'femenina', true, 48],
    ['Jean Paul Gaultier Le Male', 180000, 'masculina', true, 49],
    ['Clean Reserve Unisex', 145000, 'unisex', true, 50]
];

// ===== RENDERIZADO DINÁMICO DE TARJETAS DE PRODUCTO =====
function crearProductoCard(nombre, precio, categoria, disponible, numImg, tipo, idx) {
    const precioFormateado = '$' + precio.toLocaleString('es-CO');
    const imgPrincipal = `${CARPETA_IMG[tipo]}/${PREFIJO_IMG[tipo]}-${String(numImg).padStart(2, '0')}.jpg`;
    const imgRespaldo = IMAGEN_RESPALDO[tipo];
    const mensaje = encodeURIComponent(`Hola 👋 Me interesa *${nombre}* ¿Está disponible?`);

    return `
        <article class="producto-card" data-categoria="${categoria}" data-nombre="${nombre.toLowerCase()}">
            <img src="${imgPrincipal}" alt="${nombre}" onerror="this.onerror=null;this.src='${imgRespaldo}';">
            <div class="producto-info">
                <h3>${nombre}</h3>
                <span class="${disponible ? 'disponible' : 'agotado-badge'}">${disponible ? 'Disponible' : 'Agotado'}</span>
                <p class="producto-precio-centrado">${precioFormateado}</p>
                <div class="producto-btns">
                    <a href="producto.html?tipo=${tipo}&idx=${idx}">Ver detalles</a>
                    <a class="btn-wa-card" href="https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}" target="_blank">
                        <i class="fa-brands fa-whatsapp"></i> WhatsApp
                    </a>
                </div>
            </div>
        </article>`;
}

function renderizarCatalogo() {
    const grid = document.getElementById('productos-grid');
    if (!grid) return;

    const tipo = grid.dataset.tipo;
    const datos = { calzado: productosCalzado, relojes: productosRelojes, lociones: productosLociones }[tipo];
    if (!datos) return;

    grid.innerHTML = datos
        .map(([nombre, precio, categoria, disponible, numImg], idx) => crearProductoCard(nombre, precio, categoria, disponible, numImg, tipo, idx))
        .join('');
}

renderizarCatalogo();

// ===== PÁGINA DE DETALLE DE PRODUCTO (producto.html) =====
// Lee ?tipo=calzado&idx=3 de la URL y llena la página con los datos reales
// del producto que el cliente clicó, sea calzado, reloj o loción.
function renderizarProductoDetalle() {
    const cont = document.getElementById('producto-detalle-dynamic');
    if (!cont) return;

    const params = new URLSearchParams(window.location.search);
    const tipo = params.get('tipo') || 'calzado';
    const idx = parseInt(params.get('idx'), 10);

    const datos = { calzado: productosCalzado, relojes: productosRelojes, lociones: productosLociones }[tipo];
    if (!datos || isNaN(idx) || !datos[idx]) return;

    const [nombre, precio, categoria, disponible, numImg] = datos[idx];
    const precioFormateado = '$' + precio.toLocaleString('es-CO');
    const imgPrincipal = `${CARPETA_IMG[tipo]}/${PREFIJO_IMG[tipo]}-${String(numImg).padStart(2, '0')}.jpg`;
    const imgRespaldo = IMAGEN_RESPALDO[tipo];
    const mensaje = encodeURIComponent(`Hola 👋 Me interesa *${nombre}* ¿Está disponible?`);

    const imgEl = document.getElementById('producto-img');
    if (imgEl) {
        imgEl.src = imgPrincipal;
        imgEl.alt = nombre;
        imgEl.onerror = function () { this.onerror = null; this.src = imgRespaldo; };
    }

    const nombreEl = document.getElementById('producto-nombre');
    if (nombreEl) nombreEl.textContent = nombre;

    const precioEl = document.getElementById('producto-precio');
    if (precioEl) precioEl.textContent = precioFormateado;

    const badgeEl = document.getElementById('producto-disponibilidad');
    if (badgeEl) {
        badgeEl.textContent = disponible ? 'Disponible' : 'Agotado';
        badgeEl.className = disponible ? 'disponible' : 'agotado-badge';
    }

    const waBtn = document.getElementById('producto-whatsapp-btn');
    if (waBtn) waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`;

    // Descripción: si es reloj, usa el texto genérico de su categoría (hombre/mujer/deportivo)
    const descEl = document.getElementById('producto-descripcion');
    if (descEl && tipo === 'relojes') {
        descEl.textContent = DESCRIPCION_RELOJ[categoria] || DESCRIPCION_RELOJ.hombre;
    }

    // Las tallas solo aplican a calzado; se ocultan para relojes y lociones
    const tallasSection = document.getElementById('tallas-section');
    if (tallasSection) {
        tallasSection.style.display = (tipo === 'calzado') ? '' : 'none';
    }

    document.title = `${nombre} | Veltrozans`;
}

renderizarProductoDetalle();

// ===== MENÚ HAMBURGUESA =====
const menuBtn = document.getElementById("menu-btn");
const menuNav = document.getElementById("menu-nav");

if (menuBtn && menuNav) {
    menuBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        if (menuNav.style.right === "0px") {
            menuNav.style.right = "-100%";
        } else {
            menuNav.style.right = "0px";
        }
    });

    menuNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            menuNav.style.right = "-100%";
        });
    });

    document.addEventListener("click", function(e) {
        if (!menuNav.contains(e.target) && e.target !== menuBtn) {
            menuNav.style.right = "-100%";
        }
    });
}

// ===== SLIDER DE ZAPATOS =====
const slides = document.querySelectorAll('.shoes-slider .shoes-card');
const dots   = document.querySelectorAll('.slider-dot');
let currentSlide = 0;
let sliderInterval;

function goToSlide(index) {
    slides[currentSlide].classList.remove('slide-activa');
    dots[currentSlide].classList.remove('activa');
    currentSlide = index;
    slides[currentSlide].classList.add('slide-activa');
    dots[currentSlide].classList.add('activa');
}

function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
}

if (slides.length > 0) {
    sliderInterval = setInterval(nextSlide, 4000);

    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            clearInterval(sliderInterval);
            goToSlide(i);
            sliderInterval = setInterval(nextSlide, 4000);
        });
    });

    const slider = document.getElementById('shoes-slider');
    if (slider) {
        slider.addEventListener('mouseenter', () => clearInterval(sliderInterval));
        slider.addEventListener('mouseleave', () => {
            sliderInterval = setInterval(nextSlide, 4000);
        });
    }
}

// ===== CARRUSEL DE PROMOCIONES Y COMBOS =====
const promoSlides = document.querySelectorAll('.promo-slide');
const promoDots = document.querySelectorAll('.promo-dot');
let promoActual = 0;
let promoInterval;

function irAPromo(index) {
    promoSlides[promoActual].classList.remove('promo-activa');
    promoDots[promoActual].classList.remove('activa');
    promoActual = index;
    promoSlides[promoActual].classList.add('promo-activa');
    promoDots[promoActual].classList.add('activa');
}

function promoSiguiente() {
    irAPromo((promoActual + 1) % promoSlides.length);
}

function promoAnterior() {
    irAPromo((promoActual - 1 + promoSlides.length) % promoSlides.length);
}

if (promoSlides.length > 0) {
    promoInterval = setInterval(promoSiguiente, 5000);

    promoDots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            clearInterval(promoInterval);
            irAPromo(i);
            promoInterval = setInterval(promoSiguiente, 5000);
        });
    });

    const promoPrevBtn = document.getElementById('promo-prev');
    const promoNextBtn = document.getElementById('promo-next');

    if (promoPrevBtn) {
        promoPrevBtn.addEventListener('click', () => {
            clearInterval(promoInterval);
            promoAnterior();
            promoInterval = setInterval(promoSiguiente, 5000);
        });
    }

    if (promoNextBtn) {
        promoNextBtn.addEventListener('click', () => {
            clearInterval(promoInterval);
            promoSiguiente();
            promoInterval = setInterval(promoSiguiente, 5000);
        });
    }

    const promoSlider = document.getElementById('promos-slider');
    if (promoSlider) {
        promoSlider.addEventListener('mouseenter', () => clearInterval(promoInterval));
        promoSlider.addEventListener('mouseleave', () => {
            promoInterval = setInterval(promoSiguiente, 5000);
        });
    }
}

// ===== CONTADOR DE VISITAS =====
async function updateVisitCount() {
    const counter = document.getElementById('visit-count');
    if (!counter) return;

    // Ya se contó esta visita en esta sesión del navegador,
    // solo mostramos el número guardado sin volver a incrementar.
    const yaContada = sessionStorage.getItem('veltrozan_visita_contada');

    try {
        const endpoint = yaContada
            ? 'https://api.counterapi.dev/v1/veltrozanstore/visits/'      // solo consulta
            : 'https://api.counterapi.dev/v1/veltrozanstore/visits/up';   // consulta + incrementa

        const response = await fetch(endpoint);
        const data = await response.json();

        if (!yaContada) {
            sessionStorage.setItem('veltrozan_visita_contada', '1');
        }

        const total = data.count + 1240;
        let current = 0;
        const increment = Math.ceil(total / 60);
        const timer = setInterval(() => {
            current += increment;
            if (current >= total) {
                current = total;
                clearInterval(timer);
            }
            counter.textContent = current.toLocaleString();
        }, 20);
    } catch (error) {
        counter.textContent = '1,240';
    }
}

updateVisitCount();

// ===== BOTÓN VOLVER ARRIBA =====
const backToTopBtn = document.getElementById('back-to-top');

if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
const tallasDetalle = document.querySelectorAll('.producto-detalle .talla-btn');
if (tallasDetalle.length > 0) {
    tallasDetalle.forEach(btn => {
        btn.addEventListener('click', function() {
            tallasDetalle.forEach(b => b.classList.remove('activa'));
            this.classList.add('activa');
        });
    });
}

// ===== FILTROS Y BÚSQUEDA DE CATÁLOGO =====
function filtrar(btn, categoria) {
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    btn.dataset.categoria = categoria;

    const busqueda = document.getElementById('buscador')?.value.toLowerCase() || '';

    document.querySelectorAll('.producto-card').forEach(card => {
        const coincideCategoria = categoria === 'todos' || card.dataset.categoria === categoria;
        const coincideBusqueda  = card.dataset.nombre?.toLowerCase().includes(busqueda);
        card.style.display = (coincideCategoria && coincideBusqueda) ? 'block' : 'none';
    });
}

function filtrarPorBusqueda() {
    const busqueda = document.getElementById('buscador')?.value.toLowerCase() || '';
    const categoriaActiva = document.querySelector('.filtro-btn.active')?.dataset?.categoria || 'todos';

    document.querySelectorAll('.producto-card').forEach(card => {
        const coincideCategoria = categoriaActiva === 'todos' || card.dataset.categoria === categoriaActiva;
        const coincideBusqueda  = card.dataset.nombre?.toLowerCase().includes(busqueda);
        card.style.display = (coincideCategoria && coincideBusqueda) ? 'block' : 'none';
    });
}