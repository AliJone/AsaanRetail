import { React, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Collapse } from 'antd';
import cn from 'classnames';
import styles from './styles.module.sass';

import Article from './assets/images/article.png';

const displayedPlatforms = [
  {
    category: 'Accounting',
    image: Article,
    _id: '1',
    title: 'Know answers regarding Daraz seller center Nepal to connect with buyers!',
    author: "Kamil Riaz Kara",
    date: "16 July 2023",
    
  },
  {
    category: 'Inventory',
    image: Article,
    _id: '4',
    title: 'Know answers regarding Daraz seller center Nepal to connect with buyers!',
    author: "Kamil Riaz Kara",
    date: "16 July 2023",
    
  },
  {
    category: 'Order',
    image: Article,
    _id: '6',
    title: 'Know answers regarding Daraz seller center Nepal to connect with buyers!',
    author: "Kamil Riaz Kara",
    date: "16 July 2023",
    
  },
  {
    category: 'Warehouse',
    image: Article,
    _id: '8',
    title: 'Know answers regarding Daraz seller center Nepal to connect with buyers!',
    author: "Kamil Riaz Kara",
    date: "16 July 2023",
    
  },
];


function RelatedArticles() {
  const router = useRouter();
  
  const handleJobClick = (id) => {
    router.push(`/articlePage/${id}`);
  }
  return (
    <>
      <div className={styles.BG}>
        <div className={styles.Container}>
          <div className={styles.Title}> <h1>Related Articles</h1> </div>
          <div className={styles.Data}>
          {displayedPlatforms.map(cat => (
              <>
                <div className={styles.ArticleBoxCard} onClick={()=>handleJobClick(cat._id)}>
                  <Image src={cat.image} alt={cat.name} height={"13rem"} width={"auto"}/>
                  <div className={styles.BodyArticle}>
                    <div className={styles.TagArticle}>
                      <p className={styles.TagArticleText}>
                      {cat.category}
                      </p>
                    </div>
                    <div className={styles.TextArticle}>
                      <h1 className={styles.TextArticleText}>
                      {cat.title}
                      </h1>
                    </div>
                    <div className={styles.DatenAuthorArticle}>
                        <p className={styles.AuthorArticle}>{cat.author}</p>
                        <p className={styles.DateArticle}>{cat.date}</p>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default RelatedArticles;
