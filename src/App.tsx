import React from 'react';
import './App.css';
// import Router from "./routers/index";
import { RouterProvider } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { BrowserRouter as Router } from 'react-router-dom';
import FrontendAuth from './routers/FrontendAuth';


const App: React.FC = () => {
  return (
    <ConfigProvider locale={zhCN}>
      <div className="App">
        {/* <RouterProvider router={Router} /> */}
        <Router>
          <FrontendAuth />
        </Router>
      </div>
    </ConfigProvider>
  )
}

export default App