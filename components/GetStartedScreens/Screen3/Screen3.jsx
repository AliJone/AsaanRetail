import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import { Progress } from 'antd';
import animation from '../assests/containerCard.svg';
import chemical from '../assests/icons/chemical.svg';
import cn from 'classnames';
import db from '../assests/icons/db.svg';
import dev from '../assests/icons/dev.svg';
import limit from '../../../styles/Limits.module.css';
import speed from '../assests/icons/speed.svg';
import style from './styleSheet.module.sass';
import web from '../assests/icons/web.svg';

// <Progress percent={50} showInfo={false} />

{/* <Progress type="circle" percent={50} size={20} /> */}

const Screen3 =({handleStepperScreen})=>{

    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
          setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);

        if(progress >= 100){
            handleStepperScreen({position: 3});
        }

        return () => {
          clearInterval(timer);
        };

       
      })

    return(
        <div className={cn(style.Screen3)}>
            <div className={cn(limit.Limit)}>
                <div className={cn(style.ScreenContainer)}>
                    <div className={cn(style.ParentContainer)}>
                        <div className={cn(style.TextContainerHeading)}>
                            <p className={cn(style.TitleText)}>
                                Creating Your App
                            </p>
                            <p className={cn(style.SubtitleText)}>
                                Let us do the magic now, worth the wait!
                            </p>
                        </div>

                        <div className={cn(style.LoadingContainer)}>
                            <p className={cn(style.LoadingText)}>
                                {progress}% Completed
                            </p>

                            <div className={cn(style.LoadingBar)}>
                                <Progress percent={progress} showInfo={false} />
                            </div>

                        </div>

                        <div className={cn(style.Container)}>
                            <div className={cn(style.leftPane)}>
                                <div className={cn(style.TextAndCheckContainer)}>
                                    <div className={cn(style.TextContainer)}>
                                        <Image src={dev} alt=""/>
                                        <p className={cn(style.TextChecksActive)}>
                                            Coding the structure...
                                        </p>
                                    </div>
                                    <Progress type="circle" percent={progress} size={20} />
                                </div>

                                <div className={cn(style.TextAndCheckContainer)}>
                                    <div className={cn(style.TextContainer)}>
                                        <Image src={dev} alt=""/>
                                        <p className={cn(style.TextChecksInActive)}>
                                        Connecting the Domain...
                                        </p>
                                    </div>
                                    <Progress type="circle" percent={progress} size={20} />
                                </div>

                                <div className={cn(style.TextAndCheckContainer)}>
                                    <div className={cn(style.TextContainer)}>
                                        <Image src={dev} alt=""/>
                                        <p className={cn(style.TextChecksInActive)}>
                                            Connecting the Database...
                                        </p>
                                    </div>
                                    <Progress type="circle" percent={progress} size={20} />
                                </div>

                                <div className={cn(style.TextAndCheckContainer)}>
                                    <div className={cn(style.TextContainer)}>
                                        <Image src={dev} alt=""/>
                                        <p className={cn(style.TextChecksInActive)}>
                                            Performing Inspection...
                                        </p>
                                    </div>
                                    <Progress type="circle" percent={progress} size={20} />
                                </div>

                                <div className={cn(style.TextAndCheckContainer)}>
                                    <div className={cn(style.TextContainer)}>
                                        <Image src={dev} alt=""/>
                                        <p className={cn(style.TextChecksInActive)}>
                                            Testing the App...
                                        </p>
                                    </div>
                                    <Progress type="circle" percent={progress} size={20} />
                                </div>
                            </div>

                            <div className={cn(style.rightPane, style.deskTopView)}>
                                <div className={cn(style.imageContainer)}>
                                    <Image/>
                                </div>
                            </div>

                        </div>

                        <div className={cn(style.cardContainer)}>
                            <div className={cn(style.cardTextContainer)}>
                                <div>
                                    <p className = {cn(style.cardTextTitle)}>
                                        We are working in the background!
                                    </p>
                                    
                                    <p className={cn(style.cardTextSubtitle)}>
                                        You can close this window anytime and wait for credentials at higfy@gmail.com
                                        
                                    </p>
                                </div>

                                <div>
                                    <Link href='' className={cn(style.linkColor)}>Back to asaanretail.pk</Link>
                                </div>
                            </div>

                            <Image className={cn(style.deskTopView)} src={animation} alt=''/>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}

export default Screen3;