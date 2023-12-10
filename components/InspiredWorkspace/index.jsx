import FeatureCard from "./featureCard";
import cn from "classnames";
import limit from "../../styles/Limits.module.css";
import style from "./styleSheet.module.sass";

const data = [
  [
    {
      title: "inspired WorkSpace",
      description: `Our office is designed with the energy and creativity of startups in mind. You'll find open, collaborative spaces that foster idea sharing and problem-solving.`,
    },
    {
      title: "Learning-driven culture",
      description: `Startup culture is one of constant learning, and we've embedded this ethos. Here, you'll have access to a wealth of resources to help you grow both personally and professionally.`,
    },
    {
      title: "Accelerated growth",
      description: `Just like a startup, you'll experience rapid growth here. With exposure to cutting-edge technology and a supportive team, you'll take your career to the next level.`,
    },
    {
      title: "Diverse collaboration",
      description: `You'll interact with people who have different skills, experiences, and perspectives, which can be a rich source of inspiration and personal growth.`,
    },
    {
      title: "Networking opportunities",
      description: `Connect with professionals from diverse backgrounds. You'll have the opportunity to build a strong network, both internally and externally.`,
    },
    {
      title: "Feedback culture",
      description: `Open communication is important to us. Expect regular feedback and performance reviews to ensure you're on the right track and constantly improving.`,
    },
  ],
  [
    {
      title: `Tools &Support`,
      description: `Empower your journey with a wealth of resources - from informative webinars to insightful use cases. We've got your back at every step, ensuring you succeed.`,
    },
    {
      title: `10% Recurring Rewards`,
      description: `As a Partner, you're in for an exciting opportunity. Earn a steady 10% commission by introducing your clients to Asaan Retail. You bring them, and we'll take care of the rest.`,
    },
    {
      title: `Top-Notch Support`,
      description: `Exceptional customer support is not just a commitment; it's our pride. We offer world-class assistance to both you and your clients. Rest assured, you're in good hands.`,
    },
    {
      title: `Prominent Presence`,
      description: `Boost your visibility on our partnership page, making it easy for potential customers to discover and connect with your business means opportunities to grow.`,
    },
    {
      title: `Join the Community`,
      description: `Join our exclusive partnership community, where you can connect, learn, and exchange ideas with fellow partners. It's a space for collaboration and mutual growth.`,
    },
    {
      title: `Dedicated Manager`,
      description: `No more frustrating runarounds. You'll have a dedicated point of contact manager assigned to you. Get answers quickly and efficiently, so you can focus on what you do.`,
    },
  ],
];

const InspiredWorkspace = ({ number }) => {
  return (
    <div className={cn(style.FeaturesV2Section)}>
      <div className={cn(limit.Limit)}>
        <div className={cn(style.featureCardFrame)}>
          <FeatureCard
            title={data[number][0]["title"]}
            description={data[number][0]["description"]}
          />
          <FeatureCard
            title={data[number][1]["title"]}
            description={data[number][1]["description"]}
          />
          <FeatureCard
            title={data[number][2]["title"]}
            description={data[number][2]["description"]}
          />
          <FeatureCard
            title={data[number][3]["title"]}
            description={data[number][3]["description"]}
          />
          <FeatureCard
            title={data[number][4]["title"]}
            description={data[number][4]["description"]}
          />
          <FeatureCard
            title={data[number][5]["title"]}
            description={data[number][5]["description"]}
          />
        </div>
      </div>
    </div>
  );
};

export default InspiredWorkspace;
