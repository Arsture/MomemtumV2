const img =[
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "8.jpg",
    "9.jpg"
];

const todayImg = img[Math.floor(Math.random() * img.length)];
const source =`img/${todayImg}`;
const body = document.body;

body.style.background = `url(${source})`;
body.style.backgroundSize = "cover";
body.style.backgroundPosition = "center";
body.style.backgroundRepeat = "no-repeat";
body.style.backdropFilter = "grayscale(70%)";
