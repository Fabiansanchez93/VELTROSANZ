




// ===== MENSAJES DE WHATSAPP (según disponibilidad) =====
// Disponible -> pregunta normal de compra.
// Agotado    -> pide que le avisen cuando vuelva a llegar.
function mensajeWhatsApp(nombre, disponible, color, talla, enlace) {
    let texto = disponible
        ? `Hola \u{1F44B} Me interesa *${nombre}*`
        : `Hola \u{1F44B} ¿Me puedes avisar cuando vuelva a estar disponible *${nombre}*?`;
    if (color) texto += ` en color *${color}*`;
    if (talla) texto += ` en talla *${talla}* (EU)`;
    if (disponible) texto += ` ¿Está disponible?`;
    if (enlace) texto += `\n\n${enlace}`;
    return encodeURIComponent(texto);

}


// ===== RENDERIZADO DINÁMICO DE TARJETAS DE PRODUCTO =====
function crearProductoCard(nombre, precio, categoria, disponible, numImg, tipo, idx) {
    const precioFormateado = '$' + precio.toLocaleString('es-CO');
    const imgPrincipal = `${CARPETA_IMG[tipo]}/${PREFIJO_IMG[tipo]}-${String(numImg).padStart(2, '0')}.jpg`;
    const imgRespaldo = IMAGEN_RESPALDO[tipo];
    const mensaje = mensajeWhatsApp(nombre, disponible);

    // El botón "Ver detalles" NO se muestra en lociones.
    // En calzado, relojes y correas sí sigue apareciendo con normalidad.
    const btnDetalles = `<a href="producto.html?tipo=${tipo}&idx=${idx}">Ver detalles</a>`;


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
    const datos = CATALOGOS[tipo];
    if (!datos) return;

    grid.innerHTML = datos
        .map(([nombre, precio, categoria, disponible, numImg], idx) => crearProductoCard(nombre, precio, categoria, disponible, numImg, tipo, idx))
        .join('');
}

renderizarCatalogo();

