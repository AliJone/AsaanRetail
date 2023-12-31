import { Col, Row } from "antd";

import CustomFilledButton from "../../buttons/filledButton";
import GenericDropDown from "../genericDropDown";
import Image from "next/image";
import ImageWithBGGradient from "../../imageWithBGGradient";
import Resources from "../../../images/svgs/Resources.svg";
import Tiles from "./tiles";
import cn from "classnames";
import styles from "./style.module.sass";
import { useRouter } from "next/router";

const ResourcesDropDown = () => {
  const router = useRouter();

  return (
    <>
      <GenericDropDown
        child1={
          <>
            <div className={styles.LeftPane}>
              <div className={cn(styles.ImageDiv)}>
                {/* <Image src={SalesOrders} alt="Sales Orders" /> */}
              </div>
              <div className={cn(styles.LeftPaneDesContainer)}>
                <h1 className={cn(styles.LeftPaneTextContainer)}>
                  Experience the Asaan Retail Difference
                </h1>

                <div className={cn(styles.ButtonClass)}>
                  <CustomFilledButton
                    children={
                      <span className={cn(styles.buttonText)}>
                        Start Free Trial
                      </span>
                    }
                    width={"inherit"}
                    handleClick={() => router.push("/start-free-trial")}
                  />
                </div>
              </div>
            </div>
          </>
        }
        child2={
          <>
            <div className={cn(styles.RightPane)}>
              <Tiles />
            </div>
          </>
        }
      />
    </>
  );
};

export default ResourcesDropDown;
