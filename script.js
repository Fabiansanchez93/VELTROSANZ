// ===== NÚMERO DE WHATSAPP =====
const WHATSAPP_NUMBER = '573118378752'; // ← pon aquí el número correcto

// ===== IMÁGENES DE RESPALDO (mientras subes las fotos reales) =====
const IMAGEN_RESPALDO = {
    calzado: 'images/imagenes calzado/zapatilla11.png',
    relojes: 'images/imagenes relojes/reloj-01.jpg',
    lociones: 'images/imagenes lociones/locion-16.jpg'
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
// Formato: [nombre, precio, categoria, disponible, numeroDeImagen, (colores OPCIONAL)]
// La imagen busca en <carpeta>/<prefijo>-XX.jpg — si no existe,
// cae automáticamente en la imagen de respaldo de arriba.
//
// ── DISPONIBILIDAD ─────────────────────────────────────────────────────
// El 4º dato controla si está disponible:
//   true  -> badge verde "Disponible" + botón normal de WhatsApp
//   false -> badge rojo "Agotado" + foto en gris + botón "Avísame cuando llegue"
//
// ── VARIANTES DE COLOR (opcional, solo calzado por ahora) ──────────────
// Si un zapato viene en varios tonos, agrégale un SEXTO dato: una lista
// de colores. Cada color es un objeto con { nombre, hex, img }:
//
//   ['New Balance 550', 150000, 'tenis', true, 1, [
//       { nombre: 'Negro',  hex: '#1a1a1a', img: 'images/imagenes calzado/calzado-01-negro.jpg' },
//       { nombre: 'Blanco', hex: '#f0f0f0', img: 'images/imagenes calzado/calzado-01-blanco.jpg' }
//   ]],
//
// - nombre: se muestra en pantalla y en el mensaje de WhatsApp.
// - hex:    color del círculo que se muestra (aprox. al tono real).
// - img:    foto de ese color. El PRIMERO de la lista es el que se ve por defecto.
// El zapato que NO tenga este sexto dato funciona igual que siempre.

// numImg reasignado el 10-jul-2026 para que cada producto use una foto
// que sí corresponde visualmente a su categoría real (tenis/casual/sandalia).
const productosCalzado = [
    ['New Balance 550', 150000, 'tenis', true, 1],
    ['Nike Air Max Plus', 330000, 'tenis', true, 2],
    ['Zapatilla Negra Estampado Dorado', 180000, 'tenis', true, 3],
    ['Zapatilla Calvin Klein', 160000, 'tenis', true, 4],
    ['New Balance 9060', 110000, 'tenis', true, 5],
    ['Adidas Duramo', 140000, 'tenis', true, 6],
    ['Adidas Response', 140000, 'tenis', true, 7],
    ['Tenis Retro Azul y Blanco', 155000, 'tenis', true, 8],
    ['Le Coq Sportif Runner', 100000, 'tenis', true, 9],
    ['Puma Court Blanco', 240000, 'tenis', true, 10],
    ['Sandalia Café Cuadros', 130000, 'sandalia', true, 12],
    ['Sandalia Negra Cuadros', 110000, 'sandalia', true, 13],
    ['Sandalia Beige Plataforma', 95000, 'sandalia', true, 14],
    ['Sandalia Blanca Doble Correa', 80000, 'sandalia', true, 15],
    ['Sandalia Negra Hebilla Dorada', 120000, 'sandalia', true, 16],
    ['Sandalia Blanca Acolchada', 195000, 'sandalia', true, 17],
    ['Adidas Response Negro', 170000, 'tenis', true, 18],
    ['Adidas Retro Runner', 110000, 'tenis', true, 19],
    ['Nike Air Max 95', 195000, 'tenis', true, 20],
    ['Adidas Samba', 145000, 'tenis', true, 21],
    ['Tenis Blanco Minimalista', 275000, 'tenis', true, 22],
    ['Reebok Club C', 185000, 'tenis', true, 23],
    ['New Balance 574', 120000, 'tenis', true, 24],
    ['Nike Air Force 1', 140000, 'casual', true, 25],

    // ── PRODUCTOS NUEVOS (26–45). Ajusta precios a los reales. ──
    ['Tenis Rojo Gamuza', 160000, 'tenis', true, 26],
    ['Tenis Blanco Detalle Verde', 150000, 'tenis', true, 27],
    ['Tenis Blanco Pastel', 155000, 'tenis', true, 28],
    ['Tenis Blanco y Café', 150000, 'tenis', true, 29],

    // Nº 30 viene en dos colores: Blanco (calzado-30) y Morado (calzado-30-morado)
    ['Tenis Multicolor', 180000, 'tenis', true, 30, [
        { nombre: 'Blanco', hex: '#e9e9e9', img: 'images/imagenes calzado/calzado-30.jpg' },
        { nombre: 'Morado', hex: '#8b5cf6', img: 'images/imagenes calzado/calzado-30-morado.jpg' }
    ]],

    // (No existen fotos calzado-31 ni calzado-33, por eso esos números se saltan)

    // Nº 32 viene en dos colores: Crema (calzado-32) y Negro (calzado-32-negro)
    ['Tenis Retro', 150000, 'tenis', true, 32, [
        { nombre: 'Crema', hex: '#efe9dc', img: 'images/imagenes calzado/calzado-32.jpg' },
        { nombre: 'Negro', hex: '#1a1a1a', img: 'images/imagenes calzado/calzado-32-negro.jpg' }
    ]],

    ['Tenis Azul y Blanco', 160000, 'tenis', true, 34],
    ['Tenis Blanco y Rosa', 145000, 'tenis', true, 35],
    ['Tenis Negro Rayas Blancas', 150000, 'tenis', true, 36],
    ['Tenis Negro Deportivo', 140000, 'tenis', true, 37],
    ['Tenis Beige Urbano', 155000, 'tenis', true, 38],
    ['Tenis Azul y Rosa', 170000, 'tenis', true, 39],
    ['Tenis Crema Minimalista', 160000, 'tenis', true, 40],
    ['Tenis Blanco y Negro', 150000, 'tenis', true, 41],
    ['Tenis Gris Deportivo', 145000, 'tenis', true, 42],
    ['Tenis Blanco y Morado', 155000, 'tenis', true, 43],
    ['Tenis Blanco y Gris', 150000, 'tenis', true, 44],
    ['Tenis Vinotinto y Blanco', 165000, 'tenis', true, 45]
];

const productosRelojes = [
    ['Reloj Clásico Hombre 01', 180000, 'hombre', true, 1],
    ['Reloj Clásico Hombre 02', 320000, 'hombre', true, 2],
    ['Reloj Clásico Hombre 03', 410000, 'hombre', true, 3],
    ['Reloj Clásico Hombre 04', 450000, 'hombre', true, 4],
    ['Reloj Clásico Hombre 05', 350000, 'hombre', true, 5],
    ['Reloj Clásico Hombre 06', 380000, 'hombre', true, 6],
    ['Reloj Clásico Hombre 07', 360000, 'hombre', true, 7],
    ['Reloj Digital Naviforce Hombre 01', 300000, 'hombre', true, 8],
    ['Reloj Digital Naviforce Hombre 02', 330000, 'hombre', true, 9],
    ['Reloj Digital Naviforce Hombre 03', 250000, 'hombre', true, 10],
    ['Reloj Digital Naviforce Mujer 01', 320000, 'mujer', true, 11],
    ['Reloj Elegante Mujer 02', 400000, 'mujer', true, 12],
    ['Reloj Elegante Mujer 03', 290000, 'mujer', true, 13],
    ['Reloj Digital Naviforce Mujer 02', 220000, 'mujer', true, 14],
    ['Reloj Elegante Mujer 05', 270000, 'mujer', true, 15],
    ['Reloj Digital Naviforce Mujer 03', 350000, 'mujer', true, 16],
    ['Reloj Digital Naviforce Mujer 04', 380000, 'mujer', true, 17],
    ['Reloj Digital Naviforce Mujer 05', 340000, 'mujer', true, 18]
];

const productosLociones = [
    ['Gabrielle Chanel', 120000, 'femenina', true, 1],
    ['KIRKÈ', 240000, 'femenina', true, 2],
    ['CASSIOPEA', 250000, 'femenina', true, 3],
    ['TOMMY HILFIGER', 200000, 'masculina', true, 4],
    ['DOLCE & GABBANA', 180000, 'femenina', true, 5],
    ['ORION', 150000, 'femenina', true, 6],
    ['ACQUA DI GIO', 130000, 'masculina', true, 7],
    ['FAHRENHEIT-DIOR', 170000, 'femenina', true, 8],
    ['LIGHT BLUE', 220000, 'femenina', true, 9],
    ['PARIS HILTON', 380000, 'masculina', true, 10],
    ['STARWALKER', 150000, 'masculina', true, 11],
    ['ONE MILLION', 210000, 'masculina', true, 12],
    ['BLACK-XS', 190000, 'masculina', true, 13],
    ['VICTORINOX CLASSIC', 230000, 'masculina', true, 14],
    ['VICTORINOX CLASSIC RED', 200000, 'femenina', true, 15],
];

// ===== MENSAJES DE WHATSAPP (según disponibilidad) =====
// Disponible -> pregunta normal de compra.
// Agotado    -> pide que le avisen cuando vuelva a llegar.
function mensajeWhatsApp(nombre, disponible, color) {
    let texto = disponible
        ? `Hola 👋 Me interesa *${nombre}*`
        : `Hola 👋 ¿Me puedes avisar cuando vuelva a estar disponible *${nombre}*?`;
    if (color) texto += ` en color *${color}*`;
    if (disponible) texto += ` ¿Está disponible?`;
    return encodeURIComponent(texto);
}

// ===== RENDERIZADO DINÁMICO DE TARJETAS DE PRODUCTO =====
function crearProductoCard(nombre, precio, categoria, disponible, numImg, tipo, idx) {
    const precioFormateado = '$' + precio.toLocaleString('es-CO');
    const imgPrincipal = `${CARPETA_IMG[tipo]}/${PREFIJO_IMG[tipo]}-${String(numImg).padStart(2, '0')}.jpg`;
    const imgRespaldo = IMAGEN_RESPALDO[tipo];
    const mensaje = mensajeWhatsApp(nombre, disponible);

    // El botón "Ver detalles" NO se muestra en lociones.
    // En calzado y relojes sí sigue apareciendo con normalidad.
    const btnDetalles = tipo === 'lociones'
        ? ''
        : `<a href="producto.html?tipo=${tipo}&idx=${idx}">Ver detalles</a>`;

    // Botón de WhatsApp: cambia el texto según disponibilidad.
    // Disponible -> "WhatsApp" (verde). Agotado -> "Avísame cuando llegue" (gris).
    const btnWhatsApp = disponible
        ? `<a class="btn-wa-card" href="https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}" target="_blank">
                <i class="fa-brands fa-whatsapp"></i> WhatsApp
           </a>`
        : `<a class="btn-wa-card btn-aviso-card" href="https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}" target="_blank">
                <i class="fa-regular fa-bell"></i> Avísame cuando llegue
           </a>`;

    return `
        <article class="producto-card" data-categoria="${categoria}" data-nombre="${nombre.toLowerCase()}">
            <img src="${imgPrincipal}" alt="${nombre}" onerror="this.onerror=null;this.src='${imgRespaldo}';">
            <div class="producto-info">
                <h3>${nombre}</h3>
                <span class="${disponible ? 'disponible' : 'agotado-badge'}">${disponible ? 'Disponible' : 'Agotado'}</span>
                <p class="producto-precio-centrado">${precioFormateado}</p>
                <div class="producto-btns">
                    ${btnDetalles}
                    ${btnWhatsApp}
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

    // El sexto dato (colores) es OPCIONAL; si no existe, queda undefined.
    const [nombre, precio, categoria, disponible, numImg, colores] = datos[idx];
    const precioFormateado = '$' + precio.toLocaleString('es-CO');
    const imgPrincipal = `${CARPETA_IMG[tipo]}/${PREFIJO_IMG[tipo]}-${String(numImg).padStart(2, '0')}.jpg`;
    const imgRespaldo = IMAGEN_RESPALDO[tipo];

    const tieneColores = Array.isArray(colores) && colores.length > 0;

    const imgEl = document.getElementById('producto-img');
    const waBtn = document.getElementById('producto-whatsapp-btn');

    // Color seleccionado actual (por defecto, el primero de la lista)
    let colorSeleccionado = tieneColores ? colores[0].nombre : null;

    // Reconstruye el enlace de WhatsApp según disponibilidad + color elegido
    function actualizarWhatsApp() {
        if (waBtn) {
            waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeWhatsApp(nombre, disponible, colorSeleccionado)}`;
        }
    }

    // Si está agotado, cambia el texto y el estilo del botón de la página de detalle
    if (waBtn && !disponible) {
        waBtn.classList.add('btn-aviso');
        waBtn.innerHTML = `<i class="fa-regular fa-bell"></i> Avísame cuando llegue`;
    }

    // Imagen principal: si hay colores, arranca con la foto del primer color
    if (imgEl) {
        imgEl.src = tieneColores ? colores[0].img : imgPrincipal;
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

    // ── SELECTOR DE COLORES ──────────────────────────────────────────────
    const coloresSection = document.getElementById('colores-section');
    if (coloresSection) {
        if (tieneColores) {
            coloresSection.style.display = '';
            coloresSection.innerHTML = `
                <h3>Color: <span id="color-nombre">${colores[0].nombre}</span></h3>
                <div class="colores-group">
                    ${colores.map((c, i) => `
                        <button class="color-btn ${i === 0 ? 'activa' : ''}"
                                style="background:${c.hex};"
                                data-img="${c.img}"
                                data-nombre="${c.nombre}"
                                title="${c.nombre}"
                                aria-label="${c.nombre}"></button>
                    `).join('')}
                </div>
            `;

            const colorBtns = coloresSection.querySelectorAll('.color-btn');
            colorBtns.forEach(btn => {
                btn.addEventListener('click', function () {
                    colorBtns.forEach(b => b.classList.remove('activa'));
                    this.classList.add('activa');

                    // Cambia la foto principal al tono elegido
                    if (imgEl) imgEl.src = this.dataset.img;

                    // Actualiza el nombre del color visible
                    const nombreColorEl = document.getElementById('color-nombre');
                    if (nombreColorEl) nombreColorEl.textContent = this.dataset.nombre;

                    // Actualiza el mensaje de WhatsApp con el color elegido
                    colorSeleccionado = this.dataset.nombre;
                    actualizarWhatsApp();
                });
            });
        } else {
            coloresSection.style.display = 'none';
        }
    }

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

    // Deja el enlace de WhatsApp listo (con color por defecto si aplica)
    actualizarWhatsApp();

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