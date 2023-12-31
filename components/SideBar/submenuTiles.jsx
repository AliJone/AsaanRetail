import Image from "next/image";
import cn from "classnames";
import style from "./styleSheet.module.sass";

const subMenuTiles = ({Logo, item, handleClick}) => {
    return(
        <div className={cn(style.subMenuTile)} onClick={handleClick} >
            <Image src={Logo} alt="Logo"  />
            <p className={cn(style.MenuItemText)}>
                {item}
            </p>
        </div>
    );
}

export default subMenuTiles;