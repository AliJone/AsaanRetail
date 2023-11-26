import cn from "classnames";
import style from "./styleSheet.module.sass";

const Tabs = (props) => {
  return (
    <>
      <div className={cn(style.divTabsContainer)}>
        <div
          className={cn(style.addPadding)}
          onClick={() => {
            props.handleClick(1);
          }}
        >
          <span
            className={
              props.tabNumber == 1
                ? cn(style.Active, style.tabFontActive)
                : cn(style.inActive, style.tabFontInActive)
            }
          >
            Standard
            <span />
          </span>
        </div>
        <div
          className={cn(style.addPadding)}
          onClick={() => props.handleClick(2)}
        >
          <span
            className={
              props.tabNumber == 2
                ? cn(style.Active, style.tabFontActive)
                : cn(style.inActive, style.tabFontInActive)
            }
          >
            Professional
            <span />
          </span>
        </div>
        <div
          className={cn(style.addPadding)}
          onClick={() => props.handleClick(3)}
        >
          <span
            className={
              props.tabNumber == 3
                ? cn(style.Active, style.tabFontActive)
                : cn(style.inActive, style.tabFontInActive)
            }
          >
            Pro
            <span />
          </span>
        </div>
      </div>
    </>
  );
};

export default Tabs;
