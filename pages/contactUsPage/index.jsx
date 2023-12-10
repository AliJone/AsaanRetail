import { React, useState } from "react";

import { App } from "antd";
import CTANew from "../../components/CTA new/CTANew";
import Footer from "../../components/Footer/Footer";
import HeroSectionContactUs from "../../components/HeroSectionContactUs";
import NavigationBar from "../../components/navbar";
import withScrollAnimation from "../../components/Animate/animate";

const HeroSectionContactUsWithScroll = withScrollAnimation(
  HeroSectionContactUs,
  "animate__fadeInUp"
);

const CTANewWithScroll = withScrollAnimation(CTANew, "animate__fadeIn");

const FooterWithScroll = withScrollAnimation(Footer, "animate__fadeIn");

const page = () => {
  return (
    <>
      <App>
        <div
          style={{
            overflowX: "hidden",
            scrollBehavior: "smooth",
          }}
        >
          <NavigationBar />
          <HeroSectionContactUs />

          <CTANewWithScroll />
          <FooterWithScroll />
        </div>
      </App>
    </>
  );
};

export default page;
