import React, { useEffect, useState } from "react";

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

const Lesson8 = () => {
  const [error, setError] = useState("");
  const isLongError = error.length > 10;

  return (
    <>
      {/* <MaybeError text="text" moreText="More TEXT" error={error} /> */}
      <br />
      <br />
      <input
        key={isLongError}
        value={error}
        onChange={e => setError(e.target.value)}
      />
      {isLongError && "TOO MUCH"}
    </>
  );
};

export default Lesson8;
