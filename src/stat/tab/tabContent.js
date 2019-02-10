import React,{Component} from "react";

export default class extends Component {
    render(){
        return (
            <div className={["tab-pane",this.props.data.active?"active":""].join(' ')} id={this.props.data.id}>
                <div className="insp-pane">
                    {this.props.children}
                </div>
            </div>
        )
    }
}
