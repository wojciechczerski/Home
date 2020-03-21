const ProjectImage = props => (
  <div>
    <img src={props.src} />
    <style jsx>{`
      img {
        max-width: 400px;
        max-height: 710px;
        width: 100%;
        height: auto;
      }
    `}</style>
  </div>
);

export default ProjectImage;
