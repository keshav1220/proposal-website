// ---------------- LOADING SCREEN ----------------

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading-screen").style.opacity = "0";

        setTimeout(() => {

            document.getElementById("loading-screen").style.display = "none";

        }, 1000);

    }, 2500);

});

// ---------------- STARS ----------------

const stars = document.getElementById("stars");

for(let i=0;i<250;i++){

    let star=document.createElement("span");

    star.className="star";

    star.style.left=Math.random()*100+"vw";

    star.style.top=Math.random()*100+"vh";

    star.style.animationDelay=Math.random()*5+"s";

    star.style.animationDuration=(2+Math.random()*4)+"s";

    star.style.width=(1+Math.random()*3)+"px";

    star.style.height=star.style.width;

    stars.appendChild(star);

}

// ---------------- HEARTS ----------------

const hearts=document.getElementById("hearts");

setInterval(()=>{

    let heart=document.createElement("div");

    heart.className="floating-heart";

    heart.innerHTML="❤";

    heart.style.left=Math.random()*100+"vw";

    heart.style.fontSize=(15+Math.random()*25)+"px";

    heart.style.animationDuration=(5+Math.random()*5)+"s";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

},350);
// =============================
// NO BUTTON AI
// =============================

const noBtn = document.getElementById("noBtn");

let noCount = 0;

const messages = [

"Are you sure? 🥺",

"Think Again ❤️",

"Please 🥹",

"Ek baar aur socho 💕",

"Itna bhi mat satao 😭❤️"

];

function moveNoButton(){

noCount++;
// YES button grows every time NO is avoided
const scale = 1 + (noCount * 0.08);

yesBtn.style.transform = `scale(${Math.min(scale, 1.8)})`;

yesBtn.style.transition = "0.3s";

if(noCount<=messages.length){

noBtn.innerHTML=messages[noCount-1];

}

const padding = 80;

const buttonWidth = noBtn.offsetWidth;
const buttonHeight = noBtn.offsetHeight;

const maxX = window.innerWidth - buttonWidth - padding;
const maxY = window.innerHeight - buttonHeight - padding;

const minX = padding;
const minY = padding;

const randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
const randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

noBtn.style.position="fixed";
noBtn.style.zIndex = "9999";

noBtn.style.left=randomX+"px";

noBtn.style.top=randomY+"px";

if(noCount>=5){

noBtn.style.transform="scale(.8)";

}

if(noCount>=8){

noBtn.style.transform="scale(.6)";

}

if(noCount >= 10){

    noBtn.style.display = "none";

    yesBtn.innerHTML = "❤️ Only YES Left ❤️";

}

}

noBtn.addEventListener("mouseenter",moveNoButton);

noBtn.addEventListener("click",moveNoButton);

noBtn.addEventListener("touchstart",moveNoButton);
// =========================
// YES BUTTON
// =========================

const yesBtn = document.getElementById("yesBtn");
const loveLetter = document.getElementById("loveLetter");
const typingText = document.getElementById("typingText");
const closeBtn = document.getElementById("closeBtn");

const letter = `Dear Mahek ❤️

You make every ordinary day feel magical.

Thank you for every smile,
every laugh,
every memory we create together.

I don't know what tomorrow holds,
but I know I want you beside me.

Will you stay with me
today,
tomorrow,
and forever?

Forever Yours,

❤️ Keshav ❤️`;

// 🎊 CONFETTI
// FLASH EFFECT
function launchFireworks(){

    confetti({
        particleCount: 120,
        angle: 60,
        spread: 70,
        origin: { x: 0 }
    });

    confetti({
        particleCount: 120,
        angle: 120,
        spread: 70,
        origin: { x: 1 }
    });

    confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 }
    });

}
launchFireworks();
const flash = document.getElementById("flash");

flash.style.opacity = "0.9";

setTimeout(() => {

    flash.style.opacity = "0";

}, 180);
confetti({
    particleCount: 180,
    spread: 90,
    origin: {
        y: 0.6
    }
});

// Left Side

setTimeout(() => {

confetti({
    particleCount: 120,
    angle:60,
    spread:80,
    origin:{
        x:0
    }

});

},200);

// Right Side

setTimeout(() => {

confetti({

particleCount:120,

angle:120,

spread:80,

origin:{
x:1
}

});

},200);
yesBtn.addEventListener("click", () => {
    // HEART EXPLOSION

const explosion = document.getElementById("explosion");

for (let i = 0; i < 50; i++) {

    let heart = document.createElement("div");

    heart.className = "explode-heart";

    heart.innerHTML = "💖";

    heart.style.left = "50%";

    heart.style.top = "50%";

    heart.style.setProperty("--x", (Math.random() * 800 - 400) + "px");

    heart.style.setProperty("--y", (Math.random() * 800 - 400) + "px");

    explosion.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 2000);
}
yesBtn.style.transform="scale(1.25)";

setTimeout(()=>{

yesBtn.style.transform="scale(1)";

},250);
    loveLetter.classList.add("show");

    typingText.innerHTML = "";

    let i = 0;

    function type() {

        if (i < letter.length) {

            typingText.innerHTML += letter.charAt(i);

            i++;

            setTimeout(type, 35);

        }

    }

    type();

});

