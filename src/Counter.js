import React, { Component } from "react";
import { connect } from "react-redux";
import { increaseCounter, reduceCounter } from "./actions/countActions";
class Counter extends Component {
  constructor() {
    super();
    this.state = { count: 0 }
  }
  render() {
      console.log(this.props)
    return (
      <div>
        <button
          onClick={() => {
              this.props.dispatch(increaseCounter(this.state))}}
        >
          +
        </button>
        <button
          onClick={() => this.props.dispatch(reduceCounter(this.state))}
        >
          -
        </button>
        {this.state.count}
      </div>
    );
  }
}

var mapStateToProps = (state)=>{
    return {wholeState:state}
}

export default connect(mapStateToProps)(Counter);
