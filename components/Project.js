import spacing from "../theme/spacing";
import VStack from "./VStack";
import Text from "./Text";
import HorizontalLine from "./HorizontalLine";
import HStack from "./HStack";
import ProjectImage from "./ProjectImage";

const Project = props => (
  <div>
    <VStack justify="center" align="center">
      <Text>{props.title}</Text>
      <HorizontalLine />
      <Text>{props.desc}</Text>
      <HStack justify="center">
        {props.images.map(image => (
          <ProjectImage src={image} />
        ))}
      </HStack>
    </VStack>
    <style jsx>{`
      div {
        background-color: #00404d;
        -webkit-box-shadow: 0px 0px 32px 4px rgba(0, 0, 0, 0.75);
        -moz-box-shadow: 0px 0px 32px 4px rgba(0, 0, 0, 0.75);
        box-shadow: 0px 0px 32px 4px rgba(0, 0, 0, 0.75);
        padding-top: ${spacing.large};
        padding-bottom: ${spacing.large};
        padding-left: ${spacing.big};
        padding-right: ${spacing.big};
      }
    `}</style>
  </div>
);

export default Project;