closeBtn.onclick = () => {

    loveLetter.classList.remove("show");

}
// =========================
// SAKURA PETALS
// =========================

const petals = document.getElementById("petals");

setInterval(() => {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.innerHTML = "🌸";

    petal.style.left = Math.random() * 100 + "vw";

    petal.style.fontSize = (18 + Math.random() * 18) + "px";

    petal.style.animationDuration = (6 + Math.random() * 5) + "s";

    petal.style.transform =
        `rotate(${Math.random() * 360}deg)`;

    petals.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    },12000);

},450);
// CLOSE LOVE LETTER

document.getElementById("closeBtn").addEventListener("click", function () {

    document.getElementById("loveLetter").classList.remove("show"); 
    openGallery();

});
// =======================
// MUSIC
// =======================

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

musicBtn.addEventListener("click", async () => {

    try {

        if (music.paused) {

            await music.play();
            musicBtn.textContent = "🔊";

        } else {

            music.pause();
            musicBtn.textContent = "🎵";

        }

    } catch (err) {

        console.error(err);

    }

});
// ========================
// LOVE COUNTER
// ========================

const startDate = new Date("2026-03-01T00:00:00");

function updateCounter(){

const now = new Date();

const diff = now - startDate;

const days = Math.floor(diff/(1000*60*60*24));

const hours = Math.floor((diff%(1000*60*60*24))/(1000*60*60));

const minutes = Math.floor((diff%(1000*60*60))/(1000*60));

document.getElementById("loveCounter").innerHTML =

`${days} Days ❤️ ${hours} Hours ❤️ ${minutes} Minutes`;

}

updateCounter();

setInterval(updateCounter,60000);
// ========================
// CURSOR GLOW
// ========================

const cursorGlow = document.getElementById("cursorGlow");

document.addEventListener("mousemove",(e)=>{

cursorGlow.style.left=e.clientX+"px";

cursorGlow.style.top=e.clientY+"px";

});
// =====================================
// MEMORY GALLERY
// =====================================

const gallery = document.getElementById("gallery");
const galleryImage = document.getElementById("galleryImage");
const galleryBg = document.querySelector(".gallery-bg");
const galleryCaption = document.getElementById("galleryCaption");
const photoNumber = document.getElementById("photoNumber");

const photos = [
{
image:"/static/images/picture1.jpeg",
caption:"❤️ The day you stole my heart ❤️"
},
{
image:"/static/images/picture2.jpeg",
caption:"🥹 Every smile of yours is my favourite."
},
{
image:"/static/images/picture3.jpeg",
caption:"💕 Every moment with you is priceless."
},
{
image:"/static/images/picture4.jpeg",
caption:"🌸 You make my life beautiful."
},
{
image:"/static/images/picture5.jpeg",
caption:"💖 My favourite place is beside you."
},
{
image:"/static/images/picture6.jpeg",
caption:"✨ Thank you for choosing me."
},
{
image:"/static/images/picture7.jpeg",
caption:"❤️ Forever starts with you ❤️"
}
];

let currentPhoto = 0;
let autoSlide;

function loadPhoto(index){
    galleryImage.style.opacity = "0";

setTimeout(() => {

    galleryImage.src = photos[index].image;

    galleryBg.style.backgroundImage =
        `url('${photos[index].image}')`;

    galleryCaption.innerHTML = photos[index].caption;

    photoNumber.innerHTML =
        `${index + 1} / ${photos.length}`;

    galleryImage.style.opacity = "1";

},250);

    galleryImage.src = photos[index].image;

    galleryBg.style.backgroundImage =
        `url('${photos[index].image}')`;

    galleryCaption.innerHTML =
        photos[index].caption;

    photoNumber.innerHTML =
        `${index+1} / ${photos.length}`;
galleryImage.style.opacity = "0";

setTimeout(() => {

    galleryImage.src = photos[index].image;

    galleryBg.style.backgroundImage =
        `url('${photos[index].image}')`;

    galleryCaption.innerHTML = photos[index].caption;

    photoNumber.innerHTML =
        `${index + 1} / ${photos.length}`;

    galleryImage.style.opacity = "1";

},250);
}

function nextPhoto(){

    currentPhoto++;

    if(currentPhoto >= photos.length){

        clearInterval(autoSlide);

        gallery.style.display = "none";

        gallery.classList.remove("show");

document.getElementById("finalScreen").classList.add("show");

        return;

    }

    loadPhoto(currentPhoto);

}

function prevPhoto(){

    currentPhoto--;

    if(currentPhoto < 0){

        currentPhoto = 0;

    }

    loadPhoto(currentPhoto);

}

document.getElementById("nextPhoto").onclick = nextPhoto;

document.getElementById("prevPhoto").onclick = prevPhoto;

function openGallery(){

    gallery.classList.add("show");

    currentPhoto = 0;

    loadPhoto(currentPhoto);

    autoSlide = setInterval(nextPhoto,5000);

}
document.addEventListener("keydown",(e)=>{

    if(!gallery.classList.contains("show")) return;

    if(e.key==="ArrowRight"){

        nextPhoto();

    }

    if(e.key==="ArrowLeft"){

        prevPhoto();

    }

});
document.getElementById("restartBtn").onclick = () => {

location.reload();

};