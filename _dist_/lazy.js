
const isIntersecting = (entry) => {
  return entry.isIntersecting // true dentro de pantalla
}

const loadImage = (entry) => {
  const container = entry.target;
  const image = container.firstChild;
  const url = image.dataset.src;
  // load image
  image.src = url;

  // des registrar la imagen (unlisten)
  observer.unobserve(container)
}

const observer = new IntersectionObserver((entries) => {
  entries
    .filter(isIntersecting)
    .forEach(loadImage)
})


export const registerImage = (imagen) => {
  // IntersectationObserver -> observer(image)
  observer.observe(imagen)
}