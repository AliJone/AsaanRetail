import { React, useState } from 'react';
import Image from 'next/image';
import { Collapse } from 'antd';
import cn from 'classnames';
import styles from './styles.module.sass';

import Asset from './assets/images/Asset.png';
import Asset1 from './assets/images/Asset1.png';

const { Panel } = Collapse;
const data = {
  tableOfContents: [
    { id: 'toc1', title: 'Explore new opportunities with Daraz seller center Sri Lanka' },
    { id: 'toc2', title: 'How Daraz seller center benefit its sellers?' },
    { id: 'toc3', title: 'How does Daraz benefit its loyal customers?' },
    { id: 'toc4', title: 'How does Daraz stand tall against the competitors in the e-commerce industry?' },
    { id: 'toc5', title: 'Conclusion' },
  ],
  titleImage: Asset, 
  titleData: {
    tag: 'Daraz',
    title: 'Explore new opportunities with Daraz seller center SriLanka',
    author: 'Kamil Riaz Kara',
    date: '16 July 2023',
  },
  content: [
    {
      id: 'toc1',
      type: 'description',
      text: 'Daraz SriLanka is unarguably one of the largest and leading e-commerce platforms in the country. And you are just one click away from exploring new opportunities on the website. This calls for you to sign up on Daraz seller center Sri Lanka, and earn bucks.',
    },
    {
      id: 'toc2',
      type: 'image',
      src: Asset1, // Replace with actual image path
      alt: 'Description of the image',
    },
    {
      id: 'toc3',
      type: 'description',
      text: 'Back in 2015, Daraz stepped into the e-commerce industry of the country with only fifty employees and 200 sellers. Seven years down the road, it has turned into an e-commerce giant by revolutionizing the industry, bringing huge discounts and offers for its loyal customers.',
    },
    {
      id: 'toc4',
      type: 'title',
      text: 'What are the new opportunities offered by Daraz seller center, Sri Lanka?',
    },
    {
      id: 'toc5',
      type: 'description',
      text: 'In the past few years, the e-commerce industry has taken a huge turn all around the world. However, the leadership took a pioneering role to influence its sources and obtain advanced tech to spread the change and perks in all parts of the country.',
    },
    // Add more content as needed
  ],
};


function ArticleMenuSingle() {
  // State to track the selected table of contents item
  const [selectedId, setSelectedId] = useState(null);

  // Function to handle click on table of contents item
  const handleSelect = (id) => {
    console.log(id);
    console.log(id);
    setSelectedId(id);
    //move to the div with selected id
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });

  };

  return (
    <>
      <div className={styles.BG}>
        <div className={styles.Container}>
          <div className={cn(styles.Left)}>
            <div className={styles.Heading}>Table of Contents</div>
            {data.tableOfContents.map((item) => (
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
