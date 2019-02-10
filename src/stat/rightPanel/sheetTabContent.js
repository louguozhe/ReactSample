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
           <TabContent data={{id:"sheetTab"}}>
               <GroupWapper>
                   <Group data={{name:"通用",collapsed:false}}>
                       <TextOption {...this.props} data={{name:"名称",value:this.props.activeSheet?this.props.activeSheet.name():""}}
                                   onTextChange={e => {this.onTextChange(e,'sheetName')}}
                       />
                       <NumberOption {...this.props} data={{name:"行数",value:this.props.activeSheet?this.props.activeSheet.getRowCount():0}}
                                   onNumberChange={e => {this.onNumberChange(e,'rowCount')}}
                       />
                       <NumberOption {...this.props} data={{name:"列数",value:this.props.activeSheet?this.props.activeSheet.getColumnCount():0}}
                                     onNumberChange={e => {this.onNumberChange(e,'columnCount')}}
                       />
                       <ColorOption {...this.props} data={{name:"背景色",value:this.props.activeSheet?this.props.activeSheet.options.sheetTabColor:"rgba(0, 0, 0, 0)"}}
                                    onColorChange={e => {this.onColorChange(e,'sheetTabColor')}}
                       />
                   </Group>
                   <Group data={{name:"冻结",collapsed:false}}>
                       <NumberOption {...this.props} data={{name:"冻结行",value:this.props.activeSheet?this.props.activeSheet.frozenRowCount():0}}
                                     onNumberChange={e => {this.onNumberChange(e,'frozenRowCount')}}
                       />
                       <NumberOption {...this.props} data={{name:"冻结列",value:this.props.activeSheet?this.props.activeSheet.frozenColumnCount():0}}
                                                              onNumberChange={e => {this.onNumberChange(e,'frozenColumnCount')}}
                       />
                       <ButtonOption data={[{name:"冻结",value:"freezePane"},{name:"取消冻结",value:"unfreeze"}]}
                                     onButtonClick={e => {this.onButtonClick(e,this)}}
                       />
                   </Group>                  <Group data={{name:"表格线",collapsed:false}}>
                       <CheckOption {...this.props}
                                    data={{name:"垂直线",checked:this.props.activeSheet?this.props.activeSheet.options.gridline.showVerticalGridline:false}}
                                    onOptionChange={e=>this.onOptionChange(e,"showVerticalGridline")}
                       />
                       <CheckOption {...this.props}
                                    data={{name:"水平线",checked:this.props.activeSheet?this.props.activeSheet.options.gridline.showHorizontalGridline:false}}
                                    onOptionChange={e=>this.onOptionChange(e,"showHorizontalGridline")}
                       />
                   </Group>
               </GroupWapper>
           </TabContent>
       )
    }
}

const getStoreProps = state => {
    return {
        activeSheet: state.spread.activeSheet
    }
}

export default connect(getStoreProps)(sheetTabContent)
