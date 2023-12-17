export const getInitials = (str) => {
  if (str !== undefined) {
    const arr = str.split(" ");
    const newArr = arr.map((initial) => {
      return initial[0];
    });

    const resStr = newArr.length >= 2 ? newArr[0] + newArr[1] : newArr[0];

    return resStr;
  }
  return;
};

export const modifyText = (text) => {
  const textArr = text.trim().split(" ");
  const filterEmptySpaces = textArr.filter((text) => text !== "");
  const capitalizeWords = filterEmptySpaces.map((word) => {
    if (word.length > 0) {
      const firstLetter = word[0].toUpperCase();
      const restLetters = word.slice(1).toLowerCase();
      return firstLetter + restLetters;
    }
    return word;
  });

  const resString = capitalizeWords.join(" ");
  return resString;
};
