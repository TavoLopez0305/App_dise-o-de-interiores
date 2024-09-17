document.addEventListener('DOMContentLoaded', function(){

    navegacion_movil()


})
const navegacion_movil = () =>{
    let anchoPantalla = window.innerWidth;
    const pantallaMovil  = 768

    const navegador = document.querySelector('.navegador');
    const lista = document.querySelector('.lista');
    const logo = document.querySelector('.logo')

    const links = document.querySelectorAll('.link');

    if (anchoPantalla <= pantallaMovil) {
         
        lista.remove();
    
        
        const icono = document.createElement('I');
        icono.className = 'fa-solid fa-bars icono_movil';
        navegador.appendChild(icono);

        icono.addEventListener('click', () => {
            // Crear el elemento 'div' con la clase 'navegador-movil'
            const navegadorMovil = document.createElement('DIV');
            navegadorMovil.className = 'navegador-movil ';

            navegadorMovil.appendChild(logo);
             // Agregar los elementos 'link' al 'div'
            links.forEach(link => {
                navegadorMovil.appendChild(link.cloneNode(true));
            });

            // Agregar el 'div' al elemento 'navegador'
            navegador.appendChild(navegadorMovil);

            if(navegadorMovil){
                const boton_cierre = document.createElement('BUTTON')
                boton_cierre.classList.add('boton-navegacion_movil')
                boton_cierre.textContent= 'X';
        
                navegadorMovil.appendChild(boton_cierre);
                boton_cierre.onclick = cerrarMenu;
            }

        });
    } 
}

const cerrarMenu = () =>{
    const navegador_movil = document.querySelector('.navegador-movil ')
    const cotenedor_imagen = document.querySelector('.cotenedor-imagen')
    const logo = document.querySelector('.logo')

    if(navegador_movil){
        navegador_movil.remove()
        cotenedor_imagen.appendChild(logo.cloneNode(true))
        if(logo){
            logo.remove()
        }

    }
}


