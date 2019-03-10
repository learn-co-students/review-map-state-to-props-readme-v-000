import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


//goal: we need to get our props. 
class App extends Component {

  handleOnClickItems() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.store.dispatch({
      type: 'GET_COUNT_OF_USERS',
    });
  }

  render() {
     debugger;
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.items.length}</p>
      </div>
    );
  }
}
// const vanilla = (milkshake) => {
//   debugger;
//   return "items: milkshake.items" }
const mapStateToProps = (state) => {
  return { items: state.items }
}

export default connect(mapStateToProps)(App);
