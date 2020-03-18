const VStack = props => (
  <div>
    {props.children}
    <style jsx>{`
      div {
        display: flex;
        flex-direction: column;
        justify-content: ${props.align || "flex-start"};
      }
    `}</style>
  </div>
);

export default VStack;
