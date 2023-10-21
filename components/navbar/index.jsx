import { Button, Layout, Menu } from 'antd';
import {
  DownOutlined,
  HomeOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';

import CustomFilledButton from '../buttons/filledButton';
import CustomNavButtons from '../buttons/navButtons';
import CustomTextButton from '../buttons/textButton';
import { Divider } from 'antd';
import ProductsDropDown from '../dropDowns/products';
import React from 'react';
import ResourcesDropDown from '../dropDowns/resources';
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

    const handleClickResources = () => {
      // Handle click event
      if(current === 'Resources'){
        setCurrent('')
      }
      else {
        setCurrent('Resources') 
      }
    }
    return(
        <>
          <Header className={headerClass}>
              <div className = {divClass}>
                  <div className={menuClass}>
                      <div className = {logoClass}>Asaan Retail</div> 
                      <div className = {classNames(style.divClassRow)} >
                        <div className = {style.divButtonContainer}>
                          <CustomNavButtons  children={<>Product <DownOutlined /></>} handleClick={handleClickProduct}/>
                          { current === 'Product' ? <div className = {style.barColor}/>: <></>}
                        </div>
                        <div className = {style.divButtonContainer}>
                          <CustomNavButtons  children={<>Solution <DownOutlined /></>} handleClick={handleClickSolution}/>
                          { current === 'Solution' ? <div className = {style.barColor}/>: <></>}
                        </div>
                        <div className = {style.divButtonContainer}>
                          <CustomNavButtons  children={<>Resources <DownOutlined /></>} handleClick={handleClickResources}/>
                          { current === 'Resources' ? <div className = {style.barColor}/>: <></>}
                        </div>
                      </div>

                      
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
          {current === 'Resources' ? <ResourcesDropDown/> : <></>}
        </>
)
};

export default NavBarExample;