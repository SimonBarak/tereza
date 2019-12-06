import { toggleLayer } from "./utils.js";

export const buildToggleMenu = params => {
  const menuBtn = document.getElementById("main-nav__button");
  const bodyEl = document.querySelector("body");
  const navEL = document.getElementById("navmenu");

  // Evet listenere for menu button to active menu Layer
  if (menuBtn) {
    menuBtn.addEventListener("click", e => {
      console.log("test");
      toggleLayer(
        { el: menuBtn, class: "active" },
        { el: navEL, class: "hidden" },
        { el: bodyEl, class: "menu-is-open" }
      );
    });
  }
};
