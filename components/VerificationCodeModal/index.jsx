import { Button, Input, Modal } from "antd";
import React, { useState } from "react";

import CloseModalIcon from "./assets/crossIcon.svg";
import CustomFilledButton from "../buttons/filledButton";
import Image from "next/image";
import Link from "next/link";
import MobileImage from "./assets/MobileImage.png";
import cn from "classnames";
import { message } from "antd";
import styles from "./styles.module.sass";

function VerificationModal({
  modal2Open,
  setModal2Open,
  handleStepperScreen,
  Name,
  Email,
  Phone,
  CompanyName,
  WebsiteURL,
  OrdersPerMonth,
  Channels,
  Partner,
}) {
  const closeModal = () => {
    setModal2Open(false);
    document.body.style.overflow = "visible"; // enable scrolling back when modal is closed
  };

  const openModal = () => {
    setModal2Open(true);
    document.body.style.overflow = "hidden"; // disable scrolling when modal is open
  };

  const [otpValues, setOtpValues] = useState(["", "", "", ""]);

  const handleInputChange = (index, value) => {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value.slice(0, 1); // keep only the first character
    setOtpValues(newOtpValues);
  };

  const verifyOtp = () => {
    if (
      otpValues[0] === "" ||
      otpValues[1] === "" ||
      otpValues[2] === "" ||
      otpValues[3] === ""
    ) {
      message.error("Please Fill All the OTP Fields");
    } else {
      setModal2Open(false);
      handleStepperScreen({ position: 2 });
      console.log(otpValues);
    }
  };

  return (
    <>
      {modal2Open && (
        <div className={styles.ModalOverlay}>
          <div className={styles.modalContainer}>
            {/* // */}
            <div className={styles.divHead}>
              <div className={styles.closeButton} onClick={closeModal}>
                <Image src={CloseModalIcon} />
              </div>
            </div>

            <div className={styles.divBody}>
              <div className={styles.divSubBody}>
                {/* // */}
                <div className={styles.divTitleContainer}>
                  <h3 className={styles.title}>Enter Verification Code</h3>
                  <p className={styles.subTitle}>
                    We have just sent a verification code to +92 {Phone}
                  </p>
                </div>

                <div className={styles.otpContainer}>
                  {otpValues.map((value, index) => (
                    <input
                      key={index}
                      type="number"
                      className={styles.otpInput}
                      value={value}
                      onChange={(e) => handleInputChange(index, e.target.value)}
                    />
                  ))}
                </div>

                <div className={styles.errorText}>
                  Code doesn’t seem right! Try again
                </div>

                <CustomFilledButton width={"100%"} handleClick={verifyOtp}>
                  Verify
                </CustomFilledButton>

                <div className={styles.changeNumberContainer}>
                  <Link href="/start-free-trial">
                    <p className={styles.changeNumber}>Change the number</p>
                  </Link>
                  <p className={styles.tryAgain}>
                    Didn’t receive the code? Try again in 30s
                  </p>
                </div>
              </div>

              <div
                className={cn(styles.mobileImageContainer, styles.mobileView)}
              ></div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default VerificationModal;
