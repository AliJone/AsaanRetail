import React, { useState } from "react";

import { App } from "antd";
import AppError from "../../components/AppError";
import AppReady from "../../components/AppReady";
import Screen1 from "../../components/GetStartedScreens/Screen1";
import Screen2 from "../../components/GetStartedScreens/Screen2";
import Screen3 from "../../components/GetStartedScreens/Screen3/Screen3";
import VerificationModal from "../../components/VerificationCodeModal";

const page = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [StepperPosition, setStepperPosition] = useState(0);
  const [Values, setValues] = useState([]);

  const showModal = ({ bool }) => {
    if (bool !== undefined) console.log("called from page", bool);
    setIsModalVisible(bool);
  };

  const handleStepperScreen = ({ position }) => {
    if (position !== undefined) {
      console.log(position, "called");
      if (position === 0) {
      }
      setStepperPosition(position);
    }
  };

  const AddValue = ({ Value }) => {
    if (Value !== undefined) setValues([...Values, Value]);
  };

  return (
    <>
      <App>
        <div
          style={{
            overflowX: "hidden",
          }}
        >
          {StepperPosition === 0 && (
            <Screen1
              AddValue={AddValue}
              handleStepperScreen={handleStepperScreen}
            />
          )}
          {StepperPosition === 1 && (
            <Screen2
              AddValue={AddValue}
              handleStepperScreen={handleStepperScreen}
              modal2Open={isModalVisible}
              setModal2Open={showModal}
            />
          )}
          {StepperPosition === 2 && (
            <>
              <Screen3 handleStepperScreen={handleStepperScreen} />
            </>
          )}
          {StepperPosition === 3 && <AppReady />}
          {<AppError />}
          {/* <Screen1/>
            <VerificationModal modal2Open={isModalVisible} setModal2Open={showModal} handleStepperScreen={handleStepperScreen} />
            <AppReady/> */}
        </div>
      </App>
    </>
  );
};

export default page;
