import { CloseOutlined, RightOutlined } from "@ant-design/icons";
import { TilesProduct, TilesResources, TilesSolution } from "../../strings.jsx";

import CustomFilledButton from "../buttons/filledButton/index.jsx";
import CustomOutlinedButton from "../buttons/outlinedButton/index.jsx";
import { Divider } from "antd";
import Image from "next/image";
import Logo from "./assests/logo.svg";
import MenuItem from "./MenuItems.jsx";
import ScrollAnimation from "react-animate-on-scroll";
import SubMenuTiles from "./submenuTiles.jsx";
import cn from "classnames";
import style from "./styleSheet.module.sass";
import subMenuLogo from "./assests/3.svg";
import { useRouter } from "next/router";
import { useState } from "react";

const NavigationSideBar = ({ props }) => {
  const [current, setCurrent] = useState("");

  const handleClickProduct = () => {
    if (current === "Product") {
      setCurrent("");
    } else {
      setCurrent("Product");
    }
  };

  const handleClickSolution = () => {
    if (current === "Solution") {
      setCurrent("");
    } else {
      setCurrent("Solution");
    }
  };

  const handleClickResources = () => {
    if (current === "Resources") {
      setCurrent("");
    } else {
      setCurrent("Resources");
    }
  };

  const router = useRouter();

  const handlePricingClick = () => {
    router.push("/pricing");
  };

  const handleAboutClick = () => {
    router.push("/about-us");
  };

  const handleFreeTrialClick = () => {
    router.push("/start-free-trial");
  };

  const handleBookDemoClick = () => {
    router.push("https://calendly.com/asaan-retail/onboarding-session");
  };

  // for solution routing
  const handleRetail = () => {
    router.push("/solutions/retail");
  };
  const handleEcommerce = () => {
    router.push("/solutions/ecommerce");
  };
  const handle3pl = () => {
    router.push("/solutions/third-party-logistics");
  };
  const handleAgencies = () => {
    router.push("/solutions/agencies");
  };
  const handleD2c = () => {
    router.push("/solutions/direct-to-consumer");
  };

  //for Resources routing
  const handleCareer = () => {
    router.push("/careers");
  };
  const handleContactUs = () => {
    router.push("/contact-us");
  };
  const handleArticles = () => {
    router.push("/blogs");
  };
  const handleIntegration = () => {
    router.push("/integrations");
  };

  // for product routing
  const handleInventoryManagement = () => {
    router.push("/products/inventory-management");
  };
  const handleOrderManagement = () => {
    router.push("/products/order-management");
  };
  const handleAccounts = () => {
    router.push("/products/accounting-management");
  };
  const handleAnalytics = () => {
    router.push("/products/reporting");
  };
  const handleShipment = () => {
    router.push("/products/shipping-management");
  };
  const handlePointOfSales = () => {
    router.push("/products/fbr-integrated-pos");
  };

  const Products = [
    {
      title: TilesProduct[0].title,
      logo: subMenuLogo,
      handleClick: handleInventoryManagement,
    },
    {
      title: TilesProduct[1].title,
      logo: subMenuLogo,
      handleClick: handleOrderManagement,
    },
    {
      title: TilesProduct[2].title,
      logo: subMenuLogo,
      handleClick: handleAccounts,
    },
    {
      title: TilesProduct[3].title,
      logo: subMenuLogo,
      handleClick: handleAnalytics,
    },
    {
      title: TilesProduct[4].title,
      logo: subMenuLogo,
      handleClick: handleShipment,
    },
    {
      title: TilesProduct[5].title,
      logo: subMenuLogo,
      handleClick: handlePointOfSales,
    },
  ];

  const Solution = [
    {
      title: TilesSolution[0].title,
      logo: subMenuLogo,
      handleClick: handleRetail,
    },
    {
      title: TilesSolution[1].title,
      logo: subMenuLogo,
      handleClick: handleEcommerce,
    },
    {
      title: TilesSolution[2].title,
      logo: subMenuLogo,
      handleClick: handle3pl,
    },
    {
      title: TilesSolution[3].title,
      logo: subMenuLogo,
      handleClick: handleAgencies,
    },
    {
      title: TilesSolution[4].title,
      logo: subMenuLogo,
      handleClick: handleD2c,
    },
  ];

  const Resources = [
    {
      title: TilesResources[0].title,
      logo: subMenuLogo,
      handleClick: handleCareer,
    },
    {
      title: TilesResources[1].title,
      logo: subMenuLogo,
      handleClick: handleContactUs,
    },
    {
      title: TilesResources[2].title,
      logo: subMenuLogo,
      handleClick: handleArticles,
    },
    {
      title: TilesResources[3].title,
      logo: subMenuLogo,
      handleClick: handleIntegration,
    },
  ];

  return (
    <div className={cn(style.overlay)}>
      {console.log("sidebar opened")}
      <ScrollAnimation animateOnce={true} animateIn="animate__fadeIn">
        <div className={cn(style.bg)}>
          <MenuItem
            onClick={() => {}}
            item={
              <>
                <Image src={Logo} alt="Logo" />
              </>
            }
            isParent={true}
            hasSubMenu={false}
            child={
              <>
                <CloseOutlined onClick={props.Open} />
              </>
            }
          />

          <MenuItem
            onClick={handleClickProduct}
            item={
              <>
                <p className={cn(style.MenuItemText)}>Product</p>
              </>
            }
            isParent={true}
            child={
              <>
                <RightOutlined
                  className={
                    current == "Product"
                      ? cn(style.rotateIcon)
                      : cn(style.orgIcon)
                  }
                />
              </>
            }
            hasSubMenu={true}
            SubMenu={
              current == "Product" ? (
                <>
                  {Products.map((element, index) => (
                    <>
                      <SubMenuTiles
                        Logo={element.logo}
                        item={element.title}
                        handleClick={element.handleClick}
                      />
                      {index != Products.length - 1 ? (
                        <>
                          {" "}
                          <Divider />
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </>
              ) : (
                <></>
              )
            }
          />

          <MenuItem
            onClick={handleClickSolution}
            item={
              <>
                <p className={cn(style.MenuItemText)}>Solution</p>
              </>
            }
            isParent={true}
            child={
              <>
                <RightOutlined
                  className={
                    current == "Solution"
                      ? cn(style.rotateIcon)
                      : cn(style.orgIcon)
                  }
                />
              </>
            }
            hasSubMenu={true}
            SubMenu={
              current == "Solution" ? (
                <>
                  {Solution.map((element, index) => (
                    <>
                      <SubMenuTiles
                        Logo={element.logo}
                        item={element.title}
                        handleClick={element.handleClick}
                      />
                      {index != Solution.length - 1 ? (
                        <>
                          {" "}
                          <Divider />
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </>
              ) : (
                <></>
              )
            }
          />

          <MenuItem
            onClick={handlePricingClick}
            item={
              <>
                <p className={cn(style.MenuItemText)}>Pricing</p>
              </>
            }
            isParent={false}
            hasSubMenu={false}
          />

          <MenuItem
            onClick={handleClickResources}
            item={
              <>
                <p className={cn(style.MenuItemText)}>Resources</p>
              </>
            }
            isParent={true}
            child={
              <>
                <RightOutlined
                  className={
                    current == "Resources"
                      ? cn(style.rotateIcon)
                      : cn(style.orgIcon)
                  }
                />
              </>
            }
            hasSubMenu={true}
            SubMenu={
              current == "Resources" ? (
                <>
                  {Resources.map((element, index) => (
                    <>
                      <SubMenuTiles
                        Logo={element.logo}
                        item={element.title}
                        handleClick={element.handleClick}
                      />
                      {index != Resources.length - 1 ? (
                        <>
                          {" "}
                          <Divider />
                        </>
                      ) : (
                        <></>
                      )}
                    </>
                  ))}
                </>
              ) : (
                <></>
              )
            }
          />

          <MenuItem
            onClick={handleAboutClick}
            item={
              <>
                <p className={cn(style.MenuItemText)}>About</p>
              </>
            }
            isParent={false}
            hasSubMenu={false}
          />

          <CustomFilledButton
            children={
              <span className={cn(style.FilledButtonText)}>
                Start Free Trial
              </span>
            }
            width={"100%"}
            handleClick={handleFreeTrialClick}
            height={"4.1625rem"}
          />

          <CustomOutlinedButton
            width={"100%"}
            height={"4.1625rem"}
            handleClick={handleBookDemoClick}
          >
            <span className={style.buttonText}>Book a Demo</span>
          </CustomOutlinedButton>
        </div>
      </ScrollAnimation>
    </div>
  );
};

export default NavigationSideBar;
