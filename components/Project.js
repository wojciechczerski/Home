import spacing from "../theme/spacing";
import { textStyle } from "../theme/style";
import VStack from "./VStack";
import Text from "./Text";
import HorizontalLine from "./HorizontalLine";
import HStack from "./HStack";
import ProjectImage from "./ProjectImage";
import ProjectButton from "./ProjectButton";
import Spacer from "./Spacer";

const Project = props => (
  <div>
    <VStack justify="center" align="center">
      <Text style={textStyle.title}>{props.title}</Text>
      <HorizontalLine />
      <Spacer height={spacing.large} />
      <Text>{props.desc}</Text>
      <HStack justify="center">
        {props.images.map(image => (
          <ProjectImage key={image} src={image} />
        ))}
      </HStack>
      <HStack>
        {props.buttons.map(button => (
          <ProjectButton
            key={button.url}
            title={button.title}
            url={button.url}
          />
        ))}
      </HStack>
    </VStack>
    <style jsx>{`
      div {
        background-color: #00404d;
        -webkit-box-shadow: 0px 0px 32px 4px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 32px 4px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 32px 4px rgba(0, 0, 0, 0.75);
        max-width: 800px;
        padding-top: ${spacing.large};
        padding-bottom: ${spacing.large};
        padding-left: ${spacing.big};
        padding-right: ${spacing.big};
        margin: ${spacing.large};
      }
    `}</style>
  </div>
);

export default Project;
