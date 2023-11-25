import { Button, Input, Modal } from "antd";
import React, { useState } from "react";

import CloseModalIcon from "./assets/crossIcon.svg";
import Image from "next/image";
import MobileImage from "./assets/MobileImage.png";
import cn from "classnames";
import styles from "./styles.module.sass";

function VerificationModal({modal2Open, setModal2Open , handleStepperScreen}) {
  // const [modal2Open, setModal2Open] = useState(true);

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
    setModal2Open(false);
    handleStepperScreen({position: 2});
    console.log(otpValues);
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
                    We have just sent a verification code to +92 3229775013
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

                <Button className={styles.verifyButton} onClick={verifyOtp}>
                  Verify
                </Button>

                <div className={styles.changeNumberContainer}>
                  <p className={styles.changeNumber}>Change the number</p>
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
