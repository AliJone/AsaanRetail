import {React, useState} from "react";

import { App } from "antd";

import withScrollAnimation from "../../components/Animate/animate";
import CTANew from '../../components/CTA new/CTANew';
import Carousel from "../../components/carousel";
import { CarouselImages } from "../../strings";
import Footer from '../../components/Footer/Footer';
import HeroSectionAboutUs from "../../components/HeroSectionAboutUs";
import NavigationBar from "../../components/navbar";
import Testimonial from "../../components/Testimonials/Testimonials";
import MeetThePack from "../../components/MeetThePack/MeetThePack";
import OurJourney from "../../components/OurJourney/OurJourney";
import TextNAnimation from "../../components/TextNAnimation/TextNAnimation";

const TextNAnimationWithScroll = withScrollAnimation(TextNAnimation, "animate__fadeIn");
const HeroSectionAboutUsWithScroll = withScrollAnimation(HeroSectionAboutUs, "animate__fadeInUp");
const MeetThePackWithScroll = withScrollAnimation(MeetThePack, "animate__fadeInUp");
const OurJourneyWithScroll = withScrollAnimation(OurJourney, "animate__fadeInUp");
const TestimonialWithScroll = withScrollAnimation(Testimonial, "animate__fadeInUp");
const CTANewWithScroll = withScrollAnimation(CTANew, "animate__fadeIn");
const FooterWithScroll = withScrollAnimation(Footer, "animate__fadeIn");
const CarouselWithScroll = withScrollAnimation(Carousel, "animate__fadeIn");

const page = () => {

  return (
    <>
      <App>
        <div
          style={{
            overflowX: "hidden",
          }}
        >
            <NavigationBar/>
            <HeroSectionAboutUs />
            <CarouselWithScroll imagesarray={CarouselImages} />
            <MeetThePackWithScroll />
            <OurJourneyWithScroll />
            <TextNAnimationWithScroll Title={"Let’s build together"} SubTitle={"Reach out to us today and let's explore how we can empower your business for a brighter future."} Animation={false} ButtonText={"Book a Demo"}/>
            <TestimonialWithScroll />
            <CTANewWithScroll />
            <FooterWithScroll />

        </div>
      </App>
    </>
  );
};

export default page;
