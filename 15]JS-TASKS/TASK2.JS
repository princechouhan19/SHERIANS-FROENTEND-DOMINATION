// CREATE A PAGE WITH TWO IMAGES AND A BUTTON.  WHEN THE BUTTON IS CLICKED SWAP THE SOURCE ATTRIBUTE OF IMAGE.

const img1 = document.querySelector('#img1');
const img2 = document.querySelector('#img2');
const button = document.querySelector('button');

button.addEventListener('click', function() {
    const src1 = img1.src;
    const src2 = img2.src;
    
    img1.src = src2;
    img2.src = src1;
});
