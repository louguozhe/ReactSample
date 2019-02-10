import React,{Component} from "react";

export default class extends Component {

    constructor(props) {
        super(props)
        this.state={
            value:""
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log("textOption componentWillReceiveProps:",nextProps)
        this.setState({
            value:nextProps.data.value
        })
    }
    onChange(sender){
        this.setState({
            value:sender.target.value
        })
    }

    render(){
        return (
            <div>
                <div className="insp-row">
                    <div>
                        <div className="insp-text insp-inline-row">
                            <div className="title insp-inline-row-item insp-col-6 localize">
                                {this.props.data.name}
                            </div>
                            <input className="editor insp-inline-row-item insp-col-6"
                                   type="text" value={this.state.value}
                                   onChange={this.onChange.bind(this)}
                                   onBlur={this.props.onTextChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
