import React, { useState, useEffect } from 'react';

const Chart = () => {
  const [state, setState] = useState(null); // 添加 useState 使用
  
  useEffect(() => {
    // 添加实际逻辑
    console.log('Component mounted');
  }, []);
  
  return (
    <div>
      2222  
    </div>
  );
};

export default Chart;