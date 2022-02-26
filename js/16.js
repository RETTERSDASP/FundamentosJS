//// Otros Array Methos
const tecnologias = ['HTML', 'CSS', 'Javascript', 'React', 'Node.js'];
const numeros = [10, 20, 30];
let nuevoArray;

// Filter
// nuevoArray = tecnologias.filter(tech => tech !== 'React');

// Comprobar si un elemento existe en el array
// const resultado = tecnologias.includes('React');

// Some - Devuelve si al menos uno cumple la condición
// const resultado = numeros.some(numero => numero > 15);

// Find - Devuelve el primer elemento que cumpla la condición
// const resultado = numeros.find(numero => numero > 25);

// Every - retorna true o false si todos cumplen la condición
// const resultado = numeros.every(numero => numero > 9);

// Reduce - Acumulando en el total
// const resultado = numeros.reduce((total, numero) => numero + total, 0);

// Filter - Crea un nuevo array en base a una condición
// const resultado = tecnologias.filter(tech => tech === 'Node.js');
// const resultado = numeros.filter(numero => numero > 15);

//console.log(resultado);

const arrayForeach = tecnologias.forEach((tech, index) => console.log(index));


// map - crea un nuevo arreglo y accede a el para no tener problemas de acceso
const arrayMap = tecnologias.map(tech => tech);

console.log(arrayMap);