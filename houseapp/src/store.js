//创建创库
import {createStore,combineReducers} from 'redux'

function history(state=[],action){
    switch(action.type){
        case 'history':
        for(let i=0;i<state.length;i++){
            if(state[i].id == action.obj.id){
                //如果它们的id相同删除
                state.splice(i,1)
            }
        }
        //解构 并return出去
        return [action.obj,...state]

        default : return state
    }
}

let bigReducer=combineReducers({
    history,
})

const store=createStore(bigReducer)

export default store