// ===== PÁGINA DE DETALLE DE PRODUCTO (producto.html) =====
// Lee ?tipo=calzado&idx=3 de la URL y llena la página con los datos reales
// del producto que el cliente clicó, sea calzado, reloj, loción o correa.
function renderizarProductoDetalle() {
    const cont = document.getElementById('producto-detalle-dynamic');
    if (!cont) return;

    const params = new URLSearchParams(window.location.search);
    const tipo = params.get('tipo') || 'calzado';
    const idx = parseInt(params.get('idx'), 10);

    const datos = CATALOGOS[tipo];
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

    // Talla seleccionada actual (solo aplica a calzado; empieza sin elegir)
    let tallaSeleccionada = null;

    // Reconstruye el enlace de WhatsApp según disponibilidad + color + talla elegidos
    function actualizarWhatsApp() {
        if (waBtn) {
            const enlaceProducto = window.location.href;
            waBtn.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${mensajeWhatsApp(nombre, disponible, colorSeleccionado, tallaSeleccionada, enlaceProducto)}`;
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

    // Descripción genérica según el tipo de producto
    const descEl = document.getElementById('producto-descripcion');
    if (descEl && tipo === 'relojes') {
        descEl.textContent = DESCRIPCION_RELOJ[categoria] || DESCRIPCION_RELOJ.hombre;
    }
    if (descEl && tipo === 'correas') {
        descEl.textContent = DESCRIPCION_CORREA[categoria] || DESCRIPCION_CORREA.hombre;
    }
    if (descEl && tipo === 'lociones') {
        descEl.textContent = `Loción original ${nombre}. Escríbenos por WhatsApp para conocer disponibilidad, presentación y coordinar tu pedido.`;
    }

    // Las tallas solo aplican a calzado; se ocultan para relojes, lociones y correas
    const tallasSection = document.getElementById('tallas-section');
    if (tallasSection) {
        tallasSection.style.display = (tipo === 'calzado') ? '' : 'none';

        // Al elegir una talla: la marca visualmente, la guarda y la mete al mensaje de WhatsApp
        if (tipo === 'calzado') {
            const tallaBtns = tallasSection.querySelectorAll('.talla-btn');
            tallaBtns.forEach(btn => {
                btn.addEventListener('click', function () {
                    tallaBtns.forEach(b => b.classList.remove('activa'));
                    this.classList.add('activa');
                    tallaSeleccionada = this.textContent.trim();
                    actualizarWhatsApp();
                });
            });
        }
    }

    // Deja el enlace de WhatsApp listo (con color por defecto si aplica)
    actualizarWhatsApp();

    document.title = `${nombre} | Veltrosanz`;
}

renderizarProductoDetalle();

// ===== MENÚ HAMBURGUESA =====
const menuBtn = document.getElementById("menu-btn");
const menuNav = document.getElementById("menu-nav");

if (menuBtn && menuNav) {
    menuBtn.addEventListener("click", function (e) {
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

    document.addEventListener("click", function (e) {
        if (!menuNav.contains(e.target) && e.target !== menuBtn) {
            menuNav.style.right = "-100%";
        }
    });
}

// ===== SLIDER DE ZAPATOS =====
const slides = document.querySelectorAll('.shoes-slider .shoes-card');
const dots = document.querySelectorAll('.slider-dot');
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


//   - Primera visita de la sesión  -> /hit  (suma +1 al total global)
//   - Recargar o navegar entre páginas en la misma sesión -> /get (solo consulta)
const VISITAS_KEY = 'veltrosanz_store_visitas_fabiansanchez93'; // clave única: NO la cambies
const VISITAS_BASE = 1240; // número decorativo desde el que arranca el contador

function animarContador(el, total) {
    let current = 0;
    const increment = Math.ceil(total / 60);
    const timer = setInterval(() => {
        current += increment;
        if (current >= total) {
            current = total;
            clearInterval(timer);
        }
        el.textContent = current.toLocaleString();
    }, 20);
}

async function updateVisitCount() {
    const counter = document.getElementById('visit-count');
    if (!counter) return;

    const yaContada = sessionStorage.getItem('veltrosanz_visita_contada');
    const accion = yaContada ? 'get' : 'hit'; // hit = suma; get = solo mira
    const url = `https://countapi.mileshilliard.com/api/v1/${accion}/${VISITAS_KEY}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        const globales = parseInt(data.value, 10) || 0;

        if (!yaContada) {
            sessionStorage.setItem('veltrosanz_visita_contada', '1');
        }

        const total = VISITAS_BASE + globales;
        localStorage.setItem('veltrosanz_ultimo_total', total); // respaldo si la API falla
        animarContador(counter, total);
    } catch (error) {
        // Si la API no responde en ese momento, muestra el último número alcanzado
        const respaldo = parseInt(localStorage.getItem('veltrosanz_ultimo_total'), 10) || VISITAS_BASE;
        counter.textContent = respaldo.toLocaleString();
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
// (La selección de talla ahora se maneja dentro de renderizarProductoDetalle,
//  para que la talla elegida entre al mensaje de WhatsApp.)

// ===== FILTROS Y BÚSQUEDA DE CATÁLOGO =====
function filtrar(btn, categoria) {
    document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    btn.dataset.categoria = categoria;

    const busqueda = document.getElementById('buscador')?.value.toLowerCase() || '';

    document.querySelectorAll('.producto-card').forEach(card => {
        const coincideCategoria = categoria === 'todos' || card.dataset.categoria === categoria;
        const coincideBusqueda = card.dataset.nombre?.toLowerCase().includes(busqueda);
        card.style.display = (coincideCategoria && coincideBusqueda) ? 'block' : 'none';
    });
}

function filtrarPorBusqueda() {
    const busqueda = document.getElementById('buscador')?.value.toLowerCase() || '';
    const categoriaActiva = document.querySelector('.filtro-btn.active')?.dataset?.categoria || 'todos';

    document.querySelectorAll('.producto-card').forEach(card => {
        const coincideCategoria = categoriaActiva === 'todos' || card.dataset.categoria === categoriaActiva;
        const coincideBusqueda = card.dataset.nombre?.toLowerCase().includes(busqueda);
        card.style.display = (coincideCategoria && coincideBusqueda) ? 'block' : 'none';
    });
}

