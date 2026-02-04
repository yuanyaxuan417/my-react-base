import { useLocation, Route, Routes, Navigate } from 'react-router-dom';
import routerMap from './index';
import LayoutMain from '@/pages/layout';

const FrontendAuth = () => {
  const { pathname } = useLocation();
  const targetRouterConfig:any = routerMap?.find((item:any) => item.path === pathname);
  // 检查是否已登录
  const isLoggedIn = localStorage.getItem('token'); // 根据实际情况调整
  console.log("-------pathname",pathname,isLoggedIn);

  // 如果访问登录路径，直接显示登录页
  if (pathname === '/login') {
    const loginRoute = routerMap.find(item => item.name === 'Login');
    return <Routes><Route path="/login" element={loginRoute?.component} /></Routes>;
  }

  // 如果访问根路径且未登录，直接显示登录页
  if (pathname === '/' && !isLoggedIn) {
    const loginRoute = routerMap.find(item => item.name === 'Login');
    return <Routes><Route path="/" element={loginRoute?.component} /></Routes>;
  }

  // 如果未登录且访问需要认证的页面，重定向到登录页
  if (!isLoggedIn && targetRouterConfig?.auth) {
    return <Navigate to="/login" replace />;
  }

  // 如果已登录且访问登录页，重定向到主页
  if (isLoggedIn && pathname === '/') {
    return <Navigate to="/home" replace />;
  }
  return (
    <Routes>
      <Route
        path="/"
        element={<LayoutMain />}>
        <Route
          path={pathname}
          element={targetRouterConfig?.component}
        />
      </Route>
    </Routes>
  );
};
export default FrontendAuth;
