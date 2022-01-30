import h from 'hyperscript';
import { registerImage } from "./lazy"; 


const maxinum = 123;
const mininum = 1;
const random = () => Math.floor(Math.random() * (maxinum - mininum)) + mininum

const createImageNode = () => {
  // const container = document.createElement('div');
  // container.className = 'p-4';
  // const container = h('div.p-4');

  // const imagen = document.createElement('img');
  // imagen.className = "mx-auto";
  // imagen.width = '320';
  // imagen.dataset.src = `https://randomfox.ca/images/${random()}.jpg`;
  const imagen = h('img.mx-auto',{
    width: '320',
    'data-src': `https://randomfox.ca/images/${random()}.jpg`,
  });

  const container = h('div.p-4', imagen);
  // const container = <div className='p-4'><imagen /></div>  // h -> html (React)

  // container.appendChild(imagen);

  return container;
}

const nuevaImagen = createImageNode();
const mountNode = document.getElementById('image');

const addButton = document.querySelector('button');

const addImage = () => {
  const newImage = createImageNode();
  mountNode.appendChild(newImage);
  registerImage(newImage);
};

addButton.addEventListener('click', addImage)




