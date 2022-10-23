import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

//导入通用样式
import './assets/styles/index.scss'
//解决移动端1px border: 1px solid #ccc 问题
import './assets/styles/hairline.scss'
ReactDOM.render(<App/>,document.getElementById('root'));
