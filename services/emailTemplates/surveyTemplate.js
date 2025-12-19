module.exports = (survey) => {
  // HTML to include in body of emailed survey
  return `<article>${survey.body}</article>`;
};
