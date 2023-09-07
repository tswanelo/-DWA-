// Define action types
const ActionTypes = {
    ADD: "ADD",
    SUBTRACT: "SUBTRACT",
    RESET: "RESET",
  };
  
  // Define action creators
  const addAction = () => ({ type: ActionTypes.ADD });
  const subtractAction = () => ({ type: ActionTypes.SUBTRACT });
  const resetAction = () => ({ type: ActionTypes.RESET });
  
  // Define the reducer function
  const reducer = (state = { count: 0 }, action) => {
    switch (action.type) {
      case ActionTypes.ADD:
        return { count: state.count + 1 };
      case ActionTypes.SUBTRACT:
        return { count: state.count - 1 };
      case ActionTypes.RESET:
        return { count: 0 };
      default:
        return state;
    }
  };
  
  // Define the store
  const createStore = (reducer) => {
    let state = undefined;
    const subscribers = [];
  
    const getState = () => state;
  
    const dispatch = (action) => {
      state = reducer(state, action);
      subscribers.forEach((subscriber) => subscriber());
    };
  
    const subscribe = (subscriber) => {
      subscribers.push(subscriber);
      return () => {
        const index = subscribers.indexOf(subscriber);
        if (index !== -1) {
          subscribers.splice(index, 1);
        }
      };
    };
  
    dispatch({}); // Initialize the state
  
    return { getState, dispatch, subscribe };
  };
  
  // Create the store
  const store = createStore(reducer);
  
  // Create a subscription to log state changes to the console
  const logState = () => {
    console.log("State:", store.getState().count);
  };
  
  const unsubscribe = store.subscribe(logState);
  
  // Test scenarios
  store.dispatch(addAction()); // Increment by one
  store.dispatch(addAction()); // Increment by one
  store.dispatch(subtractAction()); // Decrement by one
  store.dispatch(resetAction()); // Reset to zero
  
  // Unsubscribe when you no longer need it
  unsubscribe();

  

  