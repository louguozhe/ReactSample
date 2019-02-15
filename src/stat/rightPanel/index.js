import React,{Component} from "react";
import TabContentWapper from "../tab/tabContentWapper";
import TabTitle from '../tab/tabTitle'
import TabTitleWapper from '../tab/tabTitleWapper'
import StatTabContent from "./statTabContent"
import CellTabContent from "./cellTabContent"
import {TabType} from "../../store/reducers/spread/actions";
import connect from "react-redux/es/connect/connect";

class rightPanel extends Component {

    componentDidMount(){
    }

    render(){
        return (
            <div className="insp-container ui-draggable ui-draggable-disabled ui-state-disabled"
                 aria-disabled={true}
                 style={{left: "auto", top: "0px", display: "block"}}>
                <TabTitleWapper>
                    <TabTitle data={{name:"表单",id:"statTab",active:true}}/>
                    <TabTitle data={{name:"单元格",id:"cellTab",active:false}}/>
                    <TabTitle data={{name:"维度",id:"dimensionTab",active:false,hidden:true}}/>
                    <TabTitle data={{name:"指标",id:"indexTab",active:false,hidden:true}}/>
                    <TabTitle data={{name:"数据",id:"dataTab",active:this.props.activeTabType === TabType.DATA,hidden:true}}/>
                    <TabTitle data={{name:"备注",id:"commentTab",active:this.props.activeTabType === TabType.COMMENT,hidden:true}}/>
                    <TabTitle data={{name:"图片",id:"pictureTab",active:this.props.activeTabType === TabType.PICTURE,hidden:true}}/>
                    <TabTitle data={{name:"@tabs.sparklineEx@",id:"sparklineExTab",active:this.props.activeTabType === TabType.SPARKLINE,hidden:true}}/>
                    <TabTitle data={{name:"@tabs.chartEx@",id:"chartExTab",active:this.props.activeTabType === TabType.CHART,hidden:true}}/>
                    <TabTitle data={{name:"@tabs.slicer@",id:"slicerTab",active:this.props.activeTabType === TabType.SLICER,hidden:true}}/>
                </TabTitleWapper>
                <TabContentWapper>
                    {/*<SpreadTabContent/>*/}
                    <StatTabContent />
                    <CellTabContent />
                </TabContentWapper>
            </div>

        )
    }
}
const getStoreProps = state => {
    return {
        activeSheet: state.spread.activeSheet,
        activeTabType: state.spread.activeTabType
    }
}
export default connect(getStoreProps)(rightPanel)
