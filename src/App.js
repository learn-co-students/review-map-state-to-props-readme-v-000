import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';


class App extends Component {

  handleOnClickItems() {
    this.props.dispatch({
      type: 'GET_COUNT_OF_ITEMS',
    });
  }

  handleOnClickUsers() {
    this.props.dispatch({
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
  // debugger;
  return { orangePeel: state.items }
  // return { items: state.items }
}
// the mapStateToProps() method is executed with each change to the store's state.
// export default connect(mapStateToProps)(App);
// export default connect( state => ({ items: state.items }) )(App);
export default connect( state => ({ orangePeel: state.items}) )(App);



//even doing this works just like before, so we can call the function anything, 
//and the state passed into the function anything
// const vanilla = (milkshake) => {
//   debugger;
//   return { items: milkshake.items }
// }
 
// export default connect(vanilla)(App);