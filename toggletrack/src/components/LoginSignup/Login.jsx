import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/layout";
import { ViewIcon, LockIcon } from '@chakra-ui/icons'
import Axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styles from "./login.module.css"
import LargeWithLogoCentered from "../footer/footer";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import { declareAuth, declareToken} from "../../Redux/action";
import { useDispatch } from "react-redux";


const Login = () => {
    const [show, setshow] = useState(false);
    const [login, setLogin] = useState(false);
const dispatch=useDispatch()
    const navigate = useNavigate();
    const url = "https://toggleapi.onrender.com/users/login"
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    async function submit(e) {
        e.preventDefault();
        await Axios.post(url, {
            email: data.email,
            password: data.password,
        })
            .then(res => {
               dispatch(declareAuth(true))
             dispatch(declareToken(res.data.token))
                setLogin(true)
                setTimeout(() => {
                    setLogin(false)
                    navigate('/timer')
                }, 3000)
            })
            .catch((err) => {
                console.log(err)
                setshow(true)
                setTimeout(() => {
                    setshow(false)
                }, 3000)
            })

    }

    function handleData(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }

    return (
        <Box className={styles.login1}>
            <Box className={styles.login2}>
                <Text className={styles.text1}>Log in to your account</Text>
                <Text className={styles.text2}>Let's get tracking!</Text>
                <Box className={styles.login3} m={"auto"}>
                    <Flex direction={["column", "column", "row"]} paddingTop="70px" textAlign="center" gap={"25px"} className={styles.flexbox}>

                        <Flex className={styles.loginbutton} gap={"6"} >
                            <img
                                src="https://img.icons8.com/fluency/30/000000/google-logo.png"
                                alt="img"
                            />
                            <button style={{ fontWeight: "bold" }}>Sign up via Google</button>
                        </Flex>{" "}

                        {" "}
                        <Flex className={styles.loginbutton} gap={"6"}>
                            <img
                                src="https://img.icons8.com/ios-glyphs/30/000000/mac-client.png"
                                alt="img"
                            />
                            <button style={{ fontWeight: "bold" }}>Sign up via Apple</button>
                        </Flex>

                    </Flex>

                    <Box mt={"25px"} className={styles.mainloginbox}>
                        <form onSubmit={(e) => submit(e)}>
                            <p className={styles.label}>Email</p>
                            <input
                                type="email"
                                id="email"
                                value={data.email}
                                onChange={(e) => handleData(e)}
                                className={styles.inputbox1}
                                placeholder="Email"
                            />
                            <p className={styles.label} >Password</p>
                            <input
                                type="password"
                                id="password"
                                value={data.password}
                                onChange={(e) => handleData(e)}
                                className={styles.inputbox1}
                                placeholder="password"
                                name="password"
                            />
                            <Box className={styles.eyeicon}>
                                <ViewIcon w={8} h={8} />
                            </Box>
                            <br />
                            <Box className={styles.forgot}>
                                <p style={{ color: "white" }}>Forgot Password?</p>
                            </Box>
                            <br />
                            <button className={styles.login} type="submit">Log in</button>
                        </form>
                        <Box mt={"25px"}>
                            {show && <Alert status='error' borderRadius="35px">
                                <AlertIcon />
                                <AlertTitle>Wrong Credentials!</AlertTitle>
                                <AlertDescription>please fill correct details.</AlertDescription>
                            </Alert>}
                            {login && <Alert status='success' borderRadius="35px">
                                <AlertIcon />
                                <AlertTitle>Login Successful</AlertTitle>
                                <AlertDescription>Enjoy our website.</AlertDescription>
                            </Alert>}
                        </Box>
                        <Box className={styles.clogin} mt={"35px"}>
                            <LockIcon className={styles.lockicon} w={5} h={5} />
                            <Text>Company login (SSO)</Text>
                        </Box>


                    </Box>
                </Box>
                <br />
                <br />
                <Box className={styles.login4}>
                    <Text fontSize={"xl"}>Don't have an account?</Text>
                    <br />
                    <Link to="/signup">
                        <button className={styles.signupfreebtn}>Signup for free</button></Link>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;