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
        var lColSize = "insp-col-6",rColSize = lColSize
        if (this.props.data.cols && this.props.data.cols.length>=2){
            lColSize = "insp-col-" + this.props.data.cols[0].toString()
            rColSize = "insp-col-" + this.props.data.cols[1].toString()
        }
        return (
            <div>
                <div className="insp-row">
                    <div>
                        <div className="insp-color-picker insp-inline-row"  data-name={this.props.data.name}>
                            <div className={"title  insp-inline-row-item localize " + lColSize}>
                                {this.props.data.caption}
                            </div>
                            <div className={"picker insp-inline-row-item " + rColSize}>
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
