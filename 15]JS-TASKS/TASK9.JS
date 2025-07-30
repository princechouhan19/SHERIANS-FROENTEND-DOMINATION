//CREATE A CHARACTER COUNTER FOR A TEXT AREA OR INPUT FIELD, WHICH UPDATES IN REAL-TIME  USER TYPES AND ENFORCES A CHARACTER LIMIT.

var txtarea = document.querySelector('textarea');
var counter = document.querySelector('#counter');

txtarea.addEventListener("input" , function(){
    counter.textContent = txtarea.value.length;
})