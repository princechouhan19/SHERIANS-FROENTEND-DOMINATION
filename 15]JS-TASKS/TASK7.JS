//DISPLAY A PROCESS BAR THAT UPDATES IN REAL-TIME , SHOWING THE PROGRESS OF A TASK , DOWNLOAD OR FOR FORM SUBMITTION.

var prg = document.querySelector('#progress');
var h3 = document.querySelector('h3');

var count = 0;
var int = setInterval(function(){
    if(count === 100){
        h3.style.opacity = 1;
        clearInterval(int);
    };
    count++;
    prg.style.width = count+'%';
}, 100);