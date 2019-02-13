import React,{Component} from "react";
import connect from "react-redux/es/connect/connect";
import {exportToExcel,exportToJSON} from '../../utils/spreadHelper'

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
                           <div className="sample-head-text">Spread.Sheets</div>
                       </div>
                       <div className="btn-group" role="group" aria-label="toolbar"
                            style={{marginTop: "10px",marginLeft:"10px"}}>
                           <div>
                               <div className="insp-row">
                                   <div>

                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="doImport"
                                               title="打开文件" onClick={this.doImportFile}>
                                           <span className="fa fa-folder-open fa-2x"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="doExport"
                                               title="保存文件">
                                           <span className="fa fa-floppy-o fa-2x"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="doClear"
                                               title="@toolBar.clear.title@">
                                           <span className="fa fa-eraser fa-2x"></span>
                                       </button>
                                       <div className="insp-dropdown-list insp-inline-row v-middle localize-tooltip"
                                            data-list-ref="zoomList" data-name="zoomSpread"
                                            title="@toolBar.zoom.title@">
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
                           <button type="button" className="btn btn-default btn-toolbar localize-tooltip" id="addtable"
                                   title="@toolBar.insertTable@">
                               <span className="fa fa-table fa-2x"></span>
                           </button>
                           <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                   id="addpicture"
                                   title="@toolBar.insertPicture@">
                               <span className="fa fa-picture-o fa-2x"></span>
                           </button>
                           <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                   id="addcomment"
                                   title="@toolBar.insertComment@">
                               <span className="fa fa-comment fa-2x"></span>
                           </button>
                           <div className="btn-group" role="group">
                               <button type="button"
                                       className="btn btn-default btn-toolbar dropdown-toggle localize-tooltip"
                                       data-toggle="dropdown" aria-expanded="false" title="@toolBar.insertSparkline@">
                                   <span className="fa fa-pie-chart fa-2x"></span>
                               </button>
                               <ul className="dropdown-menu" role="menu" id="sparklineextypes">
                                   <li>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="lineSparkline"
                                               title="@sparklineDialog.sparklineExType.values.line@">
                                           <span className="ui-icon sparkline-line"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="columnSparkline"
                                               title="@sparklineDialog.sparklineExType.values.column@">
                                           <span className="ui-icon sparkline-column"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="winlossSparkline"
                                               title="@sparklineDialog.sparklineExType.values.winLoss@">
                                           <span className="ui-icon sparkline-winloss"></span>
                                       </button>
                                   </li>
                                   <li>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="pieSparkline"
                                               title="@sparklineDialog.sparklineExType.values.pie@">
                                           <span className="ui-icon sparkline-pie"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="areaSparkline"
                                               title="@sparklineDialog.sparklineExType.values.area@">
                                           <span className="ui-icon sparkline-area"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="scatterSparkline"
                                               title="@sparklineDialog.sparklineExType.values.scatter@">
                                           <span className="ui-icon sparkline-scatter"></span>
                                       </button>
                                   </li>
                                   <li>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="spreadSparkline"
                                               title="@sparklineDialog.sparklineExType.values.spread@">
                                           <span className="ui-icon sparkline-spread"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="stackedSparkline"
                                               title="@sparklineDialog.sparklineExType.values.stacked@">
                                           <span className="ui-icon sparkline-stacked"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="boxplotSparkline"
                                               title="@sparklineDialog.sparklineExType.values.boxplot@">
                                           <span className="ui-icon sparkline-boxplot"></span>
                                       </button>
                                   </li>
                                   <li>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="cascadeSparkline"
                                               title="@sparklineDialog.sparklineExType.values.cascade@">
                                           <span className="ui-icon sparkline-cascade"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="paretoSparkline"
                                               title="@sparklineDialog.sparklineExType.values.pareto@">
                                           <span className="ui-icon sparkline-pareto"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="bulletSparkline"
                                               title="@sparklineDialog.sparklineExType.values.bullet@">
                                           <span className="ui-icon sparkline-bullet"></span>
                                       </button>
                                   </li>
                                   <li>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="hbarSparkline"
                                               title="@sparklineDialog.sparklineExType.values.hbar@">
                                           <span className="ui-icon sparkline-hbar"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="vbarSparkline"
                                               title="@sparklineDialog.sparklineExType.values.vbar@">
                                           <span className="ui-icon sparkline-vbar"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="variSparkline"
                                               title="@sparklineDialog.sparklineExType.values.variance@">
                                           <span className="ui-icon sparkline-variance"></span>
                                       </button>
                                   </li>
                                   <li>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="monthSparkline"
                                               title="@sparklineDialog.sparklineExType.values.month@">
                                           <span className="ui-icon sparkline-hbar"></span>
                                       </button>
                                       <button type="button" className="btn btn-default btn-toolbar localize-tooltip"
                                               id="yearSparkline"
                                               title="@sparklineDialog.sparklineExType.values.year@">
                                           <span className="ui-icon sparkline-vbar"></span>
                                       </button>
                                   </li>
                               </ul>
                           </div>


                           <div className="btn-group" role="group">
                               <button type="button"
                                       className="btn btn-default btn-toolbar dropdown-toggle localize-tooltip"
                                       data-toggle="dropdown" aria-expanded="false" title="@toolBar.insertChart@">
                                   <span className="fa fa-bar-chart-o fa-2x"></span>
                               </button>
                               <ul className="dropdown-menu chart-Container-width" role="menu" id="chartContainer">
                                   <li>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="columnClusteredChart"
                                               title="@chartDialog.chartExType.values.columnClustered@">
                                           <span className="chart-icon chart-columnClustered"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="columnStackedChart"
                                               title="@chartDialog.chartExType.values.columnStacked@">
                                           <span className="chart-icon chart-columnStacked"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="columnStacked100Chart"
                                               title="@chartDialog.chartExType.values.columnStacked100@">
                                           <span className="chart-icon chart-columnStacked100"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="lineChart"
                                               title="@chartDialog.chartExType.values.line@">
                                           <span className="chart-icon chart-line"></span>
                                       </button>
                                   </li>
                                   <li>

                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="lineStackedChart"
                                               title="@chartDialog.chartExType.values.lineStacked@">
                                           <span className="chart-icon chart-lineStacked"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="lineStacked100Chart"
                                               title="@chartDialog.chartExType.values.lineStacked100@">
                                           <span className="chart-icon chart-lineStacked100"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="lineMarkersChart"
                                               title="@chartDialog.chartExType.values.lineMarkers@">
                                           <span className="chart-icon chart-lineMarkers"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="lineMarkersStackedChart"
                                               title="@chartDialog.chartExType.values.lineMarkersStacked@">
                                           <span className="chart-icon chart-lineMarkersStacked"></span>
                                       </button>
                                   </li>
                                   <li>

                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="lineMarkersStacked100Chart"
                                               title="@chartDialog.chartExType.values.lineMarkersStacked100@">
                                           <span className="chart-icon chart-lineMarkersStacked100"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="pieChart"
                                               title="@chartDialog.chartExType.values.pie@">
                                           <span className="chart-icon chart-pie"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="doughnutChart"
                                               title="@chartDialog.chartExType.values.doughnut@">
                                           <span className="chart-icon chart-doughnut"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="barClusteredChart"
                                               title="@chartDialog.chartExType.values.barClustered@">
                                           <span className="chart-icon chart-barClustered"></span>
                                       </button>
                                   </li>
                                   <li>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="barStackedChart"
                                               title="@chartDialog.chartExType.values.barStacked@">
                                           <span className="chart-icon chart-barStacked"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="barStacked100Chart"
                                               title="@chartDialog.chartExType.values.barStacked100@">
                                           <span className="chart-icon chart-barStacked100"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="areaChart"
                                               title="@chartDialog.chartExType.values.area@">
                                           <span className="chart-icon chart-area"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="areaStackedChart"
                                               title="@chartDialog.chartExType.values.areaStacked@">
                                           <span className="chart-icon chart-areaStacked"></span>
                                       </button>
                                   </li>
                                   <li>

                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="areaStacked100Chart"
                                               title="@chartDialog.chartExType.values.areaStacked100@">
                                           <span className="chart-icon chart-areaStacked100"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="xyScatterChart"
                                               title="@chartDialog.chartExType.values.xyScatter@">
                                           <span className="chart-icon chart-xyScatter"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="xyScatterSmoothChart"
                                               title="@chartDialog.chartExType.values.xyScatterSmooth@">
                                           <span className="chart-icon chart-xyScatterSmooth"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="xyScatterSmoothNoMarkersChart"
                                               title="@chartDialog.chartExType.values.xyScatterSmoothNoMarkers@">
                                           <span className="chart-icon chart-xyScatterSmoothNoMarkers"></span>
                                       </button>
                                   </li>
                                   <li>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="xyScatterLinesChart"
                                               title="@chartDialog.chartExType.values.xyScatterLines@">
                                           <span className="chart-icon chart-xyScatterLines"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="xyScatterLinesNoMarkersChart"
                                               title="@chartDialog.chartExType.values.xyScatterLinesNoMarkers@">
                                           <span className="chart-icon chart-xyScatterLinesNoMarkers"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="bubbleChart"
                                               title="@chartDialog.chartExType.values.bubble@">
                                           <span className="chart-icon chart-bubble"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="stockHLCChart"
                                               title="@chartDialog.chartExType.values.stockHLC@">
                                           <span className="chart-icon chart-stockHLC"></span>
                                       </button>
                                   </li>
                                   <li>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="stockOHLCChart"
                                               title="@chartDialog.chartExType.values.stockOHLC@">
                                           <span className="chart-icon chart-stockOHLC"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="stockVHLCChart"
                                               title="@chartDialog.chartExType.values.stockVHLC@">
                                           <span className="chart-icon chart-stockVHLC"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="stockVOHLCChart"
                                               title="@chartDialog.chartExType.values.stockVOHLC@">
                                           <span className="chart-icon chart-stockVOHLC"></span>
                                       </button>
                                       <button type="button"
                                               className="btn btn-default btn-toolbar localize-tooltip chartNoMarginPadding"
                                               id="comboChart"
                                               title="@chartDialog.chartExType.values.combo@">
                                           <span className="chart-icon chart-combo"></span>
                                       </button>
                                   </li>
                               </ul>
                           </div>


                           <button type="button" className="btn btn-default btn-toolbar localize-tooltip hidden"
                                   id="addslicer"
                                   title="@toolBar.insertSlicer@">
                               <span className="fa fa-filter fa-2x"></span>
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
