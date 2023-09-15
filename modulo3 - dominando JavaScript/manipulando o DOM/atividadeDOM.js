/* Atividade: Light Mode/Dark Mode 
crie uma estrutura básica de projeto front-end (HTML, CSS e JS)
Copie um arquivo chamado script.js, na sua pasta assets/js 
seleione os elementos: h1, button, footer  body
se os elementos possuirem a classe dark-mode, modifique seus estilos. Caso contrário, 
volte os estilos para  o original
*/

function changeMode() {
    changeClasses();
    changeText();
}

function changeClasses() {
    button.classList.toggle('dark-mode');
    h1.classList.toggle('dark-mode');
    body.classList.toggle('dark-mode');
    footer.classList.toggle('dark-mode');
}

function changeText() {
    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darhModeClass)) {
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + "ON";
        return;
    }
    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + 'ON';
}

const button = document.getElementById('mode-selector')
const h1 = document;getElementById('page-title')
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];


button.addEventListener('click', changeMode);