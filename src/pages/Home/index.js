import {React} from "react"
import {useNavigate} from "react-router-dom"
import Button from "../../components/Button"
import PixelTitle from "../../components/PixelTitle"
import "./index.css"

export default function Home(){
    const navigate = useNavigate();

    return(
        <div className="Home">
            <PixelTitle>
                POKEDEX
            </PixelTitle>
            <img src="pokedex.png" alt="pokedex.png"/>
            <div className="GroupButtons">
                <Button variant="primary" onClick={() => navigate("/login")}>
                    Login
                </Button>
                <Button variant={"outline-primary"} onClick={() => navigate("/register")}>
                    Registre-se
                </Button>
            </div>
        </div>
    )
}