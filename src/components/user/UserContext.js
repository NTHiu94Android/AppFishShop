
import React, { createContext, useState } from 'react'
import { ToastAndroid } from 'react-native'
import { register, login, logout } from './UserService';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const { children } = props;
  const [user, setUser] = useState(null);

  const registerUser = async (email, password, fullname) => {
    try {
      if (email === '' || password === '' || fullname === '') {
        ToastAndroid.show('Nhập đầy đủ thông tin', ToastAndroid.SHORT);
      } else if (password.length > 12 || password.length < 6) {
        ToastAndroid.show('Password từ 6 - 12 ký tự', ToastAndroid.SHORT);
      } else {
        const patternEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const checkEmail = patternEmail.test(email);
        if (!checkEmail) {
          ToastAndroid.show('Email khong dung dinh dang', ToastAndroid.SHORT);
          return;
        }
        ToastAndroid.show('Đăng ký thành công', ToastAndroid.SHORT);
        return true;
      }
      // const response = await register(email, password);
      // return !response.error;
    } catch (error) {
      console.log(error);
    }
  }

  const loginUser = async (email, password) => {
    if (email === 'admin@gmail.com' && password === 'admin') {
      const us = { email: email, password: password };
      setUser(us);
      ToastAndroid.show('Login successfully', ToastAndroid.SHORT);
      return;
    } else {
      if (email !== 'admin' || password !== 'admin') {
        ToastAndroid.show('Email or password is incorrect', ToastAndroid.SHORT);
        return;
      } else if (email === '' || password === '') {
        ToastAndroid.show('Email or password is not entered', ToastAndroid.SHORT);
        return;
      }
    }

    // try {
    //   console.log(username, password);
    //   const response = await login(username, password);
    //   //console.log("UserContext" + response);
    //   if (!response.error) {
    //     // const token = response.data.token;
    //     // await AsyncStorage.setItem('token', token);
    //     setUser(response);
    //     return true;
    //   }
    //   return false;
    // } catch (error) {
    //   console.log('Loi dang nhap exios: ' + error);
    // }
  }

  const logoutUser = async () => {
    try {
      const response = await logout();
      if (response.error) {
        return false;
      }
      await AsyncStorage.removeItem('token');
      setUser(null);
      return true;
    } catch (e) {
      console.log(e);
    }
  };


  return (
    <UserContext.Provider value={{ user, loginUser, registerUser }}>
      {children}
    </UserContext.Provider>
  )
}
