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

// When you call a reducer, you call it with two arguments, state and action. State is whatever we define it as, but it is an object. It has whatever keys we give it. It could be one simple key with an integer value. It could have an array value. There could be a second key. In this example there is a second key, users. The second argument action is also going to be an object with a key of type. We call our reducer in index.js and assign it to store. The whole purpose of the reducer is to modify the state based on certain actions that we define. When we Object.assign , we are saying recreate the state as it is but modify the third argument specifically, in this case {items: etc}. The action doesn't get passed in until we call dispatch, whose argument is the action. So ... later when we call this.props.dispatch and pass in the action, that is when the action gets passed. Not when we first call reducer. It's confusing because it seems like we are omitting an argument. But it comes later. So we declare the store in Provider, provided by the React Redux library, and then we pass down store even further to App. 