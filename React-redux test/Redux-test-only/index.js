const { createStore } = require('redux');
var id = 3;
const initialState = [
    {
        id: 1,
        title: 'Titre 1',
        completed: false
    },
    {
        id: 2,
        title: 'Titre 2',
        completed: false
    },
]

function TodoReducer(state = initialState, action){
    switch (action.type) {
        case 'ADD_TODO':
            return [...state, {id: id++, ...action.payload, completed: false}]
        default:
            return state;
    }
}
const store = createStore(
    TodoReducer,
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log(store.getState());
store.subscribe(() => console.log('Mon store vient d\'être mis à jour : ', store.getState()));

// store.dispatch({type: 'ADD_TODO', payload: {title: 'Titre 3'} })