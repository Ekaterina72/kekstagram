import { getRandomNumber, createList } from './util.js';

const DESCRIPTION = [
  'Очень красивая картина',
  'Я старался, но получилось так',
  'Это сфоткал мой кот. И выложил он же'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Василий',
  'Аркадий',
  'Светлана',
  'Анатолий',
  'Каролина',
  'Елизавета'
];

const MIN_LIKES = 15;
const MAX_LIKES = 200;

const OBJECTSNUMBER = 25;

const getIndexCount = () => {
  let count = 1;
  return function () { return count++; };

};

const indexCount = getIndexCount();
const commentIndexCount = getIndexCount();

const createComment = () => {
  const commentIndex = commentIndexCount();

  return {
    id: commentIndex,
    avatar: `img/avatar-${getRandomNumber(1, 6)}.svg`,
    message: MESSAGES[getRandomNumber(0, MESSAGES.length - 1)],
    name: NAMES[getRandomNumber(0, NAMES.length - 1)],
  };
};

const createPhotoObject = () => {
  const index = indexCount();

  return {
    id: index,
    url: `photos/${index}.jpg`,
    description: DESCRIPTION[getRandomNumber(0, DESCRIPTION.length - 1)],
    likes: getRandomNumber(MIN_LIKES, MAX_LIKES),
    comments: createList(getRandomNumber(1, 30), createComment),
  };
};

const PhotoObjects = createList(OBJECTSNUMBER, createPhotoObject);

export { PhotoObjects };

