import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Stack from './Stack';
import WebApp from './pages/WebApp';
import ItService from './pages/ItService';
import MobileApp from './pages/MobileApp';
import Blockchain from './pages/Blockchain';
import Software from './pages/Software';
import DataScience from './pages/DataScience';
import Abhi from './portfolio/abhishek/Abhi';
import Amar from './portfolio/amar/Amar';
import Sushama from './portfolio/sushama/Sushama';
import Shubham from './portfolio/shubham/Shubham';
import Neha from './portfolio/neha/Neha';
import WorkInProgress from './components/WorkInProgress';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/progress' element={<WorkInProgress />} />
        <Route path="/" element={<Stack />} />
        <Route path="/webapp" element={<WebApp />} />
        <Route path="/itservice" element={<ItService />} />
        <Route path="/mobileapp" element={<MobileApp />} />
        <Route path="/blockchain" element={<Blockchain />} />
        <Route path="/software" element={<Software />} />
        <Route path="/ds" element={<DataScience />} />
        <Route path="/portfolio5" element={<Abhi />} />
        <Route path="/portfolio4" element={<Amar />} />
        <Route path="/portfolio1" element={<Neha />} />
        <Route path="/portfolio2" element={<Sushama />} />
        <Route path="/portfolio3" element={<Shubham />} />

       





      </Routes>
    </BrowserRouter>
  );
};

export default App;
