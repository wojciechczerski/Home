const Button = props => (
  <a href={props.url} target="_blank">
    <img src={props.image} alt={props.name} />
    <style jsx>{`
      img {
        height: 24px;
      }

      img:active {
        opacity: 0.7;
      }
    `}</style>
  </a>
);

export default Button;
