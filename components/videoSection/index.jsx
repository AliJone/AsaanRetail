import { Button } from 'antd';
import GradientLine from '../gradientLine';
import Image from 'next/image';
import React from 'react';
import VidIcon from '../../images/svgs/Video.svg'
import { VideoSectionText } from '../../strings';
import style from './style.module.sass'

// <iframe width="424" height="238" src="https://www.youtube.com/embed/-mmM6v2UruA" title="English | Centralized Inventory, Fulfillment and Accounting Management for Multi-Channel Commerce" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

const VideoSection=()=>{
    const [playVideo, setPlayVideo] = React.useState(true);

    function onClickWatchNow(){
        setPlayVideo((prev)=>!prev);
    }

    const TitleWithLineBreaks = VideoSectionText.Title.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          <div style={{paddingLeft:"63%"}} ><GradientLine width={"247px"} /></div>
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
            {/* <div className = {style.VideoSectionDivText}> */}
                <span className = {style.VideoSectionDivTitle}>
                    {TitleWithLineBreaks}
                </span>
                 
                <span className = {style.VideoSectionDivSubTitle}>
                    {subTitleWithLineBreaks}
                </span>
            {/* </div> */}

            <div style={{paddingTop: "40px" , width : "1px"}}/>
           
                <div className = {style.VideoPlayerDiv}>
                    { playVideo ?
                    <Button className={style.WatchNowButton} onClick={()=>onClickWatchNow()}>Watch Now</Button>:
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/-mmM6v2UruA" title="English | Centralized Inventory, Fulfillment and Accounting Management for Multi-Channel Commerce" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    }
                
                </div>
        </div>
    )
}
export default VideoSection;