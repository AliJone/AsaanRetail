import { Button, Input } from "antd";
import React, { useState } from "react";

import Article from "./assets/images/article.png";
import BlueEx from "./assets/images/BlueEx.png";
import CallCourier from "./assets/images/CallCourier.png";
import FPBRPOS from "./assets/images/FPBRPOS.png";
import Image from "next/image";
import MontyMobile from "./assets/images/MontyMobile.png";
import PostEx from "./assets/images/PostEx.png";
import Rider from "./assets/images/Rider.png";
import { SearchOutlined } from "@ant-design/icons";
import Shopify from "./assets/images/Shopify.png";
import Swyft from "./assets/images/Swyft.png";
import TCS from "./assets/images/TCS.png";
import Trax from "./assets/images/Trax.png";
import Woo from "./assets/images/Woo.png";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import styles from "./styles.module.sass";
import { useRouter } from "next/router";
import IntegrationSearchInputField from "../inputs/IntegrationSearchField";

const initialPlatforms = [
  {
    category: "Accounting",
    image: Article,
    _id: "1",
    title:
      "Know answers regarding Daraz seller center Nepal to connect with buyers!",
    author: "Kamil Riaz Kara",
    date: "16 July 2023",
  },
  {
    category: "Accounting",
    image: Article,
    _id: "2",
    title:
      "Know answers regarding Daraz seller center Nepal to connect with buyers!",
    author: "Kamil Riaz Kara",
    date: "16 July 2023",
  },
  {
    category: "Accounting",
    image: Article,
    _id: "3",
    title:
      "Know answers regarding Daraz seller center Nepal to connect with buyers!",
    author: "Kamil Riaz Kara",
    date: "16 July 2023",
  },
  {
    category: "Inventory",
    image: Article,
    _id: "4",
    title:
      "Know answers regarding Daraz seller center Nepal to connect with buyers!",
    author: "Kamil Riaz Kara",
    date: "16 July 2023",
  },
  {
    category: "Inventory",
    image: Article,
    _id: "5",
    title:
      "Know answers regarding Daraz seller center Nepal to connect with buyers!",
    author: "Kamil Riaz Kara",
    date: "16 July 2023",
  },
  {
    category: "Order",
    image: Article,
    _id: "6",
    title:
      "Know answers regarding Daraz seller center Nepal to connect with buyers!",
    author: "Kamil Riaz Kara",
    date: "16 July 2023",
  },
  {
    category: "Order",
    image: Article,
    _id: "7",
    title:
      "Know answers regarding Daraz seller center Nepal to connect with buyers!",
    author: "Kamil Riaz Kara",
    date: "16 July 2023",
  },
  {
    category: "Warehouse",
    image: Article,
    _id: "8",
    title:
      "Know answers regarding Daraz seller center Nepal to connect with buyers!",
    author: "Kamil Riaz Kara",
    date: "16 July 2023",
  },
  {
    category: "POS",
    image: Article,
    _id: "9",
    title:
      "I dont answers regarding Daraz seller center Nepal to connect with buyers!",
    author: "Ali Jone",
    date: "16 July 2023",
  },
];

function ArticleMenu() {
  const [allPlatforms] = useState(initialPlatforms); // Keep the original list intact
  const [displayedPlatforms, setDisplayedPlatforms] =
    useState(initialPlatforms); // Platforms to display
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const router = useRouter();

  function handleJobClick(id) {
    // Navigate to /careerPage1
    router.push("/articlePage/[id]", `/articlePage/${id}`);
  }

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    if (selectedCategory === "All") {
      const filteredPlatforms = allPlatforms.filter(
        (p) =>
          p.title.toLowerCase().includes(value) ||
          p.author.toLowerCase().includes(value) ||
          p.date.toLowerCase().includes(value)
      );
      setDisplayedPlatforms(filteredPlatforms);
    } else {
      const categoryPlatforms = allPlatforms.find(
        (cat) => cat.category === selectedCategory
      );
      const filteredPlatforms = allPlatforms.filter(
        (p) =>
          p.title.toLowerCase().includes(value) ||
          p.author.toLowerCase().includes(value) ||
          p.date.toLowerCase().includes(value)
      );
      setDisplayedPlatforms(filteredPlatforms);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSearchTerm(""); // Reset search term on category change

    if (category === "All") {
      setDisplayedPlatforms(allPlatforms);
    } else {
      const filteredPlatforms = allPlatforms.filter(
        (cat) => cat.category === category
      );
      setDisplayedPlatforms(filteredPlatforms);
    }
  };

  return (
    <>
      <div className={styles.BG}>
        <div className={cn(limit.Limit)}>
          <div className={styles.Container}>
            <div className={styles.Menu}>
              <div className={styles.Search}>
                <div className={styles.SearchTitle}>
                  Search{" "}
                  <span className={styles.SearchIcon}>
                    <SearchOutlined />
                  </span>
                </div>
                <div className={styles.SearchBox}>
                  <IntegrationSearchInputField
                    placeHolder="Input search text"
                    size="large"
                    onInputChange={handleSearchChange}
                  />
                </div>
              </div>
              <div className={styles.Categories}>
                <div className={styles.CategoriesTitle}>Categories</div>
                {/* Map through categories for buttons */}
                {[
                  "All",
                  ...new Set(initialPlatforms.map((item) => item.category)),
                ].map((category) => (
                  <div
                    key={category}
                    className={cn(styles.Button, {
                      [styles.Selected]: selectedCategory === category,
                    })}
                  >
                    <Button
                      type="primary"
                      size="medium"
                      title={category}
                      onClick={() => handleCategoryClick(category)}
                    >
                      {category}
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.Data}>
              <div className={styles.CatBoxData}>
                {/* Map through categories and platforms */}
                {displayedPlatforms.map((cat) => (
                  <>
                    <div
                      className={styles.ArticleBoxCard}
                      onClick={() => handleJobClick(cat._id)}
                    >
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        height={"13rem"}
                        width={"auto"}
                      />
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
              {/* {displayedPlatforms.map(cat => (
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
            ))} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArticleMenu;
