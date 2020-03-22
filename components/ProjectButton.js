import Text from "./Text";
import spacing from "../theme/spacing";
import { textStyle } from "../theme/style";

const ProjectButton = props => (
  <a href={props.url} target="_blank">
    <Text style={textStyle.body}>{props.title}</Text>
    <style jsx>{`
      a {
        color: white;
        background-color: black;
        padding: 2px 8px 2px 8px;
        text-decoration: none;
        border-radius: 3px;
        -moz-border-radius: 3px;
        -webkit-border-radius: 3px;
        border: 2px solid #ffffff;
        margin: ${spacing.medium};
      }
      a:active {
        opacity: 0.7;
      }
    `}</style>
  </a>
);

export default ProjectButton;
