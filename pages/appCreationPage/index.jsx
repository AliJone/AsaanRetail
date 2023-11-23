import { App } from "antd";
import Screen1 from "../../components/GetStartedScreens/Screen2";

const page = () => {
  return (
    <>
      <App>
        <div
          style={{
            overflowX: "hidden",
          }}
        >
            <Screen1/>
        </div>
      </App>
    </>
  );
};

export default page;
