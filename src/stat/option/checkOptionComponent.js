import React,{Component} from "react";

export default class extends Component {

    constructor(props) {
        super(props);
    }

    componentWillReceiveProps(nextProps) {
        console.log("checkOption componentWillReceiveProps:",nextProps)
    }

    render(){
        return (
            <div>
                <div className="insp-row">
                    <div>
                        <div className="insp-checkbox insp-inline-row"
                             data-name="showVerticalScrollbar"  onClick={this.props.onOptionChange}>
                            <div className={["button","insp-inline-row-item",this.props.data.checked?"checked":null].join(' ')}></div>
                            <div className="text   insp-inline-row-item localize">
                                {this.props.data.name}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
