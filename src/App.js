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

const mapStateToProps = (state) => {
  debugger;
  return { items: state.items }
}
  // The connect() function then takes the return
//   value from the mapStateToProps() function and adds
//   that return value to the props of the component 
//   that is passed through in the last parentheses. 
// 

export default connect(mapStateToProps)(App);

/*We also see that whatever function we pass as the first
 argument to that connect() function is called each time 
 there is a change of state, and has access to the entire 
 store's state.
  The connect() function then takes the 
 return value from the mapStateToProps() function and adds 
 that return value to the props of the component that is passed 
 through in the last parentheses. We call that component
 a connected component, because that component is
  connected to the store. */