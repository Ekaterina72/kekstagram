
const renderbigPicture = (object) => {

  const { url, comments, likes, description } = object;
  const bigPictureContainer = document.querySelector('.big-picture__img');
  const bigPictire = bigPictureContainer.querySelector('img');
  const likesCount = document.querySelector('.likes-count');
  const commentsCount = document.querySelector('.comments-count');
  const commentContainer = document.querySelector('.social__comments');
  const pictureCaption = document.querySelector('.social__caption');
  const commentCountContainer = document.querySelector('.social__comment-count ');
  const commentsLoader = document.querySelector('.comments-loader');
  commentContainer.innerHTML = '';

  bigPictire.src = url;
  likesCount.textContent = likes;
  commentsCount.textContent = comments.length;
  pictureCaption.textContent = description;
  commentCountContainer.classList.add('hidden');
  commentsLoader.classList.add('hidden');

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
};

// const openPictureModal = (pictureLink, url, likes, comments, description) => {
//   pictureLink.addEventListener('click', () => {
//     bigPictureModal.classList.remove('hidden');
//     renderbigPicture(url, likes, comments, description);
//   });
// };

export { renderbigPicture };
