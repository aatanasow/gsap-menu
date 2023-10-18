function init() {
  let mask = document.querySelector(".mask");
  let navItems = gsap.utils.toArray(".icon");
  let currentItem = navItems[0];

  function initNav() {
    gsap.set(mask, {
      x: currentItem.offsetLeft,
    });
    gsap.set(currentItem, { y: -60 });
    gsap.set(currentItem.querySelector("svg"), { fill: "#FFBE15" });
    gsap.set(currentItem.querySelector(".svg-circle"), {
      scale: 12.5,
      transformOrigin: "50% 50%",
    });
  }

  navItems.forEach((element, index) => {
    var anim;
    element.addEventListener("mousedown", function () {
      if (element !== currentItem) {
        anim.pause();
        gsap.set(element.querySelector("svg"), {
          scale: 1,
          fill: "#FFFFFF",
        });
        gsap.to(mask, {
          duration: 0.3,
          overwrite: true,
          x: element.offsetLeft,
        });
        gsap.to(element, {
          y: -60,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        });
        gsap.to(currentItem, {
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.5)",
        });
        gsap.to(element.querySelector("svg"), {
          fill: "#FFBE15",
          duration: 0.5,
        });
        gsap.to(currentItem.querySelector("svg"), {
          fill: "#FFFFFF",
          duration: 0.5,
        });
        gsap.to(element.querySelector(".svg-circle"), {
          scale: 12.5,
          transformOrigin: "50% 50%",
          duration: 0.5,
          ease: "expo.out",
        });
        gsap.to(currentItem.querySelector(".svg-circle"), {
          scale: 0,
          duration: 0.5,
          ease: "power4.out",
        });
        currentItem = element;
      }
    });
    element.addEventListener("mouseenter", function () {
      if (element !== currentItem) {
        anim = gsap.to(element.querySelector("svg"), {
          repeat: -1,
          scale: 1.2,
          fill: "#FFBE15",
          duration: 0.5,
          yoyo: true,
        });
      }
    });
    element.addEventListener("mouseleave", function () {
      if (element !== currentItem) {
        anim.pause();
        gsap.set(element.querySelector("svg"), {
          scale: 1,
          fill: "#FFFFFF",
        });
      }
    });
  });

  window.addEventListener("resize", initNav);

  initNav();

  gsap.to(mask, {
    autoAlpha: 1,
    duration: 0.2,
    transformOrigin: "center top",
  });
}

window.addEventListener("load", init);
