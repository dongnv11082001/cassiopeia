import { Route, Routes } from "react-router-dom";
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
import GiftPage from "./pages/GiftPage/GiftPage";
import DiscountsPage from "./pages/DiscountsPage/DiscountsPage";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import About from "./pages/About/About";

function App() {
  return (
    <>
      <AppContainer>
        <div className={"content"}>
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/flowers" element={<FlowerPage />} />
            <Route path="/plants" element={<PlantPage />} />
            <Route path="/flowers/:id" element={<ProductPage />} />
            <Route path={"/gifts"} element={<GiftPage />} />
            <Route path={"/discounts"} element={<DiscountsPage />} />
            <Route path={"/about-us"} element={<About />} />
            <Route path={"/checkout"} element={<CheckoutPage />} />
          </Routes>
        </div>
      </AppContainer>
      <Footer />
    </>
  );
}

export default App;

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  & .content {
    max-width: 1160px;
    width: 100%;
  }
`;
