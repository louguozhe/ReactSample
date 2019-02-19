import React,{Component} from "react";
import TabContent from "../tab/tabContent";
import Group from "../group/group";
import GroupWapper from "../group/groupWapper";
import CheckOption from "../option/checkOptionComponent";
import connect from "react-redux/es/connect/connect";
import {TabType} from '../../store/reducers/spread/actions'
import { Row,Col   } from 'antd';
import NumberOption from "../option/numberOptionComponent";
import TextOption from "../option/textOptionComponent"
import ButtonOption from "../option/buttonOptionComponent";

class spreadTabContent extends Component {

    constructor(props) {
        super(props);

        this.onOptionChange = this.onOptionChange.bind(this)
        this.state = {
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
        });
    }

    onOptionChange(sender,optionName){
        this.props.spread.options[optionName] = ! this.props.spread.options[optionName]
        this.setState({
            options: this.props.spread.options
        });
    }

    render(){
       return (
           <TabContent data={{id:"printTab",active:false}}>
               <GroupWapper>
                   <Group data={{name:"打印区域",collapsed:false}}>
                       <TextOption data={{name:"printRange",caption:"打印区域",cols:[3,9]}}/>
                       <TextOption data={{name:"printRepeatRow",caption:"重复行",cols:[3,9]}}/>
                       <TextOption data={{name:"printRepeatCol",caption:"重复列",cols:[3,9]}}/>
                   </Group>
                   <Group data={{name:"页眉页脚",collapsed:false}}>
                       <TextOption data={{name:"printHeaderTitle",caption:"页眉",cols:[3,9]}}/>
                       <TextOption data={{name:"printFooterTitle",caption:"页角",cols:[3,9]}}/>
                   </Group>
                   <Group data={{name:"打印操作",collapsed:false}}>
                       <ButtonOption data={[{name:"打印表单",value:"printStat"},{name:"打印所有",value:"printSpread"}]}/>
                   </Group>
               </GroupWapper>
           </TabContent>
       )
    }
}

const getStoreProps = state => {
    return {
        spread: state.spread.spread,
        activeTabType: state.spread.activeTabType
    }
}

export default connect(getStoreProps)(spreadTabContent)
