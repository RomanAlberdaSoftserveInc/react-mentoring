import { useState } from "react";

// 1. Handle component in Un-Controlled state
// 2. To wrap or not to wrap?
// 3. Mediator

// Control
// ===============================================================

const Component1 = () => {
  return <input />;
};

const UnControlledComponent = () => {
  const [value, setValue] = useState("");

  const handleClear = () => setValue("");

  return (
    <>
      <input value={value} onChange={e => setValue(e.target.value)} />
      <span onClick={handleClear}>X</span>
    </>
  );
};

const ControlledComponent = ({ value, onChange, ...rest }) => {
  return (
    <>
      <input
        {...rest}
        value={value}
        onChange={e => onChange?.(e.target.value, e)}
      />
    </>
  );
};

const RightComponent = ({ value, onChange, defaultValue, ...rest }) => {
  const [localValue, setLocalValue] = useState(defaultValue ?? "");

  const handleChange = (newValue, ...params) => {
    setLocalValue(newValue);
    onChange?.(newValue, ...params);
  };

  return (
    <ControlledComponent
      {...rest}
      value={value ?? localValue}
      onChange={handleChange}
    />
  );
};

// Wrappers
// ===============================================================

const Columns = ({ count, text, style, className, ...rest }) => {
  return (
    <div
      {...rest}
      className={`test-1 ${className ?? ""}`}
      style={{ ...style, columnCount: count }}
    >
      {text}
    </div>
  );
};

const AutoColumns = ({ text = "", ...rest }) => {
  const count = text?.length > 20 ? 3 : 1;

  return <Columns {...rest} text={text} count={count} />;
};

// Mediator
// ===============================================================

const Mediator = () => {
  const [value, setValue] = useState({
    text: "",
    count: 2,
  });

  const { text, count } = value;

  const handleChangeText = text => setValue({ ...value, text });
  const handleCountChange = count => setValue({ ...value, count });

  return (
    <div>
      <RightComponent
        value={text}
        style={{ color: "green" }}
        onChange={handleChangeText}
      />
      <br />
      <span onClick={() => handleCountChange(count + 1)}> + </span>
      <span onClick={() => handleCountChange(count - 1)}> - </span>
      <span>Count: {count}</span>
      <br />
      <br />
      <Columns text={text} count={count} style={{ wordBreak: "break-all" }} />
    </div>
  );
};

const Lesson2 = () => {
  const [value, setValue] = useState(undefined);

  const handleClear = () => setValue(undefined);

  return (
    <>
      <h1>How to not fuck up components?</h1>
      {/* <input value={value} onChange={e => setValue(e.target.value)} />
      <span onClick={handleClear}>X</span> */}
      {/* <div>
        <Component1 />
      </div> */}
      {/* <div>
        <UnControlledComponent />
      </div> */}
      {/* <div>
        <ControlledComponent value={value} onChange={setValue} />
        <span onClick={handleClear}>X</span>
      </div> */}
      {/* <div>
        <RightComponent value={value} onChange={setValue} />
        <span onClick={handleClear}>X</span>
      </div> */}
      {/* <Columns
        count={2}
        style={{ color: "red", columnCount: 4 }}
        className="columns-1"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum"
      /> */}

      {/* <AutoColumns
        count={2}
        text="Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum"
      /> */}

      {/* <AutoColumns text="Hello Hello Hello" /> */}
      <Mediator />
    </>
  );
};

export default Lesson2;
