export var countReducer = (count = {count:0}, action) => {
  switch (action.type) {
    case "COUNTER_INCREASE": {
        console.log(action.payload)
      return {count:action.payload} ;
    }
    case "COUNTER_REDUCE": {
      return {count:action.payload}
    }

    default:
      return count;
  }
};
