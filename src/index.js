import React from 'react';
import ReactDOM from 'react-dom';
// import App from './Sample';
import Stat from './stat'
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css';
import GC from '@grapecity/spread-sheets';
import '@grapecity/spread-sheets-resources-zh';

GC.Spread.Common.CultureManager.culture("zh-cn");

ReactDOM.render(<Stat />, document.getElementById('root'));
