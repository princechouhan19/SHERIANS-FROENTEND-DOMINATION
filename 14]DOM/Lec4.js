// CREATING AND DETECTING ELEMENTS:
//     createElement()
//     appendChild()
//     removeChild()

var h1 = document.createElement('h1');
h1.textContent = "prince";
h1.classList.add('makeitred');

document.querySelector("body").appendChild(h1);

var img = document.createElement('img');
img.src = 'https://images.pexels.com/photos/6532351/pexels-photo-6532351.jpeg'
document.querySelector('body').appendChild(img);

document.querySelector('body').removeChild(img);
