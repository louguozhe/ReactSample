import React,{Component} from "react";
import TabContent from "../tab/tabContent";
import TabContentWapper from "../tab/tabContentWapper";
import Group from "../group/group";
import GroupWapper from "../group/groupWapper";
import TabTitle from '../tab/tabTitle'
import TabTitleWapper from '../tab/tabTitleWapper'
import SheetTabContent from "./statTabContent"
import SpreadTabContent from "./spreadTabContent"
import CellTabContent from "./cellTabContent"
import DataTabContent from "./dataTabContent"
import {TabType} from "../../store/reducers/spread/actions";
import connect from "react-redux/es/connect/connect";

class rightPanel extends Component {

    updateStringProperty(sender) {
        var $element = window.$(this),
            $parent = $element.parent(),
            name = $parent.data("name"),
            value = $element.val();

        var sheet = window.spread.getActiveSheet();

        switch (name) {
            case "sheetName":
                if (value && value !== sheet.name()) {
                    try {
                        sheet.name(value);
                    } catch (ex) {
                        alert("sheet名称重复！");
                        $element.val(sheet.name());
                    }
                }
                break;

            case "tableName":
                // if (value && _activeTable && value !== _activeTable.name()) {
                //     if (!sheet.tables.findByName(value)) {
                //         _activeTable.name(value);
                //     } else {
                //         alert(getResource("messages.duplicatedTableName"));
                //         $element.val(_activeTable.name());
                //     }
                // }
                break;

            case "commentPadding":
                // setCommentPadding(value);
                break;

            case "customFormat":
                // setFormatter(value);
                break;

            case "slicerName":
                // setSlicerSetting("name", value);
                break;

            case "slicerCaptionName":
                // setSlicerSetting("captionName", value);
                break;

            case "watermark":
                // setWatermark(sheet, value);
                break;

            case "cellPadding":
                // setCellPadding(sheet, value);
                break;

            case "labelmargin":
                // setLabelOptions(sheet, value, "margin");
                break;
            default:
                console.log("updateStringProperty w/o process of ", name);
                break;
        }
    }

    toggleState(sender) {
        var $element = window.$(this)
        console.log("$element",$element)
        var $parent = $element.parent(),
            $content = $parent.siblings(".insp-group-content"),
            $target = $parent.find("span.group-state"),
            collapsed = $target.hasClass("fa-caret-right");

        if (collapsed) {
            $target.removeClass("fa-caret-right").addClass("fa-caret-down");
            $content.slideToggle("fast");
        } else {
            $target.addClass("fa-caret-right").removeClass("fa-caret-down");
            $content.slideToggle("fast");
        }
    }
    showColorPicker() {
        // if (!_needShow) {
        //     _needShow = true;
        //     return;
        // }
        console.log("showColorPicker")

        var MIN_TOP = 30, MIN_BOTTOM = 4;
        var $element = window.$(this),
            $container = $element.parent(),
            name = $container.data("name"),
            $target = window.$("#colorpicker");

        if ($target && !$target.hasClass("colorpicker-visible")) {
            $target.data("dropdown", this);
            // save related name for later use
            $target.data("name", name);

            var $nofill = $target.find("div.nofill-color");
            if ($container.hasClass("show-nofill-color")) {
                $nofill.show();
            } else {
                $nofill.hide();
            }

            var _colorpicker = $target[0];

            var $dropdown = $element,
                offset = $dropdown.offset();

            var height = $target.height(),
                top = offset.top - (height - $element.height()) / 2 + 3,   // 3 = padding (4) - border-width(1)
                yOffset = 0;

            if (top < MIN_TOP) {
                yOffset = MIN_TOP - top;
                top = MIN_TOP;
            } else {
                var $inspContainer = window.$(".insp-container"),
                    maxTop = $inspContainer.height() + $inspContainer.offset().top;

                // adjust top when out of bottom range
                if (top + height > maxTop - MIN_BOTTOM) {
                    var newTop = maxTop - MIN_BOTTOM - height;
                    yOffset = newTop - top;
                    top = newTop;
                }
            }

            $target.css({
                top: top,
                left: offset.left - $target.width() - 20
            });

            // v-center the pointer
            var $pointer = $target.find(".cp-pointer");
            $pointer.css({top: (height - 24) / 2 - yOffset});   // 24 = pointer height

            $target.addClass("colorpicker-visible");

            // processEventListenerHandleClosePopup(true);
        }
    }
    componentDidMount(){
        window.$("div.insp-group-title>span").click(this.toggleState);
        // window.$("div.insp-color-picker .picker").click(this.showColorPicker); //尚未调试通过
        // window.$(".insp-text input.editor").blur(this.updateStringProperty)
    }

    render(){
        return (
            <div className="insp-container ui-draggable ui-draggable-disabled ui-state-disabled"
                 aria-disabled={true}
                 style={{left: "auto", top: "0px", display: "block"}}>
                <TabTitleWapper>
                    <TabTitle data={{name:"模板",id:"statTab",active:true}}/>
                    <TabTitle data={{name:"格式",id:"cellTab",active:false}}/>
                    <TabTitle data={{name:"维度",id:"dimensionTab",active:false}}/>
                    <TabTitle data={{name:"指标",id:"indexTab",active:false}}/>
                    <TabTitle data={{name:"数据",id:"dataTab",active:this.props.activeTabType === TabType.DATA,hidden:true}}/>
                    <TabTitle data={{name:"备注",id:"commentTab",active:this.props.activeTabType === TabType.COMMENT,hidden:true}}/>
                    <TabTitle data={{name:"图片",id:"pictureTab",active:this.props.activeTabType === TabType.PICTURE,hidden:true}}/>
                    <TabTitle data={{name:"@tabs.sparklineEx@",id:"sparklineExTab",active:this.props.activeTabType === TabType.SPARKLINE,hidden:true}}/>
                    <TabTitle data={{name:"@tabs.chartEx@",id:"chartExTab",active:this.props.activeTabType === TabType.CHART,hidden:true}}/>
                    <TabTitle data={{name:"@tabs.slicer@",id:"slicerTab",active:this.props.activeTabType === TabType.SLICER,hidden:true}}/>
                </TabTitleWapper>
                <TabContentWapper>
                    {/*<SpreadTabContent/>*/}
                    <SheetTabContent />
                    <CellTabContent />
                    <DataTabContent />
                </TabContentWapper>
            </div>

        )
    }
}
const getStoreProps = state => {
    return {
        activeSheet: state.spread.activeSheet,
        activeTabType: state.spread.activeTabType
    }
}
export default connect(getStoreProps)(rightPanel)
