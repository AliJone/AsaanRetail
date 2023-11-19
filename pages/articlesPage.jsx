import {React, useState} from "react";

import { App } from "antd";
import CTANew from '../components/CTA new/CTANew';
import Footer from '../components/Footer/Footer';
import HeroSectionArticle from "../components/HeroSectionArticles";
import NavigationBar from "../components/Navbar";

// import HeroSectionArticles from "../components/HeroSectionContactUs";


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
            <HeroSectionArticle/>
            
            
            <CTANew />
            <Footer />


        </div>
      </App>
    </>
  );
};

export default page;
