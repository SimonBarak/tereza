export function startScroll() {
  if (document.body.scrollHeight - window.innerHeight === window.scrollY) {
    window.scrollTo(0, 1);
    //return;
  }
  window.scrollBy(0, 1);
  window.scrolldelay = setTimeout(startScroll, 10);
  window.isScrolling = true;
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
