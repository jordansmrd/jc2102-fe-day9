import { Box, Button, Center, FormLabel, Input, Text } from "@chakra-ui/react";
import { axiosInstance } from "../configs/api";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import user_types from "../redux/reducers/types/user";
// import { Navigate } from "react-router-dom";

function LoginPage () {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  const userSelector = useSelector((state) => state.user);



    // const [userData, SetUserData] = useState({})

  const dispatch = useDispatch();

  const inputHandler = (event, field) => {
    const { value } = event.target;
    if (field === "username") {
      setUsernameInput(value);
    } else if (field === "password") {
      setPasswordInput(value);
    }
    console.log(usernameInput)
    console.log(passwordInput)

  };

  function loginBtnHandler() {
    axiosInstance
      .get("/user_accounts", {
        params: {
          username: usernameInput,
          password: passwordInput,
        },
      })
      .then((res) => {
        // SetUserData(res.data[0])
        const userData = res.data[0];

        // dispatch({
        //   type: user_types.LOGIN_USER,
        //   payload: userData,
        // });

        // localStorage.setItem("user_data", JSON.stringify(userData));
      })
      .catch((err) => {
        console.log(err);
      });
  };

//   if (userSelector.id) {
//     return <Navigate to="/" />;
//   }

  return (
    <Center>
      <Box maxWidth="lg">
        <Text>Login Page</Text>
        <Text>Logged in user: 
             {userSelector?.username}
             </Text>
        <FormLabel>Username</FormLabel>
        <Input onChange={(event) => inputHandler(event, "username")} />
        <FormLabel>Password</FormLabel>
        <Input
          type="password"
          onChange={(event) => inputHandler(event, "password")}
        />
        <Button onClick={loginBtnHandler}>Login</Button>
      </Box>
    </Center>
  );
};

export default LoginPage;
