const HorizontalLine = props => (
  <div>
    <style jsx>{`
      div {
        height: 1px;
        width: 100%;
        background: rgb(255, 255, 255);
        background: linear-gradient(
          90deg,
          rgba(255, 255, 255, 0) 0%,
          rgba(255, 255, 255, 1) 20%,
          rgba(255, 255, 255, 1) 80%,
          rgba(255, 255, 255, 0) 100%
        );
      }
    `}</style>
  </div>
);

export default HorizontalLine;
