import React from "react";
import BaseOptionComponent from './baseOptionComponent'
export default class extends BaseOptionComponent {

    render(){
        var colSizes = this.getColsClass(this.props.data)
        return (
            <div>
                <div className="insp-row">
                    <div>
                        <div className="insp-color-picker insp-inline-row"  data-name={this.props.data.name}>
                            <div className={"title  insp-inline-row-item localize " + colSizes[0]}>
                                {this.props.data.caption}
                            </div>
                            <div className={"picker insp-inline-row-item " + colSizes[1]}>
                                <div style={{width: "100%", height: "100%"}}>
                                    <div className="color-view "
                                         style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
