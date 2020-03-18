const Button = props => (
  <a href={props.url} target="_blank">
    <img src={props.image} alt={props.name} />
  </a>
);

export default Button;
