'use strict';

const btnTema = document.querySelector('#cambiarTema');

function cambiarTema () {
    document.body.classList.toggle('tema_claro');
    const esOscuro = document.body.classList.toggle('tema_oscuro');
    
    if (esOscuro) {
        localStorage.setItem('tema-color','tema_oscuro');
    } else {
        localStorage.setItem('tema-color','tema_claro');
    }
}

if (document.body.classList.contains('tema_oscuro') && localStorage.getItem('tema-color') === 'tema_claro') {
    cambiarTema();
}

btnTema.addEventListener('click', cambiarTema);


const btnUtilidad = {
    elemento : document.querySelector('#habilitarUtilidad'),
    textoHabilitar : document.querySelector('#textoHabilitar'),
    textoDeshabilitar : document.querySelector('#textoDeshabilitar'),
}
const containerUtilidad = document.querySelector('.utilidad');

function cambiarModo () {
    const estado = containerUtilidad.getAttribute('data-enable');

    const nuevoEstado = estado === 'false'
    
    containerUtilidad.setAttribute("data-enable", nuevoEstado);

    btnUtilidad.textoHabilitar.setAttribute("data-enable", !nuevoEstado);
    btnUtilidad.textoDeshabilitar.setAttribute("data-enable", nuevoEstado);

    localStorage.setItem("utilidad-habilitada", nuevoEstado);
}

const utilidadHabilitada = localStorage.getItem('utilidad-habilitada');
if (utilidadHabilitada !== containerUtilidad.getAttribute('data-enable')) {
    cambiarModo();
}

btnUtilidad.elemento.addEventListener('click', cambiarModo);
