import {Route, Routes} from "react-router-dom";
import styled from "styled-components";
import "./App.css";

// pages & components
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Homepage/Home";
import FlowerPage from "./pages/FlowerPage/FlowerPage";
import Footer from "./components/Footer/Footer";
import PlantPage from "./pages/PlantPage/PlantPage";
import ProductPage from "./pages/ProductPage/ProductPage";

function App() {
    return (
        <div>
            <AppContainer>
                <div>
                    <Header/>
                    <Navbar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/flowers" element={<FlowerPage/>}/>
                        <Route path='/plants' element={<PlantPage/>}/>
                        <Route path='/flowers/:id' element={<ProductPage/>}/>
                    </Routes>
                </div>
            </AppContainer>
            <Footer/>
        </div>
    );
}

export default App;

const AppContainer = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
`;
