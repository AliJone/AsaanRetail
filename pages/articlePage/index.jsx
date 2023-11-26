import { App } from "antd";
import HeroSectionIntegrationSection from "../../components/HeroSectionIntegrationSection";
import HeroSectionArticle from "../../components/HeroSectionArticles";
import NavigationBar from "../../components/navbar";
import IntegrationMenu from "../../components/IntegrationMenu/IntegrationMenu";
import FAQ from "../../components/FAQ/FAQ";
import CTANew from "../../components/CTA new/CTANew";
import Footer from "../../components/Footer/Footer";
import ArticleMenu from "../../components/ArticleMenu/ArticleMenu";

const page = () =>{
    return(
        <App>
            <div
            style={{
                overflowX: "hidden",
            }} 
            >
                <NavigationBar/>

                <HeroSectionArticle/>
                
                <ArticleMenu/>
                {/* <FAQ /> */}
                <CTANew />
                <Footer />
            </div>

        </App>
    )
}

export default page;