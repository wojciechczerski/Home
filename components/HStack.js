const HStack = props => (
  <div
    style={{
      display: "flex",
      justifyContent: props.align || "flex-start"
    }}
  >
    {props.children}
  </div>
);

export default HStack;
