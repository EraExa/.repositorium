let topnavbar = document.querySelector("nav#topnavbar");

function topnavbarSymbolsOrText(event) {
    if (topnavbar != null) {
        let symbols = topnavbar.getElementsByClassName("symbol");
        let text = topnavbar.getElementsByClassName("text");
        if (window.innerWidth < 768) {
            for (var i = 0; i < symbols.length; i++) {
                symbols[i].style.display = "block";
            }
            for (var i = 0; i < text.length; i++) {
                text[i].style.display = "none";
            }
        } else {
            for (var i = 0; i < symbols.length; i++) {
                symbols[i].style.display = "none";
            }
            for (var i = 0; i < text.length; i++) {
                text[i].style.display = "block";
            };
        };
    };
};

window.onresize = topnavbarSymbolsOrText;

topnavbarSymbolsOrText();