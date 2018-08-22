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

// Note : Named "mapStateToProps" for convention (but it IS a local function that can be named anything and called using Connect -- it can even be replaced with an anonymous function directly in Connect if the state is very simple) + it can ignore "state" entirely and add whatever it wants as the props to return (though generally used to map state data to props, hence the name)
const mapStateToProps = (state) => {
  // debugger;
  
  // Note : Only interested in the state items but has access to entire state
  return { items: state.items }
}

// mapStateToProps() (or whatever the first method argument to Connect is) method is executed with each change to the store's state + connect is what connects Redux to the React app (separation of concerns)
export default connect(mapStateToProps)(App);

// Note : Example of replacing "mapStateToProps" with an anonymous function
// export default connect( state => ({ items: state.items }) )(App);
