import React, {Component} from 'react';
import './Style.css'
import Menu from './topMenu'
import RightPanel from './rightPanel'
import {InitSpreadAction} from '../store/reducers/spread/actions'
import connect from "react-redux/es/connect/connect";
import {initSpread} from '../utils/eventHelper'
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
        initSpread("#ss",'formulabox',{sheetCount: 1},this.props.store0.dispatch)
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
    // console.log('getList',state.update)
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
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Designer)
