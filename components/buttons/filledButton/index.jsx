import { Button } from "antd";
import style from "./style.module.sass";

const CustomFilledButton = (props) => {
  return (
    <Button
      onClick={props.handleClick}
      style={{ width: props.width != undefined ? props.width : "auto" }}
      className={style.buttonClass}
      size={props.size}
    >
      {props.children}
    </Button>
  );
};

export default CustomFilledButton;
