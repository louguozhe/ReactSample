import React,{Component} from "react";

export default class extends Component {

    constructor(props) {
        super(props)

    }

    componentWillReceiveProps(nextProps) {
        // console.log("textOption componentWillReceiveProps:",nextProps)

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
                        <div className="insp-dropdown-list insp-inline-row"
                             data-list-ref={this.props.data.name + "List"} data-name={this.props.data.name}>
                            <div className="title insp-inline-row-item insp-col-4 localize">
                                {this.props.data.caption}
                            </div>
                            <div className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                <div style={{width: "100%", height: "100%"}}>
                                    <span className="display">
                                    </span>
                                    <span className="caret">
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
