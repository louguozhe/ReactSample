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
