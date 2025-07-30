// ✅ To integrate both GSAP and Locomotive Scroll:

// 1. Go to the official GSAP + Locomotive demo CodePen:
//    https://codepen.io/GreenSock/pen/ExPdqKy

// 2. Copy the entire JavaScript code from the demo.

// 3. Paste it into your project’s script section.

// 4. Delete everything from the Red panel to the Purple panel,
//    including the 3 lines immediately after the Purple panel.

// 5. Use Ctrl + D (multi-cursor) to replace all occurrences of
//    '.smooth-scroll' with '#main' (or your custom scroll container like '#parent').

// 6. IMPORTANT: In all `ScrollTrigger` configurations,
//    update `scroller: "#body"` to `scroller: "#main"`
//    to match your custom container.

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


// Select all elements with the class 'box'
const boxes = gsap.utils.toArray(".box");

// Loop through each box and create a separate animation and ScrollTrigger for it
boxes.forEach(box => {
    gsap.to(box, {
        scale: 1.2,
        rotate: 7200,
        duration: 1,
        delay: 0.5,
        pin: true,
        markers: true,
        start: "top 60%",
        scrollTrigger: {
            trigger: box, // The trigger is now the specific 'box' element in the loop
            scroller: "#main",
        }
    });
});