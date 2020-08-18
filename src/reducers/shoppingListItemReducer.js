// GOAL: Use the React Redux library to connect the store to the React application.
  // Utilize: 
    // the <Provider /> component, 
    // the connect function, and 
    // mapStateToProps to access Redux store content.
// Main Point: 
    // mapStateToProps is used to connect regular React components with the Redux store. 
// Result: have a working form that:
  // adds and displays usernames, 
  // shows a total count of those users.


export default function shoppingListItemReducer(state = {
  items: [], 
  users: [ 'initial user' ]
}, action) {

  switch(action.type) {

    case 'GET_COUNT_OF_ITEMS':
      return Object.assign({}, state, {
        items: state.items.concat(state.items.length + 1)
      });

    case 'GET_COUNT_OF_USERS':
      return Object.assign({}, state, {
        users: state.users.concat(state.users.length + 1)
      });

    default:
      return state;
  }
};
