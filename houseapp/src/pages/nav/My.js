import React, { Component } from 'react'
import {List,Grid} from 'antd-mobile'
import '../css/My.css'

const Item = List.Item;
const Brief = Item.Brief;


export default class My extends Component {
    constructor(){
        super()
        this.state={
            myList:[
                {id:10},
                {id:1,name:'我的积分',imgsrc:'my1'},
                {id:2,name:'我的订阅',imgsrc:'my2'},
                {id:3,name:'微聊联系人',imgsrc:'my3'},
                {id:11},
                {id:4,name:'房贷计算器',imgsrc:'my4'},
                {id:5,name:'我的房子',imgsrc:'my5'},
                {id:12},
                {id:6,name:'我的看房记录',imgsrc:'my6'},
                {id:7,name:'我的问答',imgsrc:'my7'},
                {id:13},
                {id:8,name:'设置',imgsrc:'my8'},
                {id:9,name:'意见反馈',imgsrc:'she'},
            ],
            name:'登陆/注册',
        }
    }

    render() {
        return (

            <div>


               <div className='mymessage'>
                    <img src={require('../../assets/imgs/icon_service.png')} />
                    <div className='text'>
                        <h3 onClick={this.clickLogin.bind(this)}>{this.state.name}</h3>
                        <p>可以与经纪人发起聊天</p>
                    </div>
                    <div className="rightImg">
                        <img src={require('../../assets/imgs/she.png')}/>
                    </div>
               </div>


            <div className="list">
                    <ul>
                        <li>
                            <h3>0</h3>
                            <img src={require('../../assets/imgs/house.png')}/>
                            <span>钱包</span>
                        </li>
                        <li>
                            <h3>0</h3>
                            <img src={require('../../assets/imgs/youhui.png')}/>
                            <span>优惠</span>
                        </li>
                        <li>
                            <h3>0</h3>
                            <img src={require('../../assets/imgs/jifen.png')}/>
                            <span>积分</span>
                        </li>
                    </ul>
               </div>

                 <List>
                     {
                         this.state.myList.map(obj =>{
                             if(obj.imgsrc){
                                 return <Item
                                 key={obj.id}
                                 thumb={require('../../assets/imgs/'+obj.imgsrc+'.png')}
                                 arrow="horizontal"
                                 >{obj.name}</Item>
                             }return <div key={obj.id} style={ {height:'13px',backgroundColor:'#e6e6e6'} }></div>
                         })
                        
                     }
                    
                </List>

            </div>
        )
    }
    componentDidMount(){
     let acc=window.localStorage.getItem("acc")

     console.log(acc)
     this.setState({
         name:acc
     })

    }
    clickLogin(){
        if(this.state.name == '登陆/注册'){
            window.location.href='#/'
        }
    }


}
