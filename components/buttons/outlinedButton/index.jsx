import { Button } from "antd";
import style from "./style.module.sass";

const CustomOutlinedButton = (props) => {
  return (
    <Button
      onClick={props.handleClick}
      style={{
        width: props.width != undefined ? props.width : "auto",
        // backgroundColor: "transparent",
      }}
      className={style.buttonClass}
      size={props.size}
      icon={props.icon}
    >
      {props.children}
    </Button>
  );
};

export default CustomOutlinedButton;
