export const initEntries = mainEl => {
  const viewEls = Array.from(mainEl.getElementsByClassName("view-switcher"));

  if (viewEls.length > 0) {
    viewEls.forEach(el => {
      const mode = el.getAttribute("data-mode");
      el.addEventListener("click", () => {
        console.log(mode);
        mainEl.setAttribute("data-view", mode);
      });
    });
  }
};
