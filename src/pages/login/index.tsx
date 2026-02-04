import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './index.module.css'; // 注意：CSS Modules 文件通常命名为 .module.css
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const navigate = useNavigate();
  const [fromInfo, setFromInfo] = useState({} as any);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // 表单验证规则
  const validateForm = () => {
  };

  // 处理输入变化
  const handleInputChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  // 处理表单提交
  const handleSubmit = async (e:any) => {
    e.preventDefault();
    try {
      localStorage.setItem('token','099')
      navigate('/');
    } catch (error) {
    } finally {
    }
  };

  // 页面加载时检查是否有保存的登录信息
  useEffect(() => {
    const savedEmail = localStorage.getItem('remembered_email');
    if (savedEmail) {
      setFormData(prev => ({
        ...prev,
        email: savedEmail,
        rememberMe: true
      }));
    }
  }, []);

  // 记住邮箱功能
  useEffect(() => {
    if (formData.rememberMe && formData.email) {
      localStorage.setItem('remembered_email', formData.email);
    } else {
      localStorage.removeItem('remembered_email');
    }
  }, [formData.rememberMe, formData.email]);

  // 处理社交登录（示例）
  const handleSocialLogin = (provider:any)=> {
    window.location.href = `/api/auth/${provider}`;
  };

  // 重置密码
  const handleForgotPassword = () => {
    console.log('忘记密码');
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.loginTitle}>用户登录</div>
        
        <form className={styles.loginForm}>
          
          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>邮箱地址</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`${styles.formControl} ${fromInfo.email ? styles.isInvalid : ''}`}
              placeholder="请输入邮箱"
              disabled={isSubmitting}
            />
            {fromInfo.email && (
              <div className={styles.invalidFeedback}>{fromInfo.email}</div>
            )}
          </div>
          
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>密码</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`${styles.formControl} ${fromInfo.password ? styles.isInvalid : ''}`}
              placeholder="请输入密码"
              disabled={isSubmitting}
            />
            {fromInfo.password && (
              <div className={styles.invalidFeedback}>{fromInfo.password}</div>
            )}
          </div>
          
          <div className={styles.formOptions}>
            <div className={styles.formCheck}>
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleInputChange}
                disabled={isSubmitting}
                className={styles.checkbox}
              />
              <label htmlFor="rememberMe" className={styles.checkboxLabel}>
                记住我
              </label>
            </div>
            
            <button
              type="button"
              className={styles.btnLink}
              onClick={handleForgotPassword}
              disabled={isSubmitting}
            >
              忘记密码？
            </button>
          </div>
          
          <Button
            onClick={handleSubmit}
            className={`${styles.btn} ${styles.btnPrimary} ${styles.btnBlock}`}
            disabled={isSubmitting || isLoading}
          >
            {isSubmitting ? '登录中...' : '登录'}
          </Button>
        </form>
        
        <div className={styles.loginFooter}>
          <span>还没有账户？</span>
          <a href="/register" className={styles.btnLink}>立即注册</a>
        </div>
      </div>
    </div>
  );
};

export default Login;