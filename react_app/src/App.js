import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import Main from "./Pages/Main/Main";
import Profile from "./Pages/Profile/Profile"

export default function App() {
  return (
    <BrowserRouter>
      <div id="login" className="flex flex-col h-screen justify-between">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/pokemon"} element={<Main />} />
          <Route path={"/pokemon/:id"} element={<Detail />} />
          <Route path={"/Profile"} element={<Profile/>}/>
        </Routes>

        
      </div>
    </BrowserRouter>
  );
}
