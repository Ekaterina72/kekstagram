import { renderPictureObjects } from './render-small-pictures.js';
import { PhotoObjects } from './mocks.js';
import { renderbigPicture } from './render-big-picture.js';


const picContainer = document.querySelector('.pictures');
const bigPictureModal = document.querySelector('.big-picture');


const closePictureModal = () => {
  const closeButton = document.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', () => {
    bigPictureModal.classList.add('hidden');
  });
};

const openPictureModal = (pictureLink, url, likes, comments, description) => {
  pictureLink.addEventListener('click', () => {
    bigPictureModal.classList.remove('hidden');
    renderbigPicture(url, likes, comments, description);
    closePictureModal();
  });
};

for (let i = 0; i < PhotoObjects.length; i++) {

  renderPictureObjects(PhotoObjects[i], picContainer);
}





export { openPictureModal };


