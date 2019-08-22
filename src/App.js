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

/*whatever function we pass to the connect() function will be called each time the state changes, and the first argument to that function, 
whatever its name, will be the state of the store.*/
const mapStateToProps = (state) => {
  debugger;
  return { items: state.items }
}

/*We can even shorten mapStateToProps() down to an anonymous arrow function and pass it directly into connect():
export default connect( state => ({ items: state.items }) )(App);*/
export default connect(mapStateToProps)(App);
