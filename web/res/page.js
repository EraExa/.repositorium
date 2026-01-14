const topnavbar = document.querySelector("nav#topnavbar");
const leftnavbar = document.querySelector("nav#leftnavbar");
const welcome = document.querySelector("#welcome");

function openproject(event) {
    if (leftnavbar != null) {
        let elem = leftnavbar.querySelector("#project");
        if (elem.style.display != "none") {
            elem.style.display = "none";
        } else {
            elem.style.display = "block";
        }
    }
};

function opencodebase(event) {
    if (leftnavbar != null) {
        let elem = leftnavbar.querySelector("#codebase");
        if (elem.style.display != "none") {
            elem.style.display = "none";
        } else {
            elem.style.display = "block";
        }
    }
};

function opencodefi(event) {
    if (leftnavbar != null) {
        let elem = leftnavbar.querySelector("#codefi");
        if (elem.style.display != "none") {
            elem.style.display = "none";
        } else {
            elem.style.display = "block";
        }
    }
};

function topnavbarSymbolsOrText(event) {
    if (topnavbar != null) {
        let symbols = topnavbar.getElementsByClassName("symbol");
        let text = topnavbar.getElementsByClassName("text");
        let logo = topnavbar.getElementsByClassName("logo");
        if (window.innerWidth < 768) {
            for (var i = 0; i < symbols.length; i++) {
                symbols[i].style.display = "block";
            }
            for (var i = 0; i < text.length; i++) {
                text[i].style.display = "none";
            }
            for (var i = 0; i < logo.length; i++) {
                logo[i].style.display = "none";
            }
        } else {
            for (var i = 0; i < symbols.length; i++) {
                symbols[i].style.display = "none";
            }
            for (var i = 0; i < text.length; i++) {
                text[i].style.display = "block";
            };
            for (var i = 0; i < logo.length; i++) {
                logo[i].style.display = "inline-block";
            }
        };
    };
};

const navtoggle = document.querySelector(".mainnavtoggle");
const subnavtoggle = document.querySelector(".subnavtoggle");

const main = document.querySelector("main");
const nav = document.querySelector("nav");

const followtoggle = document.querySelector(".followtoggle");
const flowtoggle = document.querySelector(".flowtoggle");
const actiontoggle = document.querySelector(".actiontoggle");
const maneuvertoggle = document.querySelector(".maneuvertoggle");
const unitedtoggle = document.querySelector(".unitedtoggle");
const elitetoggle = document.querySelector(".elitetoggle");
const followertoggle = document.querySelector(".followertoggle");
const ethertoggle = document.querySelector(".ethertoggle");

const followdbtoggle = document.querySelector(".followdbtoggle");
const structurestoggle = document.querySelector(".structurestoggle");
const numberstoggle = document.querySelector(".numberstoggle");
const tensorstoggle = document.querySelector(".tensorstoggle");
const objectstoggle = document.querySelector(".objectstoggle");

const mainnav = document.querySelector("#left");
const breakboard = document.querySelector("#breakboard");
const subnav = document.querySelector("#right");

const follownav = document.querySelector(".follownav");
const flownav = document.querySelector(".flownav");
const actionnav = document.querySelector(".actionnav");
const maneuvernav = document.querySelector(".maneuvernav");
const unitednav = document.querySelector(".unitednav");
const elitenav = document.querySelector(".elitenav");
const followernav = document.querySelector(".followernav");
const ethernav = document.querySelector(".ethernav");

const followdbnav = document.querySelector(".followdbnav");
const structuresnav = document.querySelector(".structuresnav");
const numbersnav = document.querySelector(".numbersnav");
const tensorsnav = document.querySelector(".tensorsnav");
const objectsnav = document.querySelector(".objectsnav");

navtoggle.addEventListener('mouseenter', () => {
    if ((mainnav != null) && (breakboard != null)) {
        mainnav.style.opacity = "50%";
        breakboard.style.opacity = "50%";
    };
    if ((follownav != null) && (followdbnav != null)) {
        let elems = document.querySelectorAll("#breakboard #navigation #container");
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.toggle("highlight");
        };
    };
});

navtoggle.addEventListener('mouseleave', () => {
    if ((mainnav != null) && (breakboard != null)) {
        if (mainnav.style.display == "grid") {
            mainnav.style.opacity = "100%";
            breakboard.style.opacity = "0%";
        } else {
            mainnav.style.opacity = "0%";
            breakboard.style.opacity = "100%";
        };
    };
    if ((follownav != null) && (followdbnav != null)) {
        let elems = document.querySelectorAll("#breakboard #navigation #container");
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.toggle("highlight");
        };
    };
});

function togglenav(event) {
    if ((mainnav != null) && (breakboard != null)) {
        if (mainnav.style.display != "grid") {
            mainnav.style.display = "grid";
            mainnav.style.display = "100%";
            breakboard.style.display = "none";
            breakboard.style.display = "100%";
        } else {
            mainnav.style.display = "none";
            mainnav.style.display = "100%";
            breakboard.style.display = "grid";
            breakboard.style.display = "100%";
        };
    };
};

navtoggle.addEventListener('click', togglenav);

subnavtoggle.addEventListener('mouseenter', () => {
    if (subnav != null) {
        if (subnav.style.opacity != "50%") {
            subnav.style.opacity = "50%";
        };
    };
});

subnavtoggle.addEventListener('mouseleave', () => {
    if (subnav != null) {
        if (subnav.style.opacity != "100%") {
            subnav.style.opacity = "100%";
        };
    };
});

subnavtoggle.addEventListener('click', () => {
    if (subnav != null) {
        if (subnav.style.display != "none") {
            subnav.style.display = "none";
            subnav.style.innerWidth = "0px";
        } else {
            subnav.style.display = "block";
            subnav.style.innerWidth = "12.5vw";
        };
    };
});

