import React, { Component } from 'react'
import {connect} from 'react-redux'
import House from '../../components/House'

let center={
    textAlign:'center',
    lineHeight:'300px',
}


 class History extends Component {
     
    render() {
        let history=this.props.history
        return (
                <div>
                    <h2 style={{display:history.length == 0 ? 'block' : 'none',textAlign:'center',lineHeight:'300px' }} >什么都没有</h2>
                    {
                        history.map(obj =><House key={obj.id} list={obj}></House>)
                    }
                </div>
            
        )
    }
    
}
function getStr(state){
    return {
        //这是的state相当于getState
        history:state.history
    }
}

export default connect(getStr)(History)