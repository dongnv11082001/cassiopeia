import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import "./App.css";

// pages & components
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Homepage/Home";
import FlowerPage from "./pages/FlowerPage/FlowerPage";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <AppContainer>
                <Header/>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/flowers/:id" element={<FlowerPage/>}/>
                </Routes>
                <Footer/>
            </AppContainer>
        </div>
    );
}

export default App;

const AppContainer = styled.div``;
