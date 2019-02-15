import React,{Component} from "react";
import connect from "react-redux/es/connect/connect";

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

    render(){
       return (
           <div>
               <div className="toolbar" id="toolbar">
                   <div className="toolbar-left-section">
                       <div className="toolbar-spread">
                           <span className="sample-head-logo"></span>
                           <div className="sample-head-text">统计表设计器</div>
                       </div>
                       <div className="btn-group" role="group" aria-label="toolbar"
                            style={{marginTop: "10px",marginLeft:"10px"}}>
                           <div>
                               <div className="insp-row">
                                   <div>

                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="doImport"
                                               title="打开本地统计表" onClick={this.doImportFile}>
                                           <span className="fa fa-folder-open fa-2x"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="doImport"
                                               title="打开远程统计表" onClick={this.doImportFile}>
                                           <span className="fa fa-folder-open fa-2x"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="doExport"
                                               title="保存统计表">
                                           <span className="fa fa-floppy-o fa-2x"></span>
                                       </button>
                                       <div className="insp-dropdown-list insp-inline-row v-middle localize-tooltip"
                                            data-list-ref="zoomList" data-name="zoomSpread"
                                            title="缩放比例">
                                           <div
                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-12 btn-zoom btn-hover">
                                               <div style={{width:"100%",height:"100%"}}>
                                                   <span className="display btn-zoom-text"></span><span
                                                   className="caret"></span>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className="toolbar-middle-section">
                       <div className="btn-group" role="group" aria-label="toolbar" style={{marginTop: "10px"}}>
                           <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                   id="doExport"
                                   title="连接数据源">
                               <span className="fa fa-floppy-o fa-2x"></span>
                           </button>
                           <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                   id="doExport"
                                   title="定义统计维度">
                               <span className="fa fa-eraser fa-2x"></span>
                           </button>
                           <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                   id="doExport"
                                   title="定义统计指标">
                               <span className="fa fa-table fa-2x"></span>
                           </button>
                           <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                   id="doExport"
                                   title="定义数据集">
                               <span className="fa fa-floppy-o fa-2x"></span>
                           </button>
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

export default connect(getStoreProps)(topMenu)
