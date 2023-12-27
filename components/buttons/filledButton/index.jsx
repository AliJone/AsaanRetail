import { Button } from "antd";
import style from "./style.module.sass";

const CustomFilledButton = (props) => {
  return (
    <div style = {{width:  props.width != undefined ? props.width : "auto"}}>
    <Button
      onClick={props.handleClick}
      style={{
        width: "inherit",
        height: props.height,
      }}
      className={style.buttonClass}
      size={props.size}
      icon={props.icon}
    >
      {props.children}
    </Button>
    </div>
  );
};

export default CustomFilledButton;
