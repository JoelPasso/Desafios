let time = 3000,
    currentImageIndex = 0,
    imgens = document.querySelectorAll("#instagram-phone img"),
    max = imgens.length;
  
function proximaImagem(){

    imgens[currentImageIndex].classList.remove("select")
    currentImageIndex++
    if(currentImageIndex >= max){
        currentImageIndex = 0 
    }
    imgens[currentImageIndex].classList.add("select")
}



function start(){
    setInterval(() => {
        proximaImagem()
    }, time)
}

window.addEventListener("load", start)