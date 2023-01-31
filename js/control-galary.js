import { PhotoObjects } from './mocks.js';
import { renderPictureObjects } from './render-small-pictures.js';
import { openPictureModal, renderbigPicture } from './render-big-picture.js';


const picContainer = document.querySelector('.pictures');
console.log(picContainer.children);

for (let i = 1; i < PhotoObjects.length; i++) {

};

renderPictureObjects(PhotoObjects, picContainer);
renderbigPicture(PhotoObjects);
