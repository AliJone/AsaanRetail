import cn from 'classnames';
import style from './styleSheet.module.sass';

const Tabs = (props) =>{
    return(
        <>
            <div className = {cn(style.divTabsContainer)}>
                <div onClick={()=>{props.handleClick(1)}}>
                    <span className={ props.tabNumber == 1 ? cn(style.Active , style.tabFontActive,style.tabsTagsDiv):cn(style.inActive,style.tabFontInActive,style.tabsTagsDiv)}>Monthly<span/></span>
                </div>
                <div onClick={()=>props.handleClick(2)}>
                    <span className={ props.tabNumber == 2 ? cn(style.Active , style.tabFontActive, style.tabsTagsDiv):cn(style.inActive,style.tabFontInActive, style.tabsTagsDiv)}>Quarterly<span className={cn(style.tabsTag, style.tabsTagFont)}>-7%</span></span>
                </div>
                <div onClick={()=>props.handleClick(3)}> 
                    <span className={ props.tabNumber == 3 ? cn(style.Active , style.tabFontActive, style.tabsTagsDiv):cn(style.inActive,style.tabFontInActive, style.tabsTagsDiv)}>Yearly<span className={cn(style.tabsTag, style.tabsTagFont)}>-33%</span></span>
                </div>
            </div>
        </>
    )
}

export default Tabs;