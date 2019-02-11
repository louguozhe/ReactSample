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
    }
    componentWillReceiveProps(nextProps) {
    }

    render(){
       return (
           <TabContent data={{id:"dataTab",active: this.props.activeTabType === TabType.DATA}} >
               <GroupWapper>
                   <Group data={{name:"通用",collapsed:false}}>
                       <TextOption {...this.props} data={{name:"值2",value:"cellName"}}/>
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
