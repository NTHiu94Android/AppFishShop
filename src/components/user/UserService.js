
import AxiosInstance from "../../helpers/Axiosinstance";

// bất đồng bộ như đồng bộ
export const register = async (email, password) => {
    const body = {
        email: email,
        password: password
    }
    const response = await AxiosInstance().post('/users/register', body);
    return response;
}

export const login = async (username, password) => {
    const body = {
        username: username,
        password: password
    }
    const response = await AxiosInstance().post('/login', body);
    //console.log("UserService" + response);
    return response;
}

export const logout = async () => {
    const response = await AxiosInstance().get('/auth/logout');
    return response;
};