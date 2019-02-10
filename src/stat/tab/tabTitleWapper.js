import React,{Component} from "react";

export default class extends Component {
    render(){
        return (
            <div>
                <ul className="nav nav-tabs nav-justified">
                    {this.props.children}
                </ul>
            </div>
        )
    }
}
