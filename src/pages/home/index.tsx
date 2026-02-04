import { Button } from 'antd';
import React, { useState, useEffect } from 'react';
import { getHomeList } from "@/api/homeApi";

const Home = () => {
  const [state, setState] = useState(null); // 添加 useState 使用

  const getHomeData = async() => { 
    await getHomeList({}).then((res:any) => {
      console.log("=--==-====",res);
    });
  }
  useEffect(() => {
    // 添加实际逻辑
  }, []);
  
  return (
    <div>
      home page 
      <Button onClick={() => getHomeData()}>000</Button>
    </div>
  );
};

export default Home;