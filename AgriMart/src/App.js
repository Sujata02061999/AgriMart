import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Component/Registration/registration";
import HomeLayout from "./HomeLayout/HomeLayout";
import Navbar from "./Component/Navbar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<HomeLayout/>} />

          <Route path="/registration" element={<Registration/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
