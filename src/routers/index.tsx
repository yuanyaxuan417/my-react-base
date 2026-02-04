import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/home/index";
import Login from "@/pages/login/index";
import LayoutMain from "@/pages/layout/index";
import Chart from "@/pages/chart/index";

const Router = [
  { path: '/login', name: 'Login', component: <Login />, auth: false, layout: false },
  { path: '/', name: 'main', component: <LayoutMain />, auth: true, layout: true },
  { path: '/home', name: 'home', component: <Home />, auth: true, layout: true },
  { path: '/chart', name: 'chart', component: <Chart />, auth: true, layout: true },
  // {
  //   path: "/",
  //   element: <LayoutMain />,
  //   children: [
  //     {
  //       index: true, // 默认子路由，访问 "/layout" 时显示
  //       element: <Home />,
  //     },
  //     {
  //       path: "home", // 访问 "/layout/home"
  //       element: <Home />,
  //     },
  //     {
  //       path: "chart", // 访问 "/layout/chart"
  //       element: <Chart />,
  //     },
  //     // 可以继续添加其他子路由
  //   ],
  // },
  // {
  //   path: "/home",
  //   element: <Home />,
  // },
];

export default Router;