export function startScroll(state) {
  // console.log(document.body.scrollHeight - window.innerHeight);
  // console.log(window.scrollY);
  if (document.body.scrollHeight - window.innerHeight <= window.scrollY) {
    window.scrollTo(0, 1);
  }

  if (state.scrollSpeed < 30) {
    window.scrollBy(0, 4);
  } else if (state.scrollSpeed < 40) {
    window.scrollBy(0, 2);
  } else {
    window.scrollBy(0, 1);
  }

  if (state.scrolldelay) clearTimeout(state.scrolldelay);
  //console.log(state.scrollSpeed);
  state.scrolldelay = setTimeout(() => startScroll(state), state.scrollSpeed);
}

export function stopScroll() {
  //scrolldelay = null;
  window.isScrolling = false;
  clearTimeout(window.scrolldelay);
  window.scrolldelay = null;
}

export function cancelScroll() {
  window.isScrolling = false;
  clearTimeout(window.scrolldelay);
  window.scrolldelay = null;
  window.scrollTo(0, 1);
}
