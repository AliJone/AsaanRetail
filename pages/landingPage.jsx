import { CarouselImages, useCaseSection1Text, useCaseSection2Text } from '../strings';

import { App } from 'antd';
import CTA from '../components/CTA/CTA';
import CTASection from '../components/ctaSection';
import Carousel from '../components/carousel';
import FAQ from '../components/FAQ/FAQ';
import FeaturesSection from '../components/featuresSection';
import FeaturesV2 from '../components/featuresV2';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/heroSection';
import IntegrationSection from '../components/integrationSection';
import NavigationBar from "../components/navbar";
import UseCaseSection1 from '../components/usecaseSection1';
import UseCaseSection2 from '../components/usecaseSection2';
import VideoSection from '../components/videoSection';
import Testimonials from '../components/Testimonials/Testimonials';
import CTANew from '../components/CTA new/CTANew';
import ThroughLense from '../components/ThroughLense/ThroughLense';

const page = () => {
    return (
        <>
            <App>
                <div style={{
                    overflowX: "hidden",
                    
                }}>
                    {/* <NavigationBar/>
                    <HeroSection />
                    <Carousel imagesarray={CarouselImages} />
                    <IntegrationSection />
                    <FeaturesSection />
                    <CTASection />
                    <VideoSection /> */}

                    <FeaturesV2/>
                    {/* <UseCaseSection1 Title={useCaseSection1Text.Title} image={useCaseSection1Text.image} subTitle={useCaseSection1Text.subTitle} options={useCaseSection1Text.items} />
                    <UseCaseSection2 Title={useCaseSection2Text.Title} image={useCaseSection2Text.image} subTitle={useCaseSection2Text.subTitle} options={useCaseSection2Text.items} /> */}
                    <Testimonials />
                    <ThroughLense />
                    <FAQ />
                    <CTANew />
                    {/* <CTA /> */}
                    <Footer />
                </div>
            </App>
        </>
    )
}
export default page;