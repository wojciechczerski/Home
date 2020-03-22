const style = props => {
  if (props.width) {
    return {
      width: props.width,
      height: "100%"
    };
  } else if (props.height) {
    return {
      width: "100%",
      height: props.height
    };
  } else {
    return {};
  }
};

const Spacer = props => <div style={style(props)} />;

export default Spacer;
