import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import FormLogin from "./pages/FormLogin"
import FormRegister from './pages/FormRegister';
import AuthContextProvider from "./contexts/authContext"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<FormLogin />} />
          <Route path='/register' element={<FormRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
