import React, { Component } from 'react'
import {List} from 'antd-mobile'

import './components.css'


const Item = List.Item;
const Brief = Item.Brief;

export default class House extends Component {
    render() {
        let {src,name,area,range,type,point,price} =this.props.list
        return (
              <div>
                <Item multipleLine extra={price+'/平'}>
                            <div className='houselist'>
                            <img src={src} style={ {width:'80px',height:'80px'} } alt=""/>
                                <div className='font'>
                                    <h3>{name}</h3>
                                    <p>{area} {range}</p>
                                    <p>{type} {point}</p>
                                </div>
                            </div>
                </Item> 
             </div>
        )
    }
}
