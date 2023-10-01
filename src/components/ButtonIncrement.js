import React, { useState } from "react";
import { Button } from "reactstrap";

function ButtonIncrement() {
  const [counter, setCounter] = useState(0);
  const inc = () => setCounter(counter + 1);
  return (
    <Button color="secondary" onClick={inc}>
      Click {counter}
    </Button>
  );
}

export default ButtonIncrement;
