import styles from './styleSheet.module.sass';

const MenuItems = ({item, isParent,child,hasSubMenu,SubMenu,onClick}) => {

    return(
        <>
            <div className={styles.MenuDivClass} onClick = {onClick}>
                <div className={styles.MenuItemCard}>
                    <div className={styles.menuItemText}>
                        {item}
                    </div>
                    {
                        
                        isParent === true ?
                        <div >
                            {child}
                        </div>:<></>
                    }
                </div>
                {

                    hasSubMenu === true ?<div>{SubMenu}</div>:<></>
                }
            </div>
        </>
    )

}

export default MenuItems;