import { BrowserRouter , Routes , Route } from "react-router-dom";
import PrimarySearchAppBar from './Components/Navigation';
import  './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PrimarySearchAppBar />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
