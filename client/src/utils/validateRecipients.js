const validateRecipients = (recipients) => {
  const recipientsArray = recipients.split(",").map((recipient) => {
    return recipient.trim();
  });
};

export default validateRecipients;
