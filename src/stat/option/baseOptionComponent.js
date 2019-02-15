import React,{Component} from "react";

export default class extends Component {

    constructor(props) {
        super(props)
        this.getColsClass = this.getColsClass.bind(this)
    }

    getColsClass(item){
        var lColSize = "insp-col-6",rColSize = lColSize
        if (item.cols && item.cols.length>=2){
            lColSize = "insp-col-" + item.cols[0].toString()
            rColSize = "insp-col-" + item.cols[1].toString()
        }
        return [lColSize,rColSize]
    }

    render(){
        return (
            <div/>
        )
    }
}
