import { openPictureModalHandler } from './control-galary.js';

const renderPictureObjects = (object, container) => {

  const { url, comments, likes, } = object;

  const picture = document.querySelector('#picture').content.cloneNode(true);
  const linkElement = picture.querySelector('.picture');
  const imgElement = picture.querySelector('.picture__img');
  const paragraphElement = picture.querySelector('.picture__info');
  const commentElement = picture.querySelector('.picture__comments');
  const likesElement = picture.querySelector('.picture__likes');

  imgElement.src = url;
  likesElement.textContent = likes;
  commentElement.textContent = comments.length;

  paragraphElement.append(likesElement);
  linkElement.append(imgElement);
  linkElement.append(paragraphElement);
  container.append(linkElement);

  openPictureModalHandler(linkElement, object);
};

export { renderPictureObjects };


