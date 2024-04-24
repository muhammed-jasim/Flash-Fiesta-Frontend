import { BrowserRouter , Routes , Route } from "react-router-dom";
import  './App.css';
import Signup from '../src/Pages/Signup.js';
import Home from "./Pages/Home.js";
import Layout from "./Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="navigation" element={<Layout />}/>
        <Route path="signup" element={<Signup />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

