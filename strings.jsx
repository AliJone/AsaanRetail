import UseCase from "./images/svgs/UseCase.svg";
import analytics from "./images/svgs/icons/Analytics.svg";
import analyticsMobile from "./images/svgs/icons/RealtimeProcessingLogo.svg";
import google from "./images/svgs/logos/google.svg";
import highfy from "./images/svgs/logos/highfy.svg";
import inventory from "./images/svgs/icons/InventoryManagement.svg";
import inventoryMobile from "./images/svgs/icons/IntegrationLogo.svg";
import linkedIn from "./images/svgs/logos/linkedIn.svg";
import orders from "./images/svgs/icons/OrderManagement.svg";
import ordersMobile from "./images/svgs/icons/OrderprocessionLogo.svg";
import orient from "./images/svgs/logos/orient.svg";
import peachmart from "./images/svgs/logos/peachMart.svg";
import stripe from "./images/svgs/logos/stripe.svg";

const TilesProduct = [
  {
    title: "Inventory Management",
    content:
      "Effortless inventory control for a streamlined and organized business",
  },
  {
    title: "Orders Management",
    content:
      "Automate orders, from placement to delivery for a smooth customer journey",
  },
  {
    title: "Accounting & Finances",
    content:
      "Precision in finance management, ensuring accuracy and efficiency",
  },
  {
    title: "Analytics & Insights",
    content:
      "Gain profound insights and analytics to drive data-informed decisions",
  },
  {
    title: "Shipment Management",
    content:
      "Simplified shipment processes for punctual and reliable deliveries",
  },
  {
    title: "Point of Sales",
    content:
      "Efficiently manage your transactions and enhance customer experience",
  },
];

const TilesSolution = [
  {
    title: "For Retail",
    content: "Revolutionize retail operations with integrated solutions",
  },
  {
    title: "For Ecommerce",
    content: "Empower ecommerce business with tailored solutions",
  },
  {
    title: "For 3PL",
    content: "Optimize logistics with solutions designed for 3PL",
  },
  {
    title: "For Agencies",
    content:
      "solutions designed for multi-channel management and operational efficiency.",
  },
  {
    title: "For D2C Brands",
    content:
      "Transform D2C brands with efficient inventory and order management",
  },
];

const TilesResources = [
  {
    title: "Careers",
    content: "Explore exciting career opportunities with Asaan Retail",
  },
  {
    title: "Contact Us",
    content: "Reach out to us, we're here to assist you with any queries",
  },
  {
    title: "Articles",
    content: "Stay informed and inspired with our articles",
  },
  {
    title: "Integrations",
    content:
      "Effortlessly integrate local couriers and sales channels in one central hub",
  },
];

const LandingPageText = {
  TextB4ColorText: "Elevate Your",
  TextColorText: "Business",
  TextAfterColorText: "with",
  TextAfterColorText2: "Asaan Retail",
};

const CarouselImages = [google, peachmart, highfy, linkedIn, stripe, orient];

const IntegrationText = {
  Title: "Integrate, Innovate, Elevate",
  subTitle: `With Asaan Retail's robust integration capabilities, innovate your retail operations by \nseamlessly connecting with leading solutions.`,
};

const FeaturesText = {
  Title: "Features that \nMake a Difference",
  subTitle:
    "Explore the Rich Array of Features That Set Asaan Retail Apart \nand Boost Your Business",
};

const FeatureList = [
  {
    icon: inventory,
    iconMobile: inventoryMobile,
    title: "Inventory Management",
    titleMobile: "Inventory Management",
    list: [
      "Centralize and manage your inventory across multiple sales channels.",
      "Real-time inventory updates ensure accurate stock levels and prevent overselling.",
      "Efficiently track product variants, bundles, and promotions for better inventory control.",
    ],
  },
  {
    icon: orders,
    iconMobile: ordersMobile,
    title: "Orders Processing",
    titleMobile: "Orders Processing",
    list: [
      "Automate and streamline your order fulfillment process.",
      "Easily process orders from multiple sales channels in one centralized system.",
      "Improve order accuracy and reduce processing time with automated workflows.",
    ],
  },
  {
    icon: analytics,
    iconMobile: analyticsMobile,
    title: "Real-Time Reporting",
    titleMobile: "RealTime Reporting",
    list: [
      "Gain valuable insights into your Ecommerce performance.",
      "Access real-time reports on sales, revenue, and inventory levels.",
      "Analyze customer behavior, identify trends, and make data-driven decisions to drive business growth.",
    ],
  },
];

const CTASectionText = {
  Title: "Unlock Efficiency & \nProductivity with Automation",
  subTitle:
    "Discover How Asaan Retail's Automation Features Can Simplify \nTasks and Boost Business Efficiency",
};

const VideoSectionText = {
  Title: "Asaan Retail in action",
  subTitle:
    "Explore Real-Life Success Stories of Businesses Empowered by \nAsaan Retail's Solutions.",
};

const useCaseSection1Text = {
  Title: "Real-time \nInventory monitoring",
  subTitle:
    "Asaan Retail synchronizes inventory across all of your sales channels and warehouses.",
  image: UseCase,
  items: [
    {
      title: "Streamlined Inventory Sync",
      subTitle:
        "Effortlessly synchronize inventory across all your sales channels and warehouses with Asaan Retail.",
    },
    {
      title: "Seamless Multichannel Integration",
      subTitle:
        "Connect your inventory seamlessly across multiple sales channels and locations in just a few clicks. Real-time updates ensure accurate stock levels across platforms.",
    },
    {
      title: "Real-time Stock Monitoring",
      subTitle:
        "Stay on top of your stock levels with real-time monitoring. Asaan Retail provides instant visibility into your inventory, allowing you to prevent stockouts and optimize replenishment.",
    },
  ],
};

const useCaseSection2Text = {
  Title: "Hassle Free \nProduct Management",
  subTitle:
    "Asaan Retail tracks your inventory at all times, updates stock and generates alerts whenever required.",
  image: UseCase,
  items: [
    {
      title: "Streamlined Inventory Sync",
      subTitle:
        "Effortlessly synchronize inventory across all your sales channels and warehouses with Asaan Retail.",
    },
    {
      title: "Seamless Multichannel Integration",
      subTitle:
        "Connect your inventory seamlessly across multiple sales channels and locations in just a few clicks. Real-time updates ensure accurate stock levels across platforms.",
    },
    {
      title: "Real-time Stock Monitoring",
      subTitle:
        "Stay on top of your stock levels with real-time monitoring. Asaan Retail provides instant visibility into your inventory, allowing you to prevent stockouts and optimize replenishment.",
    },
  ],
};

export {
  TilesProduct,
  TilesResources,
  TilesSolution,
  LandingPageText,
  CarouselImages,
  IntegrationText,
  FeaturesText,
  FeatureList,
  CTASectionText,
  VideoSectionText,
  useCaseSection1Text,
  useCaseSection2Text,
};
