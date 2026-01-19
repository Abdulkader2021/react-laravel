export const apiUrl = 'http://localhost:8001/api/';
export const fileUrl = 'http://localhost:8001/';

export const token = () =>{
    const userInfo = localStorage.getItem('userInfo');
    const data = JSON.parse(userInfo);
    return data.token;
}