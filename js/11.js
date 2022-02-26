//// Iteradores en JS
const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js'];

// forEach - Acceder a cada elemento del Array del arreglo original
const arrayForeach = tecnologias.forEach(function(tech) {
    return tech;
})

// map - crea un nuevo arreglo y accede a el para no tener problemas de acceso
const arrayMap = tecnologias.map(function(tech) {
    return tech;
});

console.log(arrayForeach);
console.log(arrayMap);