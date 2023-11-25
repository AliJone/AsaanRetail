import ApplicationFormFeilds from "../ApplicationFormFeilds/ApplicationFormFeilds";
import Card from "./headingCard";
import cn from "classnames";
import style from "./styleSheet.module.sass";

const Responsibilities = [
  {
    title: "Responsibilities",
    Bullets: [
      "Work with the Product Development team on new features and releases.",
      "Analyze, propose and drive technology improvements.",
      "Build efficient, testable, and reusable modules.",
      "You will have the room to work on new features while maintenance and improvement in the current product will also play a big part in your role.",
    ],
  },
  {
    title: "Responsibilities",
    Bullets: [
      "Work with the Product Development team on new features and releases.",
      "Analyze, propose and drive technology improvements.",
      "Build efficient, testable, and reusable modules.",
      "You will have the room to work on new features while maintenance and improvement in the current product will also play a big part in your role.",
    ],
  },
  {
    title: "Responsibilities",
    Bullets: [
      "Work with the Product Development team on new features and releases.",
      "Analyze, propose and drive technology improvements.",
      "Build efficient, testable, and reusable modules.",
      "You will have the room to work on new features while maintenance and improvement in the current product will also play a big part in your role.",
    ],
  },
];

const JobsDetails = [
  { title: "Job type:", detail: "Full time/Part time" },
  { title: "Category:", detail: "Engineering" },
  { title: "Location:", detail: "Karachi, Pakistan" },
];

const HeroSection = () => {
  return (
    <>
      <div className={cn(style.heroSection)}>
        <Card title={"Software Engineering – Php/Laravel/Vue/React"} />
        <div className={cn(style.spacer1)} />
        <div className={cn(style.textFrame)}>
          <div className={cn(style.responsibiltyContainer)}>
            {Responsibilities.map((item, index) => {
              return (
                <div className={cn(style.responsibiltyCard)}>
                  <span className={cn(style.responsibiltyCardTitle)}>
                    {item.title}
                  </span>
                  <ul className={cn(style.ulClass)}>
                    {item["Bullets"].map((item, index) => {
                      return (
                        <li >
                          <span className={cn(style.responsibiltyCardBullet)}>
                            {item}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className={cn(style.jobContainer)}>
            {JobsDetails.map((item, index) => {
              return (
                <div className={cn(style.jobCard)}>
                  <span className={cn(style.jobCardTitle)}>{item.title}</span>
                  <span className={cn(style.jobCardSubTitle)}>
                    {item.detail}
                  </span>
                </div>
              );
            })}
          </div>
          <div className={cn(style.spacer2)} />
        </div>

        <ApplicationFormFeilds />
      </div>
    </>
  );
};

export default HeroSection;
