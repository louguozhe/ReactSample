import React,{Component} from "react";

export default class extends Component {

    constructor(props) {
        super(props)

    }

    render(){
        return (
            <React.Fragment>
                <div>
                    <div className="insp-row">
                        <div>
                            <div className="insp-radio-button-group insp-inline-row" data-name="vAlign">
                                <div
                                    className="group-container insp-inline-row-item btn-group btn-group-xs btn-group-justified insp-col-12">
                                                            <span className="btn btn-default btn-icon localize-tooltip"
                                                                  data-name="top" title="@tooltips.alignment.topAlign@">
                                                                <span
                                                                    className="ui-icon smallicon icon-topalign"></span>
                                                            </span>
                                    <span className="btn btn-default btn-icon localize-tooltip"
                                          data-name="middle"
                                          title="@tooltips.alignment.middleAlign@">
                                                                <span
                                                                    className="ui-icon smallicon icon-middlealign"></span>
                                                            </span>
                                    <span className="btn btn-default btn-icon localize-tooltip"
                                          data-name="bottom"
                                          title="@tooltips.alignment.bottomAlign@">
                                                                <span
                                                                    className="ui-icon smallicon icon-bottomalign"></span>
                                                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="insp-row">
                        <div>
                            <div className="insp-radio-button-group insp-inline-row" data-name="hAlign">
                                <div
                                    className="group-container insp-inline-row-item btn-group btn-group-xs btn-group-justified insp-col-12">
                                                            <span className="btn btn-default btn-icon localize-tooltip"
                                                                  data-name="left"
                                                                  title="@tooltips.alignment.leftAlign@">
                                                                <span
                                                                    className="ui-icon smallicon icon-leftalign"></span>
                                                            </span>
                                    <span className="btn btn-default btn-icon localize-tooltip"
                                          data-name="center"
                                          title="@tooltips.alignment.centerAlign@">
                                                                <span
                                                                    className="ui-icon smallicon icon-centeralign"></span>
                                                            </span>
                                    <span className="btn btn-default btn-icon localize-tooltip"
                                          data-name="right"
                                          title="@tooltips.alignment.rightAlign@">
                                                                <span
                                                                    className="ui-icon smallicon icon-rightalign"></span>
                                                            </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
