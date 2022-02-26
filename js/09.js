//// Operaciones en los arreglos
const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js'];

//// Añadir elementos al array
// tecnologias.push('GraphQL') // añade al final del array
// tecnologias.unshift('GraphQL') // añade al principio del array

//// Agragar campos creando un nuevo arreglo sin modificar el original
// const nuevoArreglo = [...tecnologias, 'GraphQL']; // al agregar valores nuevos dependera de la posición, al final sera al ultimo
// const nuevoArreglo = ['GraphQL', ...tecnologias];

//// Eliminar elementos del array
// tecnologias.pop(); // Elimina del final
// tecnologias.shift(); // Elimina del inicio
// tecnologias.splice(2, 3); // Elimina de una posición en específica
// Filtrar por condición
// const nuveArray = tecnologias.filter(function(tech) {
//     return tech === 'Node.js';
// })


//// Reemplazar del array
const nuevoArray = tecnologias.map(function(tech) {
    if (tech === 'HTML') {
        return 'GraphQL'
    } else {
        return tech;
    }
});



// console.table(tecnologias);
console.table(nuevoArray);