import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.sass';
import { Button, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import cn from 'classnames';

import Shopify from './assets/images/Shopify.png';
import Daraz from './assets/images/Daraz.png';
import Woo from './assets/images/Woo.png';
import TCS from './assets/images/TCS.png';
import BlueEx from './assets/images/BlueEx.png';
import PostEx from './assets/images/PostEx.png';
import CallCourier from './assets/images/CallCourier.png';
import Swyft from './assets/images/Swyft.png';
import Rider from './assets/images/Rider.png';
import Trax from './assets/images/Trax.png';
import MontyMobile from './assets/images/MontyMobile.png';
import FPBRPOS from './assets/images/FPBRPOS.png';

const initialPlatforms = [
  {
    category: 'Marketplaces',
    platforms: [
      {
        name: 'Daraz',
        description: 'A dominant South Asian online marketplace with a vast product selection, serving shoppers in multiple countries.',
        image: Daraz,
      },
      // Add other marketplace platforms here
    ],
  },
  {
    category: 'Ecommerce Platforms',
    platforms: [
      {
        name: 'Shopify',
        description: 'An e-commerce platform that empowers businesses to effortlessly set up and manage online stores.',
        image: Shopify,
      },
      {
        name: 'WooCommerce',
        description: 'A versatile WordPress plugin designed for e-commerce on websites, providing scalability and customization options.',
        image: Woo,
      },
      
    ],
  },
  {
    category: 'Shipping Platforms',
    platforms: [
      {
        name: 'TCS',
        description: 'TCS is celebrated for its proficiency in logistics and a sterling record of secure and timely deliveries.',
        image: TCS,
      },
      {
        name: 'BlueEx',
        description: 'BlueEx celebrated for its expansive and well-connected delivery network, on-time deliveries.',
        image: BlueEx,
      },
      {
        name: 'PostEx',
        description: 'A trusted courier service with a focus on reliable domestic and international deliveries, ensuring peace of mind for customers.',
        image: BlueEx,
      },
      {
        name: 'CallCourier',
        description: 'CallCourier is a Pakistani courier company known for its swift, secure and on-time parcel delivery services.',
        image: CallCourier,
      },
      {
        name: 'Swyft',
        description: 'Swift courier services are designed for businesses needing quick, efficient, and reliable transportation solutions.',
        image: Swyft,
      },
      {
        name: 'Rider',
        description: 'Rider is a popular courier which offers swift and efficient delivery services, known for its focus on speed and reliability.',
        image: Rider,
      },
      {
        name: 'Trax',
        description: 'TRAX specializes in precision logistics and courier services, offering innovative tracking and real-time delivery solutions.',
        image: Trax,
      },
      
    ],
  },
  {
    category: 'SMS Portals',
    platforms: [
      {
        name: 'Monty Mobile',
        description: 'Monty Mobile is a global telecommunications company, offering solutions for mobile operators and businesses.',
        image: MontyMobile,
      },
    ],
  },
  {
    category: 'POS',
    platforms: [
      {
        name: 'FBR POS',
        description: 'A tax compliance system in Pakistan that helps to record and report sales data, ensuring adherence to tax regulations.',
        image: FPBRPOS,
      },
    ],
  },
];

function IntegrationMenu() {
  const [allPlatforms] = useState(initialPlatforms); // Keep the original list intact
  const [displayedPlatforms, setDisplayedPlatforms] = useState(initialPlatforms); // Platforms to display
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (selectedCategory === 'All') {
      const filteredPlatforms = allPlatforms.map(cat => ({
        ...cat,
        platforms: cat.platforms.filter(p => p.name.toLowerCase().includes(value))
      })).filter(cat => cat.platforms.length > 0);
      setDisplayedPlatforms(filteredPlatforms);
    } else {
      const categoryPlatforms = allPlatforms.find(cat => cat.category === selectedCategory).platforms;
      const filteredPlatforms = categoryPlatforms.filter(p => p.name.toLowerCase().includes(value));
      setDisplayedPlatforms([{ category: selectedCategory, platforms: filteredPlatforms }]);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm(''); // Reset search term on category change

    if (category === 'All') {
      setDisplayedPlatforms(allPlatforms);
    } else {
      const filteredPlatforms = allPlatforms.filter(cat => cat.category === category);
      setDisplayedPlatforms(filteredPlatforms);
    }
  };


  return (
    <>
      <div className={styles.BG}>
        <div className={styles.Container}>
          <div className={styles.Menu}>
            <div className={styles.Search}>
              <div className={styles.SearchTitle}>Search <span className={styles.SearchIcon}><SearchOutlined /></span></div>
              <div className={styles.SearchBox}><Input size="large" placeholder="  Input search text" onChange={handleSearchChange} /></div>
            </div>
            <div className={styles.Categories}>
              <div className={styles.CategoriesTitle}>Categories</div>
              {/* Map through categories for buttons */}
              {['All', ...new Set(initialPlatforms.map(item => item.category))].map((category) => (
                <div key={category} className={cn(styles.Button, { [styles.Selected]: selectedCategory === category })}>
                  <Button type='primary' size='medium' title={category} onClick={() => handleCategoryClick(category)}>{category}</Button>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.Data}>
            {/* Map through categories and platforms */}
            {displayedPlatforms.map(cat => (
              <div key={cat.category} className={styles.CatBox}>
                <div className={styles.CatBoxTitle}>{cat.category}</div>
                <div className={styles.CatBoxData}>
                  {cat.platforms.map(platform => (
                    <div key={platform.name} className={styles.CatBoxCard}>
                      <Image src={platform.image} alt={platform.name} />
                      <div className={styles.CatBoxCardData}>
                        <div className={styles.CatBoxCardDataTitle}>{platform.name}</div>
                        <div className={styles.CatBoxCardDataSubTitle}>{platform.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default IntegrationMenu;
