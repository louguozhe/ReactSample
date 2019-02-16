import {TabType} from '../store/reducers/spread/actions'

const GC = window.GC
const spreadNS = GC.Spread.Sheets

export const getCellInfo = (sheet, row, column) => {
    var result = {type: TabType.CELL}, object;

    if ((object = sheet.comments.get(row, column))) {
        result.type = TabType.COMMENT;
    } else if ((object = sheet.tables.find(row, column))) {
        result.type = TabType.DATA;
    }

    result.object = object;

    return result;
}


export const FullNameCellType = ()=>{
}
FullNameCellType.prototype = new spreadNS.CellTypes.Base();
FullNameCellType.prototype.paint = function (ctx, value, x, y, w, h, style, options) {
    if (value) {
        spreadNS.CellTypes.Base.prototype.paint.apply(this, [ctx, value.firstName + "." + value.lastName, x, y, w, h, style, options]);
    }
};
FullNameCellType.prototype.updateEditor = function(editorContext, cellStyle, cellRect) {
    if (editorContext) {
        editorContext.style.width=100//cellRect.width;
        editorContext.style.height=100;
        return {height: 100,width:100};
    }
};
FullNameCellType.prototype.createEditorElement = function () {
    var div = document.createElement("div");
    div.setAttribute("gcUIElement", "gcEditingInput");
    div.style.backgroundColor= "white";
    div.style.overflow= "hidden";
    var span1 = document.createElement('span');
    span1.style.display = "block";
    var span2 = document.createElement("span");
    span2.style.display = "block";
    var input1 = document.createElement("input");
    var input2 = document.createElement("input");
    var type = document.createAttribute('type');
    type.nodeValue="text";
    var clonedType = type.cloneNode(true);
    input1.setAttributeNode(type);
    input2.setAttributeNode(clonedType);
    div.appendChild(span1);
    div.appendChild(input1);
    div.appendChild(span2);
    div.appendChild(input2);
    return div;
};
FullNameCellType.prototype.getEditorValue = function (editorContext) {
    if (editorContext && editorContext.children.length === 4) {
        var input1 = editorContext.children[1];
        var firstName = input1.value;
        var input2 = editorContext.children[3];
        var lastName = input2.value;
        return { firstName: firstName, lastName: lastName };
    }
};
FullNameCellType.prototype.setEditorValue = function (editorContext, value) {
    if (editorContext && editorContext.children.length === 4) {
        var span1 = editorContext.children[0];
        span1.innerHTML="First Name:";
        var span2 = editorContext.children[2];
        span2.innerHTML="Last Name:";
        if (value) {
            var input1 = editorContext.children[1];
            input1.value=value.firstName;
            var input2 = editorContext.children[3];
            input2.value=value.lastName;
        }
    }
};
FullNameCellType.prototype.isReservedKey = function (e) {
    //cell type handle tab key by itself
    return (e.keyCode === window.GC.Spread.Commands.Key.tab && !e.ctrlKey && !e.shiftKey && !e.altKey);
};
FullNameCellType.prototype.isEditingValueChanged = function(oldValue, newValue) {
    if (!oldValue || !newValue || newValue.firstName != oldValue.firstName || newValue.lastName != oldValue.lastName) {
        return true;
    }
    return false;
}

FullNameCellType.prototype.toString = function(){
    return this.firstName
}
FullNameCellType.text = function(){
    return this.firstName
}
export const fullNameCellType = new FullNameCellType()

//Table风格
export const statTableStyle = new GC.Spread.Sheets.Tables.TableTheme();
const thinBorder = new GC.Spread.Sheets.LineBorder("black", GC.Spread.Sheets.LineStyle.thin);
statTableStyle.wholeTableStyle(new GC.Spread.Sheets.Tables.TableStyle("aliceblue", "green", "bold 10pt arial", thinBorder, thinBorder, thinBorder, thinBorder, thinBorder, thinBorder));


function demo_Undo_initSpread(spread) {
    var sheet = spread.getActiveSheet();
    var command = {
        canUndo: true,
        execute: function(spread, options, isUndo) {
            var Commands = GC.Spread.Sheets.Commands;
            if (isUndo) {
                Commands.undoTransaction(spread, options);
                return true;
            } else {
                Commands.startTransaction(spread, options);
                spread.suspendPaint();
                var selections = options.selections;
                var value = options.backColor;
                selections.forEach(function(sel) {
                    sheet.getRange(sel.row, sel.col, sel.rowCount, sel.colCount).backColor(value);
                });
                spread.resumePaint();
                Commands.endTransaction(spread, options);
                return true;
            }
        }
    };
    var selections = sheet.getSelections();
    var commandManager = spread.commandManager();
    commandManager.register('changeBackColor', command);
    commandManager.execute({
        cmd: 'changeBackColor',
        sheetName: spread.getSheet(0).name(),
        selections: selections,
        backColor: 'red'
    });
}


