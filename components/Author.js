import { bodyFontStyle } from "../styles/font";

const style = {
  ...bodyFontStyle,
  display: "flex",
  justifyContent: "flex-end"
};

const Author = props => <div style={style}>{props.name}</div>;

export default Author;
