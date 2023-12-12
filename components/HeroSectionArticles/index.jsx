import ArticlePageService from "../../services/ArticlePageService";
import CustomFilledButton from "../buttons/filledButton";
import HeroSectionInput from "../inputs/HeroSectionInputs";
import InputField from "../inputField";
import cn from "classnames";
import limits from "../../styles/Limits.module.css";
import style from "./styleSheet.module.sass";
import { useState } from "react";

const HeroSectionArticle = () => {
  const [email, setEmail] = useState("");

  const handleChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await ArticlePageService.sendArticlePageData({ email });
      console.log("ArticlePage Response:", response);
      // Handle success (e.g., show a success message or redirect)
    } catch (error) {
      console.error("Error:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className={cn(style.HeroSectionArticle)}>
      <div className={cn(style.BG)}>
        <div className={cn(limits.Limit)}>
          <div className={cn(style.HeroSectionBGCard)}>
            <div className={cn(style.HeroSectionArticleContent)}>
              <div className={cn(style.ContentContainer)}>
                <div className={cn(style.TitleContainer)}>
                  <p className={cn(style.TitleText)}>
                    <span className={cn(style.underLine)}>Articles</span> for
                    knowledge
                  </p>
                </div>
                <div className={cn(style.subTitleContainer)}>
                  <p className={cn(style.subTitleText)}>
                    Free guides, product enhancements, and valuable e-commerce
                    insights directly to your inbox.
                  </p>
                </div>
                <div className={cn(style.submissionContainer)}>
                  {/* <div className={cn(style.textFieldCard)}> */}
                  <HeroSectionInput
                    placeHolder={"Enter Your Work Email"}
                    onChange={handleChange}
                    value={email}
                  />
                  {/* </div> */}
                  <div className={cn(style.buttonContainer)}>
                    <CustomFilledButton
                      children={
                        <p className={cn(style.buttonText)}>Subscribe</p>
                      }
                      width={"100%"}
                      handleClick={handleSubmit}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSectionArticle;
