import {React, useState} from "react";

import { App } from "antd";
import CTANew from '../components/CTA new/CTANew';
import Carousel from "../components/Carousel";
import { CarouselImages } from "../strings";
import Footer from '../components/Footer/Footer';
import HeroSectionAboutUs from "../components/HeroSectionAboutUs";
import NavigationBar from "../components/Navbar";
import Testimonial from "../components/Testimonials/Testimonials";

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
            <HeroSectionAboutUs/>

            <Carousel imagesarray={CarouselImages} />
            
            <Testimonial />
            <CTANew />
            <Footer />


        </div>
      </App>
    </>
  );
};

export default page;
