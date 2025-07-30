// CREATE A FORM WITH INPUT FIELDS AND A SUBMIT FORM BUTTON. USE JAVASCRIPT TO VALIDATE THE FORM AND DISPLAY AN ERROR MESSAGE IF THE INPUT IS INVALID. 

var form = document.querySelector('form');
var inps = document.querySelector('input[type="text"]');

form.addEventListener("submit" , function(ev){
    ev.preventDefault();
    
    for(var i = 0;i<inps.length; i++){
        if(inps[i].value.trim() === '');
    }
})