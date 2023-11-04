import FeatureCard from "./featureCard";
import cn from "classnames";
import style from "./styleSheet.module.sass";

const InspiredWorkspace = () =>{

    return(
        <div className={cn(style.FeaturesV2Section)}>
            <div className={cn(style.featureCardFrame)}>
                <FeatureCard title="Inspired workspace" description="Our office is designed with the energy and creativity of startups in mind. You'll find open, collaborative spaces that foster idea sharing and problem-solving."/>
                <FeatureCard title="Learning-driven culture" description="Startup culture is one of constant learning, and we've embedded this ethos. Here, you'll have access to a wealth of resources to help you grow both personally and professionally."/>
                <FeatureCard title="Accelerated growth" description="Just like a startup, you'll experience rapid growth here. With exposure to cutting-edge technology and a supportive team, you'll take your career to the next level."/>
                <FeatureCard title="Diverse collaboration" description="You'll interact with people who have different skills, experiences, and perspectives, which can be a rich source of inspiration and personal growth."/>
                <FeatureCard title="Networking opportunities" description=" Connect with professionals from diverse backgrounds. You'll have the opportunity to build a strong network, both internally and externally."/>
                <FeatureCard title="Feedback culture" description="Open communication is important to us. Expect regular feedback and performance reviews to ensure you're on the right track and constantly improving."/>
            </div>
            
        </div>
    )

}

export default InspiredWorkspace;