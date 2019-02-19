//统计数据集定义
import {Button} from "antd";
import React from "react";

export const StatDataSets = [
    {id:1,name:"基本情况",api:"stat/datasets/jbqk"},
    {id:2,name:"编制情况",api:"stat/datasets/bzqk"},
]


//统计维度定义
export const StatDimensions = [
    {id:1,name:"文化程度"},
    {id:2,name:"职务等级"},
    {id:3,name:"军衔等级"},
    {id:4,name:"在编情况"},
    {id:5,name:"编配情况"},
]

//统计测量
export const StatMeasures = [
    {id:1,dimensionID:1,name:"博士",expression:"whcd='1'"},
    {id:2,dimensionID:1,name:"硕士",expression:"whcd='2'"},
    {id:3,dimensionID:1,name:"本科",expression:"whcd='3'"},
    {id:4,dimensionID:1,name:"大专",expression:"whcd='4'"},
    {id:5,dimensionID:1,name:"高中及以下",expression:"whcd<='5'"},
    {id:6,dimensionID:2,name:"军职以上",expression:"zwdj<='5'"},
    {id:7,dimensionID:2,name:"师职",expression:"zwdj in ('7','6')"},
    {id:8,dimensionID:2,name:"团职",expression:"zwdj in ('9','8')"},
    {id:9,dimensionID:2,name:"营职以下",expression:"zwdj >= '10'"},
    {id:10,dimensionID:3,name:"将官",expression:"jxdj in ('11','12','13','14')"},
    {id:11,dimensionID:3,name:"校官",expression:"jxdj in ('21','22','23','24')"},
    {id:12,dimensionID:3,name:"尉官",expression:"jxdj in ('31','32','33','34')"},
    {id:13,dimensionID:4,name:"在编",expression:"zbqk in ('11','12')"},
    {id:14,dimensionID:4,name:"超编",expression:"zbqk in ('21','22'"},
    {id:15,dimensionID:5,name:"现编",expression:"zbqk in ('11','12')"},
    {id:16,dimensionID:5,name:"缺编",expression:"zbqk in ('21','22'"},
]

export const StatDataSetDimensions = [
    {id:1,dataSetId:1,dimensionID:1},
    {id:2,dataSetId:1,dimensionID:2},
    {id:3,dataSetId:1,dimensionID:3},
    {id:4,dataSetId:1,dimensionID:4},
    {id:5,dataSetId:2,dimensionID:2},
    {id:6,dataSetId:2,dimensionID:5},
]

//统计指标定义
export const StatIndexs = [
    {id:1,name:"数量",expression:"count(*)"},
    {id:2,name:"平均年龄",expression:"avg((date-chsj)/365)"},
]

export const StatDataSetIndexs = [
    {id:1,dataSetId:1,indexId:1},
    {id:2,dataSetId:1,indexId:2},
    {id:3,dataSetId:2,indexId:1},
]

export const StatDimensionTree =
    [
        {
            "code": "jbqk",
            "name": "基本情况",
            children: [
                {
                    "code": "jbqk.whcd",
                    "name": "文化程度",
                    children: [
                        {
                            "code": "jbqk.whcd.bs",
                            "name": "博士",
                            "expression":"whcd='1'"
                        },{
                            "code": "jbqk.whcd.ss",
                            "name": "硕士",
                            "expression":"whcd='2'"
                        },{
                            "code": "jbqk.whcd.bk",
                            "name": "本科",
                            "expression":"whcd='3'"
                        },{
                            "code": "jbqk.whcd.dzyx",
                            "name": "大专以下",
                            "expression":"whcd>='4'"
                        }
                    ]
                },{
                    "code": "jbqk.zwdj",
                    "name": "职务等级",
                    children: [
                        {
                            "code": "jbqk.zwdj.jzys",
                            "name": "军职以上",
                            "expression":"zwdj<='5'"
                        },{
                            "code": "jbqk.zwdj.ss",
                            "name": "师职",
                            "expression":"zwdj='6'"
                        },{
                            "code": "jbqk.zwdj.tz",
                            "name": "团职",
                            "expression":"zwdj='7'"
                        },{
                            "code": "jbqk.zwdj.yzyx",
                            "name": "营职以下",
                            "expression":"zwdj>='8'"
                        }
                    ]
                },{
                    "code": "jbqk.jxdj",
                    "name": "军衔等级",
                    children: [
                        {
                            "code": "jbqk.jxdj.jj",
                            "name": "将军",
                            "expression":"jxdj in ('11','12','13','14')"
                        },{
                            "code": "jbqk.jxdj.xg",
                            "name": "校官",
                            "expression":"jxdj in ('21','22','23','24')"
                        },{
                            "code": "jbqk.jxdj.wg",
                            "name": "尉官",
                            "expression":"jxdj in ('31','32','33','34')"
                        }
                    ]
                }
            ]
        }
    ]

export const StatIndexTree  = [
    {
        "code": "jbqk",
        "name": "基本情况",
        children: [
            {
                "code": "jbqk.count",
                "name": "数量",
                "expression": "count(*)"
            },{
                "code": "jbqk.pjnl",
                "name": "平均年龄",
                "expression": "avg((date-chsj)/365)"
            }
        ]
    }
]
