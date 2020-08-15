const initialState = {
  currentAnimation: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'DO_ANIMATION': {
      return {
        ...state,
        currentAnimation: payload,
      };
    }

    default:
      return state;
  }
};
