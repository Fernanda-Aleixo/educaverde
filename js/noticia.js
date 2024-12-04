let noticias = document.querySelectorAll('.noticia');
let barras = document.querySelectorAll('.barra');
let barrasPreenchimento = document.querySelectorAll('.preenchimento');

let currentNoticia = 0;
let totalNoticias = noticias.length;

function showNoticia(index) {
    noticias.forEach(noticia => noticia.style.display = 'none');
    noticias[index].style.display = 'block';
}

function activateBarra(index) {
    barras.forEach(barra => barra.classList.remove('active'));
    barras[index].classList.add('active');
    
    
    barrasPreenchimento.forEach(preenchimento => {
        if (barrasPreenchimento.indexOf(preenchimento) !== index) {
            preenchimento.style.width = '100%'; 
        } else {
            preenchimento.style.width = '0'; 
            setTimeout(() => {
                preenchimento.style.width = '100%'; 
            }, 30);
        }
    });
}

function nextNoticia() {
    currentNoticia++;
    if (currentNoticia >= totalNoticias) currentNoticia = 0;
    showNoticia(currentNoticia);
    activateBarra(currentNoticia);
}

function prevNoticia() {
    currentNoticia--;
    if (currentNoticia < 0) currentNoticia = totalNoticias - 1;
    showNoticia(currentNoticia);
    activateBarra(currentNoticia);
}


setInterval(nextNoticia, 10000); 


barras.forEach((barra, index) => {
    barra.addEventListener('click', () => {
        currentNoticia = index;
        showNoticia(currentNoticia);
        activateBarra(currentNoticia);
    });
});

document.querySelector('.nav-button.left').addEventListener('click', prevNoticia);
document.querySelector('.nav-button.right').addEventListener('click', nextNoticia);

showNoticia(currentNoticia);
activateBarra(currentNoticia);