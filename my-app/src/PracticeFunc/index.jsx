import { Box, Input, Text } from "./PracticeFunc.styled";
import { useState } from "react";

const PracticeFunc = ({ prop }) => {
  const [state, setState] = useState();

  const handleChange = (event) => {
    setState(event.target.value);
  };

  return (
    <Box>
      <Input onChange={handleChange}></Input>
      <Text>{state}</Text>
    </Box>
  );
};

export default PracticeFunc;
