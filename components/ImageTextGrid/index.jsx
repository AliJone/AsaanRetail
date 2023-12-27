import React from "react";
import styles from "./styles.module.sass";
import Image from "next/image";
import CustomFilledButton from "../buttons/filledButton";
import ScrollAnimation from "react-animate-on-scroll";

const datas = [
  {
    title: "Inventory Audit <br /> Feature",
    leadingSubtitle: "Accuracy is Key with Asaan Retail:",
    listPointers: [
      "Quickly resolve discrepancies.",
      "Maintain trust with precise records.",
      "Streamline auditing for accuracy.",
    ],
    trailingSubtitle:
      "The era of spreadsheets is behind you.<br />Choose Asaan Retail for accurate inventory.",
    imageUrl: "./assets/inventory-management/image1.png", // Replace with actual image path
  },
  {
    title: "Stock <br /> Transfers",
    leadingSubtitle:
      "Seamlessly manage stock between locations with Asaan Retail:",
    listPointers: [
      "Efficiently allocate stock for demand.",
      "Optimize inventory distribution.",
      "Streamline inter-location stock movements.",
      "Improve order fulfillment times.",
    ],
    imageUrl: "/path/to/your/image2.jpg", // Replace with actual image path
  },
  {
    title: "Real time <br /> Inventory Sync",
    leadingSubtitle:
      "Stay in sync with Asaan Retail's Real-time Inventory Syncing:",
    listPointers: [
      "Keep your inventory updated instantly.",
      "Reflect changes across all locations seamlessly.",
      "Ensure synchronization for accurate operations.",
    ],
    trailingSubtitle:
      "Say hello to real-time control and success with Asaan Retail's Inventory Syncing.",
    imageUrl: "/path/to/your/image3.jpg", // Replace with actual image path
  },
];

function ImageTextGrid({ data = datas }) {
  // Accept data as a prop
  return (
    <ScrollAnimation
      animateOnce={true}
      animateIn={"animate__fadeInUp"}
    >
      <div className={styles.imageTextSection}>
        <div className={styles.gridContainer}>
          {data.map((item, index) => (
            <React.Fragment key={index}>
              {/* <ScrollAnimation animateOnce={true} animateIn={"animate__fadeInUp"}> */}
              <div className={styles.textContainer}>
                <div>
                  <span className={styles.underLine}>
                    <ScrollAnimation
                      animateOnce={true}
                      animateIn={"animate__fadeInUp"}
                    >
                      <div
                        className={styles.titleText}
                        dangerouslySetInnerHTML={{ __html: item.title }}
                      />
                    </ScrollAnimation>
                  </span>
                </div>

                <ScrollAnimation
                  animateOnce={true}
                  animateIn={"animate__fadeInUp"}
                >
                  <div className={styles.textDescriptionContainer}>
                    {item.leadingSubtitle}
                    <div>
                      {item.listPointers.map((pointer, idx) => (
                        <li key={idx}>{pointer}</li>
                      ))}
                    </div>
                    <div
                      dangerouslySetInnerHTML={{ __html: item.trailingSubtitle }}
                    />
                  </div>
                </ScrollAnimation>

                <ScrollAnimation
                  animateOnce={true}
                  animateIn={"animate__fadeInUp"}
                >
                  <div>
                    <CustomFilledButton width={"11.8125rem"}>
                      <span className={styles.buttonText}>Start Free Trial</span>
                    </CustomFilledButton>
                  </div>
                </ScrollAnimation>
              </div>
              {/* </ScrollAnimation> */}

              {/* <ScrollAnimation animateOnce={true} animateIn={"animate__fadeInUp"}> */}
              <div className={styles.image}>
                {/* Assuming image URL is part of the data */}
                <Image
                  src={item.imageUrl || ""}
                  alt="Image"
                  width={45}
                  height={45}
                  style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />
              </div>
              {/* </ScrollAnimation> */}
            </React.Fragment>
          ))}
        </div>
      </div>
    </ScrollAnimation>
  );
}

export default ImageTextGrid;
