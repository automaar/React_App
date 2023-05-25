import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Detail from "./Pages/Detail/Detail";
import Main from "./Pages/Profile/Main";

export default function App() {
  return (
    <BrowserRouter>
      <div id="login" className="flex flex-col h-screen justify-between">
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/pokemon"} element={<Main />} />
          <Route path={"/pokemon/:id"} element={<Detail />} />
        </Routes>

        
      </div>
    </BrowserRouter>
  );
}
