import { loginhttp } from "../http/http";
import LoginData from "../Screens/Login/Interface";

const login = (data: LoginData) => {
  return loginhttp.post<LoginData>(`signin`, data);
};
const forgetpassword = (data: LoginData) => {
  return loginhttp.post<LoginData>(`resetpassword`, data);
};
const loginServices = { login, forgetpassword };
export default loginServices;
