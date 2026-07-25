// Исходные данные (кол-во фото, описания, комментарии и их авторы)
const PHOTO_COUNT = 25;
const DESCRIPTIONS = [
  'Обожаю это фото',
  'Сфотографировали вчера',
  'Зацените :D',
  'Это было невероятно',
  'Моё лучшее фото',
  'На память',
  'Мой отпуск',
  'Купил новый фотоаппарат',
  'Учусь фотографировать',
  'Как вам?',
];
const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];
const NAMES = [
  'Иван',
  'Мария',
  'Артём',
  'Ирина',
  'Александр',
  'Александра',
  'Василий',
  'Наталья',
  'Евгений',
  'Галина',
];

// Функция получения случайного целого числа из диапазона
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция получения случайного элемента массива
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// Функция генерации уникальных id через замыкание
const createIdGenerator = () => {
  let id = 0;
  return () => {
    id += 1;
    return id;
  };
};

// Функция генерации случайного текста комментария из одной или двух фраз
const createMessage = () => {
  const messageCount = getRandomInteger(1, 2);
  let message = getRandomArrayElement(MESSAGES);
  if (messageCount === 2) {
    let secondMessage = getRandomArrayElement(MESSAGES);
    while (message === secondMessage) {
      secondMessage = getRandomArrayElement(MESSAGES);
    }
    message += ` ${secondMessage}`;
  }
  return message;
};

// Функция генерации полноценного комментария (id, аватар, текст комментария, автор)
const createComment = () => ({
  id: createIdGenerator(),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: NAMES[getRandomInteger(0, NAMES.length - 1)],
});

// Функция генерации объекта фотографии
const createPhoto = (i) => {
  const commentsCount = getRandomInteger(0, 30);
  return {
    id: i,
    url: `photos/${i}.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(15, 200),
    comments: Array.from({length: commentsCount}, createComment)
  };
};

// Функция создания массива фотографий
const createPhotos = (count) => Array.from({length: count}, (element, i) => createPhoto(i + 1));

const PHOTOS = createPhotos(PHOTO_COUNT);
