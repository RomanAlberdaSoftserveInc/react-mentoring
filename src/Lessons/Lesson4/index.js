import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

// 1. Mount. [ {}, "Hello" ]
// 2. Update. [ {}, "Hello" ]
// 3. SetState({ a: 1 }, "Hello")
// 4. Update [{ a: 1 }, "Hello"]

// const BadComponent = ({ userId }) => {
//   if (!userId) return null;

//   useEffect(() => {
//     // load
//   }, [userId]);

//   return <div>User Widget</div>;
// };

// const CorrectComponent = ({ userId }) => {
//   useEffect(() => {
//     if (!userId) return;

//     // load
//   }, [userId]);

//   if (!userId) return null;

//   return <div>User Widget</div>;
// };

const heavyFunc = () => {
  for (let index = 0; index < 500000; index++) {
    // const element = array[index];
  }
  console.log("READY");

  return "YES";
};

const StateHooks = () => {
  //   const [state, setState] = useState({});
  //   const [state, setState] = useState(() => "Intitial Value");
  //   const [state, setState] = useState(heavyFunc());
  const [state, setState] = useState(heavyFunc);
  const [count, setCount] = useState(0);

  return <button onClick={() => setCount(c => c + 1)}>{count}</button>;
};

const RefHooks = () => {
  const ref = useRef(0);
  const [dummy, setDummy] = useState(0);

  return (
    <>
      <button onClick={() => ref.current++}>{ref.current}</button>
      <div onClick={setDummy}>REFRESH</div>
    </>
  );
};

const CallbackHooks = () => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    ref.current = count;
  }, [count]);

  //   const handleIncrement = useCallback(() => setCount(c => c + 1), []);
  const handleIncrement = useCallback(() => setCount(ref.current + 1), []);
  //   const handleIncrement = useCallback(() => setCount(count + 1), [count]);

  return (
    <>
      <button>{count}</button>
      <Consumer onClick={handleIncrement} />
    </>
  );
};

const MemoHooks = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  //   const res = heavyFunc();
  const res = useMemo(() => heavyFunc(text), [text]);
  const handleIncrement = useMemo(() => () => setCount(c => c + 1), []);

  return (
    <>
      <button onClick={handleIncrement}>{count}</button>
      <input value={text} onChange={e => setText(e.target.value)} />
      {res}
    </>
  );
};

const Consumer = React.memo(({ onClick }) => {
  console.log("Consumer render");

  return <div onClick={onClick}>+</div>;
});

const Lesson4 = () => {
  //   const [state, setState] = useState({});
  //   const [state1, setState1] = useState("Hello");

  //   if (state1.length > 10) {
  //     const [st2, setSt2] = useState("Test");
  //   }

  //   useMemo(() => {}, []);

  return (
    <>
      {/* <StateHooks /> */}
      {/* <CallbackHooks /> */}
      {/* <RefHooks /> */}
      <MemoHooks />
    </>
  );
};

export default Lesson4;
