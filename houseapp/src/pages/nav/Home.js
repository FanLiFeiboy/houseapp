import React, { Component } from 'react'
import {Carousel ,Grid,WingBlank,List} from 'antd-mobile'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'



import '../css/Home.css'
import '../../components/components.css'
import {gethouse} from '../../api/api'
import House from '../../components/House'

const data = [
    {icon:'icon-1',text:'新房'},
    {icon:'icon-2',text:'二手房'},
    {icon:'icon-3',text:'租房'},
    {icon:'icon-4',text:'商铺写字楼'},
    {icon:'icon-5',text:'卖房'},
    {icon:'icon-6',text:'海外房产'},
    {icon:'icon-7',text:'小区房价'},
    {icon:'icon-8',text:'问答'},
    {icon:'icon-3',text:'租房'},
    ].map((_val, i) => ({
        icon: require(`../../assets/imgs/${_val.icon}.png`),
        text: _val.text,
    }));

    const datas= [
        {icon:'icon-qian',text:'我要贷款'},
        {icon:'icon-ji',text:'房贷计算'},
        {icon:'icon-zhishi',text:'知识'},
        {icon:'icon-shao',text:'扫一扫'},


    ].map((obj,i) => ({
        icon:require(`../../assets/imgs/${obj.icon}.png`),
        text:obj.text,
    }))
     

    



 class Home extends Component {
    constructor(){
        super()
        this.state={
            data:['car1','car2','car3'],
            imgHeight: 176,
            curCity:"定位中",
            houselist:[]
        }
    }

async componentWillMount(){
        let res = await gethouse()
        let data =res.data
        console.log(data)
        this.setState({
            houselist:data
        })
        
}


    render() {
        return (
            <div className='home'>
                {/* 搜索框 */}
                <div className='serch'>
                    <label onClick={this.changeCity.bind(this)}>{this.state.curCity}▼</label>
                    <div className='serch-div'>
                    <img src={require('../../assets/imgs/search.png')}/>
                    <label>挑好房,上源码房产app</label>
                    </div>

                    <img onClick={this.clickSkip.bind(this)} src={require('../../assets/imgs/map.png')}/>
                
                </div>
               
                <div className="better">
                    <ul className="content">
                        {/* 轮播 */}
                        <Carousel
                            autoplay
                            infinite
                            >
                            {this.state.data.map(val => (
                                <a
                                key={val}
                                href="http://www.alipay.com"
                                style={{ display: 'inline-block', width: '100%', height: this.state.imgHeight }}
                                >
                                <img
                                    src={require('../../assets/imgs/'+val+'.jpg')}
                                    alt=""
                                    style={{ width: '100%', verticalAlign: 'top' }}
                                    onLoad={() => {
                                    // fire window resize event to change height
                                    window.dispatchEvent(new Event('resize'));
                                    this.setState({ imgHeight: 'auto' });
                                    }}
                                />
                                </a>
                            ))}
                        </Carousel>
                        
                        {/* 分类 */}
                        <Grid id="box" data={data} hasLine={false} isCarousel onClick={_el => console.log(_el)} />
                        

                        <div className='todolist'>
                            <p>房产全百科 <span>专业的买房攻略</span></p>
                            <Grid data={datas} activeStyle={false} hasLine={false} />
                        </div>
                        
                        {/* 房产 */}
                        <div className="gethouselist">
                        <List  className="my-list">
                            {
                                this.state.houselist.map(obj =><div onClick={this.clicklist.bind(this,obj)} key={obj.id}><House list={obj}>

                                </House></div>)
                            }
                        </List>
                        </div>
                    </ul>
                </div>     
             


            </div>
        )
    }

    componentDidMount(){
        var _this=this
        //实例化城市查询类
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity(function(status, result) {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;

                    // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                    
                    _this.setState({
                        curCity:cityinfo
                    })
                    //地图显示当前城市
                    // map.setBounds(citybounds);
                }
            } else {
                // document.getElementById('info').innerHTML = result.info;
            }
        });
        let better=document.querySelector('.better')
        let scroll=new BScroll(better,{
            click:true,
        })

    }
   
    //点击跳转到地图页面
    clickSkip(){
        window.location.href='#/map'
    }

    //点击换城市
    changeCity(){
        window.location.href='#/city'
    }


    clicklist(obj){
     this.props.dispatch({
         type:'history',
         obj
     })
    }


}

export default connect()(Home)