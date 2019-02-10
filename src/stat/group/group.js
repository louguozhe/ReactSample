import React,{Component} from "react";

export default class extends Component {
    render(){
        return (
            <div className="insp-group expanded">
                <div className="insp-group-title">
                   <span>
                      <span className={["group-state", "fa", this.props.data.collapsed?"fa-caret-right":"fa-caret-down"].join(' ')}></span>
                      <span className="group-text localize">{this.props.data.name}</span>
                    </span>
                </div>
                <div className="insp-group-content">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
