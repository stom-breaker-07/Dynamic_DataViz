import React from 'react';
import { Routes, Route } from "react-router-dom";

import Charts from './Charts';
import Home from './Pages/Home';
import ChartCompare from './ChartCompare';

const App = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Dynamic_DataViz/charts' element={<Charts />} />
            <Route path='/Dynamic_DataViz/compare' element={<ChartCompare />} />
        </Routes>
    );
};

export default App;
