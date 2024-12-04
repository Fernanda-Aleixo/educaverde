const slider = document.querySelector(".items");
const slidesB = document.querySelectorAll(".item");  // Selecionando todos os slides
const buttons = document.querySelectorAll(".button-b");  // Selecionando os botões de navegação

let prev = 4;  // O slide anterior começa como o último (index 4 para 5 slides)
let current = 0;  // O slide atual começa como o primeiro (index 0)
let next = 1;  // O slide seguinte começa como o segundo (index 1)

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => i === 0 ? gotoPrev() : gotoNext()); // Detecta se o botão é o anterior ou o próximo
}

const gotoPrev = () => {
  current > 0 ? gotoNum(current - 1) : gotoNum(slidesB.length - 1);  // Vai para o slide anterior
};

const gotoNext = () => {
  current < slidesB.length - 1 ? gotoNum(current + 1) : gotoNum(0);  // Vai para o slide seguinte
};

const gotoNum = number => {
  current = number;
  prev = current === 0 ? slidesB.length - 1 : current - 1;  // Ajusta o slide anterior, loopando de volta
  next = current === slidesB.length - 1 ? 0 : current + 1;  // Ajusta o slide seguinte, loopando de volta

  // Remove as classes de todos os slides
  slidesB.forEach(slide => {
    slide.classList.remove("active", "prev", "next");
  });

  // Adiciona as classes ao slide atual, anterior e seguinte
  slidesB[current].classList.add("active");
  slidesB[prev].classList.add("prev");
  slidesB[next].classList.add("next");

  mudarPosition();  // Função para ajustar as posições dos slides
};

function mudarPosition() {
  const Prev = document.querySelector(".prev");
  const Next = document.querySelector(".next");
  const Active = document.querySelector(".active");

  // Estilos do slide anterior
  if (Prev.dataset.number == 1) {
    Prev.style.transform = "scale(0.9) translateX(35%)";
    Prev.style.backgroundImage = `url("../img/fernanda/caça.jpg")`;
    Prev.style.backgroundPositionY = "-60px";
    Prev.style.backgroundSize = "510px";
  } else if (Prev.dataset.number == 2) {
    Prev.style.transform = "scale(0.9) translateX(-75%)";
    Prev.style.backgroundImage = `url('../img/fernanda/geleira.webp')`;
  } else if (Prev.dataset.number == 3) {
    Prev.style.transform = "scale(0.9) translateX(-185%)";
    Prev.style.backgroundImage = `url('../img/fernanda/lixo1.jpg')`;
  } else if (Prev.dataset.number == 4) {
    Prev.style.transform = "scale(0.9) translateX(-295%)";
    Prev.style.backgroundImage = `url('../img/alice/mato.jpg')`;  // Ajuste da imagem para o slide 4
  } else if (Prev.dataset.number == 5) {
    Prev.style.transform = "scale(0.9) translateX(-405%)";
    Prev.style.backgroundImage = `url('Desmatamento.pdf')`;  // Ajuste da imagem para o slide 5
  }

  // Estilos do slide ativo
  if (Active.dataset.number == 1) {
    Active.style.transform = "scale(1.1) translateX(91%)";
    Active.style.backgroundImage = `url("../img/fernanda/caça.jpg")`;
    Active.style.backgroundPositionY = "-60px";
    Active.style.backgroundSize = "510px";
  } else if (Active.dataset.number == 2) {
    Active.style.transform = "scale(1.1) translateX(0%)";
    Active.style.backgroundImage = `url('../img/fernanda/geleira.webp')`;
  } else if (Active.dataset.number == 3) {
    Active.style.transform = "scale(1.1) translateX(-91%)";
    Active.style.backgroundImage = `url('../img/fernanda/lixo1.jpg')`;
  } else if (Active.dataset.number == 4) {
    Active.style.transform = "scale(1.1) translateX(-191%)";
    Active.style.backgroundImage = `url('../img/alice/mato.jpg')`;  // Ajuste da imagem para o slide 4
  } else if (Active.dataset.number == 5) {
    Active.style.transform = "scale(1.1) translateX(-291%)";
    Active.style.backgroundImage = `url('Desmatamento.pdf')`;  // Ajuste da imagem para o slide 5
  }

  // Estilos do slide seguinte
  if (Next.dataset.number == 1) {
    Next.style.transform = "scale(0.9) translateX(186%)";
    Next.style.backgroundImage = `url("../img/fernanda/caça.jpg")`;
    Next.style.backgroundPositionY = "-60px";
    Next.style.backgroundSize = "510px";
  } else if (Next.dataset.number == 2) {
    Next.style.transform = "scale(0.9) translateX(75%)";
    Next.style.backgroundImage = `url('../img/fernanda/geleira.webp')`;
  } else if (Next.dataset.number == 3) {
    Next.style.transform = "scale(0.9) translateX(-36%)";
    Next.style.backgroundImage = `url('../img/fernanda/lixo1.jpg')`;
  } else if (Next.dataset.number == 4) {
    Next.style.transform = "scale(0.9) translateX(-25%)";
    Next.style.backgroundImage = `url('../img/alice/mato.jpg')`;  // Ajuste da imagem para o slide 4
  } else if (Next.dataset.number == 5) {
    Next.style.transform = "scale(0.9) translateX(-125%)";
    Next.style.backgroundImage = `url('Desmatamento.pdf')`;  // Ajuste da imagem para o slide 5
  }
}

mudarPosition();  // Chama a função inicialmente para definir as posições
