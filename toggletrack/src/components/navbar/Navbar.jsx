import {

  useDisclosure,
} from "@chakra-ui/react";

import { Box, Button, HStack, Image, Text, VStack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import style from "./style.module.css"
import { GiHamburgerMenu } from "react-icons/gi";
import { BiChevronDown } from "react-icons/bi";
import Toggle from "../../Assets/Images-navbar/togglt-Logo.jpg"
import {
  Menu,
  MenuButton,
  MenuList,
} from '@chakra-ui/react'
import { useState } from 'react';
import NavbarProduct from './NavbarProduct';
import WhyTracking from './Whytracking';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { declareAuth, declareLogout, declareToken } from "../../Redux/action";
export default function WithSubnavigation() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [check, setCheck] = useState(false)
  const isAuth = useSelector((store) => store.isAuth);
  const token = useSelector((store) => store.token);
  const dispatch = useDispatch()

  const [user, setUser] = useState([])
  useEffect(() => {
    let a = token.split(":");
    let id = a[0];
    fetch(`https://toggleapi.onrender.com/users/${id}`).then(res => res.json()).then(res => setUser(res.user)).catch(err => console.log(err))
  }, [isAuth])

  const handleLogout = () => {
    dispatch(declareLogout());
    dispatch(declareAuth(false));
    dispatch(declareToken(""))
  }





  return (
    <VStack w={"100vw"} >
      <HStack className={style.navbartop}>
        <NavLink>Back to Toggl Global</NavLink>
        <NavLink>Products</NavLink>
        <NavLink>Blog</NavLink>
        <NavLink>Our mission</NavLink>
        <NavLink>Working at Toggl!</NavLink>

      </HStack>
      <HStack className={style.navbar}>
        <Box className={style.box1}>
      <Link to="/">
          <Image className={style.logo} src={Toggle} alt="Logo" />
      
      </Link>
          <Box className={style.boxsub}>

            <Menu>
              <MenuButton color={"white"} rightIcon={<BiChevronDown />}>
                Product
              </MenuButton>
              <MenuList width={"100vw"} backgroundColor="#fce5d8" height="100vh">
                <NavbarProduct width="100vw" height="100vh" />
              </MenuList>
            </Menu>

           <Link to="/pricing">
           
           <Text color={"white"} marginTop="19px" >Pricing</Text>
           </Link> 
            <Menu>
              <MenuButton color={"white"} rightIcon={<BiChevronDown />}>
                Why Track?
              </MenuButton>
              <MenuList width={"100vw"} backgroundColor="#fce5d8" height="100vh">
                <WhyTracking width="100vw" height="100vh" />
              </MenuList>
            </Menu>

            <Menu>
              <MenuButton color={"white"} rightIcon={<BiChevronDown />}>
                Career
              </MenuButton>
              <MenuList width={"100vw"} backgroundColor="#fce5d8" height="100vh">
                <NavbarProduct width="100%" height="100%" />
              </MenuList>
            </Menu>

          </Box>

        </Box>
        <Box className={style.box2}>
          <Text color={"white"} marginTop="-1px" >Book a Demo</Text>
          <Text color={"white"} marginTop="-1px" >|</Text>
          {

            isAuth ?
              <>
                {/* <Text  color={"white"} marginTop="19px"></Text> */}
                <Button backgroundColor={"#2c1338"} color="white" onClick={onOpen}>{user?.name}</Button>

                <Modal isOpen={isOpen} onClose={onClose}>
                  <ModalOverlay />
                  <ModalContent backgroundColor={"#2c1338"} color="white">
                    <ModalHeader>{user?.name}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody onClick={onClose}>
                      <Button backgroundColor={"#e57cd8"} onClick={handleLogout}>Logout</Button>
                    </ModalBody>

                    {/* <ModalFooter>
      <Button colorScheme='blue' mr={3}>
        Close
      </Button>

    </ModalFooter> */}
                  </ModalContent>
                </Modal>
              </>


              :
              <Link to="/login">
                <Text color={"white"} marginTop="-1px" >Log In</Text>

              </Link>
          }


          {
            isAuth ?
              <Link to="/projects">

                <Button className={style.try}>
                  Projects
                </Button>
              </Link> :
              <Link to="/login">

                <Button className={style.try}>
                  Projects
                </Button>
              </Link>
          }

        </Box>
        <input type="checkbox" style={{ display: "none" }} checked={check} />
        <GiHamburgerMenu onClick={() => setCheck(!check)} className={style.GiHamburgerMenu} />



      </HStack>
      <ul className={check ? style.checked : style.unchecked}>

        <li> <Text color={"black"} marginTop="19px" >Product</Text></li>
        <li>  <Text color={"black"} marginTop="19px" >Pricing</Text></li>
        <li> <Text color={"black"} marginTop="19px" >Why Track?</Text></li>
        <li> <Text color={"black"} marginTop="19px" >Career</Text></li>
        <li><Text color={"black"} marginTop="19px" >Book a Demo</Text></li>
        <li><Button className={style.try}> Try for free</Button></li>
        <li> <Text alignSelf={"center"} fontWeight="600" color={"black"} marginTop="19px" >Log In</Text></li>
      </ul>
    </VStack>
  )
}

