import "./modules/sliders.js";
import "./modules/playVideo.js";
import AOS from "aos";
function app() {
  AOS.init({
    once: true,
  });
}

document.addEventListener("DOMContentLoaded", app);
