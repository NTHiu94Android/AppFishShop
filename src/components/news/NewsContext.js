
import React, { createContext, useState } from 'react'

import { getAll, search, addNews, uploadImage, updateProfile, getOneNews } from './NewsService';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
  const { children } = props;
  const [news, setNews] = useState([]);
  const [searchNews, setSearchNews] = useState([]);
  const [oneNews, setOneNews] = useState(null);
  const [image, setImage] = useState("https://9mobi.vn/cf/images/2015/03/nkk/hinh-anh-dep-1.jpg");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imgProfile, setImgProfile] = useState(" https://fpoly-hcm.herokuapp.com/uploads/1666272377837-rn_image_picker_lib_temp_492b2de4-b060-45d3-b5df-d4b8da006880.jpg");
  const [name, setname] = useState("");
  const [phone, setphone] = useState("");

  const onGetOneNews = async (_id) => {
    try {
      const response = await getOneNews(_id);
      setOneNews(response.data[0]);
      console.log("NewsContext.js: ", response.data[0]);
      setImage(response.data[0].image);
      setTitle(response.data[0].title);
      setContent(response.data[0].content);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
  const onGetAll = async () => {
    try {
      const response = await getAll();
      setNews(response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  const onSearch = async (keyword) => {
    try {
      const response = await search(keyword);
      setSearchNews(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onAddNews = async (title, content, image) => {
    try {
      const response = await addNews(title, content, image);
      return !response.error;
    } catch (error) {
      console.log(`error addnew context ${error}`);
    }
  };

  const onUploadImage = async (image) => {
    try {
      const response = await uploadImage(image);
      console.log("OnUploadImage: ", response);
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  const onUpdateProfile = async (name, address, phone, avatar) => {
    try {
      const response = await updateProfile(name, address, phone, avatar);
      console.log("Update profile: ", response);
      setImgProfile(avatar);
      setname(name);
      setphone(phone);
      return response;
    } catch (error) {
      console.log("Update profile: ", error);
    }
  }

  return (
    <NewsContext.Provider value={{ news, onGetAll, searchNews, 
            onSearch, onAddNews, onUploadImage, onUpdateProfile, 
            oneNews, onGetOneNews, image, title, content, imgProfile, name, phone }}>
      {children}
    </NewsContext.Provider>
  )
}
