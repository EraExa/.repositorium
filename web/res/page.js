let topnavbar = document.querySelector("nav#topnavbar");
let leftnavbar = document.querySelector("nav#leftnavbar");

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
        if (window.innerWidth < 1008) {
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

window.onresize = topnavbarSymbolsOrText;
topnavbarSymbolsOrText();