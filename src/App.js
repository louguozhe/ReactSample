import React,{Component} from "react";
import { createStore } from 'redux' // 引入redux createStore、中间件及compose
import { Provider } from 'react-redux'
import reducer from './store/reducers'  // 引入reducers集合
import Stat from './stat'
import dataSet from './dataSet'
import {HashRouter, Route, Switch,Router} from 'react-router-dom'
import TopMenu from './topMenu'
import DropDownList from "./stat/dropDownList";

const store = createStore(reducer)


export default class extends Component {
    render(){
        return (
            <Provider store={store}>
                <HashRouter >
                    <div>
                        <TopMenu/>
                        <Route path="/" exact component={Stat}/>
                        {/*<Route path="/stat" exact component={Stat}/>*/}
                        <Route path="/dataset" exact component={dataSet}/>
                    </div>
                </HashRouter>
                <DropDownList/>
            </Provider>
        )
    }
}
