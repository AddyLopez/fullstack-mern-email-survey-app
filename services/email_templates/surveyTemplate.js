module.exports = (survey) => {
  // HTML to include in body of emailed survey
  return `<div>${survey.body}</div>`;
};
