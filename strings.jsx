import UseCase from './images/svgs/UseCase.svg';
import analytics from './images/svgs/icons/Analytics.svg';
import google from './images/svgs/logos/google.svg';
import highfy from './images/svgs/logos/highfy.svg';
import inventory from './images/svgs/icons/InventoryManagement.svg';
import linkedIn from './images/svgs/logos/linkedIn.svg';
import orders from './images/svgs/icons/OrderManagement.svg';
import orient from './images/svgs/logos/orient.svg';
import peachmart from './images/svgs/logos/peachMart.svg';
import stripe from './images/svgs/logos/stripe.svg';

const TilesProduct  = [
    {
        title: "Inventory Management",
        content : "A 360° view of all your inventory from all the locations at one place."
    },
    {
        title: "Shipment Management",
        content : "Bulk ship now with our easy-to-use software and print labels for fulfillment"
    },
    {
        title: "Accounting & Finances",
        content : "Digitize and automate your entire accounting process with a highly sophisticated built-in accounting module."
    },
    {
        title: "Analytics & Insights",
        content : "Make informed business decisions from data savvy reports offering actionable insights."
    },
    {
        title: "Orders Management",
        content : "Order workflows, order status sync & return management for all your sales channels."
    },
    {
        title: "Point of Sales",
        content : "FBR integrated Point of Sales System (POS) that allows retailers like you to sell from multiple retail outlets"
    }
]

const TilesSolution = [
    {
        title: "For Retail",
        content : "A 360° view of all your inventory from all the locations at one place."
    },
    {
        title: "For Ecommerce",
        content : "Bulk ship now with our easy-to-use software and print labels for fulfillment"
    },
    {
        title: "For 3PL",
        content : "Digitize and automate your entire accounting process with a highly sophisticated built-in accounting module."
    },
    {
        title: "For Wholesalers",
        content : "Make informed business decisions from data savvy reports offering actionable insights."
    },
    {
        title: "For Service Providers",
        content : "Order workflows, order status sync & return management for all your sales channels."
    },
    
]

const TilesResources = [
    {
        title: "Careers",
        content : "A 360° view of all your inventory from all the locations at one place."
    },
    {
        title: "Contact Us",
        content : "Bulk ship now with our easy-to-use software and print labels for fulfillment"
    },
    {
        title: "Articles",
        content : "Digitize and automate your entire accounting process with a highly sophisticated built-in accounting module."
    },
    {
        title: "Integrations",
        content : "Make informed business decisions from data savvy reports offering actionable insights."
    },
]


const LandingPageText = {
    TextB4ColorText : "Elevate Your",
    TextColorText : "Business",
    TextAfterColorText : "with",
    TextAfterColorText2 : "Asaan Retail"
}

const CarouselImages = [google,peachmart,highfy,linkedIn,stripe,orient]

const IntegrationText = {
    Title: "Integrate, Innovate, Elevate",
    subTitle : `With Asaan Retail's robust integration capabilities, innovate your retail operations by \nseamlessly connecting with leading solutions.`
}

const FeaturesText = {
    Title : "Features that \nMake a Difference",
    subTitle:"Explore the Rich Array of Features That Set Asaan Retail Apart \nand Boost Your Business"
}

const FeatureList = [
    {
        icon: inventory,
        title: "Inventory Management",
        list: [
            "Centralize and manage your inventory across multiple sales channels.",
            "Real-time inventory updates ensure accurate stock levels and prevent overselling.",
            "Efficiently track product variants, bundles, and promotions for better inventory control."
        ]
    },
    {
        icon: orders,
        title: "Orders Processing",
        list: [
            "Automate and streamline your order fulfillment process.",
            "Easily process orders from multiple sales channels in one centralized system.",
            "Improve order accuracy and reduce processing time with automated workflows."
        ]
    },
    {
        icon: analytics,
        title: "Real-Time Reporting",
        list: [
            "Gain valuable insights into your Ecommerce performance.",
            "Access real-time reports on sales, revenue, and inventory levels.",
            "Analyze customer behavior, identify trends, and make data-driven decisions to drive business growth."
        ]
    }  
]

const CTASectionText = {
    Title : "Unlock Efficiency & \nProductivity with Automation",
    subTitle: "Discover How Asaan Retail's Automation Features Can Simplify \nTasks and Boost Business Efficiency"
}

const VideoSectionText ={
    Title : "Success in the Spotlight",
    subTitle: "Explore Real-Life Success Stories of Businesses Empowered by \nAsaan Retail's Solutions."
}

const useCaseSection1Text = {
    Title : "Real-time \nInventory monitoring",
    subTitle: "Asaan Retail synchronizes inventory across all of your sales channels and warehouses.",
    image : UseCase,
    items:[
        {
            title:"Streamlined Inventory Sync",
            subTitle: "Effortlessly synchronize inventory across all your sales channels and warehouses with Asaan Retail."
        },
        {
            title:"Seamless Multichannel Integration",
            subTitle: "Connect your inventory seamlessly across multiple sales channels and locations in just a few clicks. Real-time updates ensure accurate stock levels across platforms."
        },
        {
            title:"Real-time Stock Monitoring",
            subTitle: "Stay on top of your stock levels with real-time monitoring. Asaan Retail provides instant visibility into your inventory, allowing you to prevent stockouts and optimize replenishment."

        }
    ]
}


const useCaseSection2Text = {
    Title : "Hassle Free \nProduct Management",
    subTitle: "Asaan Retail tracks your inventory at all times, updates stock and generates alerts whenever required.",
    image : UseCase,
    items:[
        {
            title:"Streamlined Inventory Sync",
            subTitle: "Effortlessly synchronize inventory across all your sales channels and warehouses with Asaan Retail."
        },
        {
            title:"Seamless Multichannel Integration",
            subTitle: "Connect your inventory seamlessly across multiple sales channels and locations in just a few clicks. Real-time updates ensure accurate stock levels across platforms."
        },
        {
            title:"Real-time Stock Monitoring",
            subTitle: "Stay on top of your stock levels with real-time monitoring. Asaan Retail provides instant visibility into your inventory, allowing you to prevent stockouts and optimize replenishment."

        }
    ]
}

export {TilesProduct,TilesResources,TilesSolution, LandingPageText , CarouselImages, IntegrationText,FeaturesText, FeatureList , CTASectionText, VideoSectionText, useCaseSection1Text, useCaseSection2Text}