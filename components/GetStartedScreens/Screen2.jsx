import { ArrowLeftOutlined, GlobalOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";

import CustomFilledButton from "../buttons/filledButton";
import Image from "next/image";
import Link from "next/link";
import VerificationModal from "../VerificationCodeModal";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import style from "./styleSheet.module.sass";

const Screen1 = ({AddValue ,handleStepperScreen, setModal2Open , modal2Open}) => {
  return (
    <div className={cn(limit.Limit, style.overrideLimit)}>
      <VerificationModal modal2Open={modal2Open} setModal2Open={setModal2Open} handleStepperScreen={handleStepperScreen} />
    <div className={cn(style.Screen1)}>
      <div className={cn(style.leftPane)}>
        <div className={cn(style.logoContainer)}>
            <ArrowLeftOutlined 
            onClick={()=>handleStepperScreen({position: 0})}
             className={cn(style.backButton)}/>
            <Link 
            onClick={()=>handleStepperScreen({position: 0})}
             className={cn(style.backButton)} href=''>Back</Link>
        </div>
        <div className={cn(style.inputFieldContainer)}>
          <div className={cn(style.inputFieldContainer2)}>
            <div className={cn(style.headingContainer)}>
              <div>
                <p className={cn(style.TitleText)}>Company Details</p>
              </div>
              <div>
                <p className={cn(style.SubtitleText)}>
                    Time to know about your venture!
                </p>
              </div>
            </div>
            <div className={cn(style.inputContainer)}>
              <div className={cn(style.labelInputContainer)}>
                <p>
                  <span className={cn(style.labelTextRequired)}>*</span>
                </p>
                <p>
                  <span className={cn(style.labelText)}>Website URL</span>
                </p>
              </div>
              <Input
                className={cn(style.inputField)}
                size="large"
                placeholder="large size"
                prefix={<GlobalOutlined />}
              />
            </div>

            <div className={cn(style.inputContainer)}>
              <div className={cn(style.labelInputContainer)}>
                <p>
                  <span className={cn(style.labelTextRequired)}>*</span>
                </p>
                <p>
                  <span className={cn(style.labelText)}>How many orders do you process per month?</span>
                </p>
              </div>
              <Input
                size="large"
                className={cn(style.inputField)}
                placeholder="large size"
              />
            </div>

            <div className={cn(style.inputContainer)}>
              <div className={cn(style.labelInputContainer)}>
                <p>
                  <span className={cn(style.labelText)}>Which sales channels do you currently sell on?</span>
                </p>
              </div>
              <Input
                size="large"
                className={cn(style.inputField)}
                placeholder="Highfy"
              />
            </div>

            <div className={cn(style.inputContainer)}>
              <div className={cn(style.labelInputContainer)}>
                <p>
                  <span className={cn(style.labelText)}>Who do you ship your ecommerce orders with?</span>
                </p>
              </div>
              <Input
                size="large"
                className={cn(style.inputField)}
                placeholder="Highfy"
              />
            </div>

            
          </div>

          
        </div>
        <div className={cn(style.buttonClass)}>
              <CustomFilledButton
                children={<span className={cn(style.buttonText)}>Create App</span>}
                width={"inherit"}
                handleClick={()=>setModal2Open({bool: true})}
              />
            </div>
      </div>
      <div className={cn(style.rightPane ,style.desktopView)}>
        <Image className={cn(style.imageContainer)} src="" />
      </div>
    </div>
    </div>
  );
};
 
export default Screen1;
