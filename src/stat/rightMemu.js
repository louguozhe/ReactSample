import {Component} from "react";
import React from "react";

export default class extends Component {
    constructor(props) {
        super(props);

        this.adjustInspectorDisplay = this.adjustInspectorDisplay.bind(this)

        this.state = {
            floatInspector: false,
        }
    }
    componentDidMount(){
        // this.adjustInspectorDisplay()
    }
    adjustInspectorDisplay() {
        var $inspectorContainer = window.$(".insp-container"),
            $contentContainer = window.$("#inner-content-container"),
            toggleInspectorClasses;

        if (this.floatInspector) {
            $inspectorContainer.draggable("enable");
            $inspectorContainer.addClass("float-inspector");
            $contentContainer.addClass("float-inspector");
            toggleInspectorClasses = ["fa-angle-down", "fa-angle-up"];
            window.$("#inner-content-container").addClass("hide-inspector");
        } else {
            $inspectorContainer.draggable("disable");
            $inspectorContainer.removeClass("float-inspector");
            $inspectorContainer.css({left: "auto", top: 0});
            $contentContainer.removeClass("float-inspector");
            toggleInspectorClasses = ["fa-angle-left", "fa-angle-right"];
        }

        // update toggleInspector
        var classIndex = (window.$(".insp-container:visible").length > 0) ? 1 : 0;
        window.$("#toggleInspector > span")
            .removeClass("fa-angle-left fa-angle-right fa-angle-up fa-angle-down")
            .addClass(toggleInspectorClasses[classIndex]);
    }

