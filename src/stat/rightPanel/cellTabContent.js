import React,{Component} from "react";
import TabContent from "../tab/tabContent";
import Group from "../group/group";
import GroupWapper from "../group/groupWapper";
import CheckOption from "../option/checkOptionComponent";
import FormatOption from "../option/formatOptionComponent";
import ColorOption from "../option/colorOptionComponent";
import AlignOption from "../option/alignOptionComponent";
import ButtonOption from "../option/buttonOptionComponent";
import DropdownListOption from "../option/dropdownListOptionComponent";
import BorderOption from "../option/borderOptionComponent";
import connect from "react-redux/es/connect/connect";
import {TabType} from "../../store/reducers/spread/actions";

class sheetTabContent extends Component {

    constructor(props) {
        super(props);

        this.onTextChange = this.onTextChange.bind(this)
    }
    componentWillReceiveProps(nextProps) {
    }

    onOptionChange(sender,optionName){
        switch (optionName) {
            case "showVerticalGridline":
            case "showHorizontalGridline":
                this.props.activeSheet.options.gridline[optionName] =
                    !this.props.activeSheet.options.gridline[optionName]
                break
            default:
                break
        }
        this.setState({});
    }
    onNumberChange(sender,propetyName){
        console.log("onNumberChange:",sender,propetyName)
        var newValue = sender.target.value
        switch (propetyName) {
            case "rowCount":
                if (newValue !== this.props.activeSheet.getRowCount()) {
                    try {
                        this.props.activeSheet.setRowCount(newValue);
                        // console.log(propetyName,newValue)
                   } catch (ex) {
                        sender.target.value = this.props.activeSheet.getRowCount();
                    }
                }
                break
            case "columnCount":
                if (newValue !== this.props.activeSheet.getColumnCount()) {
                    try {
                        this.props.activeSheet.setColumnCount(newValue);
                        // console.log(propetyName,newValue)
                    } catch (ex) {
                        sender.target.value = this.props.activeSheet.getColumnCount();
                    }
                }
                break
            case "frozenRowCount":
                this.props.activeSheet.frozenRowCount(newValue)
                break
            case "frozenColumnCount":
                this.props.activeSheet.frozenColumnCount(newValue)
                break
            default:
                break
        }
        // this.render()
    }
    onTextChange(sender,propetyName){
        console.log("onTextChange:",sender,propetyName)
        var newValue = sender.target.value
        switch (propetyName) {
            case "sheetName":
                if (newValue !== this.props.activeSheet.name()) {
                    try {
                        this.props.activeSheet.name(newValue);
                        this.setState({
                            sheetName: this.props.activeSheet.name()
                        });
                    } catch (ex) {
                        alert("sheet名称重复！");
                        sender.target.value = this.props.activeSheet.name();
                    }
                }
                break
            default:
                break

        }
    }

    onButtonClick(sender,self){
        var id = sender.target.id
        switch(id){
            case "freezePane":
                self.props.activeSheet.frozenRowCount(self.props.activeSheet.getActiveRowIndex());
                self.props.activeSheet.frozenColumnCount(self.props.activeSheet.getActiveColumnIndex());
                break
            case "unfreeze":
                self.props.activeSheet.frozenRowCount(0);
                self.props.activeSheet.frozenColumnCount(0);
                break
            default:
                break
        }
        this.setState({})
    }

    render(){
       return (
           <TabContent data={{id:"cellTab",active: this.props.activeTabType === TabType.CELL}} >
               <GroupWapper>
                   <Group data={{name:"风格",collapsed:false}}>
                       <DropdownListOption data={{name:"fontFamily",caption:"字体"}}></DropdownListOption>
                       <DropdownListOption data={{name:"fontSize",caption:"字号"}}></DropdownListOption>
                       <ColorOption data={{name:"foreColor",caption:"前景色",cols:[4,8]}}></ColorOption>
                       <ColorOption data={{name:"backColor",caption:"背景色",cols:[4,8]}}></ColorOption>
                   </Group>
                   <Group data={{name:"边框",collapsed:false}}>
                       <BorderOption data={{name:"边框样式",value:"213"}}>
                       </BorderOption>
                   </Group>
                   <Group data={{name:"对齐",collapsed:false}}>
                       <AlignOption></AlignOption>
                       <CheckOption data={{name:"wrapText",caption:"自动换行"}}></CheckOption>
                   </Group>
                   <Group data={{name:"格式",collapsed:false}}>
                       {/*<DropdownListOption data={{name:"commomFormat",id:"commomFormatType",caption:"通用格式"}}></DropdownListOption>*/}
                       <FormatOption></FormatOption>
                   </Group>
                   <Group data={{name:"合并",collapsed:false}}>
                       <ButtonOption data={[{name:"合并",value:"mergeCells"},{name:"取消合并",value:"unmergeCells"}]}
                                     onButtonClick={e => {this.onButtonClick(e,this)}}
                       />
                   </Group>
               </GroupWapper>
           </TabContent>
       )
    }
}

const getStoreProps = state => {
    return {
        activeSheet: state.spread.activeSheet,
        activeTabType: state.spread.activeTabType
    }
}

export default connect(getStoreProps)(sheetTabContent)
