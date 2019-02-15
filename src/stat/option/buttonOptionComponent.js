import React,{Component} from "react";

class buttonOptionComponent extends Component {

    constructor(props) {
        super(props)
        this.getButtonDiv = this.getButtonDiv.bind(this)
        this.state={
            value:""
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log("buttonOption componentWillReceiveProps:",nextProps)
    }

    getButtonDiv(item){
        return (
            <div className="item" key={item.value}>
                <div className="button btn btn-default localize"
                     id={item.value}
                     onClick={this.props.onButtonClick}>
                    {item.name}
                </div>
            </div>
        )
    }

    render(){
        return (
            <div>
                <div className="insp-row">
                    <div>
                        <div className="insp-buttons insp-inline-row">
                            <div className="insp-inline-row-item content">
                                {this.props.data.map(item=>{return this.getButtonDiv(item)})}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default buttonOptionComponent
