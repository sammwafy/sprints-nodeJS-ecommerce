import Rater from "react-rater";
import "react-rater/lib/react-rater.css";

import React from "react";

const Rating = () => {
  return <Rater total={5} rating={2} interactive={false}/>;
};

export default Rating;
