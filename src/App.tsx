import React from 'react';
import logo from './logo.svg';
import { Grid, Box, styled, Typography } from '@mui/material';
import Footer from './molecules/footer';
import HomeSlider from './molecules/homeSlider';
import Navbar from './molecules/navbar';
import PhotoGrid from './molecules/photogrid';
import image13 from "../src/stories/assets/image 13.svg";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ServicesPage from './organisms/servicesPage';
import Homepage from './organisms/home';
import ContactUsPage from './organisms/contactUsPage';
import ErrorPage from './organisms/errorPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contactus" element={<ContactUsPage />} />
        <Route element={<ErrorPage heading={'OOPS! PAGE NOT FOUND'} info={'Sorry, the page you are looking for doesn’t exist.'} />} />
      </Routes>
    </Router>
  );
}
export default App;
