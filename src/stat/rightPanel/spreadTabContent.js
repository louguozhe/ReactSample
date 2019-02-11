import React,{Component} from "react";
import TabContent from "../tab/tabContent";
import Group from "../group/group";
import GroupWapper from "../group/groupWapper";
import CheckOption from "../option/checkOptionComponent";
import connect from "react-redux/es/connect/connect";
import {TabType} from '../../store/reducers/spread/actions'
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
           <TabContent data={{id:"spreadTab",active:this.props.activeTabType === TabType.SPREAD}}>
               <GroupWapper>
                   <Group data={{name:"通用",collapsed:false}}>
                       <CheckOption {...this.props}
                                    data={{name:"允许拖拽",checked:this.props.spread?this.props.spread.options.allowUserDragDrop:false}}
                                    onOptionChange={e=>this.onOptionChange(e,"allowUserDragDrop")}
                       />
                   </Group>
               </GroupWapper>
               <GroupWapper>
                   <Group data={{name:"滚动条",collapsed:false}}>
                       <CheckOption {...this.props}
                                    data={{name:"垂直滚动条",checked:this.props.spread?this.props.spread.showVerticalScrollbar:false}}
                                    onOptionChange={e=>this.onOptionChange(e,"showVerticalScrollbar")}
                       />
                       <CheckOption {...this.props}
                                    data={{name:"水平滚动条",checked:this.props.spread?this.props.spread.showHorizontalScrollbar:false}}
                                    onOptionChange={e=>this.onOptionChange(e,"showHorizontalScrollbar")}
                       />
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
