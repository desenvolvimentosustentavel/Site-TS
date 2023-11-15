var header = document.getElementById("header");
var opcoesHeader = document.getElementById("opcoesHeader");
var content = document.getElementById("content");
var SideBar = false;

function toggleSideBar()
{
    SideBar = !SideBar;

    if(SideBar){
        opcoesHeader.style.marginLeft = "-10vw";
        opcoesHeader.style.animationName = "SideBar";
        content.style.filter = 'blur(2px)';
    }else{
        opcoesHeader.style.marginLeft= "-100vw";
        opcoesHeader.style.animationName = "";
        content.style.filter = '';
    }
}

function closeSideBar(){
    
    if(SideBar){
        toggleSideBar();
    }
}

window.addEventListener('resize', function(event){
    if(window.innerWidth = 1000 && SideBar){
        toggleSideBar();
    }
})

var mineracao2 = document.getElementById("parte21");
var botaoParte2 = document.getElementById("botaoMineracao")
document.getElementById("botaoMineracao").onclick = expandirMineracao;
var expandir = false;

function expandirMineracao() {

    expandir = !expandir;

    if (expandir){
        mineracao2.style.display = "grid";
        mineracao2.style.transform = "translateY(0)";
        mineracao2.style.opacity = "1";
        mineracao2.style.transition = "transform 0.3s, opacity 0.3s";
        mineracao2.style.animation = "flyIn 0.5s ease-in-out";

    }else{
        mineracao2.style.display = "none";
    }
}


botaoMineracao.addEventListener("click", () => {
    botaoMineracao.classList.toggle("arrow-up");
    botaoMineracao.classList.toggle("arrow-down");
});

var logistica2 = document.getElementById("parte31");
var botaoLogistica = document.getElementById("botaoLogistica");
document.getElementById("botaoLogistica").onclick = expandirLogistica;
var expandir2 = false;

function expandirLogistica() {

    expandir2 = !expandir2;

    if (expandir2){
        logistica2.style.display = "grid";
        logistica2.style.transform = "translateY(0)";
        logistica2.style.opacity = "1";
        logistica2.style.transition = "transform 0.3s, opacity 0.3s";
        logistica2.style.animation = "flyIn 0.5s ease-in-out";

    }else{
        logistica2.style.display = "none";
    }
}

botaoLogistica.addEventListener("click", () => {
    botaoLogistica.classList.toggle("arrow-up");
    botaoLogistica.classList.toggle("arrow-down");
});

var guiaButton = document.getElementById("guia");
var containerGuia = document.getElementById("containerGuia");
var container = document.getElementById("container");
var main = document.getElementById("main");

guiaButton.addEventListener("click", function () {
    containerGuia.classList.remove("hidden");
    main.style.filter = "blur(7px)";
});

containerGuia.addEventListener("click", function (event) {
    if (event.target != container) {
        containerGuia.classList.add("hidden");
        main.style.filter = "blur(0px)";
    }
});

const scrollToTopButton = document.getElementById('scrollToTop');
const scrollToBottomButton = document.getElementById('scrollToBottom');

window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }

    if (window.scrollY + window.innerHeight < document.body.scrollHeight - 500) {
        scrollToBottomButton.style.display = 'block';
    } else {
        scrollToBottomButton.style.display = 'none';
    }
});

let currentSection = 1; // Inicialmente, a seção atual é a primeira

document.getElementById('scrollToTop').addEventListener('click', function() {
   scrollToSection('parte1');
   currentSection = 1; // Defina o índice da seção atual como 1
});

document.getElementById('scrollToBottom').addEventListener('click', function() {
   if (currentSection < 5) { // Verifique se não estamos na última seção
       currentSection++; // Atualize o índice da seção atual
       var nextSectionId = 'parte' + currentSection;
       scrollToSection(nextSectionId);
   }
});

function scrollToSection(sectionId) {
   const targetSection = document.getElementById(sectionId);
   if (targetSection) {
       targetSection.scrollIntoView({ behavior: 'smooth' });
   }
}