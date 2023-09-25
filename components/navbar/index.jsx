import { Button, Layout, Menu } from 'antd';
import {
  DownOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';

import CustomFilledButton from '../buttons/filledButton';
import CustomTextButton from '../buttons/textButton';
import { Divider } from 'antd';
import ProductsDropDown from '../dropDowns/products';
import React from 'react';
import SolutionsDropDown from '../dropDowns/solutions';
import classNames from 'classnames';
import style from './style.module.sass';

const { Header } = Layout;

const NavBarExample = () => {

    const theme = {
        components: {
          Menu: {
            menuItem: {
              selected: {
                after: {
                    borderBottom: "2px solid #37bf2d !important",
                },
              },
            },
          },
        },
      };

    const divClass = classNames(style.DivClass);
    const headerClass = classNames(style.HeaderClass);
    const logoClass = classNames(style.LogoClass);
    const menuClass = classNames(style.MenuDivClass);
    const BottomLineClass = classNames(style.BottomLine);

    const [current, setCurrent] = React.useState('');


    

    const handleClick = () => {
        // Handle click event
        
      }

    const handleClickProduct = () => {
      // Handle click event
      if(current === 'Product'){
        setCurrent('')
      }
      else {
        setCurrent('Product') 
      }

    }

    const handleClickSolution = () => {
      // Handle click event
      if(current === 'Solution'){
        setCurrent('')
      }
      else {
        setCurrent('Solution') 
      }
    }

    const handleClickPricing = () => {
      // Handle click event
      if(current === 'Pricing'){
        setCurrent('')
      }
      else {
        setCurrent('Pricing') 
      }
    }
    return(
        <>
          <Header className={headerClass}>
              <div className = {divClass}>
                  <div className={menuClass}>
                      <div className = {logoClass}>Asaan Retail</div> 
                      <Menu  mode="horizontal" defaultSelectedKeys={['1']} className = {BottomLineClass}>
                          <Menu.Item key="1" onClick={handleClickProduct} >
                              <CustomTextButton children={<div>Product<DownOutlined /></div>} /> 
                          </Menu.Item>
                          <Menu.Item key="2" onClick={handleClickSolution}>
                              <CustomTextButton children={<div>Solutions<DownOutlined /></div>} /> 
                          </Menu.Item>
                          <Menu.Item key="3" onClick = {handleClickPricing} >
                              <CustomTextButton children={<div>Pricing<DownOutlined /></div>} /> 
                          </Menu.Item>
                          
                      </Menu>
                  </div>
                  <div className = {style.divClass2}>
                      <UserOutlined className = {style.userLogoClass}/>
                      <Divider type="vertical" className={style.dividerClass} />
                      <CustomTextButton children={"Login"} handleClick = {handleClick}/>
                      <CustomFilledButton children={"Start Free Trial"} handleClick = {handleClick}/>
                      {/* <Button>Sign up</Button> */}

                  </div>
              </div>
          </Header>
          {current === 'Product' ? <ProductsDropDown/> : <></>}
          {current === 'Solution' ? <SolutionsDropDown/> : <></>}
        </>
)
};

export default NavBarExample;