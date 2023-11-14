import GradientLine from "../GradientLine";
import React, { useState } from "react";
import Tag from "../Tag";
import { VideoSectionText } from "../../strings";
import cn from "classnames";
import style from "./style.module.sass";
import { Button, Modal } from "antd";

const VideoSectionNew = () => {
  const TitleWithGradientLine = () => (
    <>
      {VideoSectionText.Title}
      <div className={cn(style.gradientLine)}>
        <GradientLine width="68%" height="7px" />
      </div>
    </>
  );

  const TitleWithLineBreaks = VideoSectionText.Title.split("\n").map(
    (line, index) => (
      <React.Fragment key={index}>
        {line}
        {index !== 0 ? (
          <></>
        ) : (
          <>
            <br />
          </>
        )}
      </React.Fragment>
    )
  );

  const subTitleWithLineBreaks = VideoSectionText.subTitle
    .split("\n")
    .map((line, index) => (
      <React.Fragment key={index}>
        {line}
        <br />
      </React.Fragment>
    ));

  const [modal2Open, setModal2Open] = useState(false);

  const closeModal = () => {
    setModal2Open(false);
    document.body.style.overflow = "visible"; // Enable scrolling back when modal is closed
  };

  const openModal = () => {
    setModal2Open(true);
    document.body.style.overflow = "hidden"; // Disable scrolling when modal is open
  };

  return (
    <div className={style.VideoSectionDiv}>
      <Tag text="Discovery" />

      <div className={style.spacer1} />

      <span className={cn(style.VideoSectionDivTitle, style.desktopView)}>
        {<TitleWithGradientLine />}
      </span>

      <span className={cn(style.VideoSectionDivTitle, style.mobileView)}>
        {TitleWithLineBreaks}
      </span>

      <span className={cn(style.VideoSectionDivSubTitle, style.mobileView)}>
        {VideoSectionText.subTitle}
      </span>

      <span className={cn(style.VideoSectionDivSubTitle, style.desktopView)}>
        {subTitleWithLineBreaks}
      </span>

      <div className={cn(style.spacer2)} />

      <div className={style.VideoPlayerDiv}>
        <div className={style.TruckIcon}></div>
        <div className={style.ShoppingBagIcon}></div>
        <div className={style.PlayButton} onClick={openModal}></div>
      </div>

      {modal2Open && (
        <div className={style.ModalOverlay} onClick={closeModal}>
          <div className={style.VideoWrapper}>
            <div onClick={closeModal} className={style.CloseVideoIcon}>
              &#10060;
            </div>
            <iframe
              src="https://www.youtube.com/embed/-mmM6v2UruA"
              title="English | Centralized Inventory, Fulfillment and Accounting Management for Multi-Channel Commerce"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoSectionNew;
