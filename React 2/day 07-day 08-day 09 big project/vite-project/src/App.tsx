import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRL from "./Home/HomeRL";
import Register from "./components/Register";
import LogIn from "./components/LogIn";
import MainPage from "./Main/MainPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeRL />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<LogIn />}/>
        <Route path="/main" element={<MainPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;