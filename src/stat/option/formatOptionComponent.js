import React,{Component} from "react";
import DropdownListOption from "./dropdownListOptionComponent";
import TextOption from "./textOptionComponent";

export default class extends Component {

    constructor(props) {
        super(props)

    }

    render(){
        return (
            <React.Fragment>
                <DropdownListOption data={{name:"commomFormat",id:"commomFormatType",caption:"通用格式"}}></DropdownListOption>
                <div>
                    <div className="insp-row">
                        <div>
                            <div className="insp-button-group insp-inline-row">
                                <div
                                    className="group-container insp-inline-row-item btn-group btn-group-xs btn-group-justified insp-col-12">
                                                            <span
                                                                className="btn btn-default btn-icon no-toggle localize-tooltip"
                                                                data-name="percentStyle"
                                                                title="@tooltips.format.percentStyle@">
                                                                <span
                                                                    className="ui-icon smallicon icon-percentstyle"></span>
                                                            </span>
                                    <span className="btn btn-default btn-icon no-toggle localize-tooltip"
                                          data-name="commaStyle"
                                          title="@tooltips.format.commaStyle@">
                                                                <span
                                                                    className="ui-icon smallicon icon-commastyle"></span>
                                                            </span>
                                    <span className="btn btn-default btn-icon no-toggle localize-tooltip"
                                          data-name="increaseDecimal"
                                          title="@tooltips.format.increaseDecimal@">
                                                                <span
                                                                    className="ui-icon smallicon icon-increasedecimal"></span>
                                                            </span>
                                    <span className="btn btn-default btn-icon no-toggle localize-tooltip"
                                          data-name="decreaseDecimal"
                                          title="@tooltips.format.decreaseDecimal@">
                                                                <span
                                                                    className="ui-icon smallicon icon-decreasedecimal"></span>
                                                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <TextOption data={{name:"customFormat",caption:"自定义格式"}}></TextOption>
            </React.Fragment>
        )
    }
}
