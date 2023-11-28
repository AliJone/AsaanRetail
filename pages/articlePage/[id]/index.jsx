import { App } from "antd";
import withScrollAnimation from "../../../components/Animate/animate";
import HeroSectionIntegrationSection from "../../../components/HeroSectionIntegrationSection";
import NavigationBar from "../../../components/navbar";
import IntegrationMenu from "../../../components/IntegrationMenu/IntegrationMenu";
import FAQ from "../../../components/FAQ/FAQ";
import CTANew from "../../../components/CTA new/CTANew";
import Footer from "../../../components/Footer/Footer";
import ArticleMenu from "../../../components/ArticleMenu/ArticleMenu";
import ArticleMenuSingle from "../../../components/ArticleMenuSingle/ArticleMenuSingle";
import RelatedArticles from "../../../components/RelatedArticles/RelatedArticles";

const HeroSectionIntegrationSectionWithScroll = withScrollAnimation(HeroSectionIntegrationSection, "animate__fadeInUp");
const IntegrationMenuWithScroll = withScrollAnimation(IntegrationMenu, "animate__fadeInUp");
const FAQWithScroll = withScrollAnimation(FAQ, "animate__fadeInUp");
const CTANewWithScroll = withScrollAnimation(CTANew, "animate__fadeInUp");
const FooterWithScroll = withScrollAnimation(Footer, "animate__fadeIn");
const ArticleMenuWithScroll = withScrollAnimation(ArticleMenu, "animate__fadeIn");
const ArticleMenuSingleWithScroll = withScrollAnimation(ArticleMenuSingle, "animate__fadeIn");
const RelatedArticlesWithScroll = withScrollAnimation(RelatedArticles, "animate__fadeIn");


const page = () =>{
    return(
        <App>
            <div
            style={{
                overflowX: "hidden",
            }} 
            >
                <NavigationBar/>
                {/* <HeroSectionIntegrationSection/>
                <ArticleMenu/> */}
                {/* <FAQ /> */}
                <ArticleMenuSingle/>
                <RelatedArticles/>
                <CTANew />
                <Footer />
            </div>

        </App>
    )
}

export default page;