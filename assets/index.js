import { buildToggleMenu } from "./js/fullscreen-menu.js";
import { buildSwiper } from "./js/swiper.js";
import { initEntries } from "./js/entries.js";

buildToggleMenu();

// Init js for swiper
buildSwiper();

// Init js for project entries view switcher
const entriesEL = document.getElementById("entries");

if (entriesEL) initEntries(entriesEL);

// const initGalleryModes = params => {
//   const menuBtn = document.getElementById("main-nav__button");
//   const bodyEl = document.querySelector("body");
//   const navEL = document.getElementById("navmenu");

//   // Evet listenere for menu button to active menu Layer
//   if (menuBtn) {
//     menuBtn.addEventListener("click", e => {
//       console.log("test");
//       toggleLayer(
//         { el: menuBtn, class: "active" },
//         { el: navEL, class: "hidden" },
//         { el: bodyEl, class: "menu-is-open" }
//       );
//     });
//   }
// };
