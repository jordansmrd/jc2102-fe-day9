import { FormLabel, Center, Box, Text, Input, Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { axiosInstance } from "../configs/api";


function LoginPage() {
    const [userData, SetUserData] = useState({})
    const [inputUsername, SetInputUsername] = useState("");
    const [inputPassword, SetInputPassword] = useState("");

    const userSelector = useSelector((state) => state.auth)


    function inputHandler(event, field) {
        const { value } = event.target;
        if(field === "username"){
            SetInputUsername(value)
        }
        else if(field === "password") {
            SetInputPassword(value)
        }
    }

    function LoginHandler(){
        axiosInstance.get("/user_accounts/", { params: {
            username: inputUsername, 
            password: inputPassword
        }
    }).then((res)=>{
        if(res.data[0] !== undefined)
        {
            SetUserData(res.data[0])
        }
        else
        {
            alert("username/password salah")
        }
    }).catch((err) => {
        console.log(err)
        alert("Terjadi kesalahan pada server")
    })
    }


    return (
        <>
        <Center>
            <Box>
                <Text>
                Halaman Login
                </Text>
                <Text>
                Logged in user : {userData?.username}
                {userSelector?.username}
                </Text>
                <FormLabel htmlFor="inputUsername"> Username</FormLabel>
                <Input id="inputUsername" onChange={(e) => inputHandler(e,"username")}></Input>
                <FormLabel htmlFor="inputPassword">Password</FormLabel>
                <Input id="inputPassword" type="password" onChange={(e) => inputHandler(e,"password")}></Input>
                <Flex justifyContent="center">
                <Button mt={5} onClick={LoginHandler}>Login</Button>
                </Flex>
            </Box>
        </Center>
        </>
    )
}

export default LoginPage