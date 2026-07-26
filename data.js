// ===== NÚMERO DE WHATSAPP =====
const WHATSAPP_NUMBER = '573118378752'; // ← pon aquí el número correcto

// ===== IMÁGENES DE RESPALDO (mientras subes las fotos reales) =====
const IMAGEN_RESPALDO = {
    calzado: 'images/imagenes calzado/zapatilla11.png',
    relojes: 'images/imagenes relojes/reloj-01.jpg',
    lociones: 'images/imagenes lociones/locion-16.jpg',
    correas: 'images/imagenes correas/correa-01.jpg'
};

// ===== CARPETAS Y PREFIJOS DE IMÁGENES POR CATEGORÍA =====
// Aquí defines en qué carpeta está cada categoría y cómo empiezan sus archivos.
// Ejemplo: relojes -> images/imagenes relojes/reloj-01.jpg
//          correas -> images/imagenes correas/correa-01.jpg
const CARPETA_IMG = {
    calzado: 'images/imagenes calzado',
    relojes: 'images/imagenes relojes',
    lociones: 'images/imagenes lociones',
    correas: 'images/imagenes correas'
};

const PREFIJO_IMG = {
    calzado: 'calzado',
    relojes: 'reloj',
    lociones: 'locion',
    correas: 'correa'
};

// ===== DESCRIPCIONES GENÉRICAS DE RELOJES (por categoría) =====
// Se usan en producto.html cuando no se tiene una descripción específica
// de marca/modelo para cada reloj individual.
const DESCRIPCION_RELOJ = {
    hombre: 'Reloj elegante para hombre, ideal para uso diario o formal.',
    mujer: 'Reloj femenino que combina estilo y elegancia para cualquier ocasión.',
    deportivo: 'Reloj resistente, perfecto para actividad física y uso diario.'
};

// ===== DESCRIPCIONES GENÉRICAS DE CORREAS (por categoría) =====
const DESCRIPCION_CORREA = {
    hombre: 'Correa en cuero para hombre, acabado resistente y hebilla metálica.',
    mujer: 'Correa en cuero para mujer, diseño versátil para el día a día.',
    deportivo: 'Correa resistente de uso deportivo, cómoda y de fácil ajuste.'
};

