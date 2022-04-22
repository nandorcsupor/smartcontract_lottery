import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home"
import { Bouncer } from './pages/Bounce/Bouncer';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Bouncer />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
