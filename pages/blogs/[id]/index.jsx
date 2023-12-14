import { App } from "antd";
import ArticleMenu from "../../../components/ArticleMenu/ArticleMenu";
import ArticleMenuSingle from "../../../components/ArticleMenuSingle/ArticleMenuSingle";
import ArticlePageService from "../../../services/ArticlePageService";
import Asset from "../../../components/ArticleMenuSingle/assets/images/Asset.png";
import CTANew from "../../../components/CTA new/CTANew";
import FAQ from "../../../components/FAQ/FAQ";
import Footer from "../../../components/Footer/Footer";
import HeroSectionIntegration from "../../../components/HeroSectionIntegration";
import IntegrationMenu from "../../../components/IntegrationMenu/IntegrationMenu";
import NavigationBar from "../../../components/navbar";
import { Parser } from 'htmlparser2';
import RelatedArticles from "../../../components/RelatedArticles/RelatedArticles";
import withScrollAnimation from "../../../components/Animate/animate";

const HeroSectionIntegrationSectionWithScroll = withScrollAnimation(
  HeroSectionIntegration,
  "animate__fadeInUp"
);
const IntegrationMenuWithScroll = withScrollAnimation(
  IntegrationMenu,
  "animate__fadeInUp"
);
const FAQWithScroll = withScrollAnimation(FAQ, "animate__fadeInUp");
const CTANewWithScroll = withScrollAnimation(CTANew, "animate__fadeInUp");
const FooterWithScroll = withScrollAnimation(Footer, "animate__fadeIn");
const ArticleMenuWithScroll = withScrollAnimation(
  ArticleMenu,
  "animate__fadeIn"
);
const ArticleMenuSingleWithScroll = withScrollAnimation(
  ArticleMenuSingle,
  "animate__fadeIn"
);
const RelatedArticlesWithScroll = withScrollAnimation(
  RelatedArticles,
  "animate__fadeIn"
  );

  export async function getServerSideProps(context) {
    console.log("getServerSideProps is being called"); 
    let data = { tableOfContents: [], titleImage: Asset, titleData: { tag: '', title: '', author: '', date: '' }, content: [] };
  
    try {
      const response = await ArticlePageService.getArticlePageData({ id: 1 });
      data = parseHtmlToModel(response);
    } catch (error) {
      console.error(error);
    }
  
    return { props: { data } };
  }
  
  const parseHtmlToModel = (htmlInput) => {
    let currentTOCId = 1;
    let tempModel = { tableOfContents: [], titleImage: Asset, titleData: { tag: '', title: '', author: '', date: '' }, content: [] };
    let lastOpenedTag = '';
    let isTitleData = false;
  
    const parser = new Parser({
      onopentag(name, attribs) {
        lastOpenedTag = name;
        if (name === "h1") {
          const tocId = `toc${currentTOCId}`;
          tempModel.tableOfContents.push({ id: tocId, title: '' });
        }
        else if (name === "img" && attribs.src.startsWith('data:image')) {
            tempModel.content.push({
              id: `toc${currentTOCId}`,
              type: 'image',
              src: attribs.src,
            });
            currentTOCId++;
          }
          else if (name === "strong") {
            isTitleData = true;
          }
      },
      ontext(text) {
        if (isTitleData) {
            // const [tag, title, author, date] = text.split(',').map(s => s.trim());
            // tempModel.titleData = { tag, title, author, date };
            const parts = text.split(',').map(part => {
                const [key, value] = part.split(':').map(s => s.trim());
                return value;
              });
              tempModel.titleData = {
                tag: parts[0],
                title: parts[1],
                author: parts[2],
                date: parts[3]
              };
            isTitleData = false;
          } else if (lastOpenedTag === "h1") {
          const tocId = `toc${currentTOCId}`;
          tempModel.tableOfContents[tempModel.tableOfContents.length - 1].title = text;
          tempModel.content.push({
            id: tocId,
            type: 'title',
            text: text,
          });
          currentTOCId++;
        } else if (lastOpenedTag === "h2") {
          tempModel.content.push({
            id: `toc${currentTOCId}`,
            type: 'description',
            text: text,
          });
          // currentTOCId++;
        }
         else {
          tempModel.content.push({
            id: `toc${currentTOCId}`,
            type: 'description',
            text: text,
          });
          // currentTOCId++;
        }
      },
      onclosetag(tagname) {
        if (tagname === "h1" || tagname === "h2") {
          lastOpenedTag = '';
        }
      }
    }, { decodeEntities: true });
  
    parser.write(htmlInput);
    // parser.end();
  
    return tempModel;
  };


const page = ({data}) =>{
    return(
        <App>
            <div
            style={{
                overflowX: "hidden",
            }} 
            >
                <NavigationBar/>
                <ArticleMenuSingle data={data}/>
                <RelatedArticles/>
                <CTANew />
                <Footer />
            </div>

        </App>
    )
}

export default page;
