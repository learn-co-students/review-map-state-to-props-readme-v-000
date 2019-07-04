import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


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
    return (
      <div className="App">
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <p>{this.props.items.length}</p><br />

          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          <p>{this.props.users.length}</p>
      </div>
    );
  }
}

export default connect( state => ({ items: state.items, users: state.users }))(App);

/*

const mapStateToProps = (state) => {
  return { orangePeel: ['a', 'b', 'c'] }
}

const vanilla = (milkshake) => {
  debugger;
  return { items: milkshake.items }
}

export default connect(vanilla)(App);

*/
