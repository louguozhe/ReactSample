import React from "react";
import BaseOptionComponent from "./baseOptionComponent";

export default class extends BaseOptionComponent {

    constructor(props) {
        super(props)
        this.state={
            value:""
        }
    }

    render(){
        var colSizes = this.getColsClass(this.props.data)
        return (
            <div>
                <div className="insp-row">
                    <div>
                        <div className="insp-text insp-inline-row" data-name={this.props.data.name}>
                            <div className={"title insp-inline-row-item localize " + colSizes[0]}>
                                {this.props.data.caption}
                            </div>
                            <input className={"editor insp-inline-row-item " + colSizes[1]}
                                   type="text"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
