import React,{Component} from "react";

export default class extends Component {

    constructor(props) {
        super(props)
        this.state={
            value:""
        }
    }

    componentWillReceiveProps(nextProps) {
        // console.log("textOption componentWillReceiveProps:",nextProps)
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
                        <div className="insp-color-picker insp-inline-row"  data-name="sheetTabColor">
                            <div className="title  insp-inline-row-item insp-col-6 localize">
                                {this.props.data.name}
                            </div>
                            <div className="picker insp-inline-row-item insp-col-6">
                                <div style={{width: "100%", height: "100%"}}>
                                    <div className="color-view "
                                         style={{backgroundColor: this.state.value}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
