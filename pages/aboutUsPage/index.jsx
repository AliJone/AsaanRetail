import {React, useState} from "react";

import { App } from "antd";
import CTANew from '../../components/CTA new/CTANew';
import Carousel from "../../components/Carousel";
import { CarouselImages } from "../../strings";
import Footer from '../../components/Footer/Footer';
import HeroSectionAboutUs from "../../components/HeroSectionAboutUs";
import NavigationBar from "../../components/Navbar";
import Testimonial from "../../components/Testimonials/Testimonials";
import MeetThePack from "../../components/MeetThePack/MeetThePack";
import OurJourney from "../../components/OurJourney/OurJourney";
import TextNAnimation from "../../components/TextNAnimation/TextNAnimation";

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
            <MeetThePack />
            <OurJourney />
            <TextNAnimation Title={"Let’s build together"} SubTitle={"Reach out to us today and let's explore how we can empower your business for a brighter future."} Animation={false} ButtonText={"Book a Demo"}/>
            <Testimonial />
            <CTANew />
            <Footer />


        </div>
      </App>
    </>
  );
};

export default page;
