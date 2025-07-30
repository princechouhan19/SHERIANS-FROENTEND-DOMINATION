//CREATE AN UNORDERED LIST. ALLOW USER TO ADD AND REMOVE LIST ITEMS DYNAMICALLY USING BUTTONS.

var Add = document.getElementById('Add');
var Remove = document.getElementById('Remove');
var inp = document.querySelector('input');
var ul = document.querySelector('ul');
var li;

Add.addEventListener('click' , function(){
    if(inp.value.trim() === ''){}
    else{
        li = document.createElement('li');
        li.textContent = inp.value;
        ul.appendChild(li);
        inp.value = ''; 
        li.style.color = '#fff';
        li.style.margin = '44px';
    }
})

Remove.addEventListener('click' , function(){
    ul.removeChild(li);
})