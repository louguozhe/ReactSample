import React, {Component} from 'react';
import './Style.css'
import Menu from './topMenu'
import RightPanel from './rightPanel'
import {InitSpreadAction, ActiveSheetAction, ActiveTabAction, TabType} from '../store/reducers/spread/actions'
import connect from "react-redux/es/connect/connect";
import {getCellInfo} from '../utils/spreadHelper'
import {StatDimension, StatIndex} from "../mock/dataSource";

class Designer extends Component {

    constructor(props) {
        super(props);

        this.attachSpreadEvents = this.attachSpreadEvents.bind(this)
        this.onCellSelected = this.onCellSelected.bind(this)

        this.state = {
            hideInspector: false,
            cell:null,
            excelIO:null

        }
    }

    componentWillMount(){
        // var spread = new window.GC.Spread.Sheets.Workbook(document.getElementById('ss'), { sheetCount: 1 });
    }
    componentDidMount(){
        this.initSpread()
        // var spread = new window.GC.Spread.Sheets.Workbook(document.getElementById('ss'), { sheetCount: 1 });
    }
    localizeUI(){

    }
    initSpread(){
        var spreadNS = window.GC.Spread.Sheets;
        var spread = new spreadNS.Workbook(document.getElementById('ss'), {sheetCount: 3});
        var excelIO = new window.GC.Spread.Excel.IO();
        this.setState({
            excelIO:excelIO
        })
        this.loadDataSource(spread)
        this.props.initSpread(spread)

        this.adjustSpreadSize(spread)
        var fbx = new spreadNS.FormulaTextBox.FormulaTextBox(document.getElementById('formulabox'));
        fbx.workbook(spread);

        this.attachEvents(spread)

        this.syncSpreadPropertyValues(spread)
        this.syncSheetPropertyValues(spread)

    }
    loadDataSource(spread){
        var spreadNS = window.GC.Spread.Sheets
        spread.suspendPaint();
        try {
            var sheet = spread.getSheet(0)
            sheet.name("统计模板")
            sheet = spread.getSheet(1)
            var table = sheet.tables.addFromDataSource("统计维度", 0, 0, this.props.statDimension.data)
            sheet.name("统计维度")
            sheet = spread.getSheet(2);
            table = sheet.tables.addFromDataSource("统计指标", 0, 0, this.props.statIndex.data)
            sheet.name("统计指标")
            // table.filterButtonVisible(true)
            // table.bindColumns(true)
            // sheet2.bindColumns(this.props.dataSource.colInfos);
            // table.setDataSource(this.props.dataSource.data);
            // sheet2.name("数据源");
            // sheet2.autoGenerateColumns = false;
            // sheet2.bindColumns(this.props.dataSource.colInfos);
            // // sheet2.tables.findByName("数据源").filterButtonVisible(true)
            // // sheet2.getTable(0).filterButtonVisible(true)
        } catch (e) {
            alert(e.message);
        }
        spread.resumePaint();
        // console.log('sheet2.tables',sheet2.tables)
    }
    syncSpreadPropertyValues(spread){

    }
    syncSheetPropertyValues(spread){
        var spreadNS = window.GC.Spread.Sheets;
        var sheet = spread.getActiveSheet(),
            options = sheet.options;
        this.setZoomFactor(sheet.zoom())
        var _self = this
        sheet.bind(spreadNS.Events.UserZooming, function (event, args) {
            _self.setZoomFactor(args.newZoomFactor);
        });
    }
    setZoomFactor(zoom){
        this.setDropDownText("#toolbar div.insp-dropdown-list[data-name='zoomSpread']", Math.round(zoom * 100) + "%");
    }
    setDropDownText(container, value) {
        var refList = "#" + window.$(container).data("list-ref"),
            $items = window.$(".menu-item div.text", refList),
            $item = $items.filter(function () {
                return window.$(this).data("value") === value;
            });

        var text = $item.text() || value;

        window.$("span.display", container).text(text);
    }
    attachEvents(spread){
        // attachToolbarItemEvents();
        this.attachSpreadEvents(spread);
        // attachConditionalFormatEvents();
        // attachDataValidationEvents();
        // attachOtherEvents();
        // attachCellTypeEvents();
        // attachLockCellsEvent();
        // attachBorderTypeClickEvents();
        // attachSparklineSettingEvents();
        // attachChartItemEvents();
    }
    attachSpreadEvents(spread){
        var spreadNS = window.GC.Spread.Sheets;
        spread.bind(spreadNS.Events.EnterCell, this.onCellSelected.bind(this));
        spread.bind(spreadNS.Events.ActiveSheetChanged, this.onActiveSheetChanged.bind(this));
        spread.bind(spreadNS.Events.ValueChanged, function (sender, args) {
            var row = args.row, col = args.col, sheet = args.sheet;
            if (sheet.getCell(row, col).wordWrap()) {
                sheet.autoFitRow(row);
            }
        });

    }
    onCellSelected(){
        window.$("#addslicer").addClass("hidden");
        var sheet = this.props.spread.getActiveSheet(),
            row = sheet.getActiveRowIndex(),
            column = sheet.getActiveColumnIndex();
        // if (showSparklineSetting(row, column)) {
        //     setActiveTab("sparklineEx");
        //     return;
        // }
        var cellInfo = getCellInfo(sheet, row, column),
            cellType = cellInfo.type;

        // syncCellRelatedItems();
        // updatePositionBox(sheet);
        // updateCellStyleState(sheet, row, column);

        var tabType = TabType.CELL;

        // clearCachedItems();

        // add map from cell type to tab type here
        // if (cellType === TabType.TABLE) {
        //     tabType = TabType.TABLE;
        //     // syncTablePropertyValues(sheet, cellInfo.object);
        //     // window.$("#addslicer").removeClass("hidden");
        // } else if (cellType === TabType.COMMENT) {
        //     tabType = TabType.COMMENT;
        //     // syncCommentPropertyValues(sheet, cellInfo.object);
        // }
        tabType = cellType

        // this.props.activeTabAction(tabType);
    }
    // setActiveTab(tabName) {
    //     // show / hide tabs
    //     var $target = this.getTabItem(tabName),
    //         $spreadTab = this.getTabItem("spread");
    //
    //     if (specialTabNames.indexOf(tabName) >= 0) {
    //         if ($target.hasClass("hidden")) {
    //             hideSpecialTabs(false);
    //
    //             $target.removeClass("hidden");
    //             $spreadTab.addClass("hidden");
    //             $("a", $target).tab("show");
    //         }
    //     } else {
    //         if ($spreadTab.hasClass("hidden")) {
    //             $spreadTab.removeClass("hidden");
    //             hideSpecialTabs(true);
    //         }
    //         if (!$target.hasClass("active")) {
    //             // do not switch from Data to Cell tab
    //             if (!(tabName === "cell" && getTabItem("data").hasClass("active"))) {
    //                 $("a", $target).tab("show");
    //             }
    //         }
    //     }
    // }

