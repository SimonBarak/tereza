import Swiper from "swiper";
import { swiperParameters } from "./swiperParams";
import { startScroll } from "./autoscroll.js";

window.scrolldelay = false;
window.isScrolling = false;

const linkedList = (state, index) => {
  let { btns, currentIndex } = state;

  const prevModeBtn = btns[currentIndex];
  const currentModeBtn = btns[index];
  const mode = currentModeBtn.getAttribute("mode");
  console.log(mode);

  // SWITCH MODE
  if (prevModeBtn) {
    prevModeBtn.classList.remove("active");
  }
  currentModeBtn.classList.add("active");

  state.mainEl.setAttribute("mode", mode);

  if (mode === "scroll") {
    if (state.swiper) {
      state.swiper.destroy(true, true);
      state.swiper = false;
    }

    startScroll(state);

    window.onkeydown = e => {
      if (e.key == "s") {
        if (state.scrolldelay) {
          clearTimeout(state.scrolldelay);
          state.scrolldelay = null;
        } else {
          console.log("run egen");
          startScroll(state);
        }
      }
    };
  } else {
    if (state.scrolldelay) {
      clearTimeout(state.scrolldelay);
      state.scrolldelay = null;
      window.scrollTo(0, 1);
    }

    if (!state.swiper) {
      state.swiper = new Swiper(state.mainEl, swiperParameters);
    }

    if (mode === "slide") {
      state.swiper.autoplay.stop();
    }

    if (mode === "strobo") {
      state.swiper.autoplay.start();
    }

    window.addEventListener(
      "scroll",
      function() {
        state.swiper.slideNext();
      },
      false
    );

    window.addEventListener(
      "mousewheel",
      function() {
        state.swiper.slideNext();
      },
      false
    );
  }

  state.currentIndex = index;
  state.mode = mode;
};

export const galleryModes = mainEl => {
  const btns = Array.from(mainEl.getElementsByClassName("btn-mode"));

  let state = {
    currentIndex: 0,
    mode: null,
    swiper: null,
    scrolldelay: null,
    scrollSpeed: 30,
    btns,
    mainEl
  };

  linkedList(state, 0);

  btns.forEach((item, index) =>
    item.addEventListener("click", () => linkedList(state, index))
  );

  const speedControler = document.getElementById("scroll-speed");

  speedControler.addEventListener("input", e => {
    const speedValue = Number(e.target.value);
    const revecerceDrag = 51 - speedValue;
    state.scrollSpeed = revecerceDrag;
    console.log(state.scrollSpeed);

    if (!state.scrolldelay) {
      startScroll(state);
    }
  });
};
