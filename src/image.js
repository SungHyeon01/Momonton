const body = document.querySelector("body"); 

const IMAGE_NUM = 5;

function bgImage(imageNum) {
    const image = new Image();
    image.src = `images/${imageNum + 1}.jpg`;
    image.classList.add("background");
    body.prepend(image);
}

function random(){
    const num = Math.floor(Math.random() * IMAGE_NUM);
    return num;
}

function init(){
    const randomNum = random();
    bgImage(randomNum);
}

init();