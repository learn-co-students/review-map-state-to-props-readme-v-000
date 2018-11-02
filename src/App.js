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

const mapStateToProps = (state) => {
  return { items: state.items }
}

// rename variable and argument; function will be called each time the state changes; first argument to that function will be the state of the store
// const vanilla = (milkshake) => {
//   debugger;
//   return { items: milkshake.items }
// }


//shorten w arrow function and pass into connect()
// export default connect( state => ({ items: state.items }))(App);
export default connect(mapStateToProps)(App);