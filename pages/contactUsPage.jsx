import {React, useState} from "react";

import { App } from "antd";
import CTANew from '../components/CTA new/CTANew';
import Footer from '../components/Footer/Footer';
import HeroSectionContactUs from "../components/HeroSectionContactUs";
import NavigationBar from "../components/Navbar";

const page = () => {

  return (
    <>
      <App>
        <div
          style={{
            overflowX: "hidden",
          }}
        >
            <NavigationBar />
            <HeroSectionContactUs/>
            
            <CTANew />
            <Footer />


        </div>
      </App>
    </>
  );
};

export default page;
