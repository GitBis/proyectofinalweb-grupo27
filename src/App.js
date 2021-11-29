
//import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';
import Main from './pages/Main/Main';
import Secondary from './pages/Secondary/Secondary';
import { HashRouter } from 'react-router-dom';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  return(
    <HashRouter>
    <Routes>
    <Route path="/" element = {<Navigate replace to = {"/login"}/>}/>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/main" element={<Main />} />
      <Route exact path="/secondary" element={<Secondary/>}/>
    </Routes>
  </HashRouter>

  );
  
}

export default App;
