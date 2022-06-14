import { Center, Flex, Button, Text,Box } from "@chakra-ui/react"
import { useSelector, useDispatch } from "react-redux";
import counter_types from "../redux/reducers/counter/types";

function CounterPage() {
    const counterSelector = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    function changeCount(direction)
    {
        if(direction === "increment"){
            // alert(direction)
            dispatch({
                type: counter_types.INCREMENT_COUNTER,
            })
        }
        else if(direction ==="decrement")
        {
            // alert(direction)
            dispatch({
                type: counter_types.DECREMENT_COUNTER,
            })
        }

    }
    
    return (
        <Center>
            <Box padding="20" >
            <Flex alignItems="center" >
            <Button marginRight="4" onClick={() => changeCount("decrement")}> -</Button>
            <Text fontSize="xl"> {counterSelector.count}</Text>
            <Button marginLeft="4" onClick={() => changeCount("increment")}>+ </Button>
        </Flex>
            </Box>
       
      </Center>
    )
}

export default CounterPage;