import { renderPictureObjects } from './render-small-pictures.js';
import { PhotoObjects } from './mocks.js';
import { renderbigPicture } from './render-big-picture.js';


const picContainer = document.querySelector('.pictures');
const bigPictureModal = document.querySelector('.big-picture');

const closePictureModal = () => {
  bigPictureModal.classList.add('hidden');
  document.body.classList.remove('modal-open');
};


const closePictureModalHandler = () => {
  const closeButton = document.querySelector('.big-picture__cancel');
  closeButton.addEventListener('click', closePictureModal);
  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      closePictureModal();
    }
  });
};

const openPictureModalHandler = (pictureLink, object) => {
  pictureLink.addEventListener('click', () => {
    bigPictureModal.classList.remove('hidden');
    renderbigPicture(object);
    closePictureModalHandler();
    document.body.classList.add('modal-open');
  });
};

for (let i = 0; i < PhotoObjects.length; i++) {

  renderPictureObjects(PhotoObjects[i], picContainer);
}

export { openPictureModalHandler };