// CALZADOS
const productosCalzado = [
    ['New Balance 550', 150000, 'tenis', true, 1],
    ['Nike Air Max Plus', 145000, 'tenis', true, 2],
    ['Zapatilla Negra Estampado Dorado', 165000, 'casual', true, 3],
    ['Zapatilla Calvin Klein', 160000, 'casual', true, 4],
    ['New Balance 9060', 160000, 'tenis', true, 5],
    ['Adidas Duramo', 165000, 'tenis', true, 6],
    ['Adidas Response', 160000, 'tenis', true, 7],
    ['Tenis Retro Azul y Blanco', 165000, 'casual', true, 8],
    ['Le Coq Sportif', 165000, 'casual', true, 9],
    ['Puma Court Blanco', 145000, 'casual', true, 10],
    ['Sandalia Café Cuadros', 150000, 'sandalia', true, 12],
    ['Sandalia Negra Cuadros', 150000, 'sandalia', true, 13],
    ['Sandalia Beige Plataforma', 150000, 'sandalia', true, 14],
    ['Sandalia Blanca Doble Correa', 150000, 'sandalia', true, 15],
    ['Sandalia Negra Hebilla Dorada', 150000, 'sandalia', true, 16],
    ['Sandalia Blanca Acolchada', 150000, 'sandalia', true, 17],
    ['Adidas Response Negro', 150000, 'tenis', true, 18],
    ['Adidas Retro ', 150000, 'casual', true, 19],
    ['Nike Air Max 95', 150000, 'tenis', true, 20],
    ['Tenis Blanco ', 170000, 'casual', true, 22],
    ['Reebok Club C', 150000, 'tenis', true, 23],
    ['New Balance 574', 160000, 'casual', true, 24],
    ['Nike Air Force 1', 148000, 'casual', true, 25],
    // ── PRODUCTOS NUEVOS (26–45). Ajusta precios a los reales. ──
    ['Tenis Rojo Gamuza', 160000, 'tenis', true, 26],
    ['Tenis Blanco Detalle Verde', 150000, 'tenis', true, 27],
    //N° 29 viene en dos colores: pastel (calzado 29) y café (calzado-29-cafe)
    ['Tenis multicolor', 160000, 'tenis', true, 29, [
        { nombre: 'Pastel', hex: '#f0f0f0', img: 'images/imagenes calzado/calzado-29-pastel.jpg' },
        { nombre: 'Café', hex: '#8B4513', img: 'images/imagenes calzado/calzado-29.jpg' }
    ]],
    // Nº 30 viene en dos colores: Blanco (calzado-30) y Morado (calzado-30-morado)
    ['Tenis Multicolor', 180000, 'tenis', true, 30, [
        { nombre: 'Blanco', hex: '#e9e9e9', img: 'images/imagenes calzado/calzado-30.jpg' },
        { nombre: 'Morado', hex: '#8b5cf6', img: 'images/imagenes calzado/calzado-30-morado.jpg' }
    ]],
    // Nº 32 viene en dos colores: Crema (calzado-32) y Negro (calzado-32-negro)
    ['Tenis Retro', 150000, 'tenis', true, 32, [
        { nombre: 'Crema', hex: '#efe9dc', img: 'images/imagenes calzado/calzado-32.jpg' },
        { nombre: 'Negro', hex: '#1a1a1a', img: 'images/imagenes calzado/calzado-32-negro.jpg' }
    ]],
    ['Tenis Azul y Blanco', 160000, 'tenis', true, 34],
    ['Tenis Blanco y Rosa', 185000, 'tenis', true, 35],
    ['Tenis Negro Rayas Blancas', 150000, 'tenis', true, 36],
    ['Tenis Negro Deportivo', 148000, 'casual', true, 37],
    ['Tenis Beige Urbano', 155000, 'casual', true, 38],
    ['Tenis Azul y Rosa', 170000, 'casual', true, 39],
    ['Tenis Crema Minimalista', 160000, 'casual', true, 40],
    ['Tenis Blanco y Negro', 150000, 'casual', true, 41],
    ['Tenis Gris Deportivo', 145000, 'tenis', true, 42],
    ['Tenis Blanco y Morado', 155000, 'tenis', true, 43],
    ['Tenis Blanco y Gris', 150000, 'tenis', true, 44],
    ['Tenis Vinotinto y Blanco', 165000, 'casual', true, 45],
    ['Lacoste Verde', 160000, 'casual', true, 46],
    ['Nike P6000 Rosa', 150000, 'tenis', true, 47],
    ['Zapatilla Negra- blanco', 165000, 'tenis', true, 48],
    ['Zapatilla Nike Blanco Negro', 160000, 'tenis', true, 49],
    ['Tenis Nike Classic', 150000, 'tenis', true, 50, [
        { nombre: 'Vinotinto', hex: '#9e2305', img: 'images/imagenes calzado/calzado-50.jpg' },
        { nombre: 'Rosa', hex: '#ddc6c6', img: 'images/imagenes calzado/calzado-50-rosa.jpg' },
        { nombre: 'Beige', hex: '#a8a1a1', img: 'images/imagenes calzado/calzado-50-beige.jpg' }
    ]],
    ['Ralph Lauren', 160000, 'casual', true, 52],
    ['Zapatilla Armani', 165000, 'casual', true, 53],
    ['Tenis Adidas', 165000, 'casual', true, 54],
    ['Tenis Adidas', 145000, 'casual', true, 55],
    ['Tenis Nike Classic', 150000, 'casual', true, 56, [
        { nombre: 'Blanco-Gris ', hex: '#bebab9dc', img: 'images/imagenes calzado/calzado-56.jpg' },
        { nombre: 'Blanco-estrellas', hex: '#bebab9dc', img: 'images/imagenes calzado/calzado-56-estrellas.jpg' },
        { nombre: 'Blanco-Negro', hex: '#130f0f', img: 'images/imagenes calzado/calzado-56-blanco negro.jpg' }
    ]],
    // Nº 100 viene en cuatro colores: Negro, Blanco/Negro, Beige claro y Beige
    ['Tenis Retro', 150000, 'casual', true, 100, [
        { nombre: 'Negro', hex: '#1a1a1a', img: 'images/imagenes calzado/calzado-100-negro.jpg' },
        { nombre: 'Blanco/Negro', hex: '#e8e8e8', img: 'images/imagenes calzado/calzado-100-negroblanco.jpg' },
        { nombre: 'Beige claro', hex: '#e5dcc3', img: 'images/imagenes calzado/calzado-100-beigeclaro.jpg' },
        { nombre: 'Beige ', hex: '#d9c9a8', img: 'images/imagenes calzado/calzado-100.jpg' }
    ]],
    ['Adidas-Equip', 150000, 'casual', true, 61],
    ['Adidas Color verde', 150000, 'tenis', true, 62],
    ['Adidas Campus', 150000, 'casual', true, 63],
    ['New Balance 9060', 160000, 'tenis', true, 64],
    ['Gucci', 145000, 'casual', true, 66],
    ['Adidas Air Force', 145000, 'casual', true, 67],
    ['Nike Blanco-Gris', 145000, 'tenis', true, 68],
    //N° 69 vien con 3 estilos de color : negro, naranja/negro, azul
    ['Nike 1080', 145000, 'tenis', true, 69, [
        { nombre: 'Negro', hex: '#1a1a1a', img: 'images/imagenes calzado/calzado-69-negro.jpg' },
        { nombre: 'Naranja/Negro', hex: '#e64f09', img: 'images/imagenes calzado/calzado-69-naranja.jpg' },
        { nombre: 'Azul', hex: '#0000ff', img: 'images/imagenes calzado/calzado-69.jpg' }
    ]],
    ['Nike Black', 145000, 'casual', true, 70],
    ['Jordan Air Max', 145000, 'tenis', true, 71],
    //Nº 72 viene con 6 estilos de color: gris claro, gris oscuro, gris rata, blanco, rojo, multicolor
    ['Botín Nike', 145000, 'tenis', true, 72, [
        { nombre: 'Gris-Claro', hex: '#cec8c8', img: 'images/imagenes calzado/calzado-72-gris.jpg' },
        { nombre: 'Gris-Negro', hex: '#7e7a78', img: 'images/imagenes calzado/calzado-72-gris-oscuro.jpg' },
        { nombre: 'Gris-Rata', hex: '#767679', img: 'images/imagenes calzado/calzado-72-grisoscuro.jpg' },
        { nombre: 'Blanco', hex: '#f9f9fc', img: 'images/imagenes calzado/calzado-72-blanco.jpg' },
        { nombre: 'Rojo-Negro', hex: '#ee130b', img: 'images/imagenes calzado/calzado-72-rojo.jpg' },
        { nombre: 'Blanco-Negro', hex: '#e5dcc3', img: 'images/imagenes calzado/calzado-72-Blanco-negro.jpg' },
        { nombre: 'Negro-Gris', hex: 'linear-gradient(90deg, #1a1a1a, #808080)', img: 'images/imagenes calzado/calzado-72-negromate.jpg' },
        { nombre: 'Multicolor', hex: 'linear-gradient(90deg, red, orange, yellow, green, blue, violet)', img: 'images/imagenes calzado/calzado-72-colores.jpg' }
    ]],
    // Nº 74 viene en cuatro colores: Negro, Naranja, chicle Blanco y Negro
    ['Tenis Nike', 150000, 'tenis', true, 74, [
        { nombre: 'Chicle', hex: '#1a1a1a', img: 'images/imagenes calzado/calzado-74-chicle.jpg' },
        { nombre: 'Naranja', hex: '#e8e8e8', img: 'images/imagenes calzado/calzado-74-naranja.jpg' },
        { nombre: 'Rojo-Negro', hex: '#d9c9a8', img: 'images/imagenes calzado/calzado-74.jpg' }
    ]],
    ['Tenis Veja', 150000, 'casual', true, 76, [
        { nombre: 'Blanco', hex: '#ffff', img: 'images/imagenes calzado/calzado-76.jpg' }
    ]],
    ['Zapatillas Nike', 150000, 'tenis', true, 77, [
        { nombre: 'Blanco', hex: '#ffffff', img: 'images/imagenes calzado/calzado-77.jpg' },
        { nombre: 'Rosa Claro', hex: '#ffc0cb', img: 'images/imagenes calzado/calzado-77-rosa.jpg' },
        { nombre: 'Negro', hex: '#1a1a1a', img: 'images/imagenes calzado/calzado-77-negro.jpg' }
    ]],
    // Nº 78 viene en cuatro colores: azuloscuro, cafe, verde
    ['Tenis Retro', 150000, 'tenis', true, 78, [
        { nombre: 'Negro-Azul', hex: '#1a1a1a', img: 'images/imagenes calzado/calzado-78-azuloscuro.jpg' },
        { nombre: 'Cafe-Negro', hex: '#e5dcc3', img: 'images/imagenes calzado/calzado-78-verde.jpg' },
        { nombre: 'Multicolor', hex: 'linear-gradient(90deg, red, orange, yellow, green, blue, violet)', img: 'images/imagenes calzado/calzado-78.jpg' }
    ]],
    // Nº 79 viene en dos colores: Crema (calzado-79) y Negro (calzado-79-negro)
    ['Tenis QC', 150000, 'casual', true, 79, [
        { nombre: 'Negro', hex: '#1a1a1a', img: 'images/imagenes calzado/calzado-79-negro.jpg' },
        { nombre: 'Blanco', hex: '#fffff', img: 'images/imagenes calzado/calzado-79.jpg' }
    ]],
    // Nº 80 viene en tres colores: rosa, cafe
    ['Tenis Retro', 150000, 'tenis', true, 80, [
        { nombre: 'Gris-Rosa', hex: '#ff69b4', img: 'images/imagenes calzado/calzado-80-rosa.jpg' },
        { nombre: 'Gris-Café', hex: '#8f815c', img: 'images/imagenes calzado/calzado-80-cafe.jpg' },
        { nombre: 'Gris-Negro', hex: '#1a1a1a', img: 'images/imagenes calzado/calzado-80.jpg' }
    ]],
    ['Tenis Lecoc', 150000, 'casual', true, 81, [
        { nombre: 'Negro', hex: '#1a1a1a', img: 'images/imagenes calzado/calzado-81.jpg' }
    ]],

    ['Zapatillas Nike Blanca  ', 150000, 'tenis', true, 82, [
        { nombre: 'Blanco-Gris', hex: '#fcf5f5f6', img: 'images/imagenes calzado/calzado-82.jpg' }
    ]],

    //83
    ['Zapatillas Diesel Negra  ', 150000, 'tenis', true, 83, [
        { nombre: 'Blanco-Gris', hex: '#0f0e0ef6', img: 'images/imagenes calzado/calzado-83.jpg' }
    ]],
    // 84
    ['Zapatillas Diesel Negra  ', 150000, 'Casual', true, 84, [
        { nombre: 'Negro-Gris', hex: '#0f0e0ef6', img: 'images/imagenes calzado/calzado-84.jpg' },
        { nombre: 'Azul-Blanco', hex: '#0f584ff6', img: 'images/imagenes calzado/calzado-90.jpg' }

    ]],
    // Nº 85 viene en cuatro colores: Negro, Blanco/Negro, Beige claro y Beige
    ['Tenis Retro', 150000, 'tenis', true, 85, [
        { nombre: 'Negro', hex: '#1a1a1a', img: 'images/imagenes calzado/calzado-85-negro.jpg' },
        { nombre: 'Blanco/Negro', hex: '#e8e8e8', img: 'images/imagenes calzado/calzado-85-blanco.jpg' },
        { nombre: 'Beige claro', hex: '#e5dcc3', img: 'images/imagenes calzado/calzado-85-cafe.jpg' },
        { nombre: 'Beige ', hex: '#d9c9a8', img: 'images/imagenes calzado/calzado-85.jpg' }
    ]],
    // Nº 87 viene en cuatro colores: Negro, Blanco/Negro, Beige claro y Beige
    ['Bota Under Negra  ', 150000, 'casual', true, 87, [
        { nombre: 'Blanco-Gris', hex: '#0f0e0ef6', img: 'images/imagenes calzado/calzado-87.jpg' }
    ]],
    // Nº 89 viene en cuatro colores: Negro, Blanco/Negro, Beige claro y Beige
    ['Zapatilla Nike Café  ', 150000, 'tenis', true, 89, [
        { nombre: 'Blanco-Gris', hex: '#5c5656f6', img: 'images/imagenes calzado/calzado-89.jpg' }
    ]],
    // Nº 91 viene en cuatro colores: Negro, Blanco/Negro, Beige claro y Beige
    ['Tenis adidas  ', 150000, 'Casual', true, 91, [
        { nombre: 'Blanco', hex: '#f7f6f6f6', img: 'images/imagenes calzado/calzado-91.jpg' }
    ]],
    // Nº 92 viene en dos colores: Crema (calzado-92) y Negro (calzado-92-negro)
    ['Tenis Adidas', 150000, 'tenis', true, 92, [
        { nombre: 'Negro-Naranja', hex: '#1a1a1a', img: 'images/imagenes calzado/calzado-92-naranja.jpg' },
        { nombre: 'Blanco-Gris', hex: '#fffff', img: 'images/imagenes calzado/calzado-92.jpg' },
    ]],

    ['Tenis Adidas', 150000, 'casual', true, 93, [
        { nombre: 'Café-Amarillo', hex: '#f7e011f6', img: 'images/imagenes calzado/calzado-93.jpg' },
        { nombre: 'Negro-Verde', hex: '#138005f6', img: 'images/imagenes calzado/calzado-93-tigre.jpg' },
        { nombre: 'Café-Rosa', hex: '#eea2a2f6', img: 'images/imagenes calzado/calzado-92-rosa.jpg' }
    ]],
    ['Tenis Bota', 150000, 'tenis', true, 94, [
        { nombre: 'Blanco-Azul', hex: '#f7f1f1f6', img: 'images/imagenes calzado/calzado-94.jpg' }
    ]],
    ['Zapatillas Nike', 150000, 'tenis', true, 95, [
        { nombre: 'Blanco-Gris', hex: '#f7f1f1f6', img: 'images/imagenes calzado/calzado-95.jpg' }
    ]],
    ['Zapatillas retro blanco-gris ', 150000, 'casual', true, 96, [
        { nombre: 'Blanco-Gris', hex: '#f7f1f1f6', img: 'images/imagenes calzado/calzado-96.jpg' }
    ]],
    ['Zapatillas Nike Negra ', 150000, 'tenis', true, 98, [
        { nombre: 'Blanco-Gris', hex: '#080808f6', img: 'images/imagenes calzado/calzado-98.jpg' }
    ]],
    // Nº 99 viene en cuatro colores: Negro, Blanco/Negro, Beige claro y Beige
    ['Tenis Retro', 150000, 'tenis', true, 99, [
        { nombre: 'Blanco-Azul', hex: '#1a1a1a', img: 'images/imagenes calzado/calzado-99-azul.jpg' },
        { nombre: 'Blanco-Gris', hex: '#e8e8e8', img: 'images/imagenes calzado/calzado-99-gris.jpg' },
        { nombre: 'Blanco-Negro', hex: '#e5dcc3', img: 'images/imagenes calzado/calzado-99-negro.jpg' },
        { nombre: 'Marrón-Rosa ', hex: '#d463af', img: 'images/imagenes calzado/calzado-99-rosa.jpg' },
        { nombre: 'Negro ', hex: '#080808', img: 'images/imagenes calzado/calzado-99.jpg' }
    ]],
    ['Zapatillas Adidas Azul ', 150000, 'tenis', true, 101, [
        { nombre: 'Azul cielo', hex: '#0fe3ebf6', img: 'images/imagenes calzado/calzado-101.jpg' }
    ]],
    ['Tenis Casual ', 150000, 'casual', true, 102, [
        { nombre: 'Azul cielo', hex: '#0fe3ebf6', img: 'images/imagenes calzado/calzado-102.jpg' }
    ]],






];








