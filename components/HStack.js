const HStack = props => (
  <div>
    {props.children}
    <style jsx>{`
      div {
        display: flex;
        justify-content: ${props.align || "flex-start"};
      }
    `}</style>
  </div>
);

export default HStack;
