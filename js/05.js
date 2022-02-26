//// Objetos - Manipulación
const producto = {
    nombre: "Tablet",
    precio: 300,
    disponible: true
}

// Para no permitir eliminiar alguna propiedad del objeto y tampoco reescribir un valor
Object.freeze(producto);

// Si te permite reescribir sus propiedades existentes pero no agregar nuevas ni eliminarlas
Object.seal(producto);

// Reescribir un valor
producto.nombre = "Monitor Curvo";

// Si no existe, lo va a añadir
producto.imagen = "imagen.jpg";

delete producto.disponible;

console.table(producto);