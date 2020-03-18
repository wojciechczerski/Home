const VStack = props => (
  <div
    style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: props.align || "flex-start"
    }}
  >
    {props.children}
  </div>
);

export default VStack;
