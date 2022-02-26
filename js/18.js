// Comparación y Operador Estricto
const numero1 = 20;
const numero2 = "20";

/*
    == Comparación pero no es estricto
    === Comparación estricta (revisa valor y tipo de dato)
*/

// if (numero1 === numero2) {
//     console.log('Si!, son iguales');
// } else {
//     console.log('No!, no son iguales');
// }

// Cuando es comparación estricta === y son diferentes (string o int, etc) te da la opcion de convertirlo para poder compararlo
if (numero1 === Number(numero2)) {
    console.log('Si!, son iguales');
} else {
    console.log('No!, no son iguales');
}

// Comparación para los booleanos
const autenticado = true;

if (autenticado) {
    console.log('Si esta autenticado')
}