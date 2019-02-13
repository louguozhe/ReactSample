//统计维度定义
export const StatDimension = {
    data:[
        {id:1,dataSet:"基本情况",dimension:"文化程度",measure:"博士",expression:"whcd='1'"},
        {id:2,dataSet:"基本情况",dimension:"文化程度",measure:"硕士",expression:"whcd='2'"},
        {id:3,dataSet:"基本情况",dimension:"文化程度",measure:"本科",expression:"whcd='3'"},
        {id:4,dataSet:"基本情况",dimension:"文化程度",measure:"大专",expression:"whcd='4'"},
        {id:5,dataSet:"基本情况",dimension:"文化程度",measure:"高中及以下",expression:"whcd<='5'"},
        {id:6,dataSet:"基本情况",dimension:"职务等级",measure:"军职以上",expression:"zwdj<='5'"},
        {id:7,dataSet:"基本情况",dimension:"职务等级",measure:"师职",expression:"zwdj in ('7','6')"},
        {id:8,dataSet:"基本情况",dimension:"职务等级",measure:"团职",expression:"zwdj in ('9','8')"},
        {id:9,dataSet:"基本情况",dimension:"职务等级",measure:"营职以下",expression:"zwdj >= '10'"},
    ],
    colInfos:[
        { name: "id", displayName: "序号", size: 40 },
        { name: "dataSet", displayName: "数据集", size: 100 },
        { name: "dimension", displayName: "维度", size: 80 },
        { name: "measure", displayName: "测量", size: 80 },
        { name: "expression", displayName: "表达式", size: 200 }
    ]
}

export const StatDimensionTree =
    [
        {
            "code": "jbqk",
            "name": "基本情况",
            children: [
                {
                    "code": "jbqk.whcd",
                    "name": "文化程度",
                    "value": "jbqk.whcd",
                    children: [
                        {
                            "code": "jbqk.whcd.bs",
                            "name": "博士"
                        },{
                            "code": "jbqk.whcd.ss",
                            "name": "硕士"
                        },{
                            "code": "jbqk.whcd.bk",
                            "name": "本科"
                        },{
                            "code": "jbqk.whcd.dzyx",
                            "name": "大专以下"
                        }
                    ]
                },{
                    "code": "jbqk.zwdj",
                    "name": "职务等级",
                    children: [
                        {
                            "code": "jbqk.zwdj.jzys",
                            "name": "军职以上"
                        },{
                            "code": "jbqk.zwdj.ss",
                            "name": "师职"
                        },{
                            "code": "jbqk.zwdj.tz",
                            "name": "团职"
                        },{
                            "code": "jbqk.zwdj.yzyx",
                            "name": "营职以下"
                        }
                    ]
                }
            ]
        }
    ]
//统计指标定义
export const StatIndex = {
    data:[
        {id:1,dataSet:"基本情况",index:"数量",expression:"count(*)"},
        {id:2,dataSet:"基本情况",index:"平均年龄",expression:"avg((date-chsj)/365)"},
    ],
    colInfos:[
        { name: "id", displayName: "序号", size: 40 },
        { name: "dataSet", displayName: "数据集", size: 100 },
        { name: "index", displayName: "指标", size: 80 },
        { name: "expression", displayName: "表达式", size: 200 }
    ]
}
