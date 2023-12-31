import { Input, Space } from "antd";
import { MailOutlined, UserOutlined } from "@ant-design/icons";

import AppCreationInputField from "../inputs/AppCreationInputFields";
import CustomFilledButton from "../buttons/filledButton";
import Image from "next/image";
import Logo from "./assests/Logo.svg";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import { message } from "antd";
import style from "./styleSheet.module.sass";
import { useState } from "react";

const inputFieldStyle = {
  display: "flex",
  padding: "0.9rem 0.9rem",
  alignItems: "center",
  gap: "0.6rem",
};

const inputFieldStyle2 = {
  // display: "flex",
  padding: "0.9rem 0.9rem",
  // alignItems: "center",
  gap: "0.6rem",
  width: "%",
};



const Screen1 = ({ AddValue, handleStepperScreen,Email,setEmail,Name,setName,Phone,setPhone,CompanyName,setCompanyName }) => {
  function onProceed() {
    if(Email === "" || Name === "" || Phone === "" || CompanyName === ""){
      message.error("Please Fill All The Fields");
    }
    else{
    console.log("called from Screen 1");
    handleStepperScreen({ position: 1 });
    }
  }

  // const [Email, setEmail] = useState("");
  // const [Name, setName] = useState("");
  // const [Phone, setPhone] = useState("");
  // const [CompanyName, setCompanyName] = useState("");




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
                <AppCreationInputField
                  size="large"
                  placeHolder="Name"
                  onInputChange={(e) => setName(e.target.value)}
                  prefix={<UserOutlined />}
                  customStyle={inputFieldStyle}
                ></AppCreationInputField>
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
                <AppCreationInputField
                  size="large"
                  placeHolder="Email"
                  onInputChange={(e) => setEmail(e.target.value)}
                  prefix={<MailOutlined />}
                  customStyle={inputFieldStyle}
                ></AppCreationInputField>
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
                  {/* <Space.Compact> */}
                    <Input
                      size="large"
                      className={cn(style.inputField)}
                      style={{ width: "14%" }}
                      defaultValue="+92"
                      disabled
                    />

                    <AppCreationInputField
                      size="large"
                      placeHolder="Phone Number"
                      onInputChange={(e) => setPhone(e.target.value)}
                      customStyle={inputFieldStyle}
                    ></AppCreationInputField>
                  {/* </Space.Compact> */}
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
                <AppCreationInputField
                  size="large"
                  placeHolder="Company Name"
                  onInputChange={(e) => setCompanyName(e.target.value)}
                  customStyle={inputFieldStyle}
                ></AppCreationInputField>
                <div className={cn(style.greyText)}>
                  Your app URL will be {CompanyName !== "" ? CompanyName : "YourCompayName"}.asaanretail.pk
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
        <div className={cn(style.rightPane, style.desktopView)}>
          <Image src={Logo} alt="abc" />
        </div>
      </div>
    </div>
  );
};

export default Screen1;