    getTabItem(tabName) {
        return window.$(".insp-container ul.nav-tabs a[href='#" + tabName + "TabContent']").parent();
    }
    onActiveSheetChanged(){
        this.props.activeSheetAction(this.props.spread.getActiveSheet())
    }
    adjustSpreadSize(spread) {
        var height = window.$("#inner-content-container").height() - window.$("#formulaBar").height() - 4,
            spreadHeight = window.$("#ss").height();

        if (spreadHeight !== height) {
            window.$("#controlPanel").height(height);
            window.$("#ss").height(height);
            window.$("#ss").data("workbook").refresh();
        }
    }


    render() {
        return (
            <div >
                <Menu/>
                <div className="content-container">
                    <div id="inner-content-container" className={this.state.hideInspector?"hide-inspector":""}>
                        <table id="formulaBar" style={{width: "100%"}}>
                            <tbody>
                            <tr>
                                <td style={{verticalAlign:"top"}}>
                                    <input type="text" id="positionbox" disabled="disabled"
                                           style={{padding: "5px",borderWidth: 0, backgroundColor: "rgb(235, 235, 228)",height: "36px"}}/>
                                </td>
                                <td style={{width: "100%", borderLeft: "1px solid #ccc"}}>
                                    <div id="formulabox" contentEditable="true" spellCheck="false"
                                         style={{overflow: "hidden", height: "36px",width: "100%",padding: "9px"}}></div>
                                    <div className="vertical-splitter ui-draggable" id="verticalSplitter"></div>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                        <div className="spread-container" id="controlPanel" style={{height: "600px", bottom: 0}}>
                            <div id="ss" style={{height: "100%",border: "1px solid #ddd"}}></div>
                        </div>
                    </div>
                    <RightPanel />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log('getList',state.update)
    return {
        spread: state.spread.spread,
        statDimension:state.dataSource.statDimension,
        statIndex: state.dataSource.statIndex
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initSpread: spread => {
            dispatch(InitSpreadAction(spread))
        },
        activeSheetAction: sheet => {
            dispatch(ActiveSheetAction(sheet))
        },
        activeTabAction: tabType => {
            dispatch(ActiveTabAction(tabType))
        },
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Designer)