// ===== RELOJES =====
const productosRelojes = [
    ['Reloj Clásico Hombre 01', 180000, 'hombre', true, 1],
    ['Reloj Clásico Hombre 02', 180000, 'hombre', true, 2],
    ['Reloj Clásico Hombre 03', 180000, 'hombre', true, 3],
    ['Reloj Clásico Hombre 04', 180000, 'hombre', true, 4],
    ['Reloj Clásico Hombre 05', 180000, 'hombre', true, 5],
    ['Reloj Clásico Hombre 06', 180000, 'hombre', true, 6],
    ['Reloj Clásico Hombre 07', 180000, 'hombre', true, 7],
    ['Reloj Digital Naviforce Hombre 01', 125000, 'hombre', true, 8],
    ['Reloj Digital Naviforce Hombre 02', 125000, 'hombre', true, 9],
    ['Reloj Digital Naviforce Hombre 03', 125000, 'hombre', true, 10],
    ['Reloj Digital Naviforce Mujer 01', 125000, 'mujer', true, 11],
    ['Reloj Elegante Mujer 02', 125000, 'mujer', true, 12],
    ['Reloj Elegante Mujer 03', 125000, 'mujer', true, 13],
    ['Reloj Digital Naviforce Mujer 02', 125000, 'mujer', true, 14],
    ['Reloj Elegante Mujer 05', 135000, 'mujer', true, 15],
    ['Reloj Digital Naviforce Mujer 03', 125000, 'mujer', true, 16],
    ['Reloj Digital Naviforce Mujer 04', 125000, 'mujer', true, 17],
    ['Reloj Digital Naviforce Mujer 05', 125000, 'mujer', true, 18],

    // N° 35 viene en 4 colores: Rojo, Azul, Negro y Verde.
    // Nº 35 viene en 4 colores: Rojo, Azul, Negro y Verde.
    ['Reloj JoeFox', 120000, 'Hombre', true, 35, [
        { nombre: 'Rojo', hex: '#f03608dc', img: 'images/imagenes relojes/reloj-35.jpg' },
        { nombre: 'Verde', hex: '#3b5f3ddc', img: 'images/imagenes relojes/reloj-35-verde.jpg' },
        { nombre: 'Azul', hex: '#11416e', img: 'images/imagenes relojes/reloj-35-azul.jpg' },
        { nombre: 'Azul Oscuro', hex: '#161c6e', img: 'images/imagenes relojes/reloj-35-azuloscuro.jpg' }
    ]],
];

