//// Funciones - Function Declaration
// function sumar() {
//     console.log(2 + 2);
// }
// sumar();

// function sumar(numero, numero2) {
//     console.log(numero + numero2);
// }

// sumar(10, 20);
// sumar(2, 3);
// sumar(100);
// sumar();

function sumar(numero, numero2) {
    return [numero + numero2, 'Hola Mundo'];
}

const [resultado, holaMundo] = sumar(20, 30);

console.log(resultado);
console.log(holaMundo);