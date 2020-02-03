const knapp = document.querySelector("#knapp");
const bilde1 = document.querySelector("#en");
const bilde2 = document.querySelector("#to");
const bilde3 = document.querySelector("#tre");
const bilde4 = document.querySelector("#fire");
const bilde5 = document.querySelector("#fem");
const tekst = document.querySelector(".tekst");
const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const sirkel = document.querySelector("#sirkel");
const lockDeler = document.querySelector(".lock-deler");
const strek = document.querySelector("#strek");
const lockSirkel = document.querySelector("#lock-sirkel");
const klonedel = document.querySelector(".klonedel");
const spillav = document.querySelector("#spillav");
const kameraTekst = document.querySelector(".kamera-tekst");
const lock = document.querySelector("#lock");
const bakgrunn2 = document.querySelector(".bakgrunn2");
const chipTekst = document.querySelector(".chip-tekst");
const chipEkstraTekst = document.querySelector(".chip-ekstratekst");


bilde2.style.left = 794 + "px"

const bilde2Keyframes = [
    {left:"794px"},
    {left:"900px"}
];

const bilde2Settings = {
    duration: 1000,
    fill:"forwards"
}

bilde1.style.left = 710 + "px"

const bilde1Keyframes = [
    {left:"714px"},
    {left:"812px"}
];

const bilde1Settings = {
    duration: 1000,
    fill:"forwards"
}

bilde3.style.left = -120 + "px"

const bilde3Keyframes = [
    {left:"-120px"},
    {left:"730px"}
];

const bilde3Settings = {
    duration: 1000,
    fill:"forwards"
}

bilde4.style.left = -140 + "px"

const bilde4Keyframes = [
    {left:"-140px"},
    {left:"647px"}
];

const bilde4Settings = {
    duration: 1000,
    fill:"forwards",
    delay:100
}

bilde5.style.left = -140 + "px"

const bilde5Keyframes = [
    {left:"-160px"},
    {left:"577px"}
];

const bilde5Settings = {
    duration: 1000,
    fill:"forwards",
    delay:200
}

knapp.onclick = () => {
    bilde2.animate(bilde2Keyframes,bilde2Settings);
    bilde1.animate(bilde1Keyframes,bilde1Settings);
    bilde3.animate(bilde3Keyframes,bilde3Settings);
    bilde4.animate(bilde4Keyframes,bilde4Settings);
    bilde5.animate(bilde5Keyframes,bilde5Settings);
    knapp.disabled = true;
}

function flyttTekst() {
    tekst.style.bottom = (scrollY/1.7) + "px";
}

window.addEventListener("scroll",flyttTekst);

console.log(scrollY);

let lys = 0;

function endreBrightness(evt) {
    
    const faktor = 0.65;
    let lys = faktor * scrollY / innerHeight;

    if(lys > 1.1) {
        lys = 1.1;
    }

    bakgrunn2.style.filter = `brightness(${lys})`;
}

window.addEventListener("scroll", endreBrightness);

sirkel.style.backgroundColor = "white"
sirkel.style.left = 386.5 + "px"
sirkel.style.transform = `scale(0.9)`

const sirkelKeyframes = [
    {left: "386.5px", backgroundColor:"white", transform:`scale(1)`},
    {left: "386.5px", backgroundColor:"white", transform:`scale(0.9)`},
    {left: "386.5px", backgroundColor:"red", transform:`scale(1.5)`},
    {left: "386.5px", backgroundColor:"red", transform:`scale(1.2)`},
    {left: "386.5px", backgroundColor:"red", transform:`scale(1)`}
]

const sirkelSettings = {
    delay: 400,
    duration: 510,
    fill:"both",
    easing:"linear"
}

strek.style.width = 0 + "px"
strek.style.opacity = 1

const strekKeyframes = [
    {width: "0px", opacity:1, left:"531px", height:"2.5px"},
    {width:"162px", opacity:1, left:"531px", height:"2.5px"}
]

const strekSettings = {
    delay: 470,
    duration:400,
    fill:"both",
    easing:"linear"
}


lockDeler.opacity = 0

const lockDelerKeyframes = [
    {opacity: "0"},
    {opacity:"1"}
]

const lockDelerSettings = {
    delay: 570,
    duration:400,
    fill:"both",
    easing:"linear"
}


