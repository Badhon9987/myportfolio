const TP = gsap.timeline({defaults:{ duration:0.75, ease: "power3.out"}});
TP.fromTo(".main", { x: "-100%", opacity: 0 ,}, { x: 0, opacity: 1 });
