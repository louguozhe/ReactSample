import React,{Component} from "react";

export default class extends Component {
    render(){
        return (
                <div className="insp-group-layout">
                    {this.props.children}
                </div>
        )
    }
}
