import React, { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import {
  FaAngleDown,
  FaAngleUp,
  FaDollarSign,
  FaShoppingBag,
} from "react-icons/fa";

const AddToCarts = () => {
  const [quantity, setQuantity] = useState(1);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const DecrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  return (
    <div className="add-to-cart">
      <div className="incremental">
        <FormControl
          type="number"
          aria-label="quantity"
          min="1"
          value={quantity}
        />
        <div className="d-flex flex-column">
          <Button variant="outline-secondary" onClick={incrementQuantity}>
            <FaAngleUp />
          </Button>
          <Button variant="outline-secondary" onClick={DecrementQuantity}>
            <FaAngleDown />
          </Button>
        </div>
      </div>

      <Button variant="dark">
        <FaShoppingBag />
        Add to cart
      </Button>
      <Button variant="success">
        <FaDollarSign />
        buy now
      </Button>
    </div>
  );
};

export default AddToCarts;
