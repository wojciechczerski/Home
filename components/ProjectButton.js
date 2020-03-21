import spacing from "../theme/spacing";

const ProjectButton = props => (
  <a href={props.url} target="_blank">
    {props.title}
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
      }
    `}</style>
  </a>
);

export default ProjectButton;
