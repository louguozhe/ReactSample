import React,{Component} from "react";

export default class extends Component {

    render(){
        return (
            <div>
                <div className="insp-row">
                    <div>
                        <div className="insp-checkbox insp-inline-row"
                             data-name={this.props.data.name} >
                            <div className={"button insp-inline-row-item checked"}></div>
                            <div className="text   insp-inline-row-item localize">
                                {this.props.data.caption}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
