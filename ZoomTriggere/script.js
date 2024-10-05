console.clear();

gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".wrapper",
        start: "top top",
        end: "+=200%", // Scroll duration
        pin: true,
        scrub: true,
        markers: true // You can remove the markers in production
      }
    })
    .to("img", {
      scale: 3.5, // Further zoom into the mountains
      z: 500,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(
      ".image-container",
      {
        opacity: 0, // Fades out the image
        duration: 1,
        ease: "power1.inOut"
      }
    )
    .to(
      ".blue-section",
      {
        opacity: 1, // Fades in the blue section
        duration: 1
      }
    );
});
