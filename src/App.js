import logo from './logo.svg';
import './App.css';
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Landing from './component/Landing';
import Connect from './component/Connect';

// import your route components too

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/connect' element={<Connect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
