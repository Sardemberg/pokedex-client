import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import FormLogin from "./pages/FormLogin"
import FormRegister from './pages/FormRegister';
import PokemonsList from "./pages/PokemonsList";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<FormLogin/>}/>
                    <Route path='/register' element={<FormRegister/>}/>
                    <Route path='/pokemons' element={<PokemonsList/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
