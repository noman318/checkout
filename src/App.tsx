import { LoginPage } from "./Screens/Login/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Screens/Home/Home";
import { ThemeProvider } from "@mui/material/styles";
import NavBars from "./components/NavBars";
import { theme } from "./Theme/theme";
import { ForgotPassword } from "./Screens/ForgotPassword/ForgotPassword";
import { ResetPassword } from "./Screens/ResetPassword/ResetPassword";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router>
          <NavBars />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/forgotpassword" element={<ForgotPassword />} />
            <Route path="/" element={<Home />} />
            <Route path="/resetpassword" element={<ResetPassword />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
