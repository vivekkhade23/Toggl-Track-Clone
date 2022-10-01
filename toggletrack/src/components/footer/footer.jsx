import {
    Box,
    Stack,
    Text,
    useColorModeValue,
  } from "@chakra-ui/react";
  import logo1 from "../../Assets/Images/togglt-Logo.png";
  import "./footer.css";
  import face from "../../Assets/Images/face.jpg";
  import insta from "../../Assets/Images/insta.jpg";
  import you from "../../Assets/Images/you.jpg";
  import twi from "../../Assets/Images/twitter.jpg";
  import git from "../../Assets/Images/git.jpg";
  import linked from "../../Assets/Images/linked.jpg";
  import togglplan from "../../Assets/Images/toglplan.jpg";
  import togglehire from "../../Assets/Images/togglhire.jpg";
  
 
  export default function LargeWithLogoCentered() {
    return (
      <div className="footercontainer">
        <div>
          <img src={logo1} alt="" />
        </div>
        <div
          bg={useColorModeValue("#2c1338")}
          color={useColorModeValue("gray.700", "gray.200")}
        >
          <div className="footersection">
            <div columns={{ base: 1, sm: 2, md: 6 }} spacing={8} color={"white"}>
              <Stack align={"flex-start"} width={"100%"}>
                <h4 className="footerhead">TOGGL GLOBAL</h4>
                <p className="navsemi">Blog</p>
                <p className="navsemi">Our Mission</p>
                <p className="navsemi">
                  Working at Toggl <span>1</span>
                </p>
  
                <Stack direction={"row"} align={"center"} spacing={2}>
                  <p className="navsemi">Legal Terms</p>
                  {/* <Tag
                    size={"sm"}
                    bg={useColorModeValue("green.300", "green.800")}
                    ml={2}
                    color={"white"}
                  >
                    New
                  </Tag> */}
                </Stack>
              </Stack>
              <Stack align={"flex-start"} width={"100%"}>
                <h4 className="footerhead" r>
                  PRODUCT
                </h4>
                <p className="navsemi">Features</p>
                <p className="navsemi">Pricing</p>
                <p className="navsemi">Integrations</p>
                <p className="navsemi">Case Studies</p>
                <p className="navsemi">API</p>
              </Stack>
              <Stack align={"flex-start"} width={"100%"}>
                <h4 className="footerhead">USE CASES</h4>
                <p className="navsemi">Billing and Invoicing</p>
                <p className="navsemi">EmployeeTimeTracking</p>
                <p className="navsemi">Project Budgeting</p>
                <p className="navsemi">Reporting</p>
                <p className="navsemi">Payroll</p>
              </Stack>
              <Stack align={"flex-start"} width={"100%"}>
                <h4 className="footerhead">DOWNLOAD</h4>
                <p className="navsemi">Mobile Apps</p>
                <p className="navsemi">Desktop Apps</p>
                <p className="navsemi">Browser Extensions</p>
              </Stack>
              <Stack align={"flex-start"} width={"100%"}>
                <h4 className="footerhead">HELP</h4>
                <p className="navsemi">Support & Knowledge</p>
                <p className="navsemi">Base</p>
                <p className="navsemi">Request A Demo</p>
  
                <p className="navsemi">Contact Us</p>
              </Stack>
              <div align={"flex-start"} objectFit={"container"}>
                <h4 className="footerhead">RESOURCES</h4>
                <p className="navsemi">Time Management Hub</p>
                <p className="navsemi">Work From Home Hub</p>
                <p className="navsemi">Business Resources</p>
                <p className="navsemi">Productivity Resources</p>
                <p className="navsemi">Timesheet Templates</p>
                <p className="navsemi">Media Kit</p>
              </div>
            </div>
          </div>
          <div className="Iconssocial">
            <div>
              {" "}
              <img src={twi} alt="" />
            </div>
            <Box>
              <img src={face} alt="" />
            </Box>
            <Box>
              <img src={insta} alt="" />
            </Box>
            <Box>
              <img src={you} alt="" />
            </Box>
            <Box>
              <img src={linked} alt="" />
            </Box>
            <Box>
              <img src={git} alt="" />
            </Box>
          </div>
          <br />
          <div className="togglehire">
            <div>
              <p>Discover other Toggl tools:</p>
            </div>
            <div>
              <img src={togglplan} alt="" />
              <Text
                className="toggl"
                _hover={{
                  backgroundColor: "#2c1102",
                  color: "rgb(131, 16, 231)",
                }}
              >
                Beautifully simple work planning
              </Text>
            </div>{" "}
            <div>
              <img src={togglehire} alt="" />
              <Text
                className="toggl"
                _hover={{
                  backgroundColor: "#2c1102",
                  color: "rgb(231, 77, 16)",
                }}
              >
                Intelligent candidate-screening
              </Text>
            </div>
          </div>
          <Box py={10}>
            <Text
              pt={0.5}
              fontSize={"sm"}
              textAlign={"start"}
              color={"blackAlpha.900"}
              backgroundColor={"#E57CD8;"}
              padding={"20px 30px "}
            >
              © 2022 Toggl. All rights reserved.
            </Text>
          </Box>
        </div>
      </div>
    );
  }