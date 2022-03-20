import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseCounter, reduceCounter } from "./actions/countActions";
class Counter extends Component {
  constructor() {
    super();
  }
  componentDidMount() {}
  render() {
   console.log(this.props)
    return (
      <div>
        <button
          onClick={() => {
            this.props.dispatch(increaseCounter(this.props.countReducer));
          }}
        >
          +
        </button>
        <button onClick={() => this.props.dispatch(reduceCounter(this.props.countReducer))}>
          -
        </button>
        {this.props.countReducer.count}
      </div>
    );
  }
}

var mapStateToProps = (state) => {
  return state ;
};

export default connect(mapStateToProps)(Counter);
