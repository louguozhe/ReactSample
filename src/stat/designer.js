import React, {Component} from 'react';
import './Style.css'
import Menu from './topMenu'
import RightPanel from './rightPanel'
import {InitSpreadAction, ActiveSheetAction, ActiveTabAction, TabType} from '../store/reducers/spread/actions'
import connect from "react-redux/es/connect/connect";
import {getCellInfo,fullNameCellType} from '../utils/spreadHelper'
import {StatDimension, StatIndex} from "../mock/dataSource";
import {spreadNS,initSpread} from '../utils/eventHelper'
import Provider from "react-redux/es/components/Provider";
import DropDownList from './dropDownList'
class Designer extends Component {

    constructor(props) {
        super(props);

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
        //this.initSpread()
        var spread = initSpread("#ss",'formulabox',{sheetCount: 3},this.props.store0.dispatch)
        this.loadDataSource(spread)
        // this.props.initSpread(spread)

        // var spread = new window.GC.Spread.Sheets.Workbook(document.getElementById('ss'), { sheetCount: 1 });
    }
    loadDataSource(spread){
        var spreadNS = window.GC.Spread.Sheets
        spread.suspendPaint();
        try {
            var sheet = spread.getSheet(0)
            sheet.name("统计模板")
            sheet = spread.getSheet(1)
            sheet.name("统计维度")
            var table = sheet.tables.addFromDataSource("统计维度", 0, 0, this.props.statDimension.data)
            sheet = spread.getSheet(2)
            sheet.name("统计指标")
            table = sheet.tables.addFromDataSource("统计指标", 0, 0, this.props.statIndex.data)
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
                <DropDownList/>
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
