
import "./signup.css";
import png from "./images/tropy.png"
import logo from "./images/logo.png"
import { Stack, VStack, Grid, GridItem } from "@chakra-ui/react";
import { Box, Flex, HStack, Text } from "@chakra-ui/layout";
import { ViewIcon } from '@chakra-ui/icons'



const Signup = () => {

    return (
        <div className="signup1">
            
            
            
            <Stack className="signup2" gap={"5px"}>
            <img className="logo" src={logo}/>
                <Text fontSize="5xl">
                    <b>
                        Sign up for a <span style={{ color: "#e57cd8" }}>free</span> Toggl
                        Track account
                    </b>
                </Text>
                <Text fontSize="22px" mt={"150px"} w={"880px"}>
                    All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required.
                    Upgrade at the end of the trial or continue using Track for free.
                </Text>
                <Text fontSize="22px">
                    Already have an account?{"  "}
                    <span style={{ color: "#e57cd8", textDecoration: "underline" }}>Log in Here.</span>
                </Text>
            </Stack>
            <Box className="signup3">
                <Flex gap={20}>
                    <Box className="signup4">
                        <Flex paddingTop="30px" textAlign="center" gap={"20px"}>
                          
                            <Flex className="button" gap={"2"}>
                                <img
                                    src="https://img.icons8.com/fluency/30/000000/google-logo.png"
                                    alt="img"
                                />
                                <button style={{ fontWeight: "bold" }}>Sign up via Google</button>
                            </Flex>{" "}
                    
                            {" "}
                            <Flex className="button" gap={"2"}>
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
                                <hr className="hr" />
                                <p className="or">OR</p>
                                <hr className="hr" />
                            </Flex>
                        </div>
                        <br />
                        <Box>
                            <form >
                                <p className="label">Email</p>
                                <br />
                                <input
                                    type="text"
                                    className="inputbox"
                                    placeholder="Email"
                                />
                                <br />
                                <br />
                                <p className="label">Password</p>
                                <br />
                                <input
                                    type="password"
                                    className="inputbox"
                                    placeholder="password"
                                    name="password"
                                />
                                <div className="icon">
                                    <ViewIcon w={8} h={8} />
                                </div>
                                <br />
                                <br />
                                <input
                                    type="submit"
                                    className="submit"
                                    value="Sign up via email"
                                    placeholder="password"
                                />
                                <br />
                                <br />
                                <p className="label2">
                                    By signing up, you agree to our <span style={{ textDecoration: "underline", color: "#e57cd8" }}>terms of service, privacy
                                        policy</span>  and to receiving marketing communication from Toggl
                                    Track. You can opt out anytime.
                                </p>
                            </form>
                            <br />
                        </Box>
                    </Box>
                    <Box mt={"45px"}>
                        <VStack align='left'>
                            <Box fontSize={"80px"} align='left'>
                                <img src={png} />
                            </Box>
                            <Box w='390px' fontWeight={"semibold"} fontSize={"20px"} align='left'>
                                Toggl Track has a very straightforward interface. It's easy to start, stop and
                                edit time entries and to review your own work and the work of colleagues.
                            </Box>
                            <br />
                            <Box w='350px' fontWeight={"semibold"} fontSize={"20px"} align='left'>

                                <span style={{ color: "#ffde91" }}>It just works, </span> even in a team where some members find new interfaces
                                challenging.
                            </Box>
                            <br />
                            <Box align='left'>
                                — Verified G2Crowd review. 5/5 stars.
                            </Box>
                            <br />

                        </VStack>
                        <Box mt={"40px"}>
                            <img src="https://public-assets.toggl.com/b/static/6b5c09dd5baafcca069103cd517b38c9/67548/review-badges.avif" alt="capterra" />
                        </Box>


                    </Box>
                </Flex>
            </Box>
            {/* <Grid justifyContent={"space-between"} templateColumns='repeat(2, 1fr)'>
                <GridItem   bg='tomato'>© 2022 Toggl. All rights reserved.</GridItem>
                <GridItem  bg='papayawhip'>Legal Terms</GridItem>
            </Grid> */}
            <HStack color={"black"} bg={"#e57cd8"} justifyContent={"space-between"} p={"15px 35px"}>
                <Box >
                    © 2022 Toggl. All rights reserved.
                </Box>
                <Box  textDecoration={"underline"} className="legalterms">
                    Legal Terms
                </Box>
            </HStack>
        </div>
    );
};

export default Signup;