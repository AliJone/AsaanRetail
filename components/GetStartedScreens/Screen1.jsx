import { Input, Space } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";

import CustomFilledButton from "../buttons/filledButton";
import Image from "next/image";
import Logo from "./assests/Logo.svg";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import style from "./styleSheet.module.sass";

const Screen1 = ({AddValue , handleStepperScreen }) => {
    
  function onProceed(){
    handleStepperScreen({position: 1});

  };

  return (
    <div className={cn(limit.Limit, style.overrideLimit)}>
    <div className={cn(style.Screen1)}>
      <div className={cn(style.leftPane)}>
        <div className={cn(style.logoContainer)}>
          <Image src={Logo} />
        </div>
        <div className={cn(style.inputFieldContainer)}>
          <div className={cn(style.inputFieldContainer2)}>
            <div className={cn(style.headingContainer)}>
              <div>
                <p className={cn(style.TitleText)}>Create Your Account</p>
              </div>
              <div>
                <p className={cn(style.SubtitleText)}>
                  Let’s Start with your 14 days free trial
                </p>
              </div>
            </div>
            <div className={cn(style.inputContainer)}>
              <div className={cn(style.labelInputContainer)}>
                <p>
                  <span className={cn(style.labelTextRequired)}>*</span>
                </p>
                <p>
                  <span className={cn(style.labelText)}>Name</span>
                </p>
              </div>
              <Input
                className={cn(style.inputField)}
                size="large"
                placeholder="large size"
                prefix={<UserOutlined />}
              />
            </div>

            <div className={cn(style.inputContainer)}>
              <div className={cn(style.labelInputContainer)}>
                <p>
                  <span className={cn(style.labelTextRequired)}>*</span>
                </p>
                <p>
                  <span className={cn(style.labelText)}>Email</span>
                </p>
              </div>
              <Input
                size="large"
                className={cn(style.inputField)}
                placeholder="large size"
                prefix={<MailOutlined />}
              />
            </div>

            <div className={cn(style.inputContainer)}>
              <div className={cn(style.labelInputContainer)}>
                <p>
                  <span className={cn(style.labelTextRequired)}>*</span>
                </p>
                <p>
                  <span className={cn(style.labelText)}>Phone</span>
                </p>
              </div>
              <div className={cn(style.convertToRow)}>
                <Space.Compact>
                  <Input
                    size="large"
                    className={cn(style.inputField)}
                    style={{ width: "14%" }}
                    defaultValue="+92"
                  />
                  <Input
                    size="large"
                    className={cn(style.inputField)}
                    style={{ width: "90%" }}
                    placeholder="Phone Number"
                  />
                </Space.Compact>
              </div>
            </div>

            <div className={cn(style.inputContainer)}>
              <div className={cn(style.labelInputContainer)}>
                <p>
                  <span className={cn(style.labelTextRequired)}>*</span>
                </p>
                <p>
                  <span className={cn(style.labelText)}>Company Name</span>
                </p>
              </div>
              <Input
                size="large"
                className={cn(style.inputField)}
                placeholder="Highfy"
              />
              <div className={cn(style.greyText)}>
                Your app URL will be highfy.asaanretail.pk
              </div>
            </div>

            
          </div>

          
        </div>
        <div className={cn(style.buttonClass)}>
              <CustomFilledButton
                children={<span className={cn(style.buttonText)}>Proceed</span>}
                width={"inherit"}
                handleClick={onProceed}
              />
            </div>
        <div className={cn(style.SubtitleText)}>
            By signing in you agree to our terms and privacy policy
          </div>
      </div>
      <div className={cn(style.rightPane ,style.desktopView)}>
        <Image className={cn(style.imageContainer)} src="" alt="abc" />
      </div>
    </div>
    </div>
  );
};

export default Screen1;
