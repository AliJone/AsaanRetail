import { Button } from "antd";
import style from "./style.module.sass";

const CustomOutlinedButton = (props) => {
  return (
    <Button
      onClick={props.handleClick}
      style={{
        width: props.width !== undefined ? props.width : "auto",
        backgroundColor: "#FCF8EF",
      }}
      className={style.buttonClass}
      size={props.size}
      icon={props.icon}
    >
      <span className={style.buttonText}>{props.children}</span>
    </Button>
  );
};

export default CustomOutlinedButton;
