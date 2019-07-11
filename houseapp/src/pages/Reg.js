import React, { Component } from 'react'

import {Button,WingBlank,InputItem,Radio,Flex,AgreeItem,Checkbox,WhiteSpace} from 'antd-mobile'

import { Link } from 'react-router-dom'


const CheckboxItem = Checkbox.CheckboxItem;

let font={
    fontSize:'14px'
}
let color={
    color:'#108ee9'
}

export default class Reg extends Component {
    render() {
        return (
            <div>
                <WhiteSpace size="lg" />
                <WingBlank size="lg">
                <InputItem
                 placeholder="请输入手机号"
                 clear
                 onChange={(n)=>{console.log(n)}}
               >
                
                </InputItem>
               <InputItem
                 placeholder="请输入密码"
                 clear
                 type="password"
                 onChange={(n)=>{console.log(n)}}
               >
               </InputItem>
               <InputItem
                 placeholder="请输入验证码"
                 clear
                 type="password"
                 onChange={(n)=>{console.log(n)}}
               >

               </InputItem>
               

                <CheckboxItem >
                <p style={ font }>我已同意<span style={ color }>《用户服务协议》及《隐私权政策》</span></p>
                </CheckboxItem>
                    
                <WhiteSpace size="lg" />
                <Button type='primary'>注册</Button>

                <WhiteSpace size="lg" />
                <Link to='/' style={ color  }>已有账号</Link>

                </WingBlank>

                

            </div>
        )
    }
    
}
