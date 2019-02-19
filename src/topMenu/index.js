import React,{Component} from "react";
import connect from "react-redux/es/connect/connect";
import { NavLink,withRouter } from 'react-router-dom'

class topMenu extends Component {


    constructor(props) {
        super(props);

        this.state = {
            tableIndex:1
        }
    }
    componentDidMount(){
        window.$("#fileSelector").change(this.processFileSelected)
        window.$("div.insp-menu .menu-item").click(this.itemSelected);
        window.$("div.insp-dropdown-list .dropdown").click(this.showDropdown)
    }
    runStat(){

    }
    linkRouter(url){
        this.props.history.push(url)
    }

    render(){
       return (
           <div>
               <div className="toolbar" id="toolbar">
                   <div className="toolbar-left-section">
                       <div className="toolbar-spread">
                           <span className="sample-head-logo"></span>
                           <div className="sample-head-text">
                               <NavLink to="/">统计表设计器</NavLink>
                           </div>
                       </div>
                       <div className="btn-group" role="group" aria-label="toolbar"
                            style={{marginTop: "10px",marginLeft:"10px"}}>
                           <div>
                               <div className="insp-row">
                                   <div>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="designDataSet"
                                               title="定义数据集"
                                               onClick={this.linkRouter.bind(this,"/dataset")}
                                       >
                                           <span className="fa fa-eraser fa-2x"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="designStat"
                                               title="设计统计表"
                                               onClick={this.linkRouter.bind(this,"/")}
                                       >
                                           <span className="fa fa-table fa-2x"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="runStat"
                                               title="批量统计"
                                               onClick={this.runStat.bind(this)}
                                       >
                                           <span className="fa fa-table fa-2x"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="doImport"
                                               title="打开统计表">
                                           <span className="fa fa-folder-open fa-2x"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="doExport"
                                               title="保存统计表"
                                       >
                                           <span className="fa fa-floppy-o fa-2x"></span>
                                       </button>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="toolbar-middle-section">
                       <div className="btn-group" role="group" aria-label="toolbar" style={{marginTop: "10px"}}>
                       </div>
                   </div>
                   <div className="toolbar-right-section">
                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                               id="toggleInspector"
                               title="@toolBar.hideInspector@">
                           <span className="fa fa-angle-right fa-2x"></span>
                       </button>
                   </div>
               </div>
               <div className="hidden">
                   <input type="file" name="image" id="fileSelector"/>
               </div>
           </div>
       )
    }
}

const getStoreProps = state => {
    return {
        spread: state.spread.spread,
        activeSheet: state.spread.activeSheet,
        tableIndex: state.spread.tableIndex
    }
}

export default connect(getStoreProps)(withRouter(topMenu))
