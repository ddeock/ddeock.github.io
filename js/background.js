const imgs = ["0.jpg", "1.jpg"];

function backImg(){
    const random = imgs[Math.floor(Math.random() * imgs.length)]
    const imgSrc = `img/${random}`
    document.body.style = `background:url(${imgSrc}) no-repeat center top`;
}
backImg();
