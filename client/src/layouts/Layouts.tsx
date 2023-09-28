import React from 'react';

// router 
import { Outlet } from 'react-router';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function Layouts() {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
    </>
  );
}

export default Layouts;