import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const withScrollAnimation = (WrappedComponent, className) => {
  return function (props) {
    return (
      <ScrollAnimation animateOnce={true} animateIn={className}>
        <WrappedComponent {...props} /> 
      </ScrollAnimation>
    );
  };
};

export default withScrollAnimation;
