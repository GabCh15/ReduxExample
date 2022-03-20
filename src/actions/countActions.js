export var increaseCounter = (state) => {
    return {
    type: "COUNTER_INCREASE",
    payload: parseInt(state.count)+1,
  };
};

export var reduceCounter = (state) => {
  return {
    type: "COUNTER_REDUCE",
    payload: parseInt(state.count)-1,
  };
};
