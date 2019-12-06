// function for toggle button and another element
export const toggleLayer = (button, layer, body) => {
  button.el.classList.toggle(button.class);
  layer.el.classList.toggle(layer.class);
  body.el.classList.toggle(body.class);
};
