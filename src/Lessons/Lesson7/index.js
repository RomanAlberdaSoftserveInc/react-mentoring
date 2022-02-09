import React, { useEffect, useRef, useState, useImperativeHandle } from "react";

class ClassComponent extends React.Component {
  state = {
    st1: 22,
  };

  handleIncrement = () => {
    this.setState(s => ({
      ...s,
      st1: s.st1 + 1,
    }));
  };

  render() {
    return <div>Class</div>;
  }
}

const FunctionalComponent = ({}) => {
  return <div>FunctionalComponent</div>;
};

const Input = ({ value, onChange, myRef }) => {
  return (
    <input
      ref={myRef}
      value={value}
      onChange={onChange}
      style={{ fontSize: 24 }}
    />
  );
};

const ForwardedInput = React.forwardRef((props, ref) => (
  <Input {...props} myRef={ref} />
));

const Counter = React.forwardRef((props, ref) => {
  const [count, setCount] = useState(0);

  useImperativeHandle(ref, () => ({
    reset: () => setCount(0),
  }));

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Increment</button>
      Counter: {count}
    </div>
  );
});

const UserWidgetComponent = React.memo(({ data }) => {
  const [thisData, setData] = useState(data);
  console.log(data);

  return (
    <div style={{ color: "green", background: "yellow", padding: 10 }}>
      {thisData.name}
    </div>
  );
});

const UserWidget = ({ userId }) => {
  const [data, setData] = useState({});
  const [currentUserId, setCurrentUserId] = useState(userId);

  useEffect(() => {
    let ignore = false;
    const controller = new AbortController();
    const signal = controller.signal;

    const performFetch = async () => {
      try {
        // await new Promise(resolve => setTimeout(resolve, 200));
        const data = await (
          await fetch(`https://swapi.dev/api/people/${userId}/`, { signal })
        ).json();

        !ignore && setData(data);
        !ignore && setCurrentUserId(userId);
      } catch (ex) {}
    };

    const timedOutFetch = setTimeout(performFetch, 200);

    return () => {
      ignore = true;
      controller.abort();
      clearTimeout(timedOutFetch);
    };
  }, [userId]);

  return <UserWidgetComponent data={data} key={currentUserId} />;
};

const Lesson7 = () => {
  // const ref = useRef();
  const [userId, setUserId] = useState("1");

  // const [key, setKey] = useState(1);
  // const handleReset = () => setKey(c => c + 1);
  // const handleReset = () => {
  //   console.log(ref.current);
  //   ref.current.reset();
  // };

  // useEffect(() => {
  // ref.current.focus();
  // }, []);

  return (
    <>
      <input value={userId} onChange={e => setUserId(e.target.value)} />

      <UserWidget userId={userId} />
      {/* <Counter ref={ref} /> */}
      {/* <button onClick={handleReset}>Reset</button> */}
      {/* <ClassComponent prop1="1" ref={ref} /> */}
      {/* <FunctionalComponent ref={ref} /> */}
      {/* <ForwardedInput ref={ref} /> */}
      {/* <input ref={ref} style={{ fontSize: 24 }} /> */}
      {/* <input ref={ref} style={{ fontSize: 24 }} /> */}
      {/* <button
        onClick={() => {
          console.log(ref.current);
          ref.current.focus();
        }}
      >
        Focus
      </button> */}
    </>
  );
};

export default Lesson7;
