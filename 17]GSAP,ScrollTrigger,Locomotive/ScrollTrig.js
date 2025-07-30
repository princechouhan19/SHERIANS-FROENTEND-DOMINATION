gsap.from("#circle" , {
    scale:'0.1',
    duration:'2',
    delay:'0.1',
    rotate:'720',
    scrollTrigger:{
        trigger: "circle",
        scroller:"body",
        markers:"true",
        scrub:'5',
    }
})