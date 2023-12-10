import { App } from "antd";
import ArticleMenu from "../../components/ArticleMenu/ArticleMenu";
import CTANew from "../../components/CTA new/CTANew";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import HeroSectionArticle from "../../components/HeroSectionArticles";
import IntegrationMenu from "../../components/IntegrationMenu/IntegrationMenu";
import NavigationBar from "../../components/navbar";

const page = () => {
  return (
    <App>
      <div
        style={{
          overflowX: "hidden",
        }}
      >
        <NavigationBar />

        <HeroSectionArticle />

        <ArticleMenu />
        
        <CTANew />
        <Footer />
      </div>
    </App>
  );
};

export default page;
