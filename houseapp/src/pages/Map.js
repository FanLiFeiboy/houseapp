import React, { Component } from 'react'

export default class Map extends Component {
    render() {
        return (
            <div style={ {height:"100%"} }>
               <div id="map" style={ {width:"100%",height:"100%"} }>

               </div>
            </div>
        )
    }
    componentDidMount(){
        var map = new window.AMap.Map("map", {
            resizeEnable: true,
            center: [116.397428, 39.90923],
            zoom: 13
        });
        //获取用户所在城市信息
       
           //实例化城市查询类
        var _this=this
        var citysearch = new window.AMap.CitySearch();
        //自动获取用户IP，返回当前城市
        citysearch.getLocalCity((status, result)=> {
            if (status === 'complete' && result.info === 'OK') {
                if (result && result.city && result.bounds) {
                    var cityinfo = result.city;
                    var citybounds = result.bounds;
                    // document.getElementById('info').innerHTML = '您当前所在城市：'+cityinfo;
                    _this.setState({
                        curCity:cityinfo
                    })
                    //地图显示当前城市
                    map.setBounds(citybounds);
                }
            } else {
                // document.getElementById('info').innerHTML = result.info;
            }
        });
    
  }
}
