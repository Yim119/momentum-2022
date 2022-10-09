const images = ["img1.jpg", "img2.jpg", "img3.jpg"];
const imgIndex = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");
background.src = `img/${imgIndex}`;
document.body.appendChild(background);
