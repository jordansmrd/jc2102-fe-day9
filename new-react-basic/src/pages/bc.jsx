import { Box, Button, Center, Flex, Input, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import counter_types from "../redux/reducers/counter/types";

function CounterPage() {
  const countSelector = useSelector((state) => state.counter);
  const userSelector = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const changeCountValue = (dir) => {
    if (dir === "increment") {
      dispatch({
        type: counter_types.INCREMENT_COUNTER,
        payload: 1
      });
    } else if (dir === "decrement") {
      dispatch({
        type: counter_types.DECREMENT_COUNTER,

      });
    }
  };
  return (
    <Box maxWidth="2xl" padding="16">
      {userSelector?.username}
      <Flex alignItems="center" marginTop="10">
        <Button onClick={() => changeCountValue("decrement")} marginRight="4">
          -
        </Button>
        <Text fontSize="2xl">{countSelector.count}</Text>
        <Button onClick={() => changeCountValue("increment")} marginLeft="4">
          +
        </Button>
      </Flex>
    </Box>
  );
};

export default CounterPage;
