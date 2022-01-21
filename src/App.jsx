import axios from "axios";
import {useState, useEffect} from "react";

import {Header} from "./components/Header";
import {Main} from './components/Main';
// import {Controls} from "./components/Controls";
// import {ALL_COUNTRIES, searchByCountry} from './config';
// import {List} from './components/List';
// import {Card} from './components/Card';
import {HomePage} from './pages/HomePage';
import {Details} from './pages/Details';
import {NotFound} from './pages/NotFound';
import { Routes, Route } from "react-router-dom";

function App() {

    return (
        <>
            <Header/>
            <Main>
                <Routes>
                    <Route path="/" element={<HomePage/>}>
                    </Route>
                    <Route path="/country/:name" element={<Details />} />
                    <Route path="*" element={<NotFound/> }/>
                </Routes>
            </Main>
        </>
    );
}

export default App;
