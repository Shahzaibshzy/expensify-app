import { createStore } from "redux";

const incrementCount = ({incrementBy = 1} = {}) => ({
    type: `INCREMENT`,
    incrementBy

});
const decrementtCount = ({decrementBy = 1} = {}) => ({
    type: `DECREMENT`,
    decrementBy

});
const SET = ({count }) => ({
    type: `SET`,
    count

});
const RESET = () => ({
    type: `RESET`

});

//Reducer
// Reducers are pure functions

const storeReducer = (state = { count : 0}, action) => {

    switch(action.type)
   {
    case 'INCREMENT':
        return {count: state.count + action.incrementBy};
    case `DECREMENT`:
       return {count: state.count - action.decrementBy};
       case `RESET`:
       return {count: 0};   
       case `SET`:
       return {count: action.count};
    default:
        return state;
   }
};

const store = createStore(storeReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());

}
);


store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

store.dispatch(RESET());

store.dispatch(decrementtCount());

store.dispatch(decrementtCount({decrementBy: 10}));

store.dispatch(SET({count:101}));

