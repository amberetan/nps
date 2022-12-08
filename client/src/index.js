import React from "react"
// import ReactDOM from "react-dom"
import { createRoot } from 'react-dom/client';
import {NpsContextProvider} from "./context/npsContext"
import {UserProvider} from "./context/UserContext"
import {BrowserRouter} from "react-router-dom"
import "./styles.css"
import App from "./App"

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript

root.render(
    <UserProvider>
        <NpsContextProvider>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </NpsContextProvider>
    </UserProvider>
)

