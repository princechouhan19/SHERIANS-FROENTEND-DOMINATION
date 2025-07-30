gsap.registerPlugin(ScrollTrigger);

gsap.to("#page2 img" , {
    width:"100%",
    scrollTrigger:{
        trigger:"#page2",
        scroller:"body",
        markers:true,
        start: 'top top',
        end:'top -100%',
        scrub:true,
        pin:true,
    }
})

gsap.from("#page4 h1" , {
    x: "1200%",
    scrollTrigger:{
        trigger:"#page4",
        scroller:"body",
        markers:true,
        start:'top 0%',
        end:'top -100%',
        scrub:2,
        pin:true,
    }
})