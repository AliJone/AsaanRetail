import { Button, Layout, Menu } from "antd";

import CustomFilledButton from "../buttons/filledButton";
import CustomNavButtons from "../buttons/navButtons";
import CustomTextButton from "../buttons/textButton";
import { Divider } from "antd";
import DropDownIcon from "../../images/svgs/icons/Icon_Drop_Down.svg";
import Image from "next/image";
import Logo from "./assests/logo.svg";
import MenuOutlined from "@ant-design/icons/MenuOutlined";
import ProductsDropDown from "../dropDowns/products";
import React from "react";
import ResourcesDropDown from "../dropDowns/resources";
import SolutionsDropDown from "../dropDowns/solutions";
import { UserOutlined } from "@ant-design/icons";
import classNames from "classnames";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import style from "./style.module.sass";
import { useRouter } from "next/router";

const { Header } = Layout;

const NavBarExample = () => {
  const divClass = classNames(style.DivClass);
  const headerClass = classNames(style.HeaderClass);
  const logoClass = classNames(style.LogoClass);
  const menuClass = classNames(style.MenuDivClass);
  const BottomLineClass = classNames(style.BottomLine);

  const [current, setCurrent] = React.useState("");

  const router = useRouter();

  const handleFreeTrialClick = () => {
    router.push("/start-free-trial");
  };

  const handleBookDemoClick = () => {
    router.push("https://calendly.com/asaan-retail/onboarding-session");
  };

  const handlePricingClick = () => {
    router.push("/pricing");
  };

  const handleAboutClick = () => {
    router.push("/about-us");
  };

  const handleClickProduct = () => {
    // Handle click event
    if (current === "Product") {
      setCurrent("");
    } else {
      setCurrent("Product");
    }
  };

  const handleClickSolution = () => {
    // Handle click event
    if (current === "Solution") {
      setCurrent("");
    } else {
      setCurrent("Solution");
    }
  };

  const handleClickResources = () => {
    // Handle click event
    if (current === "Resources") {
      setCurrent("");
    } else {
      setCurrent("Resources");
    }
  };
  return (
    <>
      <div className={classNames(style.limitOverride)}>
        <Header className={headerClass}>
          <div className={divClass}>
            <div className={style.setMaxWidth}>
              <div className={menuClass}>
                <div className={logoClass}>
                  <Image src={Logo} alt="Asaan Retail" />
                </div>
                <div className={classNames(style.divClassRow)}>
                  <div className={style.divButtonContainer}>
                    <a onClick={handleClickProduct}>
                      <span
                        className={cn(style.NavButtonFonts, style.DivCenter)}
                      >
                        Product <Image src={DropDownIcon} />
                      </span>
                    </a>
                    {current === "Product" ? (
                      <div className={style.barColor} />
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className={style.divButtonContainer}>
                    <a onClick={handleClickSolution}>
                      <span
                        className={cn(style.NavButtonFonts, style.DivCenter)}
                      >
                        Solutions <Image src={DropDownIcon} />
                      </span>
                    </a>
                    {current === "Solution" ? (
                      <div className={style.barColor} />
                    ) : (
                      <></>
                    )}
                  </div>
                  <div className={style.divButtonContainer}>
                    <a onClick={handlePricingClick}>
                      <span
                        className={cn(style.NavButtonFonts, style.DivCenter)}
                      >
                        Pricing
                      </span>
                    </a>
                  </div>
                  <div className={style.divButtonContainer}>
                    <a onClick={handleClickResources}>
                      <span
                        className={cn(style.NavButtonFonts, style.DivCenter)}
                      >
                        Resources <Image src={DropDownIcon} />
                      </span>
                    </a>
                    {current === "Resources" ? (
                      <div className={style.barColor} />
                    ) : (
                      <></>
                    )}
                  </div>

                  <div className={style.divButtonContainer}>
                    <a onClick={handleAboutClick}>
                      <span
                        className={cn(style.NavButtonFonts, style.DivCenter)}
                      >
                        About
                      </span>
                    </a>
                  </div>
                </div>
              </div>
              <div className={style.divClassRowConvert}>
                <div className={style.divClass2}>
                  <UserOutlined className={style.userLogoClass} />
                  <Divider type="vertical" className={style.dividerClass} />
                  <a onClick={handleBookDemoClick}>
                    <span className={cn(style.buttonText)}>Book A Demo</span>
                  </a>
                </div>
                <div className={cn(style.buttonAlignment)}>
                  <CustomFilledButton
                    children={
                      <span className={cn(style.buttonTextV2)}>
                        Start Free Trial
                      </span>
                    }
                    handleClick={handleFreeTrialClick}
                  />
                </div>
                <div className={cn(style.mobileNavBar)}>
                  <MenuOutlined />
                </div>
              </div>
            </div>
          </div>
        </Header>
      </div>
      {current === "Product" ? <ProductsDropDown /> : <></>}
      {current === "Solution" ? <SolutionsDropDown /> : <></>}
      {current === "Resources" ? <ResourcesDropDown /> : <></>}
    </>
  );
};

export default NavBarExample;
