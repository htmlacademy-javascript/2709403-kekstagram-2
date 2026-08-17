// Функция проверки длины строки. Возвращает true, если строка меньше или равна указанной длине. Иначе - false
const checkLength = (string, length) => string.length <= length;

// Функция проверки, является ли строка палиндромом
const checkPalindrome = (string) => {
  const normalString = string.replaceAll(' ', '').toLowerCase();
  let reverseString = '';
  for (let i = normalString.length - 1; i >= 0; i--) {
    reverseString += normalString[i];
  }
  return reverseString === normalString;
};

// Функция, извлекающая цифры из строки и возвращающая целое положительное число, состоящее из них. Иначе, если цифр нет, NaN
function extractDigits(value) {
  const toString = value.toString();
  let digitString = '';
  for (let i = 0; i < toString.length; i++) {
    const parsedSymbol = parseInt(toString[i], 10);
    if (!Number.isNaN(parsedSymbol)) {
      digitString += toString[i];
    }
  }
  return parseInt(digitString, 10);
}
