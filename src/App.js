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
    // debugger;
    return (
      <div className="App">
          <p>{this.props.items.length}</p>
          <button onClick={() => this.handleOnClickItems()}>
            Click to change items count
            </button>
          <p>{this.props.users.length}</p>
          <button onClick={() => this.handleOnClickUsers()}>
            Click to change user count
          </button>
          
      </div>
    );
  }
}

const vanilla = milkshake => {
  return { items: milkshake.items,
            users: milkshake.users }
}

const mapStateToProps = (state) => {
  return { items: state.items,
            users: state.users }
}

export default connect( mapStateToProps )(App);
