import {getRandomArrayElement, getRandomInteger, createIdGenerator} from './util.js';

const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 30;
const COMMENT_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
const DESCRIPTIONS = [
  'Пока на расслабоне #начиле #пивко #джиган',
  'Мечты...',
  'С друзьями изучаем новые заведения нашего города #bars #friends #nightlife',
  'Время Гарри Поттера',
  'Цените каждое мгновение! Жизнь одна! Кайфуйте!',
  'Это первый день твоей оставшейся жизни, очередной праздник, так что улыбнись :)',
  'До Нового Года осталось 8 понедельников #newyear #soon',
  'Я ЛЮБЛЮ ТЕБЯ, ЖИЗНЬ! #love #life',
  'Вот это тачка! #lada #priora #loudsound',
  'Тёплая солнечная осень',
  'Идеальное белоснежное облако!'
];
const NAMES = ['Кирилл', 'Юлия', 'Евгений', 'Виктория', 'Михаил', 'Кристина'];

const createMessage = () => Array.from(
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(COMMENT_LINES),
).join(' ');

const generateCommentId = createIdGenerator();

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const generatePhotoId = createIdGenerator();

const createPicture = (index) => ({
  id: generatePhotoId(),
  url: `photos/${index}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment,
  )
});

const getPictures = () => Array.from(
  { length: PICTURE_COUNT },
  (_, pictureIndex) => createPicture(pictureIndex + 1)
);

getPictures();
