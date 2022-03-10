import React, { useEffect, useRef, useState } from "react";

const MoreText = ({ children }) => {
  useEffect(() => {
    console.log("MOUNT");
  }, []);

  return <span>{children}</span>;
};

const MaybeError = ({ text, moreText, error }) => {
  if (error) {
    return (
      <div>
        <div>{text}</div>
        <p>{error}</p>
        <MoreText key="2">{moreText}</MoreText>
      </div>
    );
  }

  return (
    <div>
      <div>{text}</div>
      {/* {!!error && <p>{error}</p>} */}
      <MoreText key="2">{moreText}</MoreText>
    </div>
  );
};

// class Timer extends React.Component {
//   state = {
//     time: 0,
//   };
//   constructor() {
//     super();
//     this.timer = null;
//   }

//   componentDidMount() {
//     this.timer = setInterval(() => {
//       console.log("HERE");
//       this.setState(({ time }) => ({ time: time + 1 }));
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timer);
//   }

//   render() {
//     return `Elapsed time: ${this.state.time}s`;
//   }
// }

const Timer = ({ children, limit }) => {
  const [time, setTime] = useState(0);
  // const timer = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("HERE");
      setTime(time => time + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return time > limit ? "Sorry" : children;
};

const Lesson8 = () => {
  const [error, setError] = useState("");
  const isLongError = error.length > 10;

  return (
    <>
      <Timer limit={10}>Content</Timer>
      {/* <MaybeError text="text" moreText="More TEXT" error={error} /> */}
      {/* <br />
      <br />
      <input
        key={isLongError}
        value={error}
        onChange={e => setError(e.target.value)}
      />
      {isLongError && "TOO MUCH"} */}
    </>
  );
};

export default Lesson8;
