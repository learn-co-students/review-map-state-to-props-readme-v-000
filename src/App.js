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

// is executed with every change to the store's state. the argument is the entire state of the store
// this function can be named anything, state can also be named anything
// the return value is the value of the props that are added to the App component
// so in this case - props.items: state.items. this sets the props for the app component. again we can put whatever we want here e.g orangePeel: [a, b, c] will result in this for our render:
// this.props = {store:{...}, orangePeel: Array(3)} etc. This function can happily ignore the store's state and return whatever it likes
// Because we are taking a part of the store's state and porting it to become props of the relevant component, we say that we are mapping it as props to the component, thus the name mapStateToProps.

const mapStateToProps = (state) => {
  return { items: state.items };
}

export default connect(mapStateToProps)(App);
// the biggest benefit of connect is separation of concerns.
// ie both the view and its state management system are properly separated, and only connected by that connect() function.
// This means that if someone wanted to take the component and use a different backend, like say Flux, it could. It also means that because all of our Redux is separated, if we wanted to add in changes to our application to be mobile by using React Native. Then our Redux logic would largely stay the same.
// whatever function we pass as the first argument to that connect() function is called each time there is a change of state, and has access to the entire store's state.
// The connect() function then takes the return value from the mapStateToProps() function and adds that return value to the props of the component that is passed through in the last parentheses. We call that component a connected component, because that component is connected to the store.
