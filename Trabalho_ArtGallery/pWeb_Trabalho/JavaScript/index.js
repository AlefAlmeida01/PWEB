function goBack(){
    window.history.back()
}

var header = document.getElementById('header');
var navigationHeader = document.getElementById('navigation_header');
var content = document.getElementById('content');
var showSidebar = false;

function toggleSidebar() {
    showSidebar = !showSidebar;
    if (showSidebar) {
        navigationHeader.style.marginLeft = '-10vw';
        navigationHeader.style.animationName = 'showSidebar';
        content.style.filter = 'blur(2px)';
    }
    else {
        navigationHeader.style.marginLeft = '-100vw';
        navigationHeader.style.animationName = '';
        content.style.filter = '';
    }
}

function closeSidebar() {
    if (showSidebar) {
        toggleSidebar();
    }
}

/*Todas as Imagens*/

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const grupoImagens = document.querySelector(".Grupo_Imagens");
const imagens = document.querySelectorAll(".Imagens");
const numImages = imagens.length;
let currentIndex = 0;

prevButton.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + numImages) % numImages;
    scrollGallery();
});

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1 + numImages) % numImages;
    scrollGallery();
});

function scrollGallery() {
    const imageWidth = grupoImagens.clientWidth / numImages;
    grupoImagens.style.transition = "transform 0.5s ease-in-out";
    grupoImagens.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
}

scrollGallery();

/*Surrealimo*/

const prevButton1 = document.getElementById("prevButton1");
const nextButton1 = document.getElementById("nextButton1");
const grupoImagens1 = document.querySelector(".Grupo_Imagens1");
const imagens1 = document.querySelectorAll(".Imagens1");
const numImages1 = imagens1.length;
let currentIndex1 = 0;

prevButton1.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 - 1 + numImages1) % numImages1;
    scrollGallery1();
});

nextButton1.addEventListener("click", () => {
    currentIndex1 = (currentIndex1 + 1 + numImages1) % numImages1;
    scrollGallery1();
});

function scrollGallery1() {
    const imageWidth1 = grupoImagens1.clientWidth / numImages1;
    grupoImagens1.style.transition = "transform 0.5s ease-in-out";
    grupoImagens1.style.transform = `translateX(-${currentIndex1 * imageWidth1}px)`;
}

scrollGallery1();

/*Personagens*/

const prevButton2 = document.getElementById("prevButton2");
const nextButton2 = document.getElementById("nextButton2");
const grupoImagens2 = document.querySelector(".Grupo_Imagens2");
const imagens2 = document.querySelectorAll(".Imagens2");
const numImages2 = imagens2.length;
let currentIndex2 = 0;

prevButton2.addEventListener("click", () => {
    currentIndex2 = (currentIndex2 - 1 + numImages2) % numImages2;
    scrollGallery2();
});

nextButton2.addEventListener("click", () => {
    currentIndex2 = (currentIndex2 + 1 + numImages2) % numImages2;
    scrollGallery2();
});

function scrollGallery2() {
    const imageWidth2 = grupoImagens2.clientWidth / numImages2;
    grupoImagens2.style.transition = "transform 0.5s ease-in-out";
    grupoImagens2.style.transform = `translateX(-${currentIndex2 * imageWidth2}px)`;
}

scrollGallery2();

/*Clássico*/

const prevButton3 = document.getElementById("prevButton3");
const nextButton3 = document.getElementById("nextButton3");
const grupoImagens3 = document.querySelector(".Grupo_Imagens3");
const imagens3 = document.querySelectorAll(".Imagens3");
const numImages3 = imagens3.length;
let currentIndex3 = 0;

prevButton3.addEventListener("click", () => {
    currentIndex3 = (currentIndex3 - 1 + numImages3) % numImages3;
    scrollGallery3();
});

nextButton3.addEventListener("click", () => {
    currentIndex3 = (currentIndex3 + 1 + numImages3) % numImages3;
    scrollGallery3();
});

function scrollGallery3() {
    const imageWidth3 = grupoImagens3.clientWidth / numImages3;
    grupoImagens3.style.transition = "transform 0.5s ease-in-out";
    grupoImagens3.style.transform = `translateX(-${currentIndex3 * imageWidth3}px)`;
}

scrollGallery3();

/*Paisagens*/

const prevButton4 = document.getElementById("prevButton4");
const nextButton4 = document.getElementById("nextButton4");
const grupoImagens4 = document.querySelector(".Grupo_Imagens4");
const imagens4 = document.querySelectorAll(".Imagens4");
const numImages4 = imagens4.length;
let currentIndex4 = 0;

prevButton4.addEventListener("click", () => {
    currentIndex4 = (currentIndex4 - 1 + numImages4) % numImages4;
    scrollGallery4();
});

nextButton4.addEventListener("click", () => {
    currentIndex4 = (currentIndex4 + 1 + numImages4) % numImages4;
    scrollGallery4();
});

function scrollGallery4() {
    const imageWidth4 = grupoImagens4.clientWidth / numImages4;
    grupoImagens4.style.transition = "transform 0.5s ease-in-out";
    grupoImagens4.style.transform = `translateX(-${currentIndex4 * imageWidth4}px)`;
}

scrollGallery4();