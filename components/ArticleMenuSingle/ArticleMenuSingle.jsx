import { React, useEffect, useState } from 'react';

import ArticlePageService from '../../services/ArticlePageService';
import Asset from './assets/images/Asset.png';
import Asset1 from './assets/images/Asset1.png';
import { Collapse } from 'antd';
import Image from 'next/image';
import { Parser } from 'htmlparser2';
import cn from 'classnames';
import styles from './styles.module.sass';

const { Panel } = Collapse;
function ArticleMenuSingle({ data }) {
  
  // State to track the selected table of contents item
  const [selectedId, setSelectedId] = useState(null);
  
  // Function to handle click on table of contents item
  const  handleSelect = async (id) => {

    console.log()
    console.log(id);
    console.log(id);
    setSelectedId(id);
    //move to the div with selected id
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });

  };

  return (
    <>
    {/* {console.log(data)} */}
      <div className={styles.BG}>
        <div className={styles.Container}>
          <div className={cn(styles.Left)}>
            <div className={styles.Heading}>Table of Contents</div>
            {Array.isArray(data.tableOfContents) && data.tableOfContents.map((item) => (
              <div 
                key={item.id} 
                className={cn(selectedId === item.id ? styles.SelectedContent: styles.content)}
                onClick={() => handleSelect(item.id)}
              >
                <p>{item.title}</p>
              </div>
            ))}
          </div>
          <div className={styles.Right}>
            {data.titleImage && (
              <div className={styles.TitleImage}>
                <Image src={data.titleImage} alt={data.titleData.title} />
              </div>
            )}
            {data.titleData && (
              <div className={styles.TitleData}>
                <div className={styles.Tag}><p>{data.titleData.tag}</p></div>
              <div className={styles.TitleHeading}><h1>{data.titleData.title}</h1></div>
              <div className={styles.TitleAuthorNDate}>
                <div className={styles.Author}> <p>{data.titleData.author}</p> </div>
                <div className={styles.Date}> <p>{data.titleData.date}</p> </div>
              </div>
              </div>
            )}
            {data.content.map((contentItem) => (
              <  >
                {contentItem.type === 'image' && (
                  <div className={styles.DescImage} key={contentItem.id} id={contentItem.id}>
                    <Image src={contentItem.src} alt={contentItem.alt} />
                  </div>
                )}
                {contentItem.type === 'description' && (
                  <div className={styles.Description} key={contentItem.id} id={contentItem.id}>
                    <p>{contentItem.text}</p>
                  </div>
                )}
                {contentItem.type === 'title' && (
                  <div className={styles.TitleHeading} key={contentItem.id} id={contentItem.id}>
                    <h1>{contentItem.text}</h1>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}





export default ArticleMenuSingle;
