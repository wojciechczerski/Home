const VStack = props => (
  <div>
    {props.children}
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        align-items: ${props.align || "stretch"};
        justify-content: ${props.justify || "flex-start"};
      }
    `}</style>
  </div>
);

export default VStack;
