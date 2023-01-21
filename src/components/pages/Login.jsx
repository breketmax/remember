import React, { useContext } from 'react';
import { AuthContext } from '../../context';
import MyButton from '../UI/button/MyButton';
import MyInput from '../UI/input/MyInput';

const Login = () => {
  const {isAuth,setIsAuth} = useContext(AuthContext)
  const login =  (e) =>{
    e.preventDefault();
    localStorage.setItem('auth','true')
    setIsAuth(true);
  }
  return (
    <div>
        <h1>Страница для логина</h1>
        <form onSubmit={login}>
          <MyInput type="text" placeholder="Введите логин"/>
          <MyInput type="password" placeholder="Введите праоль"/>
          <MyButton>Войти</MyButton>
        </form>
    </div>
  );
};

export default Login; 