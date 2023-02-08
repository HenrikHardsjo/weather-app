const TrimString = (props) => {
  let InParamArray = props.InParam;

  const newtimeString2 = InParamArray[0].slice(InParamArray[1],InParamArray[2]);
  return newtimeString2;
};

export default TrimString;
