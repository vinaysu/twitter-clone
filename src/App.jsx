import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";
import Protected from "./Protected";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Protected Components={HomePage} />}></Route>
      <Route path="/signin" element={<LoginPage />} />
      <Route path="/signup" element={<RegisterPage />} />
    </Routes>
  );
}

export default App;
