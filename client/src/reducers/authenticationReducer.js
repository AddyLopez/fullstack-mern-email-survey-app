// The purpose of monitoring this slice of state is to conditionally render UI components or content based on whether a user is logged in or not.

// State initially starts off as undefined, so it's set here as null instead
const authenticationReducer = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authenticationReducer;
