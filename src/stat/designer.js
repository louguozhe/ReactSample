import React, {Component} from 'react';
import './Style.css'
import Menu from './menu'
import RightPanel from './rightPanel'
import {InitSpreadAction,ActiveSheetAction} from '../store/reducers/spread/actions'
import connect from "react-redux/es/connect/connect";

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
        var spread = new spreadNS.Workbook(document.getElementById('ss'), {sheetCount: 1});
        var excelIO = new window.GC.Spread.Excel.IO();
        this.setState({
            excelIO:excelIO
        })
        this.props.initSpread(spread)

        this.adjustSpreadSize(spread)
        var fbx = new spreadNS.FormulaTextBox.FormulaTextBox(document.getElementById('formulabox'));
        fbx.workbook(spread);

        this.attachEvents(spread)

        this.syncSpreadPropertyValues(spread)
        this.syncSheetPropertyValues(spread)

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
        spread: state.spread.spread
    }
}

const mapDispatchToProps = dispatch => {
    return {
        initSpread: spread => {
            dispatch(InitSpreadAction(spread))
        },
        activeSheetAction: sheet => {
            dispatch(ActiveSheetAction(sheet))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Designer)
