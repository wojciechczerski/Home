const Text = props => (
  <div>
    {props.children}
    <style jsx>{`
      div {
        color: white;
        font-size: 1em;
        font-family: Arial, Helvetica, sans-serif;
        line-height: 1.4;
      }
    `}</style>
  </div>
);

export default Text;
