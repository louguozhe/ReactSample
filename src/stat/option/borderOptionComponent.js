import React,{Component} from "react";
import DropdownListOption from "./dropdownListOptionComponent";
import ColorOption from "./colorOptionComponent";

export default class extends Component {


    render(){
        return (
            <div>
                <div className="insp-row">
                    <div className="insp-groups">
                        <div>
                            <div className="group-item">
                                <div className="spread-border-icon-outsideborder image localize-tooltip"
                                     data-name="outsideBorder"
                                     title="@tooltips.border.outsideBorder@"></div>
                            </div>
                            <div className="group-item">
                                <div className="spread-border-icon-insideborder image localize-tooltip"
                                     data-name="insideBorder"
                                     title="@tooltips.border.insideBorder@"></div>
                            </div>
                            <div className="group-item">
                                <div className="spread-border-icon-allborder image localize-tooltip"
                                     data-name="allBorder"
                                     title="@tooltips.border.allBorder@"></div>
                            </div>
                        </div>
                        <div>
                            <div className="group-item">
                                <div className="spread-border-icon-leftborder image localize-tooltip"
                                     data-name="leftBorder"
                                     title="@tooltips.border.leftBorder@"></div>
                            </div>
                            <div className="group-item">
                                <div className="spread-border-icon-innervertical image localize-tooltip"
                                     data-name="innerVerticalBorder"
                                     title="@tooltips.border.innerVertical@"></div>
                            </div>
                            <div className="group-item">
                                <div className="spread-border-icon-rightborder image localize-tooltip"
                                     data-name="rightBorder"
                                     title="@tooltips.border.rightBorder@"></div>
                            </div>
                        </div>
                        <div>
                            <div className="group-item">
                                <div className="spread-border-icon-topborder image localize-tooltip"
                                     data-name="topBorder"
                                     title="@tooltips.border.topBorder@"></div>
                            </div>
                            <div className="group-item">
                                <div className="spread-border-icon-innerhorizontal image localize-tooltip"
                                     data-name="innerHorizontalBorder"
                                     title="@tooltips.border.innerHorizontal@"></div>
                            </div>
                            <div className="group-item">
                                <div className="spread-border-icon-bottomborder image localize-tooltip"
                                     data-name="bottomBorder"
                                     title="@tooltips.border.bottomBorder@"></div>
                            </div>
                        </div>
                    </div>
                    <div className="insp-groups right-border-group">
                        <DropdownListOption data={{name:"borderLine",caption:"线条",itemid:"border-line-type"}}></DropdownListOption>
                        <ColorOption data={{name:"sheetTabColor0",caption:"颜色",cols:[4,8]}}></ColorOption>
                    </div>
                </div>
            </div>
        )
    }
}
