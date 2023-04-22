import headingAnim from "./heading-anim.js"
import aboutAnim from "./about-anim.js"

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      if (entry.target.id === 'heading') {
        console.log("Headings are visible \nanimating headings...")
        headingAnim();
      } else if (entry.target.id === 'about'){
        console.log("Abouts are visible \nanimating Abouts...")
      }
    }
  });
}, { threshold: 1 });

export default observer