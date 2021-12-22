import React from "react";

import { useWindowWidth } from "./useResizeObserver";

// 1. HOC
// 2. custom hooks
// 3. hook + view
// [1, 2, 3].map(item => item > 2);

// NEXT:
// Hooks
// Webpack
// Design Patterns

const defaultStyle = {
  width: 150,
  height: 150,
  border: "1px solid grey",
};

const Box = ({ children, style, color }) => {
  return <div style={{ ...defaultStyle, ...style, color }}>{children}</div>;
};

const withRed = Component => {
  return props => <Component {...props} color="red" />;
};

const RedBox = withRed(Box);

const withWidth = Component => {
  return ({ style, ...props }) => {
    const [width] = useWindowWidth();

    const thisStyle = {
      ...style,
      width: width > 1200 ? 400 : 200,
    };

    return <Component {...props} style={thisStyle} />;
  };
};

// const ResponsiveBox = withWidth(Box);
const ResponsiveRedBox = withRed(withWidth(Box));

const withColor = color => Component => {
  return props => <Component {...props} color={color} />;
};

const BlueBox = withColor("blue")(Box);

const withNewRed = withColor("red");
const NewRedBox = withNewRed(Box);

const Lesson3 = () => {
  const [width] = useWindowWidth();

  return (
    <div>
      Window width : {width}px
      {/* <Box>Hello I'm a Box</Box>
      <Box color="red">Hello I'm a Red Box</Box> */}
      {/* <RedBox>Hello I'm also a Red Box</RedBox> */}
      <ResponsiveRedBox style={{ height: 100 }}>Hello I adapt</ResponsiveRedBox>
      {/* <RedBox color="green">Hello I'm still a Red Box</RedBox> */}
      <BlueBox>I'm blue da ba dee da ba die</BlueBox>
      <NewRedBox>RED NEW</NewRedBox>
    </div>
  );
};

export default Lesson3;
