import React,{Component} from "react";
import { createStore } from 'redux' // 引入redux createStore、中间件及compose
import { Provider } from 'react-redux'
import reducer from '../store/reducers'  // 引入reducers集合
import Designer from './designer'

const store = createStore(reducer)

export default class extends Component {
    render(){
       return (
           <Provider store={store}>
               <Designer store0={store}>
               </Designer>

           </Provider>
       )
    }
}
