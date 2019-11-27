//import initilazeSwiper from "./initilazeSwiper.js";

import Swiper from "swiper";
import { swiperParameters } from "./swiperParams";
import { startScroll, cancelScroll } from "./autoscroll";

const switchMode = ({ mode, swiperContainer }) => {
  console.log(mode);
  swiperContainer.setAttribute("mode", mode);

  switch (mode) {
    case "strobo": {
      if (window.projectSwiper) {
        window.projectSwiper.autoplay.start();
      } else {
        window.projectSwiper = new Swiper(swiperContainer, swiperParameters);
      }
      break;
    }
    case "slide": {
      if (window.projectSwiper) {
        window.projectSwiper.autoplay.stop();
      } else {
        console.log("how");
        window.projectSwiper = new Swiper(swiperContainer, swiperParameters);
        window.projectSwiper.autoplay.stop();
      }
      break;
    }
    case "scroll": {
      if (window.projectSwiper) {
        window.projectSwiper.destroy(true, true);
        window.projectSwiper = false;
      }

      if (window.scrolldelay || window.isScrolling) {
        cancelScroll();
      }

      startScroll();
      break;
    }
  }
};

export default switchMode;
