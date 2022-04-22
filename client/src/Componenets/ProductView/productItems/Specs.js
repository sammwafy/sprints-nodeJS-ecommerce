import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Specs = ({data}) => {
  return (
    <div>
      <h5>
        <FaAngleRight /> size: {data.size}
      </h5>
      <h5>
        <FaAngleRight /> color: black
      </h5>
    </div>
  );
};

export default Specs;
