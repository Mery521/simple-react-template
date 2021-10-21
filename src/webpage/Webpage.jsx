import { useLocation } from "react-router";
import Header from "../components/header/Header";
import Movies from "../components/movies/Movies";
import "./webpage.css";

export default function Homepage() {
    const location = useLocation();
    console.log(location);
    return (
        <>
            <Header/>
            <div className="webpage">
                <Movies/>
            </div>
        </>
    );
}