
const bigPictureModal = document.querySelector('.big-picture');
const closePictureModalButton = document.querySelector('.big-picture__cancel');

const openPictureModal = (pictureLink) => {
  pictureLink.addEventListener('click', () => {
    bigPictureModal.classList.remove('hidden');
  });
};

const closePictureModal = (closeButton) => {
  closeButton.addEventListener('click', () => {
    bigPictureModal.classList.add('hidden');
  });
};

closePictureModal(closePictureModalButton);

const renderbigPicture = (objects) => {
  for (let i = 1; i < objects.length; i++) {
    const { url, comments, likes, description } = objects[1];
    const bigPictureContainer = document.querySelector('.big-picture__img');
    const bigPictire = bigPictureContainer.querySelector('img');
    const likesCount = document.querySelector('.likes-count');
    const commentsCount = document.querySelector('.comments-count');
    const commentContainer = document.querySelector('.social__comments');
    const pictureCaption = document.querySelector('.social__caption');
    commentContainer.innerHTML = '';

    bigPictire.src = url;
    likesCount.textContent = likes;
    commentsCount.textContent = comments.length;
    pictureCaption.textContent = description;

    for (const comment of comments) {
      const { avatar, message, name } = comment;
      const commentItem = document.createElement('li');
      commentItem.classList.add('social__comment');
      const avatarPicture = document.createElement('img');
      avatarPicture.classList.add('social__picture');
      const commentText = document.createElement('p');
      commentText.classList.add('social__text');

      avatarPicture.src = avatar;
      avatarPicture.alt = name;
      avatarPicture.width = '35';
      avatarPicture.height = '35';
      commentText.textContent = message;

      commentItem.append(avatarPicture);
      commentItem.append(commentText);
      commentContainer.append(commentItem);
    }
  }

};

export { openPictureModal, renderbigPicture };