// Define highlight cell types
function HighlightColumnItemsCellType() {
    this.RADIUS = 10;
    this.HIGHLIGHT_COLOR = "rgb(40, 171, 240)";
    this.NORMAL_COLOR = "rgb(128, 255, 255)";
    this.HIGHLIGHT_TIP = "Remove highlight.";
    this.NORMAL_TIP = "Highlight negative numbers.";

    spreadNS.CellTypes.ColumnHeader.apply(this);
}

HighlightColumnItemsCellType.prototype = new spreadNS.CellTypes.ColumnHeader();
HighlightColumnItemsCellType.prototype.paint = function (ctx, value, x, y, width, height, style, context) {
    spreadNS.CellTypes.ColumnHeader.prototype.paint.apply(this, arguments);

    var tag = context.sheet.getTag(context.row, context.col, context.sheetArea);
    var RADIUS = this.RADIUS;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x + width - RADIUS, y + height / 2, RADIUS / 2, 0, Math.PI * 2);
    ctx.fillStyle = (tag && tag.color) || this.NORMAL_COLOR;
    ctx.fill();
    ctx.restore();
};
export const highlightColumnItemsCellType = new HighlightColumnItemsCellType()

function HighlightRowItemsCellType() {
    this.RADIUS = 10;
    this.HIGHLIGHT_COLOR = "rgb(40, 171, 240)";
    this.NORMAL_COLOR = "rgb(128, 255, 255)";
    this.HIGHLIGHT_TIP = "Remove highlight.";
    this.NORMAL_TIP = "Highlight negative numbers.";

    spreadNS.CellTypes.RowHeader.apply(this);
}
HighlightRowItemsCellType.prototype = new spreadNS.CellTypes.RowHeader();
HighlightRowItemsCellType.prototype.paint = function (ctx, value, x, y, width, height, style, context) {
    spreadNS.CellTypes.RowHeader.prototype.paint.apply(this, arguments);

    var tag = context.sheet.getTag(context.row, context.col, context.sheetArea);
    var RADIUS = this.RADIUS;
    ctx.save();
    ctx.beginPath();
    ctx.arc(x + width - RADIUS, y + height / 2, RADIUS / 2, 0, Math.PI * 2);
    ctx.fillStyle = (tag && tag.color) || this.NORMAL_COLOR;
    ctx.fill();
    ctx.restore();
};
export const highlightRowItemsCellType = new HighlightRowItemsCellType()

export function InitStatSheet(sheet){
    if(!sheet)
        return
    sheet.setRowCount(20);
    sheet.setColumnCount(20);
    sheet.setCellType(0, 0, highlightColumnItemsCellType, spreadNS.SheetArea.colHeader);
    sheet.setCellType(0, 0, highlightRowItemsCellType, spreadNS.SheetArea.rowHeader);
    // sheet.setStyle(1,1,style,GC.Spread.Sheets.SheetArea.colHeader)
    // sheet.getColumn.backColor("#1E90FF")
    // sheet.getColumn(1).backColor("#1E90FF")
}

export const StatTitleStyle = new spreadNS.Style()
StatTitleStyle.backColor = "rgb(231, 230, 230)"
// StatTitleStyle.formatter = "0.00";
StatTitleStyle.hAlign = spreadNS.HorizontalAlign.center;
StatTitleStyle.vAlign = spreadNS.VerticalAlign.center;
// var lineBorder = new spreadNS.LineBorder("rgb(0, 0, 0)");
// StatTitleStyle.borderLeft = lineBorder;
// StatTitleStyle.borderTop = lineBorder;
// StatTitleStyle.borderRight = lineBorder;
// StatTitleStyle.borderBottom = lineBorder;

// activeSheet.setDefaultStyle(defaultStyle, GcSpread.Sheets.SheetArea.viewport);
export const StatBackGroundColor = "rgb(231, 230, 230)"
var lineStyle = spreadNS.LineStyle.thin;
var borderColor = "rgb(0, 0, 0)";
export const StatCellLineBorder = new spreadNS.LineBorder(borderColor,lineStyle);
// sheet.getRange(row, ++col, 1, 1).setBorder(cellLineBorder);

export const StatIndexStyle = new spreadNS.Style()
// StatIndexStyle.backColor = "rgb(231, 230, 230)"
// StatTitleStyle.formatter = "0.00";
StatIndexStyle.hAlign = spreadNS.HorizontalAlign.center;
StatIndexStyle.vAlign = spreadNS.VerticalAlign.center;
