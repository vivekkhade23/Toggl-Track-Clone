import {
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
} from "@chakra-ui/icons";
import logo1 from "../../Assets/Images-navbar/togglt-Logo.jpg";
import styles from "./Nav.module.css";
import WithAction from "./Navbartop";
import React, { useState } from "react";
import NavbarProduct from "./NavbarProduct";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import { useMediaQuery } from "@chakra-ui/react";
import { AiOutlineBars } from "react-icons/ai"; 
import WhyTracking from "./Whytracking";
import { useNavigate } from "react-router-dom";

export default function WithSubnavigation() {
  const navigate=useNavigate()
  const { isOpen, onToggle } = useDisclosure();
  const [Display] = useMediaQuery('(min-width: 1000px)')
  return (
    <div className="toggle_navbar">
      <div>
        <WithAction />
        <Flex
        className={styles.maincontainer}
          bg={useColorModeValue("#2c1338")}
          color={useColorModeValue("gray.600", "white")}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderColor={useColorModeValue("gray.200", "gray.900")}
          align={"auto"}
        >
          <Flex
            flex={{ base: 1, md: "auto" }}
            ml={{ base: -2 }}
            display={{ base: "flex", md: "none" }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
            <Text
              // textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"heading"}
              color={useColorModeValue("red.800", "white")}
              className={styles.logo1}
              onClick={navigate("/")}
            >
              <img src={logo1} />
            </Text>

            <Flex display={{ base: "none", md: "flex" }} ml={10}>
            {Display?<DesktopNav />:<MobileNav/>}  
            </Flex>
          </Flex>
        </Flex>
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </div>
    </div>
  );
}

const DesktopNav = () => {
  const navigate=useNavigate()
  const { getDisclosureProps, getButtonProps } = useDisclosure()
  const buttonProps = getButtonProps()
  const disclosureProps = getDisclosureProps()
const [product,setProduct]=useState(false);
const [why,setWhy]=useState(false)

const handleLog=()=>{
  navigate("/login")
}

const handlePrice=()=>{
  navigate("/pricing")
}

  return ( 
  <div className={styles.desktopdisplay}>
  <>
    <Text {...buttonProps} className={styles.button} >product</Text>
    <Text {...disclosureProps} mt={4}>
     {<NavbarProduct/>}
    </Text>
  </>
  <>
    <Text {...buttonProps} className={styles.button} onClick={handlePrice} >pricing</Text>
    <Text {...disclosureProps} mt={4}>
     {}=
    </Text>
  </>
  <>
    <Text {...buttonProps}className={styles.button}>Why Track ?</Text>
    <Text {...disclosureProps} mt={4}>
     {/* {<WhyTracking/>} */}
    </Text>
  </>
  <>
    <Text {...buttonProps}className={styles.button}>careers</Text>
    <Text {...disclosureProps} mt={4}>
     {/* {<NavbarProduct/>} */}
    </Text>
  </>

  <Stack
  className={styles.alignment}
            flex={{ base: 1, md: 0 }}
            justify={"flex-end"}
            direction={"row"}
            alignItems={"center"}
            spacing={6}
          >
            <Button
              as={"a"}
              fontSize={"1rem"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
              font={"16px"}
              color={" rgb(255, 243, 237)"}
              fontStyle={"GT Haptik Medium',sans-serif"}
              cursor={"pointer"}
              _hover={{
                color: "pink",
              }}
            >
              Book a demo
            </Button>
            <Button
              as={"a"}
              fontSize={"1rem"}
              fontWeight={400}
              variant={"link"}
              href={"#"}
              font={"16px"}
              color={" rgb(255, 243, 237)"}
            >
              |
            </Button>
            <Button
            onClick={handleLog}
              as={"a"}
              fontSize={"1rem"}
              fontWeight={400}
              variant={"link"}
              
              font={"16px"}
              color={" rgb(255, 243, 237)"}
              fontStyle={"GT Haptik Medium',sans-serif"}
              _hover={{
                bg: "black.300",
              }}
            >
              Log out
            </Button>
            <Button
              display={{ base: "none", md: "inline-flex" }}
              fontSize={"sm"}
              fontWeight={600}
              bg={"pink.400"}
              href={"#"}
              width={"200px"}
              backgroundColor={"rgb(225, 225,225)"}
              color={"rgb(216, 25, 194)"}
              borderRadius={"26px"}
              _hover={{
                backgroundColor: "#2c1102",
                color: "rgb(216, 25, 194)",
              }}
              as={"a"}
            >
              Go to timer
            </Button>
</Stack>
  </div>

  )
};



const MobileNav = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();


  return (
  
  <Stack>
<>
<Button className={styles.iconsbutton}  align="right" onClick={onOpen}><AiOutlineBars className={styles.icons}/></Button>
    <Drawer placement='left' className={styles.drawer} onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay />
      <DrawerContent className={styles.drawercontent}>
        <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
        <DrawerBody>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </DrawerBody>
        <Button className={styles.cancelbutton} variant='ghost' mr={3} onClick={onClose}>
            Cancel
          </Button>
      </DrawerContent>
    </Drawer>
  </>
  </Stack>
  );
};