const klone = sirkel.cloneNode();
klone.id = "klone"

klonedel.appendChild(klone);

sirkel.style.left = 386.5 + "px"
sirkel.style.transform = `scale(1)`
sirkel.style.backgroundColor = "white"

const sirkelLeftKeyframes = [
    {left: "386.5px", transform: `scale(1)`, backgroundColor: "red" },
    {left: "394.5px", transform: `scale(1)`, backgroundColor: "red" },
    {left:"694.5px", transform: `scale(0.8)`, backgroundColor: "white"}
]

const sirkelLeftSettings = {
    delay: 2900,
    duration: 500,
    fill:"forwards",
    easing:"linear"
}

lock.style.opacity = 1

const fjernLockKeyframes = [
    {opacity:1},
    {opacity:0}
]

const fjernLockSettings = {
    delay: 3100,
    duration: 150,
    fill:"both",
    easing:"linear"
}


lockSirkel.style.transform = `scale(1)`
lockSirkel.style.border = `4px solid rgba(235, 228, 228, 0.4)`


const lockSirkelKeyframes = [
    {transform: `scale(1)`, border: `4px solid rgba(235, 228, 228, 0.4)`},
    {transform: `scale(1.4)`, border: `4px solid #fff`}
]

const lockSirkelSettings = {
    delay: 2900,
    duration:500,
    fill:"both",
    easing:"linear"
}

strek.style.opcity = 1

const fjernStrekKeyframes = [
    {opacity: "1"},
    {opacity: "0"}
]

const fjernStrekSettings = {
    delay: 2890,
    duration:400,
    fill:"both",
    easing:"linear"
}

klone.style.width = 110 + "px"
klone.style.height = 110 + "px"
klone.style.left = 386.5 + "px"
klone.style.top = 113 + "px"
klone.style.borderRadius = "50%"

const kloneKeyframes = [
    {width: "110px", height:"110px",left:"386.5px", top:"113px", borderRadius:"50%", backgroundColor:"red"},
    {width: "65px", height: "65px", left:"410px", top:"135px",borderRadius:"12px", backgroundColor:"red"}
]

const kloneSettings = {
    delay: 2900,
    duration:600,
    fill:"forwards",
    easing:"linear"
}

function startAnimasjon() {
    sirkel.animate(sirkelKeyframes,sirkelSettings);
    strek.animate(strekKeyframes,strekSettings);
    lockDeler.animate(lockDelerKeyframes,lockDelerSettings);
    sirkel.animate(sirkelLeftKeyframes,sirkelLeftSettings);
    lock.animate(fjernLockKeyframes,fjernLockSettings);
    lockSirkel.animate(lockSirkelKeyframes,lockSirkelSettings);
    strek.animate(fjernStrekKeyframes,fjernStrekSettings);
    const kloneanimasjon = klone.animate(kloneKeyframes,kloneSettings);

    kloneanimasjon.onfinish = () => {
        kameraTekst.style.display = "inline"
    }
}

kameraTekst.onclick = () => {
    startAnimasjon();
    kameraTekst.style.display = "none";
}

function sjekkPosisjon() {
    console.log("scroller");
    if(scrollY >= 1.8 * innerHeight) {
        startAnimasjon();
        document.removeEventListener("scroll", sjekkPosisjon);
    }
}

document.addEventListener("scroll", sjekkPosisjon);



function flyttDeg() {
    chipTekst.style.bottom = scrollY/4 + "px";
}

window.addEventListener("scroll",flyttDeg);


function flyttDeg2() {
    chipEkstraTekst.style.bottom = scrollY/4 + "px";
}

window.addEventListener("scroll",flyttDeg2);


let synlighet = 0;
let faktor = 0;

function endreOpacity(evt) {
    if(scrollY >= 2.6 * innerHeight) {
        faktor = 0.05;
        synlighet = faktor * scrollY / innerHeight;
    }

    if(synlighet >= 0.155) {
        faktor = 0.21;
        synlighet = faktor * scrollY / innerHeight;
    }

    if(synlighet > 1.1) {
        synlighet = 1.1;
    }
    chipTekst.style.opacity = synlighet;
    chipEkstraTekst.style.opacity = synlighet;
}

window.addEventListener("scroll", endreOpacity);



