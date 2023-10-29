import GradientLine from '../gradientLine';
import React from 'react';
import Tag from '../tag';
import { VideoSectionText } from '../../strings';
import cn from 'classnames';
import style from './style.module.sass'

const VideoSectionNew=()=>{
    const [playVideo, setPlayVideo] = React.useState(true);

    function onClickWatchNow(){
        setPlayVideo((prev)=>!prev);
    }

    const TitleWithGradientLine = () => (
        <>
        {VideoSectionText.Title}
          <div className={cn(style.gradientLine)}><GradientLine width="68%" height="7px"/></div>
        </>
    )
    
    const TitleWithLineBreaks = VideoSectionText.Title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          { index !== 0 ? <></>:<><br/></>}
        </React.Fragment>
      ));

    const subTitleWithLineBreaks = VideoSectionText.subTitle.split('\n').map((line, index) => (
    <React.Fragment key={index}>
        {line}
        <br />
    </React.Fragment>
    ));

    return(
        <div className = {style.VideoSectionDiv}>
            <Tag text="Discovery"/>

            <div className={style.spacer1}/>

            <span className = {cn(style.VideoSectionDivTitle, style.desktopView)}>
                {<TitleWithGradientLine/>}
            </span>
            
            <span className = {cn(style.VideoSectionDivTitle, style.mobileView)}>
                {TitleWithLineBreaks}
            </span>
                
            <span className = {cn(style.VideoSectionDivSubTitle,style.mobileView)}>
                {VideoSectionText.subTitle}
            </span>

            <span className = {cn(style.VideoSectionDivSubTitle,style.desktopView)}>
                {subTitleWithLineBreaks}
            </span>

            <div className={cn(style.spacer2)}/>
            
            <div className={style.VideoPlayerDiv}>
                <div className={style.TruckIcon}></div>
                <div className={style.ShoppingBagIcon}></div>
                {playVideo ? (
                <div className={style.PlayButton} onClick={() => onClickWatchNow()}></div>
                ) : (
                    <div className={style.VideoWrapper}>
                        <iframe
                            src="https://www.youtube.com/embed/-mmM6v2UruA"
                            title="English | Centralized Inventory, Fulfillment and Accounting Management for Multi-Channel Commerce"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                )}
            </div>
        </div>
    )
}

export default VideoSectionNew;