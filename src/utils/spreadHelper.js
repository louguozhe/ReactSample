import {TabType} from '../store/reducers/spread/actions'


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
