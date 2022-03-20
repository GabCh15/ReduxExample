export var increaseCounter = (state) => {
    return {
    type: "COUNTER_INCREASE",
    payload: state.count,
  };
};

export var reduceCounter = (state) => {
  return {
    type: "COUNTER_REDUCE",
    payload: state.count-1,
  };
};
