gsap.to("#box1" , {
    x:'1000px',
    delay:'2s',
    duration:'10',
    rotate:'360deg',
    backgroundColor: "rgb(53, 53, 255)",
    scale:1.5,
})

gsap.from("#box2" , {
    x:'1000px',
    delay:'2s',
    duration:'10',
    rotate:'360deg',
    backgroungColor: "rgb(0, 255, 255)",
    scale:1.5,
})


//timeline 
var tl = gsap.timeline()

tl.to("#nano" , {
    x:1000,
    delay:1,
    duration:6,
    scale:2,
})

tl.to("#f1" , {
    x:1100,
    delay:1,
    duration:1,
    scale:2,
})