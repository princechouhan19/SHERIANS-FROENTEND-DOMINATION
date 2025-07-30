function LocoScroll(){
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
function textSplitting() {
    // Select all h1 elements inside #page2
    var allH1 = document.querySelectorAll("#page2 h1");
    
    // Loop through each h1 element
    allH1.forEach(function (elem) {
        var clutter = ""; // Initialize an empty string to build our new HTML
        var h1Text = elem.textContent; // Get the text content of the h1
        
        // Split the text into an array of individual characters
        var SplittedText = h1Text.split("");
        
        // Loop through each character and wrap it in a span tag
        SplittedText.forEach(function (e) {
            clutter += `<span>${e}</span>`; // Build the new HTML structure
        })
        
        // Replace the original h1 content with our span-wrapped characters
        elem.innerHTML = clutter;
    })
}

function gsapAnimation() {
    // Create a GSAP animation that targets all spans inside #page2 h1
    gsap.to("#page2 h1 span", {
        color: '#E3E3C4', // Change text color to light beige
        stagger: 0.1, // Stagger the animation for each span by 0.1 seconds
        
        // Configure scroll-triggered animation
        scrollTrigger: {
            trigger: "#page2 h1", // Element that triggers the animation
            scroller: "#main", // Container element for scrolling
            markers: true, // Show debug markers (helpful for development)
            start: "top 50%", // Animation starts when trigger hits 50% of viewport
            end: "top -10%", // Animation ends when trigger hits -10% of viewport
            scrub: 5, // Smoothly animates as you scroll (5 seconds to catch up)
        }
    })
}

// Initialize all functions
LocoScroll() // Set up Locomotive Scroll with GSAP integration
textSplitting() // Split the text into spans for animation
gsapAnimation() // Create the scroll-triggered color animation