import { Flex, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Box } from "@chakra-ui/layout";
import { ViewIcon, LockIcon } from '@chakra-ui/icons'
import Axios from "axios"
import { Link, useNavigate } from "react-router-dom"
import styles from "./login.module.css"
import LargeWithLogoCentered from "../footer/footer";


const Login = () => {
    const navigate = useNavigate();
    const url = "https://desolate-coast-33231.herokuapp.com/users/login"
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
                console.log(res.data);
                alert("Login Succesfull")
                navigate("/")
            })
            .catch((err)=>{
                console.log(err)
                alert("Invalid Credential!")
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