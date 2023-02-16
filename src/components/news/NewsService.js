import AxiosInstance from "../../helpers/Axiosinstance";

export const getAll = async () => {
    const response = await AxiosInstance().get('/articles');
    return response;
}

export const getOneNews = async (_id) => {
    const response = await AxiosInstance().get(`/articles/${_id}/detail`);
    return response;
}
export const search = async (keyword) => {
    const response = await AxiosInstance().get(`/articles/search?title=${keyword}`);
    return response;
}

export const addNews = async (title, content, image) => {
    const data = {
        title : title, 
        content: content,
        image: image,
    }
    const response = await AxiosInstance().post('/articles', data);
    return response;
}

export const uploadImage = async (image) => {
    const response = await AxiosInstance('multipart/form-data').post('/media/upload', image);
    return response;
}

export const updateProfile = async (name, address, phone, avatar) => {
    const data = {
        name : name, 
        address: address,
        phone: phone,
        avatar: avatar,
    }
    const response = await AxiosInstance().post('/users/update-profile/', data);
    return response;
}


