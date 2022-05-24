function changeMode(){
    body.classList.toggle('body-teste');
}

const button = document.getElementById('toggle');
const body = document.getElementsByTagName('body')[0];

button.addEventListener('click',changeMode)