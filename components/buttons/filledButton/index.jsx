import { Button } from "antd";
import style from "./style.module.sass";

const CustomFilledButton = (props) => {
  return (
    <Button
      onClick={props.handleClick}
      style={{
        width: props.width != undefined ? props.width : "auto",
        height: props.height,
      }}
      className={style.buttonClass}
      size={props.size}
      icon={props.icon}
    >
      {props.children}
    </Button>
  );
};

export default CustomFilledButton;
