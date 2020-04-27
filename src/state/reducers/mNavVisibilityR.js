const initialState = false;

export default (state = initialState, { type }) => {
  switch (type) {
    case 'TOGGLE_MOBILE_NAV':
      return !state;

    default:
      return state;
  }
};
