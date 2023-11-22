import React from "react";
import styles from "./styles.module.sass";
import cn from "classnames";
import Image from "next/image";
import limit from "../../styles/Limits.module.css";

const images = [
  "../CTA new/assets/images/image1.png",
  "path/to/image2.jpg",
  "path/to/image2.jpg",
  "path/to/image2.jpg",
  "path/to/image2.jpg",
  "path/to/image2.jpg",
];

function LifeAtAsaanRetail() {
  return (
    <div className={styles.mainSection}>
      {/* / */}

      <div className={cn(limit.Limit, styles.gap)}>
        <div className={styles.sectionTitle}>
          <span>
            Life at
            <span className={cn(styles.underLine)}>
              <span /> Asaan Retail
            </span>
          </span>
        </div>

        <div className={styles.container}>
          <div className={styles.grid}>
            {images.map((image) => (
              <div
                className={styles.gridItem}
                style={{ backgroundImage: `url(${image})` }}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LifeAtAsaanRetail;
