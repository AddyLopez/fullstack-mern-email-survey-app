// Source of regex: https://emailregex.com/#Javascript:~:text=zA%2DZ0%2D9%2D.%5D%2B%24)%22-,Javascript,-1
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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
