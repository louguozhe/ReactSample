import React,{Component} from "react";
import TabContent from "../tab/tabContent";
import Group from "../group/group";
import GroupWapper from "../group/groupWapper";
import TextOption from "../option/textOptionComponent"
import CheckOption from "../option/checkOptionComponent";
import NumberOption from "../option/numberOptionComponent";
import ColorOption from "../option/colorOptionComponent";
import ButtonOption from "../option/buttonOptionComponent";
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
                   <Group data={{name:"通用",collapsed:false}}>
                       <TextOption {...this.props} data={{name:"值",value:"cellName"}}/>
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
