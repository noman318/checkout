import { LoginPage } from "./Screens/Login/Login";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { ForgotPassword } from "./Screens/Login/ForgotPassword";
import { ResetPassword } from "./Screens/Login/ResetPassword";
import Home from './Screens/Home';
import NavBars from './components/NavBars';

function App() {
  return (
    <>
    <Router>
    <NavBars/>
      <Routes>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/forgotpassword" element={<ForgotPassword />}/>
        <Route path='/' element={<Home/>}/>
        <Route path="/resetpassword" element={<ResetPassword />}/>
      </Routes>
    </Router>
    {/* <LoginPage /> */}
    </>
  );
}

export default App;
