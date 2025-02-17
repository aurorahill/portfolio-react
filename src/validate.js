export const validateText = (text, number, msgEmpty, msgNumber) => {
  if (text.trim().length === 0) {
    return msgEmpty;
  } else if (text.trim().length < number) {
    return `${msgNumber}${number}`;
  }
  return "";
};

export const validateEmail = (email, msgEmpty, msgCorrect) => {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (email.trim().length === 0) {
    return msgEmpty;
  } else if (!emailRegex.test(email)) {
    return msgCorrect;
  }
  return "";
};

export const validatePolicy = (isAgreed, msg) => {
  if (!isAgreed) {
    return msg;
  } else return "";
};
