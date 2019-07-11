import React, { Component } from 'react'
import city from '../api/City.json'
import './css/City.css'
import BScoroll from 'better-scroll'

export default class City extends Component {
   
   
    render() {
        
        let curcity = city.city
        console.log(curcity)
        return (
            <div className="city">
                {/* 城市名 */}
                <div className="cityBs">
                    <ul className="content">
                        {
                            curcity.map(obj => (
                                <div id={obj.title} key={obj.title}>
                                    <h4 className="titleStyle">{obj.title}</h4>
                                    <div>
                                        {
                                            obj.lists.map(val =>(
                                                <span className='listStyle' key={val}>{val}</span>
                                            ))
                                        }
                                    </div>
                                </div>
                            ))
                        }
                    </ul>  
                </div>

                {/* 右侧城市按首字母分类 */}
                <div className="cityId">
                        {
                           curcity.map(obj => <div className="touchmy" onTouchMove={this.touchmove.bind(this)}   onClick={this.clickId.bind(this,obj.title)} key={obj.title}>
                            {obj.title}
                           </div>) 
                        }
                </div>

            </div>

        )
    }

    componentDidMount(){
    //let cityBs=document.querySelector('.cityBs')
    this.city_scorll=new BScoroll('.cityBs')
    }

    //点击城市首字母
    clickId(val){
        // this.city_scorll.scrollToElement(document.getElementById(val),300) 
    }

    //滑动事件
    touchmove(e){
        //这个是获取当前滑动事件的坐标
        // console.log(e.touches[0].clientX,e.touches[0].clientY)
        //根据当前坐标获取当前元素
        let curEl=document.elementFromPoint(e.touches[0].clientX,e.touches[0].clientY)
       if(curEl && curEl.className == 'touchmy'){
        this.city_scorll.scrollToElement(document.getElementById(curEl.innerHTML),300)
       }

    }


}