followtoggle.addEventListener('click', () => {
    if (follownav != null) {
        if (follownav.style.display == "block") {
            follownav.style.display = "none";
        } else {
            follownav.style.display = "block";
        };
    };
});

flowtoggle.addEventListener('click', () => {
    if (flownav != null) {
        if (flownav.style.display == "block") {
            flownav.style.display = "none";
        } else {
            flownav.style.display = "block";
        };
    };
});

actiontoggle.addEventListener('click', () => {
    if (actionnav != null) {
        if (actionnav.style.display == "block") {
            actionnav.style.display = "none";
        } else {
            actionnav.style.display = "block";
        };
    };
});

maneuvertoggle.addEventListener('click', () => {
    if (maneuvernav != null) {
        if (maneuvernav.style.display == "block") {
            maneuvernav.style.display = "none";
        } else {
            maneuvernav.style.display = "block";
        };
    };
});

unitedtoggle.addEventListener('click', () => {
    if (unitednav != null) {
        if (unitednav.style.display == "block") {
            unitednav.style.display = "none";
        } else {
            unitednav.style.display = "block";
        };
    };
});

elitetoggle.addEventListener('click', () => {
    if (elitenav != null) {
        if (elitenav.style.display == "block") {
            elitenav.style.display = "none";
        } else {
            elitenav.style.display = "block";
        };
    };
});

followertoggle.addEventListener('click', () => {
    if (followernav != null) {
        if (followernav.style.display == "block") {
            followernav.style.display = "none";
        } else {
            followernav.style.display = "block";
        };
    };
});

ethertoggle.addEventListener('click', () => {
    if (ethernav != null) {
        if (ethernav.style.display == "block") {
            ethernav.style.display = "none";
        } else {
            ethernav.style.display = "block";
        };
    };
});

followdbtoggle.addEventListener('click', () => {
    if (followdbnav != null) {
        if (followdbnav.style.display == "block") {
            followdbnav.style.display = "none";
        } else {
            followdbnav.style.display = "block";
        };
    };
});

structurestoggle.addEventListener('click', () => {
    if (structuresnav != null) {
        if (structuresnav.style.display == "block") {
            structuresnav.style.display = "none";
        } else {
            structuresnav.style.display = "block";
        };
    };
});

numberstoggle.addEventListener('click', () => {
    if (numbersnav != null) {
        if (numbersnav.style.display == "block") {
            numbersnav.style.display = "none";
        } else {
            numbersnav.style.display = "block";
        };
    };
});

tensorstoggle.addEventListener('click', () => {
    if (tensorsnav != null) {
        if (tensorsnav.style.display == "block") {
            tensorsnav.style.display = "none";
        } else {
            tensorsnav.style.display = "block";
        };
    };
});

objectstoggle.addEventListener('click', () => {
    if (objectsnav != null) {
        if (objectsnav.style.display == "block") {
            objectsnav.style.display = "none";
        } else {
            objectsnav.style.display = "block";
        };
    };
});

welcome.addEventListener('click', () => {
    if (topnavbar != null) {
        topnavbar.querySelector("#buttons").style.display = "block";
        welcome.style.display = "none";
        togglenav();
        subnav.style.display = "block";
        subnav.style.innerWidth = "12.5vw";
    };
});

let slide = 1;
function slideshow(index) {
    let splash = document.querySelector("header div#container div#splash");
    if (splash != null) {
        let controller = document.getElementById("controller");
        let slides = splash.getElementsByClassName("slide");
        if (controller != null) {
            let controllers = controller.getElementsByClassName("selector");
            if ((slides != null) && (controllers != null)) {
                for (var i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                };
                for (var i = 0; i < controllers.length; i++) {
                    controllers[i].className = controllers[i].className.replace("selected", "");
                };
                let idx = index % slides.length;
                slides[Math.min(idx, slides.length)].style.display = "block";
                controllers[idx].classList.toggle("selected");
                slide = idx;
            };
        };
    };
};

function sparse(idx) {
    if (window.innerWidth < 760) {
        return "first";
    } else if (window.innerWidth < 1152) {
        if (idx % 2 == 0) { return "first"; };
        if (idx % 2 == 1) { return "second"; };
    } else if (window.innerWidth < 2304) {
        if (idx % 4 == 0) { return "first"; };
        if (idx % 4 == 1) { return "second"; };
        if (idx % 4 == 2) { return "third"; };
        if (idx % 4 == 3) { return "fourth"; };
    } else if (window.innerWidth > 2304) {
        if (idx % 8 == 0) { return "first"; };
        if (idx % 8 == 1) { return "second"; };
        if (idx % 8 == 2) { return "third"; };
        if (idx % 8 == 3) { return "fourth"; };
        if (idx % 8 == 4) { return "fifth"; };
        if (idx % 8 == 5) { return "sixth"; };
        if (idx % 8 == 6) { return "seventh"; };
        if (idx % 8 == 7) { return "eight"; };
    };
};

window.onresize = function () {
    for (var i = 1; i <= 8; i++) {
        let elems = main.getElementsByClassName("resize" + i);
        for (var j = 0; j < elems.length; j++) { elems[j].id = sparse(i-1); };
    };
};

let slidetimer = setInterval(() => {
    slideshow(slide);
    slide += 1;
}, 5000);

setTimeout(() => {
    slideshow(slide);
    slide += 1;
}, 2000);

for (var i = 1; i <= 8; i++) {
    let temp = main.getElementsByClassName("resize" + i);
    for (var j = 0; j < temp.length; j++) { temp[j].id = sparse(i-1); };
};

window.onresize = topnavbarSymbolsOrText;
topnavbarSymbolsOrText();