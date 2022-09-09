export const checkPassword = (password) => {
  let error = {};

  if (!password) {
    error.message = "Please provide password";
  } else if (password.length < 8) {
    error.message = "Enter at least 8 characters";
  } else if (
    !checkCapitalLetter(password) ||
    !checkNumber(password) ||
    !checkSpecialCharacter(password)
  ) {
    error.message =
      "Set at least one capital letter, one special character and one number";
  }

  return error;
};

const checkCapitalLetter = (string) => {
  return /[A-Z]/.test(string);
};

const checkNumber = (string) => {
  return /\d/.test(string);
};

const checkSpecialCharacter = (string) => {
  return /[ `!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(string);
};
