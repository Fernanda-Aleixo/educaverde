let countt = 1; 
document.getElementById("radio-informacoes1").checked = true;

let autoSlideInterval = setInterval(nextImage, 5000); 


function nextImage() {
    countt++;
    if (countt > 8) {
        countt = 1;
    }
    document.getElementById("radio-informacoes" + countt).checked = true;
}


const radios = document.querySelectorAll('input[name="radio-btn-informacoes"]');
radios.forEach((radio, index) => {
    radio.addEventListener("change", () => {
        countt = index + 1; 
    });
});


const slidess = document.querySelectorAll('.slide-informacoes'); 
slidess.forEach(slide1 => {
    slide1.addEventListener("mouseenter", () => {
        clearInterval(autoSlideInterval); 
    });

    slide1.addEventListener("mouseleave", () => {
        autoSlideInterval = setInterval(nextImage, 5000);
    });
});

document.querySelector(".left-arrow-informacoes").addEventListener("click", () => {
    if (countt === 1) {
        countt = 8; 
    } else {
        countt--;
    }
    document.getElementById("radio-informacoes" + countt).checked = true;
});

document.querySelector(".right-arrow-informacoes").addEventListener("click", () => {
    if (countt === 8) {
        countt = 1; 
    } else {
        countt++;
    }
    document.getElementById("radio-informacoes" + countt).checked = true;
});