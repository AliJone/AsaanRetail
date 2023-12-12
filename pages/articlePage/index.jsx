import { App } from "antd";
import ArticleMenu from "../../components/ArticleMenu/ArticleMenu";
import CTANew from "../../components/CTA new/CTANew";
import FAQ from "../../components/FAQ/FAQ";
import Footer from "../../components/Footer/Footer";
import HeroSectionArticle from "../../components/HeroSectionArticles";
import IntegrationMenu from "../../components/IntegrationMenu/IntegrationMenu";
import NavigationBar from "../../components/navbar";
import withScrollAnimation from "../../components/Animate/animate";

const HeroSectionArticleWithScroll = withScrollAnimation(
  HeroSectionArticle,
  "animate__fadeInUp"
);

const ArticleMenuWithScroll = withScrollAnimation(
  ArticleMenu,
  "animate__fadeInUp"
);

const CTANewWithScroll = withScrollAnimation(CTANew, "animate__fadeIn");

const FooterWithScroll = withScrollAnimation(Footer, "animate__fadeIn");

const page = () => {
  return (
    <App>
      <div
        style={{
          overflowX: "hidden",
        }}
      >
        <NavigationBar />

        <HeroSectionArticleWithScroll />

        <ArticleMenu />
        
        <CTANewWithScroll />
        <FooterWithScroll />
      </div>
    </App>
  );
};

export default page;
