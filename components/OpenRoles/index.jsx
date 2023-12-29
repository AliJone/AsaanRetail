import React from "react";
import { useRouter } from "next/router";
import cn from "classnames";
import styles from "./styles.module.sass";
import Image from "next/image";
import WeirdIcon from "./assets/Icon.svg";
import ForwardIcon from "./assets/Icon2.svg";
import TriangleIcon from "./assets/TriangleIcon.svg";
import TickMark from "./assets/TickMark.svg";
import limit from "../../styles/Limits.module.css";

import { Button } from "antd";
import CustomFilledButton from "../buttons/filledButton";

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

function OpenRoles() {
  const router = useRouter();

  function handleJobClick() {
    // Navigate to /careerPage1
    router.push("/careers/1");
  }

  function handleFilterChipClick() {}

  return (
    <div className={styles.mainSection}>
      <div className={cn(limit.Limit, styles.limit)}>
        {/* <Image src={TriangleIcon} alt="icon" className={styles.triangleIcon} /> */}

        <div className={styles.sectionTitle}>
          <span>
            Open
            <span className={cn(styles.underLine)}>
              <span /> roles
            </span>
            ⚡
          </span>

          <div className={styles.filterChipsContainer}>
            <div className={styles.filterChip}>Engineering</div>
            <div className={styles.filterChip}>Design</div>
            <div className={styles.filterChip}>Sales</div>

            <div className={styles.activeFilterChip}>
              <Image src={TickMark} className={styles.tickMark} />
              Support
            </div>
          </div>
        </div>

        <>
          {jobData.map((job) => (
            <div className={styles.jobCard} onClick={handleJobClick}>
              <div className={styles.jobInnerCard}>
                <Image src={WeirdIcon} alt="icon" />

                <div className={styles.jobTitleDescContainer}>
                  <div className={styles.jobTitle}>{job.title}</div>

                  <div className={styles.jobDescription}>{job.description}</div>
                </div>

                <div className={styles.jobTypeLocationContainer}>
                  <div className={styles.jobType}>{job.type}</div>
                  <div className={styles.jobLocation}>
                    &#183; {job.location}
                  </div>
                </div>
              </div>

              <Image
                src={ForwardIcon}
                alt="forward icon"
                className={styles.forwardIcon}
              />
            </div>
          ))}
        </>

        <div>
          <CustomFilledButton width={"11.8125rem"}>
            <span>Load more</span>
          </CustomFilledButton>
        </div>

        {/* <Button className={styles.SubmitButton}>Load more</Button> */}
      </div>
    </div>
  );
}

export default OpenRoles;
