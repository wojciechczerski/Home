const baseTextStyle = {
  color: "white",
  fontSize: "1em",
  fontFamily: "Arial, Helvetica, sans-serif",
  lineHeight: "1.4"
};

export const textStyle = {
  body: {
    ...baseTextStyle
  },
  title: {
    ...baseTextStyle,
    fontWeight: "bold",
    fontSize: "2em",
    marginBottom: "8px"
  },
  description: {
    ...baseTextStyle,
    fontWeight: "lighter",
    fontStyle: "italic"
  }
};
