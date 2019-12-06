import Swiper from "swiper";

import { galleryModes } from "./gallery-modes";
import { cards, baseImage } from "./swiperParameters";

export const buildSwiper = params => {
  const swiperElements = Array.from(
    document.getElementsByClassName("swiper-container")
  );

  if (swiperElements.length > 0) {
    swiperElements.forEach(el => {
      const attribute = el.getAttribute("data-swiper");

      switch (attribute) {
        case "cards":
          new Swiper(el, cards);
          break;

        case "full-screen":
          galleryModes(el);
          console.log("GO BIG!");
          break;

        default:
          new Swiper(el, baseImage);
      }
    });
  }
};
