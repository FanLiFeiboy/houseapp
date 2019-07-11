import React, { Component } from 'react'

import { Button,Flex,InputItem,WingBlank,WhiteSpace } from 'antd-mobile';

import {Link} from 'react-router-dom'

import {setPwd} from '../api/api'

let img={
    width:'50%',
    height:'50%',
    marginTop:'40%'
}
let color={
    color:'#ccc'
}

let bottom={
    position:'absolute',
    bottom:'2%',
    color:'#ccc'
}




export default class Login extends Component {
    constructor(){
        super()
        this.state={
            acc:'',
            pwd:'',
            cur:'none',
        }
    }

    render() {
        return (
           
             <WingBlank size="lg">

                {/* logo */}
                <Flex justify="center">
                <img style={ img } src={require('../assets/imgs/icon-beike.png')}/>
                </Flex>


                {/* 输入框 */}
                <WhiteSpace size="xl" />
                <InputItem
                 placeholder="请输入手机号"
                 clear
                 onChange={(n)=>{this.setState({acc:n})}}
               >
                <div style={{ backgroundImage: `url(${require('../assets/imgs/zhanghao.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                </InputItem>
               <InputItem
                 placeholder="请输入密码"
                 clear
                 type="password"
                 onChange={(n)=>{this.setState({pwd:n})}}
               >
                 <div style={{ backgroundImage: `url(${require('../assets/imgs/mima.png')})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
               </InputItem>

                <div >
                    <p style={ {display:this.state.cur,position:'fixed',color:'red',fontSize:'12px'} }>请输入正确的密码或账号</p>
                </div>

                <WhiteSpace size="xl" />
                <Button type='primary' onClick={this.clickLogin.bind(this)}>登陆</Button>


                <WhiteSpace size="md" />
                <Flex justify="between">
                <Link to='/reg' style={{color:'#108ee9'}} >手机快速注册</Link>
                <Link to='/error' style={{color:'#108ee9'}}>忘记密码？</Link> 
                </Flex>

                <Flex justify="center">
                <p style={ bottom }>登陆/注册代表同意《源码房产用户协议》</p>
                </Flex>
             </WingBlank>
           
           
        )
    }

    async clickLogin(){
        let res=await setPwd(this.state.acc,this.state.pwd)
        let data = res.data
        console.log(data)
        if(data == 'ok'){

            window.localStorage.setItem("acc",`{acc:${this.state.acc},pwd:${this.state.pwd}}`)
            window.location.href='#/nav'
        }else{
            this.setState({
                cur:'block'
            })
        }
        
    }


}
