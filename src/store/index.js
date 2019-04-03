import {createStore} from 'redux';

const tiger = 1000;

//action
const increase = {
    type: '涨工资',
}
// const decrease = {
//     type: '扣工资',
// }

//reducer
const reducer = (state = tiger,action)=>{
    switch (action.type){
        case '涨工资':
            return state += 10;
        case '扣工资':
            return state -= 10;
        default:
            return state;
    }
}

//store
const store = createStore(reducer);

store.dispatch(increase);

// store.subscribe(()=>{
//     console.log(store.getState());
// })
console.log(store.getState());

export default store;