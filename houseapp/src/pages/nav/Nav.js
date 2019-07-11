import React, { Component } from 'react'

import {TabBar} from 'antd-mobile'



import Chat from './Chat'
import History from './History'
import My from './My'
import Home from './Home'


export default class Nav extends Component {
    constructor(){
        super()
        this.state={
            selectedTab:'home',
            hidden: false,
            list:[
                {id:'home',title:'首页',url:'icon-home.png',urlsel:'icon-home-s.png'},
                {id:'chat',title:'微聊',url:'icon-chat.png',urlsel:'icon-chat-s.png'},
                {id:'history',title:'足迹',url:'icon-history.png',urlsel:'icon-history-s.png'},
                {id:'my',title:'我的',url:'icon-my.png',urlsel:'icon-my-s.png'},
            ]
        }
    }



    render() {
        return (
            <div style={ { position: 'fixed', height: '100%', width: '100%', top: 0 } }>
              <TabBar
                unselectedTintColor="#949494" //未选择字体颜色
                tintColor="#33A3F4"   //选中字体颜色
                barTintColor="white"
                hidden={this.state.hidden}
              >
                {
                    this.state.list.map(obj => 
                        <TabBar.Item
                          title={obj.title}
                          key={obj.id}
                          icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url( ${require('../../assets/imgs/'+obj.url) }) center center /  21px 21px no-repeat` }}
                          />
                          }
                          selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${require('../../assets/imgs/'+obj.urlsel)}) center center /  21px 21px no-repeat` }}
                          />
                          }
                          selected={this.state.selectedTab === obj.id }
                          onPress={() => {
                            this.setState({
                              selectedTab: obj.id,
                            });
                          }}
                          data-seed="logId"
                        >
                          {this.renderContent()}
                        </TabBar.Item>)
                }
             
              </TabBar>
            </div>
          );
    }
    
    renderContent() {
         switch(this.state.selectedTab){
            case 'home' : return <Home/>
            case 'chat' : return <Chat/>
            case 'history' : return <History/>
            case 'my' : return <My/>
         }
        
      }



}
