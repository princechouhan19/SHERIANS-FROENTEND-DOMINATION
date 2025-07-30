// EVENT HANDLING:
//     addEventListener()

var btn = document.querySelector('button');
btn.addEventListener('click' , function(){
    btn.textContent = 'Starting...';
    btn.style.backgroundColor = 'pink';
    btn.style.border = '2px solid black';
    btn.style.borderRadius = '20px';
    btn.style.fontSize = '28px';
    btn.style.padding = '6px 8px';
}); 