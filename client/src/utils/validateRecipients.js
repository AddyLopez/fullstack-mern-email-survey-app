// Source of regex: https://emailregex.com/#:~:text=)%24/-,HTML5,-1
const regex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// Documentation on test method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
const validateRecipients = (recipients) => {
  const invalidEmailAddresses = recipients
    .split(",")
    .map((recipient) => {
      return recipient.trim();
    })
    .filter((recipient) => {
      return regex.test(recipient) === false;
    });

  if (invalidEmailAddresses.length) {
    return `Invalid email address(es): ${invalidEmailAddresses}`;
  }

  return;
};

export default validateRecipients;
