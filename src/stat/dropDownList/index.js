import React,{Component} from "react";

export default class extends Component {

    constructor(props) {
        super(props);
    }

    getDropDownList(id,lists){
        return (
            <div className="insp-menu" role="menu" id={id}>
                {lists.map(list=>{return (
                    <div className="menu-item">
                        <div className="image"></div>
                        <div className="text localize" data-value={list.value}>{list.name}</div>
                        <div className="shortcut"></div>
                    </div>
                ) })}
            </div>
        )
    }
    componentWillReceiveProps(nextProps) {
    }

    render(){
        return (
            <div>
                {this.getDropDownList("statDataSetList",[{name:"无",value:""},{name:"基本情况",value:"jbqk"},{name:"岗位情况",value:"gwqk"}])}
                {this.getDropDownList("statDimensionList",[{name:"无",value:""},{name:"文化程度",value:"whcd"},{name:"军衔",value:"jx"},{name:"职务等级",value:"zwdj"}])}
            </div>
        )
    }
}
