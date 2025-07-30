var tl = gsap.timeline()

gsap.from("#nav h3" , {
    y:-50,
    delay:'.6',
    duration:'1',
    opacity:'0',
    stagger:'.4',
})

tl.from("#center h1" , {
    x:'-500',
    opacity:'0',
    duration:'1',
    delay:'0.6',
    stagger:".8"
})

tl.from("#center img" , {
    x:100,
    rotate:45,
    opacity:0,
    duration:0.5,
    stagger:0.5,
})

gsap.from('#footer h3' , {
    y:21,
    delay:'.6',
    duration:'2',
    opacity:'0',
    stagger:'.4',
})