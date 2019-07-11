import React, { Component } from 'react'

//引入路由模块
import { HashRouter, Switch , Route} from 'react-router-dom'

import Login from './pages/Login'
import Reg from './pages/Reg'
import Error from './pages/Error'
import Nav from './pages/nav/Nav'
import Map from './pages/Map'
import Home from './pages/nav/Home'
import City from './pages/City'

//这个是redux使用
import store from './store'
import {Provider} from 'react-redux'


import './components/components.css'

export default class App extends Component {
    render() {
        return (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route exact path='/' component={Login}></Route>
                    <Route path='/reg' component={Reg}></Route>
                    <Route path='/nav' component={Nav}></Route>
                    <Route path='/map' component={Map}></Route>
                    <Route path='/city' component={City}></Route>
                    {/* <Route path='/home' component={Home}></Route> */}

                    <Route  component={Error}></Route>
                </Switch>
            </HashRouter>
        </Provider>
        )
    }
}