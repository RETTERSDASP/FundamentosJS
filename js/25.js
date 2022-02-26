// Eventos del DOM - Inputs
const inputNombre = document.querySelector('.nombre');

// Se puede modificar las propiedades de las etiquetas desde aca
// inputNombre.placeholder = 'password';

//// INPUT - Se activa cuando se escribe
// inputNombre.addEventListener('input', function(){
//     console.log('Escribiendo en el input');
// })

//// KEYDOWN - 
// inputNombre.addEventListener('keydown', function(){
//     console.log('Escribiendo en el input');
// })

//// KEYUP
// inputNombre.addEventListener('keyup', function(){
//     console.log('Escribiendo en el input');
// })

inputNombre.addEventListener('input', function(e){
    console.log(e.target.value);
})

const inputPassword = document.querySelector('.password');
inputPassword.addEventListener('input', funcionPassword);

function funcionPassword(e){
    inputPassword.type = 'text';

    setTimeout(() =>{
        inputPassword.type = 'password';
    }, 100);
}