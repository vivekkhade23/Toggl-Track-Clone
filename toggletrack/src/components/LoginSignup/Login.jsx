import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { loginAPI } from "../store/auth/auth.actions";
import "./login.css";
import { Box } from "@chakra-ui/layout";
import { ViewIcon, LockIcon } from '@chakra-ui/icons'


const Login = () => {
    //   const dispatch = useDispatch();
    //   const location = useLocation();
    //   const { isAuth } = useSelector((state) => state.auth);
    //   const [loginCreds, setLoginCreds] = useState({});
    //   const navigate = useNavigate();
    //   const Saved_data = JSON.parse(localStorage.getItem("userData"));
    // console.log(Saved_data.Email);

    //   const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log("Submit");
    //     dispatch(loginAPI(loginCreds));
    //   };
    //   const hanldeChange = (e) => {
    //     const { name, value } = e.target;
    //     setLoginCreds({
    //       ...loginCreds,
    //       [name]: value,
    //     });
    //   };

    //   useEffect(() => {
    //     if (
    //       isAuth &&
    //       Saved_data.Email === loginCreds.email &&
    //       Saved_data.password === loginCreds.password
    //     ) {
    //       return navigate("/timer", { replace: true });
    //     }
    //   }, [isAuth, Saved_data, loginCreds, location, navigate]);

    return (
        <Box className="login1">
            <Box className="login2">
                <Text className="text1">Log in to your account</Text>
                <Text className="text2">Let's get tracking!</Text>
                <Box className="login3" m={"auto"}>
                    <Flex paddingTop="70px" textAlign="center" gap={"25px"}>

                        <Flex className="loginbutton" gap={"6"}>
                            <img
                                src="https://img.icons8.com/fluency/30/000000/google-logo.png"
                                alt="img"
                            />
                            <button style={{ fontWeight: "bold" }}>Sign up via Google</button>
                        </Flex>{" "}
                     
                        {" "}
                        <Flex className="loginbutton" gap={"6"}>
                            <img
                                src="https://img.icons8.com/ios-glyphs/30/000000/mac-client.png"
                                alt="img"
                            />
                            <button style={{ fontWeight: "bold" }}>Sign up via Apple</button>
                        </Flex>

                    </Flex>

                    <Box mt={"25px"}>
                        <form >
                            <p className="label">Email</p>
                            <input
                                type="text"
                                className="inputbox1"
                                placeholder="Email"
                            />
                            <p className="label">Password</p>
                            <input
                                type="password"
                                className="inputbox1"
                                placeholder="password"
                                name="password"
                            />
                            <Box className="eyeicon">
                                <ViewIcon w={8} h={8} />
                            </Box>
                            <br />
                            <Box className="forgot" style={{}}>
                                <p style={{ color: "white" }}>Forgot Password?</p>
                            </Box>
                            <br />
                            <button className="login">Log in</button>
                        </form>
                        <Box className="clogin" mt={"35px"}>
                            <LockIcon className="lockicon" w={5} h={5} />
                            <Text>Company login (SSO)</Text>
                        </Box>
                    </Box>
                </Box>
                <br />
                <br />
                <Box className="login4">
                    <Text fontSize={"xl"}>Don't have an account?</Text>
                    <br />
                    <button className="signupfreebtn">Signup for free</button>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;