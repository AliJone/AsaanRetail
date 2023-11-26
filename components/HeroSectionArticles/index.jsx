import CustomFilledButton from '../buttons/filledButton';
import InputField from '../inputField';
import cn from 'classnames';
import limits from '../../styles/Limits.module.css'
import style from './styleSheet.module.sass';

const HeroSectionArticle = ()=>{
    return(
        <div className = {cn(style.HeroSectionArticle)}>
            <div className = {cn(style.BG)}>
                <div className = {cn(limits.Limit)}>


                    <div className = {cn(style.HeroSectionBGCard)}>
                        <div className = {cn(style.HeroSectionArticleContent)}>
                            <div className = {cn(style.ContentContainer)}>
                                <div className = {cn(style.TitleContainer)}>
                                    <p className = {cn(style.TitleText)}>
                                        <span className={cn(style.underLine)}>Articles</span> for knowledge
                                    </p>
                                </div>
                                <div className={cn(style.subTitleContainer)}>
                                    <p className={cn(style.subTitleText)}>
                                        Free guides, product enhancements, and valuable e-commerce insights directly to your inbox.
                                    </p>
                                </div>
                                <div className={cn(style.submissionContainer)}>
                                    <div className={cn(style.textFieldCard)}>
                                        <InputField placeHolder={"Enter Your Work Email"}/>
                                    </div>
                                    <div className = {cn(style.buttonContainer)}>
                                        <CustomFilledButton children={<p className = {cn(style.buttonText)}>Subscribe</p>} width = {"100%"}/>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HeroSectionArticle;