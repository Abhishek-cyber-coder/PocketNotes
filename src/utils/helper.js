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

export const getDateInDDMMYYYY = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currDate = new Date();
  const day = currDate.getDate();
  const monthIndex = currDate.getMonth();
  const year = currDate.getFullYear();

  const formattedDate = `${day} ${months[monthIndex]} ${year}`;
  return formattedDate;
};

export const getTimeInAMPM = () => {
  const currDate = new Date();
  let hours = currDate.getHours();
  let min = currDate.getMinutes();

  hours = hours < 10 ? `0${hours}` : hours;

  min = min < 10 ? `0${min}` : min;

  const amOrPm = hours < 12 ? "AM" : "PM";
  hours = hours % 12 || 12;

  const formattedTime = `${hours}:${min} ${amOrPm}`;
  return formattedTime;
};
