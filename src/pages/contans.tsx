import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import React from 'react';


const sideMenu: any[] = [
  { key: '1', icon: <PieChartOutlined />, label: '首页'},
  {
    key: 'sub1',
    label: '图表页面',
    icon: <MailOutlined />,
    children: [
      { key: '2', label: 'Option 1' },
      { key: '3', label: 'Option 2' },
      { key: '4', label: 'Option 3' },
      { key: '5', label: 'Option 4' },
    ],
  },
  {
    key: 'sub2',
    label: '图标页面',
    icon: <AppstoreOutlined />,
    children: [
      { key: '6', label: 'Option 1' },
      { key: '7', label: 'Option 2' },
      {
        key: 'sub3',
        label: 'Submenu',
        children: [
          { key: '8', label: 'Option 3' },
          { key: '9', label: 'Option 4' },
        ],
      },
    ],
  },
];

export { sideMenu };