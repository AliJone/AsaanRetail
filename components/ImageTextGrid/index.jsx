import React from "react";
import styles from "./styles.module.sass";
import { Button } from "antd";
import Image from "next/image";
import CustomFilledButton from "../buttons/filledButton";

// const data = [
//   {
//     title: "Inventory Audit <br /> Feature",
//     leadingSubtitle: "Accuracy is Key with Asaan Retail:",
//     listPointers: [
//       "Quickly resolve discrepancies.",
//       "Maintain trust with precise records.",
//       "Streamline auditing for accuracy.",
//     ],
//     trailingSubtitle:
//       "The era of spreadsheets is behind you.<br />Choose Asaan Retail for accurate inventory.",
//   },
// ];

function ImageTextGrid() {
  return (
    <div className={styles.imageTextSection}>
      <div className={styles.gridContainer}>
        {/* // */}

        <div className={styles.textContainer}>
          <div>
            <span className={styles.underLine}>
              <div className={styles.titleText}>
                Inventory Audit <br /> Feature
              </div>
            </span>
          </div>

          <div className={styles.textDescriptionContainer}>
            Accuracy is Key with Asaan Retail:
            <div>
              <li>Quickly resolve discrepancies.</li>
              <li>Maintain trust with precise records.</li>
              <li>Streamline auditing for accuracy.</li>
            </div>
            The era of spreadsheets is behind you.
            <br />
            Choose Asaan Retail for accurate inventory.
          </div>

          {/* <Button className={styles.CTAButton}>Start Free Trial</Button> */}

          <div>
            <CustomFilledButton width={"11.8125rem"}>
              <span className={styles.buttonText}>Start Free Trial</span>
            </CustomFilledButton>
          </div>
        </div>

        <div className={styles.image}>
          <Image src="" alt="Image" width={40} height={40} />
        </div>

        {/* --------------------- */}

        <div className={styles.textContainer}>
          <div>
            <span className={styles.underLine}>
              <div className={styles.titleText}>
                Stock <br /> Transfers
              </div>
            </span>
          </div>

          <div className={styles.textDescriptionContainer}>
            Seamlessly manage stock between locations
            <br />
            with Asaan Retail:{" "}
            <div>
              <li>Efficiently allocate stock for demand.</li>
              <li>Optimize inventory distribution.</li>
              <li>Streamline inter-location stock movements.</li>
              <li>Improve order fulfillment times.</li>
            </div>
          </div>

          {/* <Button className={styles.CTAButton}>Start Free Trial</Button> */}

          <div>
            <CustomFilledButton width={"11.8125rem"}>
              <span className={styles.buttonText}>Start Free Trial</span>
            </CustomFilledButton>
          </div>
        </div>

        <div className={styles.image}>
          <Image src="" alt="Image" />
        </div>

        {/* --------------------- */}

        <div className={styles.textContainer}>
          <div>
            <span className={styles.underLine}>
              <div className={styles.titleText}>
                Real time <br /> Inventory Sync
              </div>
            </span>
          </div>

          <div className={styles.textDescriptionContainer}>
            Stay in sync with Asaan Retail's Real-time
            <br />
            Inventory Syncing:
            <div>
              <li>Keep your inventory updated instantly.</li>
              <li>Reflect changes across all locations seamlessly.</li>
              <li>Ensure synchronization for accurate operations.</li>
            </div>
            Say hello to real-time control and real-time
            <br />
            success with Asaan Retail's Inventory Syncing.
          </div>

          {/* <Button className={styles.CTAButton}>Start Free Trial</Button> */}

          <div>
            <CustomFilledButton width={"11.8125rem"}>
              <span className={styles.buttonText}>Start Free Trial</span>
            </CustomFilledButton>
          </div>
        </div>

        <div className={styles.image}>
          <Image src="" alt="Image" />
        </div>
      </div>
    </div>
  );
}

export default ImageTextGrid;
