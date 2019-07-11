import React, { Component } from 'react'
import {WingBlank} from 'antd-mobile'
import '../css/Chat.css'

export default class Chat extends Component {
    render() {
        return (
            <div className="chat">
                <div className='center'>
                <img src={require('../../assets/imgs/5_03.gif')} />
                <h4>置业顾问:<span>&emsp;张小妹</span></h4>
                <p>专业服务诚信做人诚心做事</p>
                <button>我要聊天</button>
                </div>
                
            </div>
        )
    }
}