    render(){
       return (
           <div className="insp-container">
               <div>
                   <ul className="nav nav-tabs nav-justified">
                       <li className="insp-cate-tab active">
                           <a href="#spreadTab" data-toggle="tab" className="localize">@tabs.spread@</a>
                       </li>
                       <li className="insp-cate-tab">
                           <a href="#sheetTab" data-toggle="tab" className="localize">@tabs.sheet@</a>
                       </li>
                       <li className="insp-cate-tab">
                           <a href="#cellTab" data-toggle="tab" className="localize">@tabs.cell@</a>
                       </li>
                       <li className="insp-cate-tab hidden">
                           <a href="#tableTab" data-toggle="tab" className="localize">@tabs.table@</a>
                       </li>
                       <li className="insp-cate-tab">
                           <a href="#dataTab" data-toggle="tab" className="localize">@tabs.data@</a>
                       </li>
                       <li className="insp-cate-tab hidden">
                           <a href="#commentTab" data-toggle="tab" className="localize">@tabs.comment@</a>
                       </li>
                       <li className="insp-cate-tab hidden">
                           <a href="#pictureTab" data-toggle="tab" className="localize">@tabs.picture@</a>
                       </li>
                       <li className="insp-cate-tab hidden">
                           <a href="#sparklineExTab" data-toggle="tab" className="localize">@tabs.sparklineEx@</a>
                       </li>
                       <li className="insp-cate-tab hidden">
                           <a href="#chartExTab" data-toggle="tab" className="localize">@tabs.chartEx@</a>
                       </li>
                       <li className="insp-cate-tab hidden">
                           <a href="#slicerTab" data-toggle="tab" className="localize">@tabs.slicer@</a>
                       </li>
                   </ul>
                   <div className="tab-content">
                       <div className="tab-pane active" id="spreadTab">
                           <div className="insp-pane">
                               <div className="insp-group-layout">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@spreadTab.general.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="allowUserDragDrop">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @spreadTab.general.allowDragDrop@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="allowUserDragFill">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @spreadTab.general.allowDragFill@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="allowZoom">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @spreadTab.general.allowZoom@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="allowOverflow">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @spreadTab.general.allowOverflow@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showDragFillSmartTag">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @spreadTab.general.showDragFillSmartTag@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="allowDragMerge">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @spreadTab.general.allowDragMerge@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="allowContextMenu">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @spreadTab.general.allowContextMenu@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="resizeZeroIndicatorList"
                                                            data-name="resizeZeroIndicator">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @spreadTab.resizeZeroIndicator.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="insp-group-layout">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@spreadTab.calculation.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div className="text insp-inline-row-item localize">
                                                       @spreadTab.calculation.referenceStyle.title@
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row insp-col-12"
                                                            data-name="referenceStyle">
                                                           <div
                                                               className="radiobutton insp-inline-row-item  insp-col-offset-1 checked"
                                                               data-name="a1style"></div>
                                                           <div
                                                               className="text insp-inline-row-item insp-col-3 localize"
                                                               data-name="a1style">@spreadTab.calculation.referenceStyle.a1@
                                                           </div>
                                                           <div className="radiobutton insp-inline-row-item"
                                                                data-name="r1c1style"></div>
                                                           <div
                                                               className="text insp-inline-row-item insp-col-3 localize"
                                                               data-name="r1c1style">
                                                               @spreadTab.calculation.referenceStyle.r1c1@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@spreadTab.scrollBar.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showVerticalScrollbar">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @spreadTab.scrollBar.showVertical@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showHorizontalScrollbar">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @spreadTab.scrollBar.showHorizontal@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="scrollbarMaxAlign">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @spreadTab.scrollBar.maxAlign@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="scrollbarShowMax">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @spreadTab.scrollBar.showMax@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="scrollIgnoreHidden">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @spreadTab.scrollBar.scrollIgnoreHidden@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@spreadTab.tabStip.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="tabStripVisible">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @spreadTab.tabStip.visible@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="newTabVisible">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @spreadTab.tabStip.newTabVisible@
                                                           </div>
                                                       </div>

                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="tabEditable">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @spreadTab.tabStip.editable@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showTabNavigation">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @spreadTab.tabStip.showTabNavigation@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@spreadTab.color.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="spreadBackcolor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-8 localize">
                                                               @spreadTab.color.spreadBackcolor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-4">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "
                                                                        style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="grayAreaBackcolor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-8 localize">
                                                               @spreadTab.color.grayAreaBackcolor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-4">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "
                                                                        style={{backgroundColor: "rgb(0, 0, 0)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@spreadTab.tip.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="scrollTipList" data-name="scrollTip">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @spreadTab.tip.scrollTip.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="resizeTipList" data-name="resizeTip">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @spreadTab.tip.resizeTip.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showDragDropTip">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @spreadTab.tip.showDragDropTip@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showDragFillTip">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @spreadTab.tip.showDragFillTip@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@spreadTab.sheets.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="sheetNameList" data-name="sheetName">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @spreadTab.sheets.sheetName@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display">Sheet1</span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="sheetVisible"
                                                            style={{width: "100%"}}>
                                                           <div className="insp-col-offset-4">
                                                               <div
                                                                   className="button insp-inline-row-item checked"></div>
                                                               <div className="text   insp-inline-row-item localize">
                                                                   @spreadTab.sheets.sheetVisible@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@spreadTab.cutCopy.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="cutCopyIndicatorVisible">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @spreadTab.cutCopy.cutCopyIndicator.visible@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="cutCopyIndicatorBorderColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-8 localize">
                                                               @spreadTab.cutCopy.cutCopyIndicator.borderColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-4">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "
                                                                        style={{backgroundColor: "rgb(0, 0, 0)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="allowCopyPasteExcelStyle">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @spreadTab.cutCopy.allowCopyPasteExcelStyle@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="allowExtendPasteRange">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @spreadTab.cutCopy.allowExtendPasteRange@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="copyPasteHeaderList"
                                                            data-name="copyPasteHeaderOptions"
                                                            id="copyPasteHeaderOptions">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @spreadTab.cutCopy.copyPasteHeaderOptions.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@spreadTab.spreadTheme.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="spreadThemeList" data-name="spreadTheme"
                                                            id="spreadTheme">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @spreadTab.spreadTheme.theme.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="tab-pane" id="sheetTab">
                           <div className="insp-pane">
                               <div className="insp-group-layout">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@sheetTab.general.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row" data-name="sheetName">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @sheetTab.general.name@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-number insp-inline-row"
                                                            data-name="rowCount">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @sheetTab.general.rowCount@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="number"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-number insp-inline-row"
                                                            data-name="columnCount">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @sheetTab.general.columnCount@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="number"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="sheetTabColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @sheetTab.general.tabColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "
                                                                        style={{backgroundColor: "rgba(0, 0, 0, 0)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@sheetTab.freeze.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-number insp-inline-row"
                                                            data-name="frozenRowCount">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @sheetTab.freeze.frozenRowCount@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="number"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-number insp-inline-row"
                                                            data-name="frozenColumnCount">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @sheetTab.freeze.frozenColumnCount@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="number"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-number insp-inline-row"
                                                            data-name="trailingFrozenRowCount">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @sheetTab.freeze.trailingFrozenRowCount@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="number"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-number insp-inline-row"
                                                            data-name="trailingFrozenColumnCount">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @sheetTab.freeze.trailingFrozenColumnCount@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="number"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="frozenLineColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @sheetTab.freeze.frozenLineColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%",height: "100%"}}>
                                                                   <div className="color-view "
                                                                        style={{backgroundColor: "rgb(0, 0, 0)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider">
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-buttons insp-inline-row">
                                                           <div className="insp-inline-row-item content">
                                                               <div className="item">
                                                                   <div className="button btn btn-default localize"
                                                                        id="freezePane">@sheetTab.freeze.freezePane@
                                                                   </div>
                                                               </div>
                                                               <div className="item">
                                                                   <div className="button btn btn-default localize"
                                                                        id="unfreeze">
                                                                       @sheetTab.freeze.unfreeze@
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@sheetTab.gridLine.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showVerticalGridline">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @sheetTab.gridLine.showVertical@
                                                           </div>
                                                       </div>

                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showHorizontalGridline">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @sheetTab.gridLine.showHorizontal@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="gridlineColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @sheetTab.gridLine.color@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "
                                                                        style={{backgroundColor: "rgb(208, 215, 229)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@sheetTab.header.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showRowHeader">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @sheetTab.header.showRowHeader@
                                                           </div>
                                                       </div>

                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showColumnHeader">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @sheetTab.header.showColumnHeader@
                                                           </div>
                                                       </div>

                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@sheetTab.selection.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="selectionPolicyList"
                                                            data-name="selectionPolicy">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @sheetTab.selection.policy.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="selectionUnitList" data-name="selectionUnit">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @sheetTab.selection.unit.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="selectionBorderColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @sheetTab.selection.borderColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "
                                                                        style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div
                                                           className="insp-color-picker insp-inline-row show-nofill-color"
                                                           data-name="selectionBackColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @sheetTab.selection.backColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "
                                                                        style={{backgroundColor: "rgb(0, 0, 0)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="hideSelection">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @sheetTab.selection.hide@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@sheetTab.protection.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="checkboxProtectSheet">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @sheetTab.protection.protectSheet@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="checkboxSelectLockedCells">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @sheetTab.protection.selectLockCells@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="checkboxSelectUnlockedCells">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @sheetTab.protection.selectUnlockedCells@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="checkboxSort">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @sheetTab.protection.sort@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="checkboxUseAutoFilter">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @sheetTab.protection.useAutoFilter@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="checkboxResizeRows">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @sheetTab.protection.resizeRows@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="checkboxResizeColumns">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @sheetTab.protection.resizeColumns@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="checkboxEditObjects">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @sheetTab.protection.editObjects@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="tab-pane" id="cellTab">
                           <div className="insp-pane">
                               <div className="insp-group-layout">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@cellTab.style.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-button-group insp-inline-row">
                                                           <div
                                                               className="group-container insp-inline-row-item btn-group btn-group-xs btn-group-justified insp-col-12">
                                                        <span className="btn btn-default font-bold localize-tooltip"
                                                              data-name="bold"
                                                              title="@tooltips.style.fontBold@">B</span>
                                                               <span
                                                                   className="btn btn-default font-italic localize-tooltip"
                                                                   data-name="italic"
                                                                   title="@tooltips.style.fontItalic@">I</span>
                                                               <span
                                                                   className="btn btn-default font-underline localize-tooltip"
                                                                   data-name="underline"
                                                                   title="@tooltips.style.fontUnderline@">U</span>
                                                               <span
                                                                   className="btn btn-default font-overline localize-tooltip"
                                                                   data-name="overline"
                                                                   title="@tooltips.style.fontOverline@">O</span>
                                                               <span
                                                                   className="btn btn-default font-strikethrough localize-tooltip"
                                                                   data-name="strikethrough"
                                                                   title="@tooltips.style.fontLinethrough@">S</span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="fontFamilyList" data-name="fontFamily">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @cellTab.style.fontFamily@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="fontSizeList" data-name="fontSize">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @cellTab.style.fontSize@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="foreColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-4 localize">
                                                               @cellTab.style.foreColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view"
                                                                        style={{backgroundColor: "rgb(79, 129, 189)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div
                                                           className="insp-color-picker insp-inline-row show-nofill-color"
                                                           data-name="backColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-4 localize">
                                                               @cellTab.style.backColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view"
                                                                        style={{backgroundColor: "rgb(220, 231, 241)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row"
                                                            data-name="cellPadding">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @cellTab.style.cellPadding@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-8"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row"
                                                            data-name="watermark">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @cellTab.style.waterMark@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-8"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="insp-group-layout">
                                               <div className="insp-group">
                                                   <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@cellTab.style.cellLabel.title@</span>
                                        </span>
                                                   </div>
                                                   <div className="insp-group-content">
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-button-group insp-inline-row">
                                                                       <div
                                                                           className="group-container insp-inline-row-item btn-group btn-group-xs btn-group-justified insp-col-12">
                                                                    <span
                                                                        className="btn btn-default font-bold localize-tooltip"
                                                                        data-name="labelBold"
                                                                        title="@tooltips.style.fontBold@">B</span>
                                                                           <span
                                                                               className="btn btn-default font-italic localize-tooltip"
                                                                               data-name="labelItalic"
                                                                               title="@tooltips.style.fontItalic@">I</span>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-dropdown-list insp-inline-row"
                                                                        data-list-ref="fontFamilyList"
                                                                        data-name="labelFontFamily">
                                                                       <div
                                                                           className="title insp-inline-row-item insp-col-4 localize">
                                                                           @cellTab.style.cellLabel.fontFamily@
                                                                       </div>
                                                                       <div
                                                                           className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                                           <div style={{width: "100%", height: "100%"}}>
                                                                               <span className="display"></span><span
                                                                               className="caret"></span>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-dropdown-list insp-inline-row"
                                                                        data-list-ref="fontSizeList"
                                                                        data-name="labelFontSize">
                                                                       <div
                                                                           className="title insp-inline-row-item insp-col-4 localize">
                                                                           @cellTab.style.cellLabel.fontSize@
                                                                       </div>
                                                                       <div
                                                                           className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                                           <div style={{width: "100%", height: "100%"}}>
                                                                               <span className="display"></span><span
                                                                               className="caret"></span>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-color-picker insp-inline-row"
                                                                        data-name="labelForeColor">
                                                                       <div
                                                                           className="title  insp-inline-row-item insp-col-4 localize">
                                                                           @cellTab.style.cellLabel.foreColor@
                                                                       </div>
                                                                       <div
                                                                           className="picker insp-inline-row-item insp-col-8">
                                                                           <div style={{width: "100%", height: "100%"}}>
                                                                               <div className="color-view"
                                                                                    style={{backgroundColor: "rgb(79, 129, 189)"}}></div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-text insp-inline-row"
                                                                        data-name="labelMargin">
                                                                       <div
                                                                           className="title insp-inline-row-item insp-col-4 localize">
                                                                           @cellTab.style.cellLabel.labelMargin@
                                                                       </div>
                                                                       <input
                                                                           className="editor insp-inline-row-item insp-col-8"
                                                                           type="text"/>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-dropdown-list insp-inline-row"
                                                                        data-list-ref="cellLabelVisibilityList"
                                                                        data-name="cellLabelVisibility"
                                                                        id="cellLabelVisibility">
                                                                       <div
                                                                           className="title insp-inline-row-item insp-col-4 localize">
                                                                           @cellTab.style.cellLabel.visibility@
                                                                       </div>
                                                                       <div
                                                                           className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                                           <div style={{width: "100%", height: "100%"}}>
                                                                               <span className="display"></span><span
                                                                               className="caret"></span>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-dropdown-list insp-inline-row"
                                                                        data-list-ref="cellLabelAlignmentList"
                                                                        data-name="cellLabelAlignment"
                                                                        id="cellLabelAlignment">
                                                                       <div
                                                                           className="title insp-inline-row-item insp-col-4 localize">
                                                                           @cellTab.style.cellLabel.alignment@
                                                                       </div>
                                                                       <div
                                                                           className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                                           <div style={{width: "100%", height: "100%"}}>
                                                                               <span className="display"></span><span
                                                                               className="caret"></span>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@cellTab.border.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div className="insp-groups">
                                                       <div>
                                                           <div className="group-item">
                                                               <div
                                                                   className="spread-border-icon-outsideborder image localize-tooltip"
                                                                   data-name="outsideBorder"
                                                                   title="@tooltips.border.outsideBorder@"></div>
                                                           </div>
                                                           <div className="group-item">
                                                               <div
                                                                   className="spread-border-icon-insideborder image localize-tooltip"
                                                                   data-name="insideBorder"
                                                                   title="@tooltips.border.insideBorder@"></div>
                                                           </div>
                                                           <div className="group-item">
                                                               <div
                                                                   className="spread-border-icon-allborder image localize-tooltip"
                                                                   data-name="allBorder"
                                                                   title="@tooltips.border.allBorder@"></div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="group-item">
                                                               <div
                                                                   className="spread-border-icon-leftborder image localize-tooltip"
                                                                   data-name="leftBorder"
                                                                   title="@tooltips.border.leftBorder@"></div>
                                                           </div>
                                                           <div className="group-item">
                                                               <div
                                                                   className="spread-border-icon-innervertical image localize-tooltip"
                                                                   data-name="innerVerticalBorder"
                                                                   title="@tooltips.border.innerVertical@"></div>
                                                           </div>
                                                           <div className="group-item">
                                                               <div
                                                                   className="spread-border-icon-rightborder image localize-tooltip"
                                                                   data-name="rightBorder"
                                                                   title="@tooltips.border.rightBorder@"></div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="group-item">
                                                               <div
                                                                   className="spread-border-icon-topborder image localize-tooltip"
                                                                   data-name="topBorder"
                                                                   title="@tooltips.border.topBorder@"></div>
                                                           </div>
                                                           <div className="group-item">
                                                               <div
                                                                   className="spread-border-icon-innerhorizontal image localize-tooltip"
                                                                   data-name="innerHorizontalBorder"
                                                                   title="@tooltips.border.innerHorizontal@"></div>
                                                           </div>
                                                           <div className="group-item">
                                                               <div
                                                                   className="spread-border-icon-bottomborder image localize-tooltip"
                                                                   data-name="bottomBorder"
                                                                   title="@tooltips.border.bottomBorder@"></div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div className="insp-groups right-border-group">
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-dropdown-list insp-inline-row"
                                                                        data-list-ref="borderLineList"
                                                                        data-name="borderLine"
                                                                        id="borderLineType">
                                                                       <div
                                                                           className="title insp-inline-row-item insp-col-4 localize">
                                                                           @cellTab.border.rangeBorderLine@
                                                                       </div>
                                                                       <div
                                                                           className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                                           <div style={{width: "100%", height: "100%"}}>
                                                                               <div id="border-line-type"></div>
                                                                               <span className="caret"></span>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-color-picker insp-inline-row"
                                                                        data-name="borderColor">
                                                                       <div
                                                                           className="title  insp-inline-row-item insp-col-4 localize">
                                                                           @cellTab.border.rangeBorderColor@
                                                                       </div>
                                                                       <div
                                                                           className="picker insp-inline-row-item insp-col-8">
                                                                           <div style={{width: "100%", height: "100%"}}>
                                                                               <div className="color-view"
                                                                                    style={{backgroundColor: "rgb(0, 0, 0)"}}></div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@cellTab.alignment.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-radio-button-group insp-inline-row"
                                                            data-name="vAlign">
                                                           <div
                                                               className="group-container insp-inline-row-item btn-group btn-group-xs btn-group-justified insp-col-12">
                                                            <span className="btn btn-default btn-icon localize-tooltip"
                                                                  data-name="top" title="@tooltips.alignment.topAlign@">
                                                                <span
                                                                    className="ui-icon smallicon icon-topalign"></span>
                                                            </span>
                                                               <span
                                                                   className="btn btn-default btn-icon localize-tooltip"
                                                                   data-name="middle"
                                                                   title="@tooltips.alignment.middleAlign@">
                                                                <span
                                                                    className="ui-icon smallicon icon-middlealign"></span>
                                                            </span>
                                                               <span
                                                                   className="btn btn-default btn-icon localize-tooltip"
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
                                                       <div className="insp-radio-button-group insp-inline-row"
                                                            data-name="hAlign">
                                                           <div
                                                               className="group-container insp-inline-row-item btn-group btn-group-xs btn-group-justified insp-col-12">
                                                            <span className="btn btn-default btn-icon localize-tooltip"
                                                                  data-name="left"
                                                                  title="@tooltips.alignment.leftAlign@">
                                                                <span
                                                                    className="ui-icon smallicon icon-leftalign"></span>
                                                            </span>
                                                               <span
                                                                   className="btn btn-default btn-icon localize-tooltip"
                                                                   data-name="center"
                                                                   title="@tooltips.alignment.centerAlign@">
                                                                <span
                                                                    className="ui-icon smallicon icon-centeralign"></span>
                                                            </span>
                                                               <span
                                                                   className="btn btn-default btn-icon localize-tooltip"
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
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-button-group insp-inline-row">
                                                           <div
                                                               className="group-container insp-inline-row-item btn-group btn-group-xs btn-group-justified insp-col-12">
                                                            <span
                                                                className="btn btn-default btn-icon no-toggle localize-tooltip"
                                                                data-name="decreaseIndent"
                                                                title="@tooltips.alignment.decreaseIndent@">
                                                                <span
                                                                    className="ui-icon smallicon icon-decreaseindent"></span>
                                                            </span>
                                                               <span
                                                                   className="btn btn-default btn-icon no-toggle localize-tooltip"
                                                                   data-name="increaseIndent"
                                                                   title="@tooltips.alignment.increaseIndent@">
                                                                <span
                                                                    className="ui-icon smallicon icon-increaseindent"></span>
                                                            </span>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="wrapText">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @cellTab.alignment.wrapText@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@cellTab.format.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="commomFormatList" data-name="commomFormat"
                                                            id="commomFormatType">
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-12">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
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
                                                               <span
                                                                   className="btn btn-default btn-icon no-toggle localize-tooltip"
                                                                   data-name="commaStyle"
                                                                   title="@tooltips.format.commaStyle@">
                                                                <span
                                                                    className="ui-icon smallicon icon-commastyle"></span>
                                                            </span>
                                                               <span
                                                                   className="btn btn-default btn-icon no-toggle localize-tooltip"
                                                                   data-name="increaseDecimal"
                                                                   title="@tooltips.format.increaseDecimal@">
                                                                <span
                                                                    className="ui-icon smallicon icon-increasedecimal"></span>
                                                            </span>
                                                               <span
                                                                   className="btn btn-default btn-icon no-toggle localize-tooltip"
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
                                           <div className="group-item-divider"></div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row"
                                                            data-name="customFormat">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @cellTab.format.custom@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-8"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@cellTab.merge.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-buttons insp-inline-row">
                                                           <div className="insp-inline-row-item content">
                                                               <div className="item">
                                                                   <div className="button btn btn-default localize"
                                                                        id="mergeCells"
                                                                        disabled="disabled">@cellTab.merge.mergeCells@
                                                                   </div>
                                                               </div>
                                                               <div className="item">
                                                                   <div className="button btn btn-default localize"
                                                                        id="unmergeCells" disabled="disabled">
                                                                       @cellTab.merge.unmergeCells@
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span id="groupCellType">
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@cellTab.cellType.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="cellTypesList" data-name="cellTypes"
                                                            id="cellTypes">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @cellTypes.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span>
                                                                   <span className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div id="cellTypeSettingContainer">
                                               <div id="celltype-button">
                                                   <div className="group-item-divider"></div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-number insp-inline-row"
                                                                    data-name="buttonCellTypeMarginTop">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.buttonCellType.values.marginTop@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6"
                                                                       type="number" value="2"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-number insp-inline-row"
                                                                    data-name="buttonCellTypeMarginRight">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.buttonCellType.values.marginRight@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6"
                                                                       type="number" value="4"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-number insp-inline-row"
                                                                    data-name="buttonCellTypeMarginBottom">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.buttonCellType.values.marginBottom@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6"
                                                                       type="number" value="2"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-number insp-inline-row"
                                                                    data-name="buttonCellTypeMarginLeft">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.buttonCellType.values.marginLeft@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6"
                                                                       type="number" value="4"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-text insp-inline-row"
                                                                    data-name="buttonCellTypeText">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.buttonCellType.values.text@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6 localize-value"
                                                                       type="text" value="@defaultTexts.buttonText@"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-color-picker insp-inline-row"
                                                                    data-name="buttonCellTypeBackColor">
                                                                   <div
                                                                       className="title  insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.buttonCellType.values.backColor@
                                                                   </div>
                                                                   <div
                                                                       className="picker insp-inline-row-item insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <div className="color-view "
                                                                                style={{backgroundColor: "rgb(242, 242, 242)"}}></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div id="celltype-checkbox">
                                                   <div className="group-item-divider"></div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-text insp-inline-row"
                                                                    data-name="checkboxCellTypeCaption">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.checkBoxCellType.values.caption@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6 localize-value"
                                                                       type="text" value="@defaultTexts.checkCaption@"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-text insp-inline-row"
                                                                    data-name="checkboxCellTypeTextTrue">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.checkBoxCellType.values.textTrue@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6"
                                                                       type="text"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-text insp-inline-row"
                                                                    data-name="checkboxCellTypeTextIndeterminate">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.checkBoxCellType.values.textIndeterminate@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6"
                                                                       type="text"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-text insp-inline-row"
                                                                    data-name="checkboxCellTypeTextFalse">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.checkBoxCellType.values.textFalse@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6"
                                                                       type="text"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-dropdown-list insp-inline-row"
                                                                    data-list-ref="checkboxCellTypeTextAlignList"
                                                                    data-name="checkboxCellTypeTextAlign"
                                                                    id="checkboxCellTypeTextAlignOption">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.checkBoxCellType.values.textAlign.title@
                                                                   </div>
                                                                   <div
                                                                       className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <span className="display"></span>
                                                                           <span className="caret"></span>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-checkbox insp-inline-row"
                                                                    data-name="checkboxCellTypeIsThreeState">
                                                                   <div className="button insp-inline-row-item"></div>
                                                                   <div className="text insp-inline-row-item localize">
                                                                       @cellTypes.checkBoxCellType.values.isThreeState@
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div id="celltype-combobox">
                                                   <div className="group-item-divider"></div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-dropdown-list insp-inline-row"
                                                                    data-list-ref="comboboxCellTypeEditorValueTypeList"
                                                                    data-name="comboboxCellTypeEditorValueType"
                                                                    id="comboboxCellTypeEditorValueTypeOption">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.comboBoxCellType.values.editorValueType.title@
                                                                   </div>
                                                                   <div
                                                                       className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <span className="display"></span>
                                                                           <span className="caret"></span>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-text insp-inline-row"
                                                                    data-name="comboboxCellTypeItemsText">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.comboBoxCellType.values.itemsText@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6 localize-value"
                                                                       type="text" placeholder="(eg:123,456,789)"
                                                                       value="@defaultTexts.comboText@"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-text insp-inline-row"
                                                                    data-name="comboboxCellTypeItemsValue">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.comboBoxCellType.values.itemsValue@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6 localize-value"
                                                                       type="text" placeholder="(eg:abc,def,ghi)"
                                                                       value="@defaultTexts.comboValue@"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div id="celltype-hyperlink">
                                                   <div className="group-item-divider"></div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-color-picker insp-inline-row"
                                                                    data-name="hyperlinkCellTypeLinkColor">
                                                                   <div
                                                                       className="title  insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.hyperlinkCellType.values.linkColor@
                                                                   </div>
                                                                   <div
                                                                       className="picker insp-inline-row-item insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <div className="color-view "
                                                                                style={{backgroundColor: "rgb(0, 102, 204)"}}></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-color-picker insp-inline-row"
                                                                    data-name="hyperlinkCellTypeVisitedLinkColor">
                                                                   <div
                                                                       className="title  insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.hyperlinkCellType.values.visitedLinkColor@
                                                                   </div>
                                                                   <div
                                                                       className="picker insp-inline-row-item insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <div className="color-view "
                                                                                style={{backgroundColor: "rgb(51, 153, 255)"}}></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-text insp-inline-row"
                                                                    data-name="hyperlinkCellTypeText">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.hyperlinkCellType.values.text@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6 localize-value"
                                                                       type="text" value="@defaultTexts.hyperlinkText@"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-text insp-inline-row"
                                                                    data-name="hyperlinkCellTypeLinkToolTip">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @cellTypes.hyperlinkCellType.values.linkToolTip@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6 localize-value"
                                                                       type="text"
                                                                       value="@defaultTexts.hyperlinkToolTip@"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div id="setCellTypeContainer">
                                                   <div className="group-item-divider"></div>
                                                   <div className="insp-row insp-col-offset-8">
                                                       <div className="button btn btn-default group-set localize"
                                                            id="setCellTypeBtn">@cellTypes.setButton@
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@cellTab.conditionalFormat.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div id="conditionalFormatSettingContainer">
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-dropdown-list insp-inline-row"
                                                                data-list-ref="conditionalFormatList"
                                                                data-name="conditionalFormat"
                                                                id="conditionalFormatType">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-4 localize">
                                                                   @conditionalFormat.ruleTypes.title@
                                                               </div>
                                                               <div
                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <span className="display"></span><span
                                                                       className="caret"></span>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="details">
                                                   <div className="group-item-divider"></div>
                                                   <div className="settingGroup">
                                                       <div className="conditionalformat-content-style groupitem"
                                                            data-group="normal">
                                                           <div>
                                                               <div className="insp-row">
                                                                   <span id="ruletext"
                                                                         className="dialog-content-title"></span>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div className="insp-row">
                                                                   <div className="insp-dropdown-list insp-inline-row"
                                                                        data-list-ref="highlightCellsRulesList"
                                                                        data-name="ruleType" id="highlightCellsRule">
                                                                       <div
                                                                           className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-12">
                                                                           <div style={{width: "100%", height: "100%"}}>
                                                                               <span className="display"></span><span
                                                                               className="caret"></span>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div className="insp-row">
                                                                   <div className="insp-dropdown-list insp-inline-row"
                                                                        data-list-ref="highlightCellsRulesOperatorList"
                                                                        data-name="comparisonOperator"
                                                                        id="ComparisonOperator">
                                                                       <div
                                                                           className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-12">
                                                                           <div style={{width: "100%", height: "100%"}}>
                                                                               <span className="display"></span><span
                                                                               className="caret"></span>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>

                                                           <div>
                                                               <div className="insp-row">
                                                                   <div className="insp-text insp-inline-row">
                                                                       <input
                                                                           className="editor insp-inline-row-item insp-col-5"
                                                                           id="value1" type="text"/>
                                                                           <div
                                                                               className="text insp-inline-row-item insp-col-2 center-align localize"
                                                                               id="andtext">@conditionalFormat.texts.and@
                                                                           </div>
                                                                           <input
                                                                               className="editor insp-inline-row-item insp-col-5"
                                                                               id="value2" type="text"/>
                                                                   </div>
                                                                   <div
                                                                       className="text insp-inline-row-item insp-col-12"
                                                                       id="formattext"></div>
                                                               </div>
                                                           </div>

                                                           <div id="formatSetting">
                                                               <div className="insp-row">
                                                                   <span id="withtext"
                                                                         className="localize">@conditionalFormat.texts.formatStyle@</span>
                                                               </div>
                                                               <div className="insp-row">
                                                                   <div>
                                                                       <div
                                                                           className="insp-color-picker insp-inline-row"
                                                                           data-name="formatForeColor">
                                                                           <div
                                                                               className="title insp-inline-row-item insp-col-6">
                                                                               <div
                                                                                   className="insp-checkbox insp-inline-row"
                                                                                   data-name="useFormatForeColor">
                                                                                   <div
                                                                                       className="button insp-inline-row-item checked"></div>
                                                                                   <div
                                                                                       className="text insp-inline-row-item localize">
                                                                                       @conditionalFormat.formatSetting.formatUseForeColor@
                                                                                   </div>
                                                                               </div>
                                                                           </div>

                                                                           <div
                                                                               className="picker insp-inline-row-item insp-col-6">
                                                                               <div style={{width: "100%", height: "100%"}}>
                                                                                   <div className="color-view"
                                                                                        style={{backgroundColor: "rgb(0, 128, 0)"}}></div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div className="insp-row">
                                                                   <div>
                                                                       <div
                                                                           className="insp-color-picker insp-inline-row"
                                                                           data-name="formatBackColor">
                                                                           <div
                                                                               className="title insp-inline-row-item insp-col-6">
                                                                               <div
                                                                                   className="insp-checkbox insp-inline-row"
                                                                                   data-name="useFormatBackColor">
                                                                                   <div
                                                                                       className="button insp-inline-row-item checked"></div>
                                                                                   <div
                                                                                       className="text insp-inline-row-item localize">
                                                                                       @conditionalFormat.formatSetting.formatUseBackColor@
                                                                                   </div>
                                                                               </div>
                                                                           </div>

                                                                           <div
                                                                               className="picker insp-inline-row-item insp-col-6">
                                                                               <div style={{width: "100%", height: "100%"}}>
                                                                                   <div className="color-view"
                                                                                        style={{backgroundColor: "rgb(255, 0, 0)"}}></div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div className="insp-row">
                                                                   <div>
                                                                       <div
                                                                           className="insp-color-picker insp-inline-row"
                                                                           data-name="formatBorderColor">
                                                                           <div
                                                                               className="title insp-inline-row-item insp-col-6">
                                                                               <div
                                                                                   className="insp-checkbox insp-inline-row"
                                                                                   data-name="useFormatBorder">
                                                                                   <div
                                                                                       className="button insp-inline-row-item"></div>
                                                                                   <div
                                                                                       className="text insp-inline-row-item localize">
                                                                                       @conditionalFormat.formatSetting.formatUseBorder@
                                                                                   </div>
                                                                               </div>
                                                                           </div>

                                                                           <div
                                                                               className="picker insp-inline-row-item insp-col-6">
                                                                               <div style={{width: "100%", height: "100%"}}>
                                                                                   <div className="color-view"
                                                                                        style={{backgroundColor: "rgb(255, 199, 206)"}}></div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>

                                                           <div id="colorScale" className="dialog-content-notshow">
                                                               <div>
                                                                   <div>
                                                                       <div className="insp-row">
                                                                           <span
                                                                               className="groupheader localize">@conditionalFormat.ruleTypes.colorScales.labels.minimum@</span>
                                                                       </div>
                                                                   </div>
                                                                   <div>
                                                                       <div className="insp-row">
                                                                           <div className="insp-col-offset-1">
                                                                               <div
                                                                                   className="insp-dropdown-list insp-inline-row"
                                                                                   data-list-ref="colorScaleMinTypeList"
                                                                                   data-name="minType">
                                                                                   <div
                                                                                       className="title insp-inline-row-item insp-col-4 localize">
                                                                                       @conditionalFormat.ruleTypes.colorScales.labels.type@
                                                                                   </div>
                                                                                   <div
                                                                                       className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                                                       <div
                                                                                           style={{width: "100%", height: "100%"}}>
                                                                                           <span
                                                                                               className="display"></span><span
                                                                                           className="caret"></span>
                                                                                       </div>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                                   <div>
                                                                       <div className="insp-row">
                                                                           <div className="insp-col-offset-1">
                                                                               <div
                                                                                   className="insp-text insp-inline-row"
                                                                                   data-name="minValue">
                                                                                   <div
                                                                                       className="title insp-inline-row-item insp-col-4 localize">
                                                                                       @conditionalFormat.ruleTypes.colorScales.labels.value@
                                                                                   </div>
                                                                                   <input
                                                                                       className="editor insp-inline-row-item insp-col-8"
                                                                                       type="text"/>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                                   <div>
                                                                       <div className="insp-row">
                                                                           <div className="insp-col-offset-1">
                                                                               <div
                                                                                   className="insp-color-picker insp-inline-row"
                                                                                   data-name="minColor">
                                                                                   <div
                                                                                       className="title insp-inline-row-item insp-col-4 localize">
                                                                                       @conditionalFormat.ruleTypes.colorScales.labels.color@
                                                                                   </div>
                                                                                   <div
                                                                                       className="picker insp-inline-row-item insp-col-8">
                                                                                       <div
                                                                                           style={{width: "100%", height: "100%"}}>
                                                                                           <div className="color-view"
                                                                                                style={{backgroundColor: "rgb(248, 105, 107)"}}></div>
                                                                                       </div>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div id="midpoint">
                                                                   <div>
                                                                       <div className="insp-row">
                                                                           <span
                                                                               className="groupheader localize">@conditionalFormat.ruleTypes.colorScales.labels.midpoint@</span>
                                                                       </div>
                                                                   </div>
                                                                   <div>
                                                                       <div className="insp-row">
                                                                           <div className="insp-col-offset-1">
                                                                               <div
                                                                                   className="insp-dropdown-list insp-inline-row"
                                                                                   data-list-ref="colorScaleMidTypeList"
                                                                                   data-name="midType">
                                                                                   <div
                                                                                       className="title insp-inline-row-item insp-col-4 localize">
                                                                                       @conditionalFormat.ruleTypes.colorScales.labels.type@
                                                                                   </div>
                                                                                   <div
                                                                                       className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                                                       <div
                                                                                           style={{width: "100%", height: "100%"}}>
                                                                                           <span
                                                                                               className="display"></span><span
                                                                                           className="caret"></span>
                                                                                       </div>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                                   <div>
                                                                       <div className="insp-row">
                                                                           <div className="insp-col-offset-1">
                                                                               <div
                                                                                   className="insp-text insp-inline-row"
                                                                                   data-name="midValue">
                                                                                   <div
                                                                                       className="title insp-inline-row-item insp-col-4 localize">
                                                                                       @conditionalFormat.ruleTypes.colorScales.labels.value@
                                                                                   </div>
                                                                                   <input
                                                                                       className="editor insp-inline-row-item insp-col-8"
                                                                                       type="text" value="50"/>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                                   <div>
                                                                       <div className="insp-row">
                                                                           <div className="insp-col-offset-1">
                                                                               <div
                                                                                   className="insp-color-picker insp-inline-row"
                                                                                   data-name="midColor">
                                                                                   <div
                                                                                       className="title insp-inline-row-item insp-col-4 localize">
                                                                                       @conditionalFormat.ruleTypes.colorScales.labels.color@
                                                                                   </div>
                                                                                   <div
                                                                                       className="picker insp-inline-row-item insp-col-8">
                                                                                       <div
                                                                                           style={{width: "100%", height: "100%"}}>
                                                                                           <div className="color-view"
                                                                                                style={{backgroundColor: "rgb(255, 235, 132)"}}></div>
                                                                                       </div>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div>
                                                                   <div>
                                                                       <div className="insp-row">
                                                                           <span
                                                                               className="groupheader localize">@conditionalFormat.ruleTypes.colorScales.labels.maximum@</span>
                                                                       </div>
                                                                   </div>
                                                                   <div>
                                                                       <div className="insp-row">
                                                                           <div className="insp-col-offset-1">
                                                                               <div
                                                                                   className="insp-dropdown-list insp-inline-row"
                                                                                   data-list-ref="colorScaleMaxTypeList"
                                                                                   data-name="maxType">
                                                                                   <div
                                                                                       className="title insp-inline-row-item insp-col-4 localize">
                                                                                       @conditionalFormat.ruleTypes.colorScales.labels.type@
                                                                                   </div>
                                                                                   <div
                                                                                       className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                                                       <div
                                                                                           style={{width: "100%", height: "100%"}}>
                                                                                           <span
                                                                                               className="display"></span><span
                                                                                           className="caret"></span>
                                                                                       </div>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                                   <div>
                                                                       <div className="insp-row">
                                                                           <div className="insp-col-offset-1">
                                                                               <div
                                                                                   className="insp-text insp-inline-row"
                                                                                   data-name="maxValue">
                                                                                   <div
                                                                                       className="title insp-inline-row-item insp-col-4 localize">
                                                                                       @conditionalFormat.ruleTypes.colorScales.labels.value@
                                                                                   </div>
                                                                                   <input
                                                                                       className="editor insp-inline-row-item insp-col-8"
                                                                                       type="text"/>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                                   <div>
                                                                       <div className="insp-row">
                                                                           <div className="insp-col-offset-1">
                                                                               <div
                                                                                   className="insp-color-picker insp-inline-row"
                                                                                   data-name="maxColor">
                                                                                   <div
                                                                                       className="title insp-inline-row-item insp-col-4 localize">
                                                                                       @conditionalFormat.ruleTypes.colorScales.labels.color@
                                                                                   </div>
                                                                                   <div
                                                                                       className="picker insp-inline-row-item insp-col-8">
                                                                                       <div
                                                                                           style={{width: "100%", height: "100%"}}>
                                                                                           <div className="color-view"
                                                                                                style={{backgroundColor: "rgb(99, 190, 123)"}}></div>
                                                                                       </div>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="databar-content-style groupitem"
                                                            data-group="databar">
                                                           <div>
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <span
                                                                           className="groupheader localize">@conditionalFormat.ruleTypes.dataBars.labels.minimum@</span>
                                                                   </div>
                                                               </div>
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div className="insp-col-offset-1">
                                                                           <div
                                                                               className="insp-dropdown-list insp-inline-row"
                                                                               data-list-ref="dataBarMinimumTypeList"
                                                                               data-name="minimumType">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                                   @conditionalFormat.ruleTypes.dataBars.labels.type@
                                                                               </div>
                                                                               <div
                                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <span className="display"></span><span
                                                                                       className="caret"></span>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div className="insp-col-offset-1">
                                                                           <div className="insp-number insp-inline-row"
                                                                                data-name="minimumValue">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                                   @conditionalFormat.ruleTypes.dataBars.labels.value@
                                                                               </div>
                                                                               <input
                                                                                   className="editor insp-inline-row-item insp-col-6"
                                                                                   type="number"/>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <span
                                                                           className="groupheader localize">@conditionalFormat.ruleTypes.dataBars.labels.maximum@</span>
                                                                   </div>
                                                               </div>
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div className="insp-col-offset-1">
                                                                           <div
                                                                               className="insp-dropdown-list insp-inline-row"
                                                                               data-list-ref="dataBarMaximumTypeList"
                                                                               data-name="maximumType">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                                   @conditionalFormat.ruleTypes.dataBars.labels.type@
                                                                               </div>
                                                                               <div
                                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <span className="display"></span><span
                                                                                       className="caret"></span>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div className="insp-col-offset-1">
                                                                           <div className="insp-number insp-inline-row"
                                                                                data-name="maximumValue">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                                   @conditionalFormat.ruleTypes.dataBars.labels.value@
                                                                               </div>
                                                                               <input
                                                                                   className="editor insp-inline-row-item insp-col-6"
                                                                                   type="number"/>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>

                                                           <div>
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <span
                                                                           className="groupheader localize">@conditionalFormat.ruleTypes.dataBars.labels.appearance@</span>
                                                                   </div>
                                                               </div>

                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div className="insp-col-offset-1">
                                                                           <div
                                                                               className="insp-checkbox insp-inline-row"
                                                                               data-name="showBarOnly">
                                                                               <div
                                                                                   className="button insp-inline-row-item"></div>
                                                                               <div
                                                                                   className="text   insp-inline-row-item localize">
                                                                                   @conditionalFormat.ruleTypes.dataBars.labels.showBarOnly@
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>

                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div className="insp-col-offset-1">
                                                                           <div
                                                                               className="insp-color-picker insp-inline-row"
                                                                               data-name="gradientColor">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-6">
                                                                                   <div
                                                                                       className="insp-checkbox insp-inline-row"
                                                                                       data-name="gradient">
                                                                                       <div
                                                                                           className="button insp-inline-row-item"></div>
                                                                                       <div
                                                                                           className="text   insp-inline-row-item localize">
                                                                                           @conditionalFormat.ruleTypes.dataBars.labels.useGradient@
                                                                                       </div>
                                                                                   </div>
                                                                               </div>

                                                                               <div
                                                                                   className="picker insp-inline-row-item insp-col-6">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <div className="color-view"
                                                                                            style={{backgroundColor: "rgb(99, 190, 123)"}}></div>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>

                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div className="insp-col-offset-1">
                                                                           <div
                                                                               className="insp-color-picker insp-inline-row"
                                                                               data-name="barBorderColor">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-6">
                                                                                   <div
                                                                                       className="insp-checkbox insp-inline-row"
                                                                                       data-name="showBorder">
                                                                                       <div
                                                                                           className="button insp-inline-row-item"></div>
                                                                                       <div
                                                                                           className="text   insp-inline-row-item localize">
                                                                                           @conditionalFormat.ruleTypes.dataBars.labels.showBorder@
                                                                                       </div>
                                                                                   </div>
                                                                               </div>
                                                                               <div
                                                                                   className="picker insp-inline-row-item insp-col-6">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <div className="color-view"
                                                                                            style={{backgroundColor: "rgb(0, 0, 0)"}}></div>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>

                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div className="insp-col-offset-1">
                                                                           <div
                                                                               className="insp-dropdown-list insp-inline-row"
                                                                               data-list-ref="dataBarDirectionList"
                                                                               data-name="dataBarDirection">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                                   @conditionalFormat.ruleTypes.dataBars.labels.barDirection@
                                                                               </div>
                                                                               <div
                                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <span className="display"></span><span
                                                                                       className="caret"></span>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>

                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div className="insp-col-offset-1">
                                                                           <div
                                                                               className="insp-color-picker insp-inline-row"
                                                                               data-name="negativeFillColor">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-6">
                                                                                   <div
                                                                                       className="insp-checkbox insp-inline-row"
                                                                                       data-name="useNegativeFillColor">
                                                                                       <div
                                                                                           className="button insp-inline-row-item"></div>
                                                                                       <div
                                                                                           className="text   insp-inline-row-item localize">
                                                                                           @conditionalFormat.ruleTypes.dataBars.labels.negativeFillColor@
                                                                                       </div>
                                                                                   </div>
                                                                               </div>

                                                                               <div
                                                                                   className="picker insp-inline-row-item insp-col-6">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <div className="color-view"
                                                                                            style={{backgroundColor: "rgb(255, 0, 0)"}}></div>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>

                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div className="insp-col-offset-1">
                                                                           <div
                                                                               className="insp-color-picker insp-inline-row"
                                                                               data-name="negativeBorderColor">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-6">
                                                                                   <div
                                                                                       className="insp-checkbox insp-inline-row"
                                                                                       data-name="useNegativeBorderColor">
                                                                                       <div
                                                                                           className="button insp-inline-row-item"></div>
                                                                                       <div
                                                                                           className="text   insp-inline-row-item localize">
                                                                                           @conditionalFormat.ruleTypes.dataBars.labels.negativeBorderColor@
                                                                                       </div>
                                                                                   </div>
                                                                               </div>
                                                                               <div
                                                                                   className="picker insp-inline-row-item insp-col-6">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <div className="color-view"
                                                                                            style={{backgroundColor: "rgb(0, 0, 0)"}}></div>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>

                                                           <div>
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <span
                                                                           className="groupheader localize">@conditionalFormat.ruleTypes.dataBars.labels.axis@</span>
                                                                   </div>
                                                               </div>
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div className="insp-col-offset-1">
                                                                           <div
                                                                               className="insp-dropdown-list insp-inline-row"
                                                                               data-list-ref="dataBarAxisPositionList"
                                                                               data-name="axisPosition">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                                   @conditionalFormat.ruleTypes.dataBars.labels.axisPosition@
                                                                               </div>
                                                                               <div
                                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <span className="display"></span><span
                                                                                       className="caret"></span>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>

                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div className="insp-col-offset-1">
                                                                           <div
                                                                               className="insp-color-picker insp-inline-row"
                                                                               data-name="barAxisColor">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                                   @conditionalFormat.ruleTypes.dataBars.labels.axisColor@
                                                                               </div>
                                                                               <div
                                                                                   className="picker insp-inline-row-item insp-col-6">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <div className="color-view"
                                                                                            style={{backgroundColor: "rgb(0, 0, 0)"}}></div>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="iconset-content-style groupitem"
                                                            data-group="iconset">
                                                           <div>
                                                               <div className="insp-row">
                                                                   <div className="insp-dropdown-list insp-inline-row"
                                                                        data-list-ref="iconSetTypeList"
                                                                        data-name="iconSetType">
                                                                       <div
                                                                           className="title insp-inline-row-item insp-col-4 localize">
                                                                           @conditionalFormat.ruleTypes.iconSets.labels.style@
                                                                       </div>
                                                                       <div
                                                                           className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                                           <div style={{width: "100%", height: "100%"}}>
                                                                               <span className="display"></span><span
                                                                               className="caret"></span>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>

                                                           <div>
                                                               <div className="insp-row">
                                                                   <div className="insp-checkbox insp-inline-row"
                                                                        data-name="showIconOnly">
                                                                       <div
                                                                           className="button insp-inline-row-item"></div>
                                                                       <div
                                                                           className="text   insp-inline-row-item localize">
                                                                           @conditionalFormat.ruleTypes.iconSets.labels.showIconOnly@
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>

                                                           <div>
                                                               <div className="insp-row">
                                                                   <div className="insp-checkbox insp-inline-row"
                                                                        data-name="reverseIconOrder">
                                                                       <div
                                                                           className="button insp-inline-row-item"></div>
                                                                       <div
                                                                           className="text   insp-inline-row-item localize">
                                                                           @conditionalFormat.ruleTypes.iconSets.labels.reverseIconOrder@
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>

                                                           <div>
                                                               <div className="insp-row">
                                                                   <span
                                                                       className="localize">@conditionalFormat.texts.showIconWithRules@</span>
                                                               </div>
                                                           </div>

                                                           <div id="iconCriteriaSetting">
                                                               <div className="settinggroup">
                                                                   <div className="insp-row">
                                                                       <div className="insp-inline-row-item insp-col-3">
                                                                           <div
                                                                               className="insp-dropdown-list insp-inline-row"
                                                                               data-list-ref="iconSetCriteriaOperatorList"
                                                                               data-name="iconSetCriteriaOperator1">
                                                                               <div
                                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-12">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <span
                                                                                           className="display">>=</span><span
                                                                                       className="caret"></span>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                       <div className="insp-inline-row-item insp-col-4">
                                                                           <input
                                                                               className="editor insp-inline-row-item insp-col-12"
                                                                               type="number"/>
                                                                       </div>
                                                                       <div className="insp-inline-row-item insp-col-4">
                                                                           <div
                                                                               className="insp-dropdown-list insp-inline-row"
                                                                               data-list-ref="iconSetCriteriaTypeList"
                                                                               data-name="iconSetCriteriaType1">
                                                                               <div
                                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-12">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <span className="display"></span><span
                                                                                       className="caret"></span>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div className="settinggroup">
                                                                   <div className="insp-row">
                                                                       <div className="insp-inline-row-item insp-col-3">
                                                                           <div
                                                                               className="insp-dropdown-list insp-inline-row"
                                                                               data-list-ref="iconSetCriteriaOperatorList"
                                                                               data-name="iconSetCriteriaOperator2">
                                                                               <div
                                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-12">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <span
                                                                                           className="display">>=</span><span
                                                                                       className="caret"></span>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                       <div className="insp-inline-row-item insp-col-4">
                                                                           <input
                                                                               className="editor insp-inline-row-item insp-col-12"
                                                                               type="number"/>
                                                                       </div>
                                                                       <div className="insp-inline-row-item insp-col-4">
                                                                           <div
                                                                               className="insp-dropdown-list insp-inline-row"
                                                                               data-list-ref="iconSetCriteriaTypeList"
                                                                               data-name="iconSetCriteriaType2">
                                                                               <div
                                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-12">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <span className="display"></span><span
                                                                                       className="caret"></span>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div className="settinggroup">
                                                                   <div className="insp-row">
                                                                       <div className="insp-inline-row-item insp-col-3">
                                                                           <div
                                                                               className="insp-dropdown-list insp-inline-row"
                                                                               data-list-ref="iconSetCriteriaOperatorList"
                                                                               data-name="iconSetCriteriaOperator3">
                                                                               <div
                                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-12">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <span
                                                                                           className="display">>=</span><span
                                                                                       className="caret"></span>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                       <div className="insp-inline-row-item insp-col-4">
                                                                           <input
                                                                               className="editor insp-inline-row-item insp-col-12"
                                                                               type="number"/>
                                                                       </div>
                                                                       <div className="insp-inline-row-item insp-col-4">
                                                                           <div
                                                                               className="insp-dropdown-list insp-inline-row"
                                                                               data-list-ref="iconSetCriteriaTypeList"
                                                                               data-name="iconSetCriteriaType3">
                                                                               <div
                                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-12">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <span className="display"></span><span
                                                                                       className="caret"></span>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div className="settinggroup">
                                                                   <div className="insp-row">
                                                                       <div className="insp-inline-row-item insp-col-3">
                                                                           <div
                                                                               className="insp-dropdown-list insp-inline-row"
                                                                               data-list-ref="iconSetCriteriaOperatorList"
                                                                               data-name="iconSetCriteriaOperator4">
                                                                               <div
                                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-12">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <span
                                                                                           className="display">>=</span><span
                                                                                       className="caret"></span>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                       <div className="insp-inline-row-item insp-col-4">
                                                                           <input
                                                                               className="editor insp-inline-row-item insp-col-12"
                                                                               type="number"/>
                                                                       </div>
                                                                       <div className="insp-inline-row-item insp-col-4">
                                                                           <div
                                                                               className="insp-dropdown-list insp-inline-row"
                                                                               data-list-ref="iconSetCriteriaTypeList"
                                                                               data-name="iconSetCriteriaType4">
                                                                               <div
                                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-12">
                                                                                   <div
                                                                                       style={{width: "100%", height: "100%"}}>
                                                                                       <span className="display"></span><span
                                                                                       className="caret"></span>
                                                                                   </div>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div className="group-item-divider"></div>
                                                   <div className="insp-row insp-col-offset-8">
                                                       <div className="button btn btn-default group-set localize"
                                                            id="setConditionalFormat">@conditionalFormat.setButton@
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@cellTab.protection.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row" id="lockCells"
                                                            data-name="checkboxLockCell">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @cellTab.protection.lock@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div className="text insp-inline-row-item localize"
                                                        id="protectSheetText">
                                                       @cellTab.protection.sheetIsUnprotected@
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="tab-pane" id="tableTab">
                           <div className="insp-pane">
                               <div className="insp-group-layout">
                                   <div className="insp-group  expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@tableTab.tableStyle.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content" style={{paddingRight: "8px"}}>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="table-format-2013" id="tableStyles">
                                                           <div>
                                                               <div>
                                                                   <div className="table-format-item localize-tooltip"
                                                                        title="@tableTab.tableStyle.light.light1@">
                                                                       <div data-name="light1">
                                                                           <div
                                                                               className="table-format-icon table-format-light1"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="table-format-item localize-tooltip"
                                                                        title="@tableTab.tableStyle.light.light2@">
                                                                       <div data-name="light2">
                                                                           <div
                                                                               className="table-format-icon table-format-light2"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="table-format-item localize-tooltip"
                                                                        title="@tableTab.tableStyle.light.light3@">
                                                                       <div data-name="light3">
                                                                           <div
                                                                               className="table-format-icon table-format-light3"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="table-format-item localize-tooltip"
                                                                        title="@tableTab.tableStyle.light.light7@">
                                                                       <div data-name="light7">
                                                                           <div
                                                                               className="table-format-icon table-format-light7"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="table-format-item localize-tooltip"
                                                                        title="@tableTab.tableStyle.medium.medium1@">
                                                                       <div data-name="medium1">
                                                                           <div
                                                                               className="table-format-icon table-format-medium1"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="table-format-item localize-tooltip"
                                                                        title="@tableTab.tableStyle.medium.medium2@">
                                                                       <div data-name="medium2">
                                                                           <div
                                                                               className="table-format-icon table-format-medium2"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="table-format-item localize-tooltip"
                                                                        title="@tableTab.tableStyle.medium.medium3@">
                                                                       <div data-name="medium3">
                                                                           <div
                                                                               className="table-format-icon table-format-medium3"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="table-format-item localize-tooltip"
                                                                        title="@tableTab.tableStyle.medium.medium7@">
                                                                       <div data-name="medium7">
                                                                           <div
                                                                               className="table-format-icon table-format-medium7"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="table-format-item localize-tooltip"
                                                                        title="@tableTab.tableStyle.dark.dark1@">
                                                                       <div data-name="dark1">
                                                                           <div
                                                                               className="table-format-icon table-format-dark1"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="table-format-item localize-tooltip"
                                                                        title="@tableTab.tableStyle.dark.dark2@">
                                                                       <div data-name="dark2">
                                                                           <div
                                                                               className="table-format-icon table-format-dark2"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="table-format-item localize-tooltip"
                                                                        title="@tableTab.tableStyle.dark.dark3@">
                                                                       <div data-name="dark3">
                                                                           <div
                                                                               className="table-format-icon table-format-dark3"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="table-format-item localize-tooltip"
                                                                        title="@tableTab.tableStyle.dark.dark7@">
                                                                       <div data-name="dark7">
                                                                           <div
                                                                               className="table-format-icon table-format-dark7"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@tableTab.general.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row" data-name="tableName">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @tableTab.general.tableName@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-8"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@tableTab.options.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="tableFilterButton">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @tableTab.options.filterButton@
                                                           </div>
                                                       </div>

                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row insp-col-6"
                                                            data-name="tableHeaderRow">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @tableTab.options.headerRow@
                                                           </div>
                                                       </div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="tableTotalRow">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @tableTab.options.totalRow@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row insp-col-6"
                                                            data-name="tableBandedRows">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @tableTab.options.bandedRows@
                                                           </div>
                                                       </div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="tableBandedColumns">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @tableTab.options.bandedColumns@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row insp-col-6"
                                                            data-name="tableFirstColumn">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @tableTab.options.firstColumn@
                                                           </div>
                                                       </div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="tableLastColumn">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @tableTab.options.lastColumn@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="tab-pane" id="dataTab">
                           <div className="insp-pane">
                               <div className="insp-group-layout">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@dataTab.sort.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-buttons insp-inline-row">
                                                           <div className="insp-inline-row-item content">
                                                               <div className="item">
                                                                   <div className="button btn btn-default localize"
                                                                        id="sortAZ">
                                                                       @dataTab.sort.asc@
                                                                   </div>
                                                               </div>
                                                               <div className="item">
                                                                   <div className="button btn btn-default localize"
                                                                        id="sortZA">
                                                                       @dataTab.sort.desc@
                                                                   </div>
                                                               </div>
                                                               <div className="item">
                                                                   <div className="button btn btn-default localize"
                                                                        id="filter">
                                                                       @dataTab.sort.filter@
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@dataTab.group.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-buttons insp-inline-row">
                                                           <div className="insp-inline-row-item content">
                                                               <div className="item">
                                                                   <div className="button btn btn-default localize"
                                                                        id="group">
                                                                       @dataTab.group.group@
                                                                   </div>
                                                               </div>
                                                               <div className="item">
                                                                   <div className="button btn btn-default localize"
                                                                        id="ungroup">
                                                                       @dataTab.group.ungroup@
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-buttons insp-inline-row">
                                                           <div className="insp-inline-row-item content">
                                                               <div className="item">
                                                                   <div className="button btn btn-default localize"
                                                                        id="showDetail">@dataTab.group.showDetail@
                                                                   </div>
                                                               </div>
                                                               <div className="item">
                                                                   <div className="button btn btn-default localize"
                                                                        id="hideDetail">@dataTab.group.hideDetail@
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showRowOutline">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @dataTab.group.showRowOutline@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showColumnOutline">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @dataTab.group.showColumnOutline@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@dataTab.dataValidation.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="highlightInvalidData" id="highlightInvalidData">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @dataTab.dataValidation.circleInvalidData@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div>
                                               <div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <span
                                                               className="groupheader localize">@dataTab.dataValidation.setting.title@</span>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-dropdown-list insp-inline-row"
                                                                        data-list-ref="validatorTypeList"
                                                                        data-name="validatorType" id="validatorType">
                                                                       <div
                                                                           className="title insp-inline-row-item insp-col-4 localize">
                                                                           @dataTab.dataValidation.setting.values.validatorType.title@
                                                                       </div>
                                                                       <div
                                                                           className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                                           <div style={{width: "100%", height: "100%"}}>
                                                                               <span className="display"></span>
                                                                               <span className="caret"></span>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-checkbox insp-inline-row"
                                                                        data-name="ignoreBlank">
                                                                       <div
                                                                           className="button insp-inline-row-item checked"></div>
                                                                       <div
                                                                           className="text   insp-inline-row-item localize">
                                                                           @dataTab.dataValidation.setting.values.ignoreBlank@
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div className="group-item-divider"></div>
                                                       <div id="validatorNumberType">
                                                           <div>
                                                               <div className="insp-row">
                                                                   <div>
                                                                       <div
                                                                           className="insp-dropdown-list insp-inline-row"
                                                                           data-list-ref="validatorComparisonOperatorList"
                                                                           data-name="numberValidatorComparisonOperator"
                                                                           id="numberValidatorComparisonOperatorType">
                                                                           <div
                                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                                               @dataTab.dataValidation.setting.values.validatorComparisonOperator.title@
                                                                           </div>
                                                                           <div
                                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                                               <div style={{width: "100%", height: "100%"}}>
                                                                                   <span className="display"></span>
                                                                                   <span className="caret"></span>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div id="numberBetweenOperator">
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div>
                                                                           <div className="insp-text insp-inline-row"
                                                                                data-name="numberMinimum">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-4 localize">
                                                                                   @dataTab.dataValidation.setting.values.number.minimum@
                                                                               </div>
                                                                               <input
                                                                                   className="editor insp-inline-row-item insp-col-8"
                                                                                   type="text"/>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div>
                                                                           <div className="insp-text insp-inline-row"
                                                                                data-name="numberMaximum">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-4 localize">
                                                                                   @dataTab.dataValidation.setting.values.number.maximum@
                                                                               </div>
                                                                               <input
                                                                                   className="editor insp-inline-row-item insp-col-8"
                                                                                   type="text"/>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div className="insp-row">
                                                                   <div>
                                                                       <div className="insp-text insp-inline-row"
                                                                            data-name="numberValue" id="numberValue">
                                                                           <div
                                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                                               @dataTab.dataValidation.setting.values.number.value@
                                                                           </div>
                                                                           <input
                                                                               className="editor insp-inline-row-item insp-col-8"
                                                                               type="text"/>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div className="insp-row">
                                                                   <div>
                                                                       <div className="insp-checkbox insp-inline-row"
                                                                            data-name="isInteger">
                                                                           <div
                                                                               className="button insp-inline-row-item"></div>
                                                                           <div
                                                                               className="text insp-inline-row-item localize">
                                                                               @dataTab.dataValidation.setting.values.number.isInteger@
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div id="validatorListType">
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-text insp-inline-row"
                                                                        data-name="listSource">
                                                                       <div
                                                                           className="title insp-inline-row-item insp-col-4 localize">
                                                                           @dataTab.dataValidation.setting.values.source@
                                                                       </div>
                                                                       <input
                                                                           className="editor insp-inline-row-item insp-col-8"
                                                                           type="text"/>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div id="validatorFormulaListType">
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-text insp-inline-row"
                                                                        data-name="formulaListFormula">
                                                                       <div
                                                                           className="title insp-inline-row-item insp-col-4 localize">
                                                                           @dataTab.dataValidation.setting.values.formula@
                                                                       </div>
                                                                       <input
                                                                           className="editor insp-inline-row-item insp-col-8"
                                                                           type="text"/>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div id="validatorDateType">
                                                           <div>
                                                               <div className="insp-row">
                                                                   <div>
                                                                       <div
                                                                           className="insp-dropdown-list insp-inline-row"
                                                                           data-list-ref="validatorComparisonOperatorList"
                                                                           data-name="dateValidatorComparisonOperator"
                                                                           id="dateValidatorComparisonOperatorType">
                                                                           <div
                                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                                               @dataTab.dataValidation.setting.values.validatorComparisonOperator.title@
                                                                           </div>
                                                                           <div
                                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                                               <div style={{width: "100%", height: "100%"}}>
                                                                                   <span className="display"></span>
                                                                                   <span className="caret"></span>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div id="dateBetweenOperator">
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div>
                                                                           <div className="insp-text insp-inline-row"
                                                                                data-name="startDate">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-4 localize">
                                                                                   @dataTab.dataValidation.setting.values.date.startDate@
                                                                               </div>
                                                                               <input
                                                                                   className="editor insp-inline-row-item insp-col-8"
                                                                                   type="text"/>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div>
                                                                           <div className="insp-text insp-inline-row"
                                                                                data-name="endDate">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-4 localize">
                                                                                   @dataTab.dataValidation.setting.values.date.endDate@
                                                                               </div>
                                                                               <input
                                                                                   className="editor insp-inline-row-item insp-col-8"
                                                                                   type="text"/>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div className="insp-row">
                                                                   <div>
                                                                       <div className="insp-text insp-inline-row"
                                                                            data-name="dateValue" id="dateValue">
                                                                           <div
                                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                                               @dataTab.dataValidation.setting.values.date.value@
                                                                           </div>
                                                                           <input
                                                                               className="editor insp-inline-row-item insp-col-8"
                                                                               type="text"/>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div className="insp-row">
                                                                   <div>
                                                                       <div className="insp-checkbox insp-inline-row"
                                                                            data-name="isTime">
                                                                           <div
                                                                               className="button insp-inline-row-item"></div>
                                                                           <div
                                                                               className="text insp-inline-row-item localize">
                                                                               @dataTab.dataValidation.setting.values.date.isTime@
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div id="validatorTextLengthType">
                                                           <div>
                                                               <div className="insp-row">
                                                                   <div>
                                                                       <div
                                                                           className="insp-dropdown-list insp-inline-row"
                                                                           data-list-ref="validatorComparisonOperatorList"
                                                                           data-name="textLengthValidatorComparisonOperator"
                                                                           id="textLengthValidatorComparisonOperatorType">
                                                                           <div
                                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                                               @dataTab.dataValidation.setting.values.validatorComparisonOperator.title@
                                                                           </div>
                                                                           <div
                                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                                               <div style={{width: "100%", height: "100%"}}>
                                                                                   <span className="display"></span>
                                                                                   <span className="caret"></span>
                                                                               </div>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div id="textLengthBetweenOperator">
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div>
                                                                           <div className="insp-number insp-inline-row"
                                                                                data-name="textLengthMinimum">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-4 localize">
                                                                                   @dataTab.dataValidation.setting.values.number.minimum@
                                                                               </div>
                                                                               <input
                                                                                   className="editor insp-inline-row-item insp-col-8"
                                                                                   type="number"/>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                               <div>
                                                                   <div className="insp-row">
                                                                       <div>
                                                                           <div className="insp-number insp-inline-row"
                                                                                data-name="textLengthMaximum">
                                                                               <div
                                                                                   className="title insp-inline-row-item insp-col-4 localize">
                                                                                   @dataTab.dataValidation.setting.values.number.maximum@
                                                                               </div>
                                                                               <input
                                                                                   className="editor insp-inline-row-item insp-col-8"
                                                                                   type="number"/>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div className="insp-row">
                                                                   <div>
                                                                       <div className="insp-number insp-inline-row"
                                                                            data-name="textLengthValue"
                                                                            id="textLengthValue">
                                                                           <div
                                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                                               @dataTab.dataValidation.setting.values.number.value@
                                                                           </div>
                                                                           <input
                                                                               className="editor insp-inline-row-item insp-col-8"
                                                                               type="number"/>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <span
                                                               className="groupheader localize">@dataTab.dataValidation.inputMessage.title@</span>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-checkbox insp-inline-row"
                                                                        data-name="showInputMessage">
                                                                       <div
                                                                           className="button insp-inline-row-item checked"></div>
                                                                       <div
                                                                           className="text insp-inline-row-item localize">
                                                                           @dataTab.dataValidation.inputMessage.values.showInputMessage@
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="localize">
                                                                       @dataTab.dataValidation.inputMessage.values.title@
                                                                   </div>
                                                                   <input id="dataValidationInputTitle"
                                                                          className="editor insp-inline-row-item insp-col-12"
                                                                          type="text"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="localize">
                                                                       @dataTab.dataValidation.inputMessage.values.message@
                                                                   </div>
                                                                   <textarea rows="5" id="dataValidationInputMessage"
                                                                             className="insp-col-12"></textarea>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <span
                                                               className="groupheader localize">@dataTab.dataValidation.errorAlert.title@</span>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-dropdown-list insp-inline-row"
                                                                        data-list-ref="errorAlertList"
                                                                        data-name="errorAlert"
                                                                        id="errorAlertType">
                                                                       <div
                                                                           className="title insp-inline-row-item insp-col-6 localize">
                                                                           @dataTab.dataValidation.errorAlert.values.alertType.title@
                                                                       </div>
                                                                       <div
                                                                           className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                           <div style={{width: "100%", height: "100%"}}>
                                                                               <span className="display"></span>
                                                                               <span className="caret"></span>
                                                                           </div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="insp-checkbox insp-inline-row"
                                                                        data-name="showErrorAlert">
                                                                       <div
                                                                           className="button insp-inline-row-item checked"></div>
                                                                       <div
                                                                           className="text insp-inline-row-item localize">
                                                                           @dataTab.dataValidation.errorAlert.values.showErrorAlert@
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="localize">
                                                                       @dataTab.dataValidation.errorAlert.values.title@
                                                                   </div>
                                                                   <input id="dataValidationErrorAlertTitle"
                                                                          className="editor insp-inline-row-item insp-col-12"
                                                                          type="text"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                       <div>
                                                           <div className="insp-row">
                                                               <div>
                                                                   <div className="localize">
                                                                       @dataTab.dataValidation.errorAlert.values.message@
                                                                   </div>
                                                                   <textarea rows="5"
                                                                             id="dataValidationErrorAlertMessage"
                                                                             className="insp-col-12"></textarea>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="group-item-divider"></div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-buttons insp-inline-row">
                                                           <div className="insp-inline-row-item content">
                                                               <div className="item">
                                                                   <div className="button btn btn-default localize"
                                                                        id="clearDataValidatorSettings">
                                                                       @dataTab.dataValidation.clearAllButton@
                                                                   </div>
                                                               </div>
                                                               <div className="item"></div>
                                                               <div className="item">
                                                                   <div className="button btn btn-default localize"
                                                                        id="setDataValidator">
                                                                       @dataTab.dataValidation.setButton@
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="tab-pane" id="commentTab">
                           <div className="insp-pane">
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@commentTab.general.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="commentDynamicSize">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @commentTab.general.dynamicSize@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="commentDynamicMove">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @commentTab.general.dynamicMove@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="commentLockText">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @commentTab.general.lockText@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="commentShowShadow">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @commentTab.general.showShadow@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@commentTab.font.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="fontFamilyList"
                                                            data-name="commentFontFamily">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @commentTab.font.fontFamily@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">

                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display">Arial</span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="fontSizeList" data-name="commentFontSize">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @commentTab.font.fontSize@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">

                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display">9</span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="fontStyleList" data-name="commentFontStyle">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @commentTab.font.fontStyle.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="fontWeightList"
                                                            data-name="commentFontWeight">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @commentTab.font.fontWeight.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-inline-row"
                                                            data-name="commentTextDecoration">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @commentTab.font.textDecoration.title@
                                                           </div>
                                                           <div
                                                               className="insp-button-group insp-inline-row-item insp-col-8">
                                                               <div
                                                                   className="group-container insp-inline-row-item btn-group btn-group-xs btn-group-justified insp-col-12">
                                                            <span
                                                                className="btn btn-default font-underline localize-tooltip"
                                                                data-name="comment-underline" data-value="1"
                                                                title="Underline text.">U</span>
                                                                   <span
                                                                       className="btn btn-default font-overline localize-tooltip"
                                                                       data-name="comment-overline" data-value="4"
                                                                       title="Overline text.">O</span>
                                                                   <span
                                                                       className="btn btn-default font-strikethrough localize-tooltip"
                                                                       data-name="comment-strikethrough" data-value="2"
                                                                       title="Strikethrough text.">S</span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@commentTab.border.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-number insp-inline-row"
                                                            data-name="commentBorderWidth">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @commentTab.border.width@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-8"
                                                                  type="number"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="borderStyleList"
                                                            data-name="commentBorderStyle">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @commentTab.border.style.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="commentBorderColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-4 localize">
                                                               @commentTab.border.color@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "
                                                                        style={{backgroundColor: "rgb(0, 0, 0)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@commentTab.appearance.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="horizontalAlignList"
                                                            data-name="commentHorizontalAlign">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @commentTab.appearance.horizontalAlign.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display">left</span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="displayModeList"
                                                            data-name="commentDisplayMode">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @commentTab.appearance.displayMode.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="commentForeColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-4 localize">
                                                               @commentTab.appearance.foreColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "
                                                                        style={{backgroundColor: "rgb(0, 0, 0)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="commentBackColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-4 localize">
                                                               @commentTab.appearance.backColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "
                                                                        style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row"
                                                            data-name="commentPadding">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @commentTab.appearance.padding@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-8"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-number insp-inline-row"
                                                            data-name="commentOpacity">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @commentTab.appearance.opacity@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-7"
                                                                  type="number"/>
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-1 center-align">%
                                                               </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="tab-pane" id="pictureTab">
                           <div className="insp-pane">
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@pictureTab.general.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox" data-name="pictureMoveAndSize">
                                                           <div className="insp-row">
                                                               <div className="radiobutton insp-inline-row-item checked"
                                                                    data-name="picture-move-size"></div>
                                                               <div className="text insp-inline-row-item localize"
                                                                    data-name="picture-move-size">
                                                                   @pictureTab.general.moveAndSize@
                                                               </div>
                                                           </div>
                                                           <div className="insp-row">
                                                               <div className="radiobutton insp-inline-row-item"
                                                                    data-name="picture-move-nosize"></div>
                                                               <div className="text insp-inline-row-item localize"
                                                                    data-name="picture-move-nosize">
                                                                   @pictureTab.general.moveAndNoSize@
                                                               </div>
                                                           </div>
                                                           <div className="insp-row">
                                                               <div className="radiobutton insp-inline-row-item"
                                                                    data-name="picture-nomove-size"></div>
                                                               <div className="text insp-inline-row-item localize"
                                                                    data-name="picture-nomove-size">
                                                                   @pictureTab.general.noMoveAndSize@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="pictureFixedPosition">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @pictureTab.general.fixedPosition@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@pictureTab.border.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-number insp-inline-row"
                                                            data-name="pictureBorderWidth">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @pictureTab.border.width@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-8"
                                                                  type="number"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-number insp-inline-row"
                                                            data-name="pictureBorderRadius">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @pictureTab.border.radius@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-8"
                                                                  type="number"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="pictureBorderStyleList"
                                                            data-name="pictureBorderStyle">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @pictureTab.border.style.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">

                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="pictureBorderColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-4 localize">
                                                               @pictureTab.border.color@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "
                                                                        style={{backgroundColor: "rgb(0, 0, 0)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@pictureTab.appearance.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="pictureStretchList"
                                                            data-name="pictureStretch">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-4 localize">
                                                               @pictureTab.appearance.stretch.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-8">

                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="pictureBackColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-4 localize">
                                                               @pictureTab.appearance.backColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-8">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "
                                                                        style={{backgroundColor: "rgb(255, 255, 255)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="tab-pane" id="sparklineExTab">
                           <div className="insp-pane">
                               <div className="insp-group-layout" id="pieSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@sparklineExTab.pieSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="pieSparklinePercentage">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.pieSparkline.values.percentage@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div id="pieSparklineColorContainer">
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setPieSparkline">
                                                   @sparklineExTab.pieSparkline.values.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout" id="areaSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span
                                            className="group-text localize">@sparklineExTab.areaSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="areaSparklinePoints">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.areaSparkline.values.points@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-number insp-inline-row"
                                                                data-name="areaSparklineMinimumValue">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.areaSparkline.values.minimumValue@
                                                               </div>
                                                               <input
                                                                   className="editor insp-inline-row-item insp-col-6 not-min-zero"
                                                                   type="number"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-number insp-inline-row"
                                                                data-name="areaSparklineMaximumValue">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.areaSparkline.values.maximumValue@
                                                               </div>
                                                               <input
                                                                   className="editor insp-inline-row-item insp-col-6 not-min-zero"
                                                                   type="number"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-number insp-inline-row"
                                                                data-name="areaSparklineLine1">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.areaSparkline.values.line1@
                                                               </div>
                                                               <input
                                                                   className="editor insp-inline-row-item insp-col-6 not-min-zero"
                                                                   type="number"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-number insp-inline-row"
                                                                data-name="areaSparklineLine2">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.areaSparkline.values.line2@
                                                               </div>
                                                               <input
                                                                   className="editor insp-inline-row-item insp-col-6 not-min-zero"
                                                                   type="number"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="areaSparklinePositiveColor">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.areaSparkline.values.positiveColor@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(120, 120, 120)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="areaSparklineNegativeColor">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.areaSparkline.values.negativeColor@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(203, 0, 0)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setAreaSparkline">
                                                   @sparklineExTab.areaSparkline.values.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout" id="boxplotSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span
                                            className="group-text localize">@sparklineExTab.boxplotSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="boxplotSparklinePoints">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.boxplotSparkline.values.points@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-dropdown-list insp-inline-row"
                                                                data-list-ref="boxplotClassList"
                                                                data-name="boxplotClassType"
                                                                id="boxplotClassType">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.boxplotSparkline.values.boxplotClass@
                                                               </div>
                                                               <div
                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <span className="display"></span>
                                                                       <span className="caret"></span>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="boxplotSparklineScaleStart">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.boxplotSparkline.values.scaleStart@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="boxplotSparklineScaleEnd">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.boxplotSparkline.values.scaleEnd@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="boxplotSparklineAcceptableStart">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.boxplotSparkline.values.acceptableStart@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="boxplotSparklineAcceptableEnd">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.boxplotSparkline.values.acceptableEnd@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="boxplotSparklineColorScheme">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.boxplotSparkline.values.colorScheme@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(210, 210, 210)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-dropdown-list insp-inline-row"
                                                                data-list-ref="boxplotSparklineStyleList"
                                                                data-name="boxplotSparklineStyleType">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.boxplotSparkline.values.style@
                                                               </div>
                                                               <div
                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <span className="display"></span>
                                                                       <span className="caret"></span>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-checkbox insp-inline-row"
                                                                data-name="boxplotSparklineShowAverage">
                                                               <div className="button insp-inline-row-item"></div>
                                                               <div className="text insp-inline-row-item localize">
                                                                   @sparklineExTab.boxplotSparkline.values.showAverage@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-checkbox insp-inline-row"
                                                                data-name="boxplotSparklineVertical">
                                                               <div className="button insp-inline-row-item"></div>
                                                               <div className="text insp-inline-row-item localize">
                                                                   @sparklineExTab.boxplotSparkline.values.vertical@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setBoxPlotSparkline">
                                                   @sparklineExTab.boxplotSparkline.values.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout" id="bulletSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span
                                            className="group-text localize">@sparklineExTab.bulletSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="bulletSparklineMeasure">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.bulletSparkline.values.measure@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="bulletSparklineTarget">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.bulletSparkline.values.target@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="bulletSparklineMaxi">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.bulletSparkline.values.maxi@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="bulletSparklineForecast">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.bulletSparkline.values.forecast@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="bulletSparklineGood">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.bulletSparkline.values.good@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="bulletSparklineBad">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.bulletSparkline.values.bad@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="bulletSparklineTickUnit">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.bulletSparkline.values.tickunit@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="bulletSparklineColorScheme">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.bulletSparkline.values.colorScheme@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(146, 208, 80)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-checkbox insp-inline-row"
                                                                data-name="bulletSparklineVertical">
                                                               <div className="button insp-inline-row-item"></div>
                                                               <div className="text insp-inline-row-item localize">
                                                                   @sparklineExTab.bulletSparkline.values.vertical@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setBulletSparkline">
                                                   @sparklineExTab.bulletSparkline.values.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout" id="cascadeSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span
                                            className="group-text localize">@sparklineExTab.cascadeSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="cascadeSparklinePointsRange">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.cascadeSparkline.values.pointsRange@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="cascadeSparklinePointIndex">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.cascadeSparkline.values.pointIndex@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="cascadeSparklineLabelsRange">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.cascadeSparkline.values.labelsRange@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="cascadeSparklineMinimum">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.cascadeSparkline.values.minimum@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="cascadeSparklineMaximum">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.cascadeSparkline.values.maximum@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="cascadeSparklinePositiveColor">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.cascadeSparkline.values.positiveColor@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(140, 191, 100)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="cascadeSparklineNegativeColor">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.cascadeSparkline.values.negativeColor@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(214, 96, 77)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-checkbox insp-inline-row"
                                                                data-name="cascadeSparklineVertical">
                                                               <div className="button insp-inline-row-item"></div>
                                                               <div className="text insp-inline-row-item localize">
                                                                   @sparklineExTab.cascadeSparkline.values.vertical@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setCascadeSparkline">
                                                   @sparklineExTab.cascadeSparkline.values.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout" id="compatibleSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span
                                            className="group-text localize">@sparklineExTab.compatibleSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <span
                                                           className="groupheader localize">@sparklineExTab.compatibleSparkline.values.data.title@</span>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-text insp-inline-row"
                                                                    data-name="compatibleSparklineData">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.data.title@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6"
                                                                       type="text"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-dropdown-list insp-inline-row"
                                                                    data-list-ref="orientationList"
                                                                    data-name="dataOrientationType">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.data.dataOrientation@
                                                                   </div>
                                                                   <div
                                                                       className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <span className="display"></span>
                                                                           <span className="caret"></span>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-text insp-inline-row"
                                                                    data-name="compatibleSparklineDateAxisData">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.data.dateAxisData@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6"
                                                                       type="text"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-dropdown-list insp-inline-row"
                                                                    data-list-ref="orientationList"
                                                                    data-name="dateAxisOrientationType">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.data.dateAxisOrientation@
                                                                   </div>
                                                                   <div
                                                                       className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <span className="display"></span>
                                                                           <span className="caret"></span>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-dropdown-list insp-inline-row"
                                                                    data-list-ref="emptyCellDisplayTypeList"
                                                                    data-name="emptyCellDisplayType"
                                                                    id="emptyCellDisplayType">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.data.displayEmptyCellAs@
                                                                   </div>
                                                                   <div
                                                                       className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <span className="display"></span>
                                                                           <span className="caret"></span>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-checkbox insp-inline-row"
                                                                    data-name="showDataInHiddenRowOrColumn">
                                                                   <div className="button insp-inline-row-item"></div>
                                                                   <div className="text insp-inline-row-item localize">
                                                                       @sparklineExTab.compatibleSparkline.values.data.showDataInHiddenRowOrColumn@
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <span
                                                           className="groupheader localize">@sparklineExTab.compatibleSparkline.values.show.title@</span>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-checkbox insp-inline-row insp-col-6"
                                                                    data-name="compatibleSparklineShowFirst">
                                                                   <div className="button insp-inline-row-item"></div>
                                                                   <div className="text insp-inline-row-item localize">
                                                                       @sparklineExTab.compatibleSparkline.values.show.showFirst@
                                                                   </div>
                                                               </div>
                                                               <div className="insp-checkbox insp-inline-row"
                                                                    data-name="compatibleSparklineShowLast">
                                                                   <div className="button insp-inline-row-item"></div>
                                                                   <div className="text insp-inline-row-item localize">
                                                                       @sparklineExTab.compatibleSparkline.values.show.showLast@
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-checkbox insp-inline-row insp-col-6"
                                                                    data-name="compatibleSparklineShowHigh">
                                                                   <div className="button insp-inline-row-item"></div>
                                                                   <div className="text insp-inline-row-item localize">
                                                                       @sparklineExTab.compatibleSparkline.values.show.showHigh@
                                                                   </div>
                                                               </div>
                                                               <div className="insp-checkbox insp-inline-row"
                                                                    data-name="compatibleSparklineShowLow">
                                                                   <div className="button insp-inline-row-item"></div>
                                                                   <div className="text insp-inline-row-item localize">
                                                                       @sparklineExTab.compatibleSparkline.values.show.showLow@
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-checkbox insp-inline-row insp-col-6"
                                                                    data-name="compatibleSparklineShowNegative">
                                                                   <div className="button insp-inline-row-item"></div>
                                                                   <div className="text insp-inline-row-item localize">
                                                                       @sparklineExTab.compatibleSparkline.values.show.showNegative@
                                                                   </div>
                                                               </div>
                                                               <div className="insp-checkbox insp-inline-row"
                                                                    data-name="compatibleSparklineShowMarkers">
                                                                   <div className="button insp-inline-row-item"></div>
                                                                   <div className="text insp-inline-row-item localize">
                                                                       @sparklineExTab.compatibleSparkline.values.show.showMarkers@
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <span
                                                           className="groupheader localize">@sparklineExTab.compatibleSparkline.values.group.title@</span>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-dropdown-list insp-inline-row"
                                                                    data-list-ref="axisTypeList"
                                                                    data-name="minAxisType">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.group.minAxisType@
                                                                   </div>
                                                                   <div
                                                                       className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <span className="display"></span>
                                                                           <span className="caret"></span>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-text insp-inline-row"
                                                                    data-name="manualMin">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.group.manualMin@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6"
                                                                       type="text"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-dropdown-list insp-inline-row"
                                                                    data-list-ref="axisTypeList"
                                                                    data-name="maxAxisType">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.group.maxAxisType@
                                                                   </div>
                                                                   <div
                                                                       className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <span className="display"></span>
                                                                           <span className="caret"></span>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-text insp-inline-row"
                                                                    data-name="manualMax">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.group.manualMax@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6"
                                                                       type="text"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-checkbox insp-inline-row insp-col-6"
                                                                    data-name="rightToLeft">
                                                                   <div className="button insp-inline-row-item"></div>
                                                                   <div className="text insp-inline-row-item localize">
                                                                       @sparklineExTab.compatibleSparkline.values.group.rightToLeft@
                                                                   </div>
                                                               </div>
                                                               <div className="insp-checkbox insp-inline-row"
                                                                    data-name="displayXAxis">
                                                                   <div className="button insp-inline-row-item"></div>
                                                                   <div className="text insp-inline-row-item localize">
                                                                       @sparklineExTab.compatibleSparkline.values.group.displayXAxis@
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <span
                                                           className="groupheader localize">@sparklineExTab.compatibleSparkline.values.style.title@</span>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-color-picker insp-inline-row"
                                                                    data-name="compatibleSparklineNegativeColor">
                                                                   <div
                                                                       className="title  insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.style.negative@
                                                                   </div>
                                                                   <div
                                                                       className="picker insp-inline-row-item insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <div className="color-view"
                                                                                style={{backgroundColor: "rgb(165, 42, 42)"}}></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-color-picker insp-inline-row"
                                                                    data-name="compatibleSparklineMarkersColor">
                                                                   <div
                                                                       className="title  insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.style.markers@
                                                                   </div>
                                                                   <div
                                                                       className="picker insp-inline-row-item insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <div className="color-view"
                                                                                style={{backgroundColor: "rgb(36, 64, 98)"}}></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-color-picker insp-inline-row"
                                                                    data-name="compatibleSparklineAxisColor">
                                                                   <div
                                                                       className="title  insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.style.axis@
                                                                   </div>
                                                                   <div
                                                                       className="picker insp-inline-row-item insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <div className="color-view"
                                                                                style={{backgroundColor: "rgb(0, 0, 0)"}}></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-color-picker insp-inline-row"
                                                                    data-name="compatibleSparklineSeriesColor">
                                                                   <div
                                                                       className="title  insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.style.series@
                                                                   </div>
                                                                   <div
                                                                       className="picker insp-inline-row-item insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <div className="color-view"
                                                                                style={{backgroundColor: "rgb(36, 64, 98)"}}></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-color-picker insp-inline-row"
                                                                    data-name="compatibleSparklineHighMarkerColor">
                                                                   <div
                                                                       className="title  insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.style.highMarker@
                                                                   </div>
                                                                   <div
                                                                       className="picker insp-inline-row-item insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <div className="color-view"
                                                                                style={{backgroundColor: "rgb(0, 0, 255)"}}></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-color-picker insp-inline-row"
                                                                    data-name="compatibleSparklineLowMarkerColor">
                                                                   <div
                                                                       className="title  insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.style.lowMarker@
                                                                   </div>
                                                                   <div
                                                                       className="picker insp-inline-row-item insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <div className="color-view"
                                                                                style={{backgroundColor: "rgb(0, 0, 255)"}}></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-color-picker insp-inline-row"
                                                                    data-name="compatibleSparklineFirstMarkerColor">
                                                                   <div
                                                                       className="title  insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.style.firstMarker@
                                                                   </div>
                                                                   <div
                                                                       className="picker insp-inline-row-item insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <div className="color-view"
                                                                                style={{backgroundColor: "rgb(149, 179, 215)"}}></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-color-picker insp-inline-row"
                                                                    data-name="compatibleSparklineLastMarkerColor">
                                                                   <div
                                                                       className="title  insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.style.lastMarker@
                                                                   </div>
                                                                   <div
                                                                       className="picker insp-inline-row-item insp-col-6">
                                                                       <div style={{width: "100%", height: "100%"}}>
                                                                           <div className="color-view"
                                                                                style={{backgroundColor: "rgb(149, 179, 215)"}}></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                                   <div>
                                                       <div className="insp-row">
                                                           <div>
                                                               <div className="insp-text insp-inline-row"
                                                                    data-name="compatibleSparklineLastLineWeight">
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-6 localize">
                                                                       @sparklineExTab.compatibleSparkline.values.style.lineWeight@
                                                                   </div>
                                                                   <input
                                                                       className="editor insp-inline-row-item insp-col-6"
                                                                       type="text"/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setCompatibleSparkline">
                                                   @sparklineExTab.compatibleSparkline.values.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout" id="hbarSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span
                                            className="group-text localize">@sparklineExTab.hbarSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="hbarSparklineValue">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.hbarSparkline.values.value@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="hbarSparklineColorScheme">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.hbarSparkline.values.colorScheme@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(128, 128, 128)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setHbarSparkline">
                                                   @sparklineExTab.hbarSparkline.values.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout" id="vbarSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span
                                            className="group-text localize">@sparklineExTab.vbarSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="vbarSparklineValue">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.vbarSparkline.values.value@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="vbarSparklineColorScheme">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.vbarSparkline.values.colorScheme@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(128, 128, 128)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setVbarSparkline">
                                                   @sparklineExTab.vbarSparkline.values.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout" id="paretoSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span
                                            className="group-text localize">@sparklineExTab.paretoSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="paretoSparklinePoints">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.paretoSparkline.values.points@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="paretoSparklinePointIndex">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.paretoSparkline.values.pointIndex@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="paretoSparklineColorRange">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.paretoSparkline.values.colorRange@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="paretoSparklineTarget">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.paretoSparkline.values.target@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="paretoSparklineTarget2">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.paretoSparkline.values.target2@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="paretoSparklineHighlightPosition">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.paretoSparkline.values.highlightPosition@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-dropdown-list insp-inline-row"
                                                                data-list-ref="paretoLabelList"
                                                                data-name="paretoLabelType">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.paretoSparkline.values.label@
                                                               </div>
                                                               <div
                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <span className="display"></span>
                                                                       <span className="caret"></span>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-checkbox insp-inline-row"
                                                                data-name="paretoSparklineVertical">
                                                               <div className="button insp-inline-row-item"></div>
                                                               <div className="text insp-inline-row-item localize">
                                                                   @sparklineExTab.paretoSparkline.values.vertical@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setParetoSparkline">
                                                   @sparklineExTab.paretoSparkline.values.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout" id="scatterSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span
                                            className="group-text localize">@sparklineExTab.scatterSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="scatterSparklinePoints1">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.scatterSparkline.values.points1@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="scatterSparklinePoints2">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.scatterSparkline.values.points2@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="scatterSparklineMinX">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.scatterSparkline.values.minX@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="scatterSparklineMaxX">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.scatterSparkline.values.maxX@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="scatterSparklineMinY">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.scatterSparkline.values.minY@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="scatterSparklineMaxY">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.scatterSparkline.values.maxY@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="scatterSparklineHLine">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.scatterSparkline.values.hLine@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="scatterSparklineVLine">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.scatterSparkline.values.vLine@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="scatterSparklineXMinZone">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.scatterSparkline.values.xMinZone@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="scatterSparklineXMaxZone">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.scatterSparkline.values.xMaxZone@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="scatterSparklineYMinZone">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.scatterSparkline.values.yMinZone@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="scatterSparklineYMaxZone">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.scatterSparkline.values.yMaxZone@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="scatterSparklineColor1">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.scatterSparkline.values.color1@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(150, 150, 150)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="scatterSparklineColor2">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.scatterSparkline.values.color2@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(203, 0, 0)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-checkbox insp-inline-row"
                                                                data-name="scatterSparklineTags">
                                                               <div className="button insp-inline-row-item"></div>
                                                               <div className="text insp-inline-row-item localize">
                                                                   @sparklineExTab.scatterSparkline.values.tags@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-checkbox insp-inline-row"
                                                                data-name="scatterSparklineDrawSymbol">
                                                               <div
                                                                   className="button insp-inline-row-item checked"></div>
                                                               <div className="text insp-inline-row-item localize">
                                                                   @sparklineExTab.scatterSparkline.values.drawSymbol@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-checkbox insp-inline-row"
                                                                data-name="scatterSparklineDrawLines">
                                                               <div className="button insp-inline-row-item"></div>
                                                               <div className="text insp-inline-row-item localize">
                                                                   @sparklineExTab.scatterSparkline.values.drawLines@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-checkbox insp-inline-row"
                                                                data-name="scatterSparklineDashLine">
                                                               <div className="button insp-inline-row-item"></div>
                                                               <div className="text insp-inline-row-item localize">
                                                                   @sparklineExTab.scatterSparkline.values.dashLine@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setScatterSparkline">
                                                   @sparklineExTab.scatterSparkline.values.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout" id="spreadSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span
                                            className="group-text localize">@sparklineExTab.spreadSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="spreadSparklinePoints">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.spreadSparkline.values.points@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="spreadSparklineScaleStart">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.spreadSparkline.values.scaleStart@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="spreadSparklineScaleEnd">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.spreadSparkline.values.scaleEnd@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-dropdown-list insp-inline-row"
                                                                data-list-ref="spreadSparklineStyleList"
                                                                data-name="spreadSparklineStyleType">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.spreadSparkline.values.style@
                                                               </div>
                                                               <div
                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <span className="display"></span>
                                                                       <span className="caret"></span>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="spreadSparklineColorScheme">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.spreadSparkline.values.colorScheme@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(100, 100, 100)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-checkbox insp-inline-row"
                                                                data-name="spreadSparklineShowAverage">
                                                               <div className="button insp-inline-row-item"></div>
                                                               <div className="text insp-inline-row-item localize">
                                                                   @sparklineExTab.spreadSparkline.values.showAverage@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-checkbox insp-inline-row"
                                                                data-name="spreadSparklineVertical">
                                                               <div className="button insp-inline-row-item"></div>
                                                               <div className="text insp-inline-row-item localize">
                                                                   @sparklineExTab.spreadSparkline.values.vertical@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setSpreadSparkline">
                                                   @sparklineExTab.spreadSparkline.values.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout" id="stackedSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span
                                            className="group-text localize">@sparklineExTab.stackedSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="stackedSparklinePoints">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.stackedSparkline.values.points@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="stackedSparklineColorRange">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.stackedSparkline.values.colorRange@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="stackedSparklineLabelRange">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.stackedSparkline.values.labelRange@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-number insp-inline-row"
                                                                data-name="stackedSparklineMaximum">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.stackedSparkline.values.maximum@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="number"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-number insp-inline-row"
                                                                data-name="stackedSparklineTargetRed">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.stackedSparkline.values.targetRed@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="number"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-number insp-inline-row"
                                                                data-name="stackedSparklineTargetGreen">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.stackedSparkline.values.targetGreen@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="number"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-number insp-inline-row"
                                                                data-name="stackedSparklineTargetBlue">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.stackedSparkline.values.targetBlue@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="number"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-number insp-inline-row"
                                                                data-name="stackedSparklineTargetYellow">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.stackedSparkline.values.targetYellow@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="number"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="stackedSparklineColor">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.stackedSparkline.values.color@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(100, 100, 100)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-number insp-inline-row"
                                                                data-name="stackedSparklineHighlightPosition">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.stackedSparkline.values.highlightPosition@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="number"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-dropdown-list insp-inline-row"
                                                                data-list-ref="textOrientationList"
                                                                data-name="stackedSparklineTextOrientation">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.stackedSparkline.values.textOrientation@
                                                               </div>
                                                               <div
                                                                   className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <span className="display"></span>
                                                                       <span className="caret"></span>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-number insp-inline-row"
                                                                data-name="stackedSparklineTextSize">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.stackedSparkline.values.textSize@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-5"
                                                                      type="number"/>
                                                                   <div
                                                                       className="title insp-inline-row-item insp-col-1 center-align">
                                                                       px
                                                                   </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-checkbox insp-inline-row"
                                                                data-name="stackedSparklineVertical">
                                                               <div className="button insp-inline-row-item"></div>
                                                               <div className="text insp-inline-row-item localize">
                                                                   @sparklineExTab.stackedSparkline.values.vertical@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setStackedSparkline">
                                                   @sparklineExTab.stackedSparkline.values.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout" id="variSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span
                                            className="group-text localize">@sparklineExTab.variSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="variSparklineVariance">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.variSparkline.values.variance@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="variSparklineReference">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.variSparkline.values.reference@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="variSparklineMini">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.variSparkline.values.mini@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="variSparklineMaxi">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.variSparkline.values.maxi@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="variSparklineMark">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.variSparkline.values.mark@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="variSparklineTickUnit">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.variSparkline.values.tickunit@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="variSparklineColorPositive">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.variSparkline.values.colorPositive@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(0, 128, 0)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="variSparklineColorNegative">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.variSparkline.values.colorNegative@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(255, 0, 0)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-checkbox insp-inline-row"
                                                                data-name="variSparklineLegend">
                                                               <div className="button insp-inline-row-item"></div>
                                                               <div className="text insp-inline-row-item localize">
                                                                   @sparklineExTab.variSparkline.values.legend@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-checkbox insp-inline-row"
                                                                data-name="variSparklineVertical">
                                                               <div className="button insp-inline-row-item"></div>
                                                               <div className="text insp-inline-row-item localize">
                                                                   @sparklineExTab.variSparkline.values.vertical@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setVariSparkline">
                                                   @sparklineExTab.variSparkline.values.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout" id="yearSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span
                                            className="group-text localize">@sparklineExTab.yearSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="yearSparklineData">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.data@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="yearSparklineYear">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.year@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="yearSparklineEmptyColor">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.emptyColor@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(0, 128, 0)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="yearSparklineStartColor">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.startColor@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(255, 0, 0)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="yearSparklineMiddleColor">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.middleColor@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(255, 0, 0)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="yearSparklineEndColor">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.endColor@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(255, 0, 0)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="yearSparklineColorRange">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.colorRange@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setYearSparkline">
                                                   @sparklineExTab.monthYear.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout" id="monthSparklineSetting">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span
                                            className="group-text localize">@sparklineExTab.monthSparkline.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="monthSparklineData">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.data@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="monthSparklineYear">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.year@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="monthSparklineMonth">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.month@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="monthSparklineEmptyColor">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.emptyColor@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(0, 128, 0)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="monthSparklineStartColor">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.startColor@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(255, 0, 0)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="monthSparklineMiddleColor">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.middleColor@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(255, 0, 0)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-color-picker insp-inline-row"
                                                                data-name="monthSparklineEndColor">
                                                               <div
                                                                   className="title  insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.endColor@
                                                               </div>
                                                               <div className="picker insp-inline-row-item insp-col-6">
                                                                   <div style={{width: "100%", height: "100%"}}>
                                                                       <div className="color-view"
                                                                            style={{backgroundColor: "rgb(255, 0, 0)"}}></div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div>
                                                   <div className="insp-row">
                                                       <div>
                                                           <div className="insp-text insp-inline-row"
                                                                data-name="monthSparklineColorRange">
                                                               <div
                                                                   className="title insp-inline-row-item insp-col-6 localize">
                                                                   @sparklineExTab.monthYear.colorRange@
                                                               </div>
                                                               <input className="editor insp-inline-row-item insp-col-6"
                                                                      type="text"/>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div className="insp-row col-md-offset-8">
                                               <div className="button btn btn-default group-set localize"
                                                    id="setMonthSparkline">
                                                   @sparklineExTab.monthYear.setButton@
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div className="tab-pane" id="chartExTab">
                           <div className="insp-pane">
                               <div className="insp-group-layout">
                                   <div className="insp-group expanded">
                                       <div className="insp-group-title">
                                                <span>
                                                    <span className="group-state fa"></span>
                                                <span
                                                    className="groupheader localize">@chartExTab.values.chartTitle.title@</span>
                                                </span>
                                       </div>

                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row"
                                                            data-name="chartTitletext">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.chartTitle.text@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="fontSizeList" data-name="chartTitleFontSize">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.fontSize@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="fontFamilyList"
                                                            data-name="chartTitleFontFamily">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.fontFamily@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="chartTitleColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.color@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "
                                                                        style={{backgroundColor: "rgb(160, 160, 160)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div className="group-item-divider"></div>
                                               </div>
                                               <div className="insp-row">
                                                   <div className="insp-row col-md-offset-8">
                                                       <div className="button btn btn-default group-set localize"
                                                            id="setChartTitle">
                                                           @chartExTab.setButton@
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="insp-group-layout" id="chartSeriesGroup">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                                <span>
                                                    <span className="group-state fa"></span>
                                                <span
                                                    className="groupheader localize">@chartExTab.values.series.title@</span>
                                                </span>
                                       </div>

                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="chartSeriesIndexContner"
                                                            data-name="chartSeriesIndexValue">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.series.seriesIndex@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span>
                                                                   <span className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="chartSeriesGroupContner"
                                                            data-name="chartSeriesGroupValue">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.series.axisGroup@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span>
                                                                   <span className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row" id="chartSeriesColor">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="chartSeriesColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.chartArea.color@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row" id="chartSeriesLineWidth">
                                                   <div>
                                                       <div className="insp-text insp-inline-row"
                                                            data-name="chartSeriesLineWidth">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.series.lineWidth@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row" id="chartSeriesLineColor">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="chartSeriesLineColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.lineColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div className="group-item-divider"></div>
                                               </div>
                                               <div className="insp-row">
                                                   <div className="insp-row col-md-offset-8">
                                                       <div className="button btn btn-default group-set localize"
                                                            id="setChartSeries">
                                                           @chartExTab.setButton@
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                                <span>
                                                    <span className="group-state fa"></span>
                                                <span
                                                    className="groupheader localize">@chartExTab.values.chartArea.title@</span>
                                                </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="chartAreaBackColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.chartArea.backColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="chartAreaColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.chartArea.color@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view "></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="fontSizeList" data-name="chartAreaFontSize">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.fontSize@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="fontFamilyList"
                                                            data-name="chartAreaFontFamily">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.fontFamily@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div className="group-item-divider"></div>
                                               </div>
                                               <div className="insp-row">
                                                   <div className="insp-row col-md-offset-8">
                                                       <div className="button btn btn-default group-set localize"
                                                            id="setChartArea">
                                                           @chartExTab.setButton@
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                                   <div>
                                   </div>
                               </div>

                               <div className="insp-group-layout" id="chartLegendGroup">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                                <span>
                                                    <span className="group-state fa"></span>
                                                <span
                                                    className="groupheader localize">@chartExTab.values.legend.title@</span>
                                                </span>
                                       </div>

                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="chartLegendPositionList"
                                                            data-name="chartLegendPosition">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.legend.position.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showChartLegend">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @chartExTab.values.legend.showLegend@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div className="group-item-divider"></div>
                                               </div>
                                               <div className="insp-row">
                                                   <div className="insp-row col-md-offset-8">
                                                       <div className="button btn btn-default group-set localize"
                                                            id="setChartLegend">
                                                           @chartExTab.setButton@
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="insp-group-layout" id="chartDataLabelsGroup">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                                <span>
                                                    <span className="group-state fa"></span>
                                                <span
                                                    className="groupheader localize">@chartExTab.values.dataLabels.title@</span>
                                                </span>
                                       </div>

                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="chartDataLabelList"
                                                            data-name="chartDataLabelPosition"
                                                            id="chartDataLabelPositionDropDown">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.dataLabels.position.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="dataLabelsColor"
                                                            id="dataLabelsColorCon">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.dataLabels.color@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view"
                                                                        style={{backgroundColor: "rgb(165, 42, 42)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showDataLabelsValue">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @chartExTab.values.dataLabels.showValue@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showDataLabelsSeriesName">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @chartExTab.values.dataLabels.showSeriesName@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showDataLabelsCategoryName">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @chartExTab.values.dataLabels.showCategoryName@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div className="group-item-divider"></div>
                                               </div>
                                               <div className="insp-row">
                                                   <div className="insp-row col-md-offset-8">
                                                       <div className="button btn btn-default group-set localize"
                                                            id="setChartDataLabels">
                                                           @chartExTab.setButton@
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>

                               <div className="insp-group-layout" id="chartAxesGroup">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                                <span>
                                                    <span className="group-state fa"></span>
                                                <span
                                                    className="groupheader localize">@chartExTab.values.axes.title@</span>
                                                </span>
                                       </div>

                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="chartAxisTypeList"
                                                            data-name="chartAxieType">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.axisType.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="chartAixsColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.color@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view"
                                                                        style={{backgroundColor: "rgb(165, 42, 42)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="fontSizeList" data-name="chartAxesFontSize">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.fontSize@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="fontFamilyList"
                                                            data-name="chartAxesFontFamily">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.fontFamily@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row"
                                                            data-name="chartAixsTitletext">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.aixsTitle@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="fontSizeList"
                                                            data-name="chartAxesTitleFontSize">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.titleFontSize@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="fontFamilyList"
                                                            data-name="chartAxesTitleFontFamily">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.titleFontFamily@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>


                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="chartAixsTitleColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.titleColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view"
                                                                        style={{backgroundColor: "rgb(165, 42, 42)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="chartAixsLineColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.lineColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view"
                                                                        style={{backgroundColor: "rgb(165, 42, 42)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row"
                                                            data-name="chartAixsLineWidth">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.lineWidth@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row"
                                                            data-name="chartAixsMajorUnit">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.majorUnit@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row"
                                                            data-name="chartAixsMinorUnit">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.minorUnit@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row"
                                                            data-name="chartAixsMajorGridlineWidth">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.majorGridlineWidth@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="chartAixsMajorGridlineColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.majorGridlineColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view"
                                                                        style={{backgroundColor: "rgb(165, 42, 42)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row"
                                                            data-name="chartAixsMinorMinorGridlineWidth">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.minorGridlineWidth@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-color-picker insp-inline-row"
                                                            data-name="chartAixsMinorGridlineColor">
                                                           <div
                                                               className="title  insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.minorGridlineColor@
                                                           </div>
                                                           <div className="picker insp-inline-row-item insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <div className="color-view"
                                                                        style={{backgroundColor: "rgb(165, 42, 42)"}}></div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="chartTickPositionList"
                                                            data-name="chartMajorTickPosition">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.TickPosition.majorTitle@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="chartTickPositionList"
                                                            data-name="chartMinorTickPosition">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.TickPosition.minorTitle@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="chartTickLabelPositionList"
                                                            data-name="chartTickLabelPosition">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @chartExTab.values.axes.tickLabelPosition.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span><span
                                                                   className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>


                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showAxis">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @chartExTab.values.axes.showAxis@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showMajorGridline">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @chartExTab.values.axes.showMajorGridline@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="showMinorGridline">
                                                           <div className="button insp-inline-row-item"></div>
                                                           <div className="text   insp-inline-row-item localize">
                                                               @chartExTab.values.axes.showMinorGridline@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>

                                               <div className="insp-row">
                                                   <div className="group-item-divider"></div>
                                               </div>
                                               <div className="insp-row">
                                                   <div className="insp-row col-md-offset-8">
                                                       <div className="button btn btn-default group-set localize"
                                                            id="setChartAxes">
                                                           @chartExTab.setButton@
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className="tab-pane" id="slicerTab">
                           <div className="insp-pane">
                               <div className="insp-group-layout">
                                   <div className="insp-group  expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@slicerTab.slicerStyle.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="slicer-format-2013" id="slicerStyles">
                                                           <div>
                                                               <div>
                                                                   <div className="slicer-format-item localize-tooltip"
                                                                        title="@slicerTab.slicerStyle.light.light1@">
                                                                       <div data-name="light1">
                                                                           <div
                                                                               className="slicer-format-icon slicer-format-light1"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="slicer-format-item localize-tooltip"
                                                                        title="@slicerTab.slicerStyle.light.light2@">
                                                                       <div data-name="light2">
                                                                           <div
                                                                               className="slicer-format-icon slicer-format-light2"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="slicer-format-item localize-tooltip"
                                                                        title="@slicerTab.slicerStyle.light.light3@">
                                                                       <div data-name="light3">
                                                                           <div
                                                                               className="slicer-format-icon slicer-format-light3"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="slicer-format-item localize-tooltip"
                                                                        title="@slicerTab.slicerStyle.light.light5@">
                                                                       <div data-name="light5">
                                                                           <div
                                                                               className="slicer-format-icon slicer-format-light5"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="slicer-format-item localize-tooltip"
                                                                        title="@slicerTab.slicerStyle.light.light6@">
                                                                       <div data-name="light6">
                                                                           <div
                                                                               className="slicer-format-icon slicer-format-light6"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="slicer-format-item localize-tooltip"
                                                                        title="@slicerTab.slicerStyle.dark.dark1@">
                                                                       <div data-name="dark1">
                                                                           <div
                                                                               className="slicer-format-icon slicer-format-dark1"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="slicer-format-item localize-tooltip"
                                                                        title="@slicerTab.slicerStyle.dark.dark2@">
                                                                       <div data-name="dark2">
                                                                           <div
                                                                               className="slicer-format-icon slicer-format-dark2"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="slicer-format-item localize-tooltip"
                                                                        title="@slicerTab.slicerStyle.dark.dark3@">
                                                                       <div data-name="dark3">
                                                                           <div
                                                                               className="slicer-format-icon slicer-format-dark3"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="slicer-format-item localize-tooltip"
                                                                        title="@slicerTab.slicerStyle.dark.dark5@">
                                                                       <div data-name="dark5">
                                                                           <div
                                                                               className="slicer-format-icon slicer-format-dark5"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                           <div>
                                                               <div>
                                                                   <div className="slicer-format-item localize-tooltip"
                                                                        title="@slicerTab.slicerStyle.dark.dark6@">
                                                                       <div data-name="dark6">
                                                                           <div
                                                                               className="slicer-format-icon slicer-format-dark6"></div>
                                                                       </div>
                                                                   </div>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group  expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@slicerTab.general.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row"
                                                            data-name="slicerName">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @slicerTab.general.name@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-text insp-inline-row"
                                                            data-name="slicerCaptionName">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @slicerTab.general.captionName@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="text"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-dropdown-list insp-inline-row"
                                                            data-list-ref="slicerItemSortingList"
                                                            data-name="slicerItemSorting">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @slicerTab.general.itemSorting.title@
                                                           </div>
                                                           <div
                                                               className="dropdown insp-inline-row-item btn btn-default insp-text-right insp-col-6">
                                                               <div style={{width: "100%", height: "100%"}}>
                                                                   <span className="display"></span>
                                                                   <span className="caret"></span>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="displaySlicerHeader">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @slicerTab.general.displayHeader@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group  expanded">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@slicerTab.layout.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-number insp-inline-row"
                                                            data-name="slicerColumnNumber">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @slicerTab.layout.columnNumber@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="number"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-number insp-inline-row"
                                                            data-name="slicerButtonHeight">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @slicerTab.layout.buttonHeight@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="number"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-number insp-inline-row"
                                                            data-name="slicerButtonWidth">
                                                           <div
                                                               className="title insp-inline-row-item insp-col-6 localize">
                                                               @slicerTab.layout.buttonWidth@
                                                           </div>
                                                           <input className="editor insp-inline-row-item insp-col-6"
                                                                  type="number"/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                               <div className="insp-group-layout">
                                   <div className="insp-group">
                                       <div className="insp-group-title">
                                        <span>
                                            <span className="group-state fa"></span>
                                        <span className="group-text localize">@slicerTab.property.title@</span>
                                        </span>
                                       </div>
                                       <div className="insp-group-content">
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox" data-name="slicerMoveAndSize">
                                                           <div className="insp-row">
                                                               <div className="radiobutton insp-inline-row-item checked"
                                                                    data-name="slicer-move-size"></div>
                                                               <div className="text insp-inline-row-item localize"
                                                                    data-name="slicer-move-size">
                                                                   @slicerTab.property.moveAndSize@
                                                               </div>
                                                           </div>
                                                           <div className="insp-row">
                                                               <div className="radiobutton insp-inline-row-item"
                                                                    data-name="slicer-move-nosize"></div>
                                                               <div className="text insp-inline-row-item localize"
                                                                    data-name="slicer-move-nosize">
                                                                   @slicerTab.property.moveAndNoSize@
                                                               </div>
                                                           </div>
                                                           <div className="insp-row">
                                                               <div className="radiobutton insp-inline-row-item"
                                                                    data-name="slicer-nomove-size"></div>
                                                               <div className="text insp-inline-row-item localize"
                                                                    data-name="slicer-nomove-size">
                                                                   @slicerTab.property.noMoveAndSize@
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                           <div className="group-item-divider"></div>
                                           <div>
                                               <div className="insp-row">
                                                   <div>
                                                       <div className="insp-checkbox insp-inline-row"
                                                            data-name="lockSlicer">
                                                           <div className="button insp-inline-row-item checked"></div>
                                                           <div className="text insp-inline-row-item localize">
                                                               @slicerTab.property.locked@
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
      )
    }
}
