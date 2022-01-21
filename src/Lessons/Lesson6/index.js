import React, { useState } from "react";

const Classroom = ({ children, minAge }) => {
  const childrenArray = React.Children.toArray(children);
  //   console.log(React.Children.only(children));

  //   const res = minAge
  //     ? childrenArray.filter(child => child.props.age > minAge)
  //     : childrenArray;

  //   return res;

  return (
    <>
      {React.Children.map(childrenArray, child => {
        return React.cloneElement(child, {
          name: `Student ${child.props.name}`,
          onClick: () => alert(child.props.name),
        });
      })}
    </>
  );
};

const Child = ({ name, onClick }) => {
  return <div onClick={onClick}>My name is {name}</div>;
};

const Header = ({ children, onClick }) => (
  <div style={{ background: "lightgrey" }} onClick={onClick}>
    {children}
  </div>
);

const Content = ({ children }) => children;

const Collapser = ({ children, defaultCollapsed }) => {
  const [collapsed, setCollapsed] = useState(defaultCollapsed ?? true);

  const handleToogle = () => setCollapsed(c => !c);

  return React.Children.map(children, child => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (child.type === Header) {
      return React.cloneElement(child, { onClick: handleToogle });

      //   return {
      //     ...child,
      //     props: {
      //       ...child.props,
      //       onClick: handleToogle,
      //     },
      //   };
    }
    if (child.type === Content) return collapsed ? null : child;

    return child;
  });
};

Collapser.Header = Header;
Collapser.Content = Content;

const RenderProp = ({ children, render }) => {
  if (render) return render("TEst");

  return children("TEXT");
};

const Lesson6 = () => {
  return (
    // <Collapser>
    //   <Collapser.Header>Click Me!</Collapser.Header>
    //   <Collapser.Content>Hide Me!</Collapser.Content>
    //   21312312
    // </Collapser>
    <RenderProp
      render={text => <span style={{ background: "blue" }}>{text}</span>}
    >
      {something => <div style={{ background: "red" }}>{something}</div>}
    </RenderProp>
    // <Classroom minAge={12}>
    //   <Child name="Ivan" age={13} />
    //   <Child name="Tony" age={10} />
    //   <Child name="Barry" age={14} />
    //   <Child name="Mark" age={11} />
    // </Classroom>
  );
};

export default Lesson6;
