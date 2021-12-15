import React, { useEffect, useRef, useState } from "react";

const element = <div className="test">JSX</div>;
// console.log(element);

// console.log(React.createElement("div", { className: "test" }, "JSX"));

const BaseComponent = ({ children }) => {
  //   useEffect(() => {
  //     const timer = setTimeout(() => {}, 2000);

  //     return () => {
  //       clearTimeout(timer);
  //     };
  //   }, [userId]);

  return (
    <div>
      {element}
      {children}
    </div>
  );
};

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 2,
    };

    this.ref = React.createRef();
  }

  componentDidMount() {
    this.load?.();
  }
  componentDidUpdate() {
    //   prevprops !== this.props && this.load?.();
  }
  componentWillUnmount() {}

  render() {
    return "Lesson1";
  }
}

const Lesson1 = () => {
  const classComponentRef = useRef(null);
  //   const component = (
  //     <BaseComponent ref={classComponentRef} prop1="t1">
  //       element2
  //     </BaseComponent>
  //   );
  //   console.log(component);

  const classComponent = <ClassComponent ref={classComponentRef} prop1="p1" />;
  console.log(classComponent);
  console.log(classComponentRef.current);
  const a = {};

  console.log(a?.b?.c?.d ?? "111");

  return classComponent;
  //   return component;
};

export default Lesson1;
