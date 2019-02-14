import React,{Component} from "react";

export default class extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <div className="insp-row">
                    <div>
                        <div className="insp-number insp-inline-row" data-name={this.props.data.name}>
                            <div className="title insp-inline-row-item insp-col-6 localize">
                                {this.props.data.caption}
                            </div>
                            <input className="editor insp-inline-row-item insp-col-6"
                                   type="number" min="0"
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
