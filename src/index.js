import _ from "lodash";

const fnc = (a, b) => {
  const value = _.gt(a, b)
  return value;
}

export default fnc;