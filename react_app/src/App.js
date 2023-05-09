
import './App.css';
import Home from './Pages/Home/Home';
import Detail from './Pages/Detail/Detail';
import Profile from './Pages/Profile/Profile';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    
      <BrowserRouter>
        <Routes>
          <Route path={'/'} element={<Home/>}/>
          <Route path={'/:id'} element={<Detail/>}/>
          <Route path={'/profile'} element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    
  );
}

export default App;
