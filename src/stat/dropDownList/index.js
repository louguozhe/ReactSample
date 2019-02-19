import React,{Component} from "react";

export default class extends Component {

    getDropItem(list){
        if (list.cName && list.value !== "none"){
            return (
                <div className="text" data-value={list.value}>
                    <div className={list.cName}></div>
                </div>
            )
        }else if (list.value){
            return (
                <div className="text localize" data-value={list.value}>
                    {list.name}
                </div>

            )
        }else{
            return (
                <div className="text localize">
                    {list.name}
                </div>

            )
        }
    }
    getDropDownList(id,lists){
        return (
            <div className="insp-menu" role="menu" id={id}>
                {lists.map(list=>{return (
                    <div className="menu-item" key={list.name}>
                        <div className={"image"}></div>
                        {this.getDropItem(list)}
                        <div className={"shortcut"}></div>
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
                {this.getDropDownList("borderLineList",[{name:"None",cName:"no-border",value:"none"},
                    {name:"hair",cName:"line-style-hair",value:"hair"},
                    {name:"dotted",cName:"line-style-dotted",value:"dotted"},
                    ,{name:"dash-dot-dot",cName:"line-style-dash-dot-dot",value:"dash-dot-dot"}
                    ,{name:"dash-dot",cName:"line-style-dash-dot",value:"dash-dot"}
                    ,{name:"dashed",cName:"line-style-dashed",value:"dashed"}
                    ,{name:"thin",cName:"line-style-thin",value:"thin"}
                    ,{name:"medium-dash-dot-dot",cName:"line-style-medium-dash-dot-dot",value:"medium-dash-dot-dot"}
                    ,{name:"slanted-dash-dot",cName:"line-style-slanted-dash-dot",value:"slanted-dash-dot"}
                    ,{name:"medium-dash-dot",cName:"line-style-medium-dash-dot",value:"medium-dash-dot"}
                    ,{name:"medium-dashed",cName:"line-style-medium-dashed",value:"medium-dashed"}
                    ,{name:"medium",cName:"line-style-medium",value:"medium"}
                    ,{name:"thick",cName:"line-style-thick",value:"thick"}
                    ,{name:"double",cName:"line-style-double",value:"double"}
                    ])}
                {this.getDropDownList("fontFamilyList",[
                    {name:"Arial"}
                    ,{name:"Arial Black"}
                    ,{name:"Calibri"}
                    ,{name:"Cambria"}
                ])}
                {this.getDropDownList("fontSizeList",[
                    {name:"8"},{name:"9"},{name:"10"},{name:"11"},{name:"12"},{name:"13"},{name:"14"}
                    ,{name:"15"},{name:"16"},{name:"18"},{name:"20"},{name:"22"},{name:"24"}
                    ,{name:"28"},{name:"36"},{name:"48"},{name:"72"}
                ])}
                {this.getDropDownList("commomFormatList",[
                    {name:"General",value:"nullValue"}
                    ,{name:"数字",value:"0.00"}
                    ,{name:"货币",value:"$#,##0.00"}
                    ,{name:"@cellTab.format.commonFormat.option.accounting@",value:"_($* #,##0.00_);_($* (#,##0.00);_($* '-'??_);_(@_)"}
                    ,{name:"短日期",value:"m/d/yyyy"}
                    ,{name:"长日期",value:"dddd, mmmm dd, yyyy"}
                    ,{name:"时间",value:"h:mm:ss AM/PM"}
                    ,{name:"百分比",value:"0%"}
                    ,{name:"@cellTab.format.commonFormat.option.fraction@",value:"# ?/?"}
                    ,{name:"科学计数法",value:"0.00E+00"}
                    ,{name:"文本",value:"@"}
                ])}
                {this.getDropDownList("cellTypesList",[
                    {name:"按钮",value:"button-celltype"}
                    ,{name:"单选框",value:"checkbox-celltype"}
                    ,{name:"下拉列表",value:"combobox-celltype"}
                    ,{name:"超链接",value:"hyperlink-celltype"}
                    ,{name:"None",value:"clear-celltype"}
                ])}
                <div id="setfontstyle" style={{display: "none"}}></div>

            </div>
        )
    }
}
