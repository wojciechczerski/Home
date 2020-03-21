const HStack = props => (
  <div>
    {props.children}
    <style jsx>{`
      div {
        display: flex;
        flex-wrap: wrap;
        align-items: ${props.align || "stretch"};
        justify-content: ${props.justify || "flex-start"};
      }
    `}</style>
  </div>
);

export default HStack;
