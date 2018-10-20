let plotno = document.querySelector('#plotno');

const zdjecie = "./img/zdjecie.jpg";

let ctx = plotno.getContext('2d');

let img = new Image();

img.src = zdjecie;

//Canvas
img.addEventListener('load', (e)=> {
    ctx.drawImage(img, 0, 0, plotno.width, plotno.height);
});

btnRun.addEventListener('click', (e)=>{
    let imageData = ctx.getImageData(0,0, plotno.width, plotno.height);
    console.log(imageData);
});

