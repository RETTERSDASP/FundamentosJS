// Manipular elementos HTML con JS
 const heading = document.querySelector('.heading');
 heading.textContent = "Nuevo heading";

 console.log(heading.textContent);

 const inputNombre = document.querySelector('#nombre');
 inputNombre.value = "Un valor predeterminado";

 const enlaces = document.querySelectorAll('.navegacion a');
 
 enlaces.forEach(enlace => enlace.textContent = 'Nuevo Enlace');