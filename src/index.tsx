import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {BrowserRouter} from "react-router-dom";
import {StoreContextProvider} from "./context/StoreContext";

ReactDOM.render(
    // <React.StrictMode>
    <StoreContextProvider>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StoreContextProvider>,
    // </React.StrictMode>,
    document.getElementById("root")
)
;
