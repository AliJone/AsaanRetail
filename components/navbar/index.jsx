import { Button, Layout, Menu } from 'antd';

import CustomFilledButton from '../buttons/filledButton';
import CustomNavButtons from '../buttons/navButtons';
import CustomTextButton from '../buttons/textButton';
import { Divider } from 'antd';
import DropDownIcon from '../../images/svgs/icons/Icon_Drop_Down.svg'
import Image from 'next/image';
import Logo from './assests/logo.svg';
import MenuOutlined from '@ant-design/icons/MenuOutlined';
import ProductsDropDown from '../dropDowns/products';
import React from 'react';
import ResourcesDropDown from '../dropDowns/resources';
import SolutionsDropDown from '../dropDowns/solutions';
import {UserOutlined} from '@ant-design/icons';
import classNames from 'classnames';
import cn from 'classnames';
import style from './style.module.sass';

const { Header } = Layout;

const NavBarExample = () => {

    const theme = {
        components: {
          Menu: {
            menuItem: {
              selected: {
                after: {
                    borderBottom: ".125rem solid #37bf2d !important",
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
                      <div className = {logoClass}>
                        <Image src = {Logo} alt="Asaan Retail"/>
                      </div> 
                      <div className = {classNames(style.divClassRow)} >
                          <div className={style.divButtonContainer}>
                          <CustomNavButtons  children={<div className={cn(style.NavButtonFonts,style.DivCenter)}>Product <Image src={DropDownIcon} /></div>} handleClick={handleClickProduct}/>
                          { current === 'Product' ? <div className = {style.barColor}/>: <></>}
                          </div>

                          <div className={style.divButtonContainer}>
                          <CustomNavButtons  children={<div className={cn(style.NavButtonFonts,style.DivCenter)}>Solution <Image src={DropDownIcon} /></div>} handleClick={handleClickSolution}/>
                          { current === 'Solution' ? <div className = {style.barColor}/>: <></>}
                          </div>
                          <div className={style.divButtonContainer}>
                          <CustomNavButtons  children={<div className={cn(style.NavButtonFonts,style.DivCenter)}>Pricing</div>} handleClick={handleClickSolution}/>
                          </div>
                          <div className={style.divButtonContainer}>
                          <CustomNavButtons  children={<div className={cn(style.NavButtonFonts,style.DivCenter)}>Resources <Image src={DropDownIcon} /></div>} handleClick={handleClickResources}/>
                          { current === 'Resources' ? <div className = {style.barColor}/>: <></>}
                          </div>

                          <div className={style.divButtonContainer}>
                          <CustomNavButtons  children={<div className={cn(style.NavButtonFonts,style.DivCenter)}>About</div>} handleClick={handleClickSolution}/>
                          </div>
                      </div>   
                  </div>
                  <div className={style.divClassRow}>
                  <div className = {style.divClass2}>
                      <UserOutlined  className = {style.userLogoClass}/>
                      <Divider type="vertical" className={style.dividerClass} />
                      <CustomTextButton children={<span className={cn(style.NavButtonFonts)}>Get Demo</span>} handleClick = {handleClick}/>

                  </div>
                    <div className={cn(style.buttonAlignment)}>
                      <CustomFilledButton children={<span className={cn(style.NavButtonFonts)} style={{color:'white'}}>Start Free Trial</span>} handleClick = {handleClick}/>
                    </div>
                    <div className={cn(style.mobileNavBar)}>
                      <MenuOutlined />
                  </div>
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