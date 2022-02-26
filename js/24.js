// Eventos del DOM - clicks
const heading = document.querySelector('.heading');

// heading.addEventListener('click', function(){
//     console.log('diste click en heading');
// })

// heading.addEventListener('click', () => {
//     console.log('diste click en heading');
// })

// heading.addEventListener('click', clickHeading);

// function clickHeading(){
//     console.log('diste click en heading');
// }

heading.addEventListener('click', () => {
    heading.textContent = 'Nuevo heading al dar click';
})
