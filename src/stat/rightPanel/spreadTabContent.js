import React,{Component} from "react";
import TabContent from "../tab/tabContent";
import Group from "../group/group";
import GroupWapper from "../group/groupWapper";
import CheckOption from "../option/checkOptionComponent";
import connect from "react-redux/es/connect/connect";

class spreadTabContent extends Component {

    constructor(props) {
        super(props);

        this.onOptionChange = this.onOptionChange.bind(this)
        this.state = {
            options:null
        }
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            options: nextProps.spread.options
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
           <TabContent data={{id:"spreadTab",active:true}}>
               <GroupWapper>
                   <Group data={{name:"通用",collapsed:false}}>
                       <CheckOption {...this.props}
                                    data={{name:"允许拖拽",checked:this.state.options?this.state.options.allowUserDragDrop:false}}
                                    onOptionChange={e=>this.onOptionChange(e,"allowUserDragDrop")}
                       />
                   </Group>
               </GroupWapper>
               <GroupWapper>
                   <Group data={{name:"滚动条",collapsed:false}}>
                       <CheckOption {...this.props}
                                    data={{name:"垂直滚动条",checked:this.state.options?this.state.options.showVerticalScrollbar:false}}
                                    onOptionChange={e=>this.onOptionChange(e,"showVerticalScrollbar")}
                       />
                       <CheckOption {...this.props}
                                    data={{name:"水平滚动条",checked:this.state.options?this.state.options.showHorizontalScrollbar:false}}
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
        spread: state.spread.spread
    }
}

export default connect(getStoreProps)(spreadTabContent)
