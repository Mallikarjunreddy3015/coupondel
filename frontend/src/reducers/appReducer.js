const initialState = {
  activeTab: 0,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TABS":
      return {
        ...state,
        activeTab: action.payload,
      };

    default:
      return state;
  }
};

export default appReducer;
