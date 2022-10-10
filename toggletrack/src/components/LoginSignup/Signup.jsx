
import png from "./images/tropy.png"
import logo from "./images/logo.png"
import { Stack, VStack, Grid, GridItem } from "@chakra-ui/react";
import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import { ViewIcon } from '@chakra-ui/icons'
import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./signup.module.css"


const Signup = () => {
    const navigate = useNavigate();
    const url = "https://desolate-coast-33231.herokuapp.com/users/signup";
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
                alert("Signup Succesfull")
                navigate("/login")
            })
            .catch((err)=>{
                console.log(err)
                alert("User Already Exist!")
            })

    }

    function handleData(e) {
        const newData = { ...data }
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }


    return (
        <div className={styles.signup1}>
            <Stack className={styles.signup2} gap={"5px"}>
                <Link to="/"><img className={styles.logo} src={logo} /></Link>
                <Text fontSize="5xl" >
                    <b className={styles.signtext}>
                        Sign up for a <span style={{ color: "#e57cd8" }}>free</span> Toggl
                        Track account
                    </b>
                </Text>

                <Text fontSize="22px" mt={"150px"} w={"880px"} className={styles.para}>
                    All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required.
                    Upgrade at the end of the trial or continue using Track for free.
                </Text>
                <Text fontSize="22px">
                    Already have an account?{"  "}
                   <Link to="/login"><span style={{ color: "#e57cd8", textDecoration: "underline" }}>Log in Here.</span></Link>
                </Text>

            </Stack>
            <Box className={styles.signup3}>
                <Flex gap={20} direction={["column", "column", "row"]}>
                    <Box className={styles.signup4}>
                        <Flex direction={["column", "column", "row"]} paddingTop="30px" textAlign="center" gap={"20px"}>

                            <Flex className={styles.button} gap={"2"}>
                                <img
                                    src="https://img.icons8.com/fluency/30/000000/google-logo.png"
                                    alt="img"
                                />
                                <button style={{ fontWeight: "bold" }}>Sign up via Google</button>
                            </Flex>{" "}

                            {" "}
                            <Flex className={styles.button} gap={"2"}>
                                <img
                                    src="https://img.icons8.com/ios-glyphs/30/000000/mac-client.png"
                                    alt="img"
                                />
                                <button style={{ fontWeight: "bold" }}>Sign up via Apple</button>
                            </Flex>{" "}

                        </Flex>
                        <br />
                        <br />
                        <div>
                            <Flex gap={"15px"}>
                                <hr className={styles.hr} />
                                <p className={styles.or}>OR</p>
                                <hr className={styles.hr} />
                            </Flex>
                        </div>
                        <br />
                        <Box className={styles.formbox}>
                            <form onSubmit={(e) => submit(e)}>
                                <p className={styles.label}>Email</p>
                                <br />
                                <input
                                    type="text"
                                    id="email"
                                    value={data.email}
                                    onChange={(e) => handleData(e)}
                                    className={styles.inputbox}
                                    placeholder="Email"
                                />
                                <br />
                                <br />
                                <p className={styles.label}>Password</p>
                                <br />
                                <input
                                    type="password"
                                    id="password"
                                    value={data.password}
                                    onChange={(e) => handleData(e)}
                                    className={styles.inputbox}
                                    placeholder="password"
                                    name="password"
                                />
                                <div className={styles.icon}>
                                    <ViewIcon w={8} h={8} />
                                </div>
                                <br />
                                <br />
                                <Link></Link><button className={styles.submit} type="submit">Sign up via email</button>
                                <br />
                                <br />
                                <p className={styles.label2}>
                                    By signing up, you agree to our <span style={{ textDecoration: "underline", color: "#e57cd8" }}>terms of service, privacy
                                        policy</span>  and to receiving marketing communication from Toggl
                                    Track. You can opt out anytime.
                                </p>
                            </form>
                            <br />
                        </Box>
                    </Box>
                    <Box mt={"45px"} >
                        <VStack align='left' display={["none","block"]}>
                            <Box fontSize={"80px"} align='left'>
                                <img src={png} />
                            </Box>
                            <Box w='390px' fontWeight={"semibold"} fontSize={"20px"} align='left'>
                                Toggl Track has a very straightforward interface. It's easy to start, stop and
                                edit time entries and to review your own work and the work of colleagues.
                            </Box>
                            <br />
                            <Box w='350px' fontWeight={"semibold"} fontSize={"20px"} align='left'>

                                <span style={{ color: "#ffde91" }}>It just works,</span> even in a team where some members find new interfaces
                                challenging.
                            </Box>
                            <br />
                            <Box align='left'>
                                — Verified G2Crowd review. 5/5 stars.
                            </Box>
                            <br />

                        </VStack>
                        <Box display={["none","block"]} mt={"40px"} >
                            <img src="https://public-assets.toggl.com/b/static/6b5c09dd5baafcca069103cd517b38c9/67548/review-badges.avif" alt="capterra" />
                        </Box>
                    </Box>
                </Flex>
            </Box>
            <HStack color={"black"} bg={"#e57cd8"} justifyContent={"space-between"} p={"15px 35px"}>
                <Box >
                    © 2022 Toggl. All rights reserved.
                </Box>
                <Box textDecoration={"underline"} className={styles.legalterms}>
                    Legal Terms
                </Box>
            </HStack>
        </div>
    );
};

export default Signup;