const Text = props => (
  <div
    style={{
      color: "white",
      fontSize: "1em",
      fontFamily: "Arial, Helvetica, sans-serif",
      lineHeight: "1.4"
    }}
  >
    {props.children}
  </div>
);

export default Text;
