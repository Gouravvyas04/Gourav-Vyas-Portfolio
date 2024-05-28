document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".landing-page", { opacity: 0 }); // Ensure section2 starts with opacity 0

  gsap.to(".landing-page", {
    scrollTrigger: {
      trigger: ".landing-page",
      start: "top 80%", // when the top of section2 hits 80% from the top of the viewport
      end: "bottom 30%", // when the bottom of section2 hits 20% from the top of the viewport
      toggleActions: "play reverse play reverse", // onEnter: play, onLeave: reverse, onEnterBack: play, onLeaveBack: reverse
    },
    opacity: 1,
    duration: 1.5,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".skill", { opacity: 0 }); // Ensure section2 starts with opacity 0

  gsap.to(".skill", {
    scrollTrigger: {
      trigger: ".skill",
      start: "top 80%", // when the top of section2 hits 80% from the top of the viewport
      end: "bottom 20%", // when the bottom of section2 hits 20% from the top of the viewport
      toggleActions: "play reverse play reverse", // onEnter: play, onLeave: reverse, onEnterBack: play, onLeaveBack: reverse
    },
    opacity: 1,
    duration: 1.2,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".section2", { opacity: 0 }); // Ensure section2 starts with opacity 0

  gsap.to(".section2", {
    scrollTrigger: {
      trigger: ".section2",
      start: "top 80%", // when the top of section2 hits 80% from the top of the viewport
      end: "bottom 20%", // when the bottom of section2 hits 20% from the top of the viewport
      toggleActions: "play reverse play reverse", // onEnter: play, onLeave: reverse, onEnterBack: play, onLeaveBack: reverse
    },
    opacity: 1,
    duration: 1.2,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".section3", { opacity: 0 }); // Ensure section2 starts with opacity 0

  gsap.to(".section3", {
    scrollTrigger: {
      trigger: ".section3",
      start: "top 80%", // when the top of section2 hits 80% from the top of the viewport
      end: "bottom 20%", // when the bottom of section2 hits 20% from the top of the viewport
      toggleActions: "play reverse play reverse", // onEnter: play, onLeave: reverse, onEnterBack: play, onLeaveBack: reverse
    },
    opacity: 1,
    duration: 1.2,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".section4", { opacity: 0 }); // Ensure section2 starts with opacity 0

  gsap.to(".section4", {
    scrollTrigger: {
      trigger: ".section4",
      start: "top 80%", // when the top of section2 hits 80% from the top of the viewport
      end: "bottom 20%", // when the bottom of section2 hits 20% from the top of the viewport
      toggleActions: "play reverse play reverse", // onEnter: play, onLeave: reverse, onEnterBack: play, onLeaveBack: reverse
    },
    opacity: 1,
    duration: 1.2,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".box", { opacity: 0 }); // Ensure section2 starts with opacity 0

  gsap.to(".box", {
    scrollTrigger: {
      trigger: ".box",
      start: "top 80%", // when the top of section2 hits 80% from the top of the viewport
      end: "bottom 30%", // when the bottom of section2 hits 20% from the top of the viewport
      toggleActions: "play reverse play reverse", // onEnter: play, onLeave: reverse, onEnterBack: play, onLeaveBack: reverse
    },
    opacity: 1,
    duration: 2.2,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".reveal-type", { opacity: 0 }); // Ensure section2 starts with opacity 0

  gsap.to(".reveal-type", {
    scrollTrigger: {
      trigger: ".reveal-type",
      start: "top 80%", // when the top of section2 hits 80% from the top of the viewport
      end: "bottom 30%", // when the bottom of section2 hits 20% from the top of the viewport
      toggleActions: "play reverse play reverse", // onEnter: play, onLeave: reverse, onEnterBack: play, onLeaveBack: reverse
    },
    opacity: 1,
    duration: 2.5,
  });
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.set(".more", { opacity: 0 }); // Ensure section2 starts with opacity 0

  gsap.to(".more", {
    scrollTrigger: {
      trigger: ".more",
      start: "top 80%", // when the top of section2 hits 80% from the top of the viewport
      end: "bottom 70%", // when the bottom of section2 hits 20% from the top of the viewport
      toggleActions: "play reverse play reverse", // onEnter: play, onLeave: reverse, onEnterBack: play, onLeaveBack: reverse
    },
    opacity: 1,
    duration: 1.2,
  });
});

// button functioning
  function openPDF() {
    const url = "https://1drv.ms/w/s!Ase1ng6zGd0thkXd3byQ7Lm-2BEL?e=8HOXqF";
    window.open(url, "_blank");
  }



  function Section1() {
    var element = document.getElementsByClassName("sec")[0];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }
 function Section2() {
   var element = document.getElementsByClassName("skill")[0];
   if (element) {
     element.scrollIntoView({ behavior: "smooth" });
   }
 }

 function Section3() {
   var element = document.getElementsByClassName("section2")[0];
   if (element) {
     element.scrollIntoView({ behavior: "smooth" });
   }
 }

 function Section4() {
   var element = document.getElementsByClassName("section3")[0];
   if (element) {
     element.scrollIntoView({ behavior: "smooth" });
   }
 }

  function Section5() {
    var element = document.getElementsByClassName("landing-page")[0];
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

   function openGitHubProfile() {
     var url = "https://github.com/Gouravvyas04";
     window.open(url, "_blank");
   }

   function openLinkdin() {
     var url = "https://www.linkedin.com/in/gourav-vyas-4392b1248/";
     window.open(url, "_blank");
   }

     function openEmail() {
       var url = "https://mail.google.com/mail/u/0/#inbox";
       window.open(url, "_blank");
     }

function todo(){
  var url = "https://gouravvyas04.github.io/To-Do-List/";
  window.open(url, "_blank");
}

function grid(){
  var url = "https://gouravvyas04.github.io/grid_project/";
  window.open(url, "_blank");
}

function pass(){
  var url ="https://gouravvyas04.github.io/Password-Generator/";
  window.open(url, "_blank");
}

function toggleSidebar() {
  document.body.classList.toggle("show-sidebar");
}
