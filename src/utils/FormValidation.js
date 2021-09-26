export const emailValidation = email => {
  var filter =
    /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (email !== '' && email != null) {
    if (filter.test(email)) {
      return '';
    } else {
      return 'You have entered an invalid Email ID.';
    }
  } else {
    return 'We need your Email ID to continue.';
  }
};

export const passwordValidate = password => {
  if (password !== null && password !== '' && password !== undefined) {
    if (/^\s*$/.test(password)) {
      return 'Please do not use any space in your password.';
    } else if (password.length < 8) {
      return 'Please choose a password with a minimum of 6 characters.';
    }
  } else {
    return 'We need your password to continue.';
  }
  return '';
};
