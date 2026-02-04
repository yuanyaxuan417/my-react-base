import React, { useState, useEffect } from 'react';
import { Menu } from 'antd';
import { sideMenu } from '@/pages/contans';
import { useNavigate, useLocation } from 'react-router-dom';
import type { MenuProps } from 'antd';

// 修改映射关系，使用相对路径
const MENU_ROUTE_MAP: Record<string, string> = {
  '1': '/home',  // 对应 Layout 下的 home 路由
  '2': '/home',
  '3': '/chart', // 对应 Layout 下的 chart 路由
};

const MenuList: React.FC = () => {
  const [currentKey, setCurrentKey] = useState('1');
  const navigate = useNavigate();
  const location = useLocation();

  // 根据当前路由自动选中对应的菜单项
  useEffect(() => {
    const { pathname } = location;
    console.log('当前路径:', pathname); // 调试用
    
    // 将路径反向映射到菜单key
    const targetEntry = Object.entries(MENU_ROUTE_MAP).find(
      ([, routePath]) => routePath === pathname
    );
    
    if (targetEntry) {
      const [key] = targetEntry;
      if (key !== currentKey) {
        setCurrentKey(key);
      }
    }
    
    // 如果是根路径或layout路径，默认选中home
    if (pathname === '/' || pathname === '/layout') {
      setCurrentKey('1');
    }
  }, [location, currentKey]);

  // 点击菜单
  const handleSiderClick: MenuProps["onClick"] = ({ key }) => {
    if (key === currentKey) return;
    
    setCurrentKey(key);
    
    const routePath = MENU_ROUTE_MAP[key];
    if (routePath) {
      navigate(routePath);
    }
  };

  return (
    <Menu
      mode="inline"
      selectedKeys={[currentKey]}
      defaultOpenKeys={sideMenu.map(item => item.key as string)}
      style={{ height: "100%", borderRight: "0" }}
      items={sideMenu}
      onClick={handleSiderClick}
    />
  );
};

export default MenuList;