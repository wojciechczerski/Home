import { textStyle } from "../theme/style";

const Text = props => (
  <div style={props.style ?? textStyle.body}>{props.children}</div>
);

export default Text;
