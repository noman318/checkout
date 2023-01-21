import http from '../http/http';
import LoginData from '../Interface/Login_interface';

const login=(data:LoginData)=>{
    return http.post<LoginData>(`signin`,data)
}
const forgetpassword=(data:LoginData)=>{
    return http.post<LoginData>(`resetpassword`,data)
}
const loginServices={login,forgetpassword}
export default loginServices;