import { App } from 'antd';
import CTASection from '../components/ctaSection';
import Carousel from '../components/carousel';
import { CarouselImages } from '../strings';
import FeaturesSection from '../components/featuresSection';
import HeroSection from '../components/heroSection';
import IntegrationSection from '../components/integrationSection';
import NavigationBar from "../components/navbar";
import VideoSection from '../components/videoSection';

const page = () => {
    return (
        <>
            <App>
                <div style = {{
                    overflowX : "hidden",
                    }}>
                    <NavigationBar/>
                    <HeroSection/>
                    <Carousel imagesarray={CarouselImages}/>
                    <IntegrationSection/>
                    <FeaturesSection/>
                    <CTASection/>
                    <VideoSection/>
                </div>
            </App>        
        </>
    )
}
export default page;