// ===== CORREAS =====
// (renombra correa-hombre-01.jpg a correa-01.jpg).
const productosCorreas = [
    ['Correa de Cuero Hombre Café', 65000, 'hombre', true, 1],
];

const productosLociones = [
    ['Gabrielle Chanel', 120000, 'femenina', true, 1],
    ['KIRKÈ', 240000, 'femenina', true, 2],
    ['CASSIOPEA', 250000, 'femenina', true, 3],
    ['TOMMY HILFIGER', 200000, 'masculina', true, 4],
    ['DOLCE & GABBANA', 180000, 'femenina', true, 5],
    ['ORION', 280000, 'femenina', true, 6],
    ['ACQUA DI GIO', 130000, 'masculina', true, 7],
    ['FAHRENHEIT-DIOR', 165000, 'femenina', true, 8],
    ['LIGHT BLUE', 220000, 'femenina', true, 9],
    ['PARIS HILTON', 380000, 'masculina', true, 10],
    ['STARWALKER', 150000, 'masculina', true, 11],
    ['ONE MILLION', 240000, 'masculina', true, 12],
    ['BLACK-XS', 190000, 'masculina', true, 13],
    ['VICTORINOX CLASSIC', 230000, 'masculina', true, 14],
    ['VICTORINOX CLASSIC RED', 200000, 'femenina', true, 15],
];

// ===== MAPA CENTRAL DE CATEGORÍAS =====
// Una sola fuente de verdad: si algún día agregas otra categoría (gorras,
// billeteras...), la registras aquí y en CARPETA_IMG / PREFIJO_IMG y ya.
const CATALOGOS = {
    calzado: productosCalzado,
    relojes: productosRelojes,
    lociones: productosLociones,
    correas: productosCorreas
};
