export var countReducer = (state = {}, action) => {
  switch (action.type) {
    case "COUNTER_INCREASE": {
        console.log(action.payload)
      return { ...state, count: action.payload+1 };
    }
    case "COUNTER_REDUCE": {
      return { ...state, count: action.payload };
    }

    default:
      return state;
  }
};
