import React,{Component} from "react";

export default class extends Component {
    render(){
        return (
            <li className={["insp-cate-tab"
                ,this.props.data.active?"active":""
                ,this.props.data.hidden?"hidden":""].join(' ')}>
                <a href={"#"+ this.props.data.id} data-toggle="tab" className="localize">{this.props.data.name}</a>
            </li>
        )
    }
}
