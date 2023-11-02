import { Button } from 'antd';
import GradientLine from '../GradientLine';
import Image from 'next/image';
import React from 'react';
import VidIcon from '../../images/svgs/Video.svg'
import { VideoSectionText } from '../../strings';
import cn from 'classnames';
import style from './style.module.sass'

// <iframe width="424" height="238" src="https://www.youtube.com/embed/-mmM6v2UruA" title="English | Centralized Inventory, Fulfillment and Accounting Management for Multi-Channel Commerce" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

const VideoSection=()=>{
    const [playVideo, setPlayVideo] = React.useState(true);

    function onClickWatchNow(){
        setPlayVideo((prev)=>!prev);
    }

    const TitleWithGradientLine = () => (
        <>
        {VideoSectionText.Title}
          <div className={cn(style.gradientLine)} ><GradientLine width={"inherit"}  height="7px"/></div>
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
            <Image src= {VidIcon} alt='Video'/>


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
           
                <div className = {style.VideoPlayerDiv}>
                    { playVideo ?
                    <Button className={style.WatchNowButton} onClick={()=>onClickWatchNow()}><b>Watch Now</b></Button>:
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-mmM6v2UruA" title="English | Centralized Inventory, Fulfillment and Accounting Management for Multi-Channel Commerce" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    }
                
                </div>
        </div>
    )
}
export default VideoSection;