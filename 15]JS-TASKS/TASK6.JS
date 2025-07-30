// CREATE A TABBER INTERFACE WHERE CLICKING ON TABS DISPLAYS DIFFERENT CONTENT SECTIONS WITHOUT PAGE RELOAD.

var divs = document.querySelectorAll('.tab'); // Select all .tab elements
var texts = document.querySelectorAll('h3'); // Select all h3 elements

// Show the first h3 by default
if (texts.length > 0) {
    texts[0].style.display = 'block';
    texts[0].style.width = '93%';
}

divs.forEach(function(div, index) {
    div.addEventListener("click", function() {
        hideAllText();
        if (texts[index]) { // Ensure the corresponding h3 exists
            texts[index].style.display = 'block';
            texts[index].style.width = '93%';
        }
    });
});

function hideAllText() {
    texts.forEach(function(text) {
        text.style.display = "none";
    });
}