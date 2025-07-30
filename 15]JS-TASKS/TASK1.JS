// CREATE AN HTML PAGE WITH A BUTTON . WHEN THE BUTTON IS CLICKED, CHANGE THE TEXT OF THE A PARAGRAPH ELEMENT.

var btn = document.querySelector('button');
var p = document.querySelector('p');

btn.addEventListener('click' , function(){
    p.textContent = 'Kyu Hila Dala Na Text Change Karke , Vese Bata Du Je JAVASCRIPT Se Kiya Mene 😁👀☠️';
});