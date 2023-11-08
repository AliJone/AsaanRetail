import React from "react";
import cn from "classnames";
import styles from "./styles.module.sass";
import Image from "next/image";
import WeirdIcon from "./assets/Icon.svg";
import ForwardIcon from "./assets/Icon2.svg";
import TriangleIcon from "./assets/TriangleIcon.svg";

import { Button } from "antd";

const jobData = [
  {
    title: "Software Engineering – Php/Laravel/Vue/React",
    description:
      "Work with the Product Development team on new features and releases.",
    type: "Full time/ Part time",
    location: "Karachi, Pakistan",
  },
  {
    title: "Product Designer II",
    description:
      "Work with the Product Development team on new features and releases.",
    type: "Full time/ Part time",
    location: "Karachi, Pakistan",
  },
  {
    title: "Success Executive",
    description:
      "Work with the Product Development team on new features and releases.",
    type: "Full time/ Part time",
    location: "Karachi, Pakistan",
  },
];

function handleJobClick() {
  // navigate to job appli form
}

function OpenRoles() {
  return (
    <div className={styles.mainSection}>
      <Image src={TriangleIcon} alt="icon" className={styles.triangleIcon} />

      <div className={styles.sectionTitle}>
        <span className={styles.titleText}>
          Open
          <span className={cn(styles.titleDiv, styles.underLine)}>
            <span /> roles
          </span>
          ⚡
        </span>
      </div>

      {jobData.map((job) => (
        <div className={styles.jobCard}>
          <div className={styles.jobInnerCard}>
            <Image src={WeirdIcon} alt="placeholder icon" />

            <div className={styles.jobTitleDescContainer}>
              <div className={styles.jobTitle}>{job.title}</div>

              <div className={styles.jobDescription}>{job.description}</div>
            </div>

            <div className={styles.jobTypeLocationContainer}>
              <div className={styles.jobType}>{job.type}</div>
              <div className={styles.jobLocation}>&#183; {job.location}</div>
            </div>
          </div>

          <Image
            src={ForwardIcon}
            alt="forward icon"
            onClick={handleJobClick}
          />
        </div>
      ))}

      <Button className={styles.SubmitButton}>Load more</Button>
    </div>
  );
}

export default OpenRoles;
