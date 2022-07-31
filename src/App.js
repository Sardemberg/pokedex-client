import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import FormLogin from "./pages/FormLogin"
import FormRegister from './pages/FormRegister';
import FormLoginNew from './pages/FormLoginNew';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<FormLogin />} />
          <Route path='/login_new' element={<FormLoginNew />} />
          <Route path='/register' element={<FormRegister />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
