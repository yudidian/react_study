import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import zhCN from 'antd/locale/zh_CN';
import { ConfigProvider } from 'antd';
import 'antd/dist/reset.css';
import {Provider} from "react-redux"
import store from "@/views/storeTookit";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <Provider store={store}>
     <ConfigProvider locale={zhCN}>
       <App />
     </ConfigProvider>
   </Provider>
);

reportWebVitals();
