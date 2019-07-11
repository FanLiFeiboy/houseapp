import {createStore,combineReducers} from 'redux'

const store=createStore(function (state,action){
    switch(action.type){
        case 'test': return '李四'
        default : return '张三'
    }

})

let a={
    type:'test'
}

store.dispatch(a)

console.log(store.getState())

export default store


