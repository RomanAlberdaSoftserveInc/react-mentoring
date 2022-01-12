import React from "react";

import {
  Provider,
  ChangeProvider,
  useUniverseContext,
  useUniverseChangeContext,
} from "./context";

// 1. re-renders optimization
// 2. context
// 3. tricks with callbacks

// const Component1 = ({ prop1, ...rest }) => {
//   return <Component2 {...rest} />;
// };

// const Component2 = ({ prop2, ...rest }) => {
//   return <Component3 {...rest} />;
// };

// const Component3 = ({ prop3, ...rest }) => {
//   return "Component3";
// };

// const ComponentComplex = ({}) => {
//   return <Component1 prop1="text" prop3="passed" />;
// };

const Component1 = () => {
  return <UniverseQuestion />;
};

const UniverseQuestion = () => {
  const { answer, onChange } = useUniverseContext();

  return <div onClick={() => onChange(c => c + 1)}>{answer}</div>;
};

const Plus = () => {
  const onChange = useUniverseChangeContext();

  console.log("Render");

  return <div onClick={() => onChange(c => c + 1)}>+</div>;
};

const Lesson5 = () => {
  return (
    <>
      <Provider>
        <ChangeProvider>
          <UniverseQuestion />
          <Component1 />
          <Plus />
          {/* <Provider>
            <ChangeProvider>
              <Plus />
            </ChangeProvider>
          </Provider> */}
        </ChangeProvider>
      </Provider>
    </>
  );
};

export default Lesson5;
