import {
  Box,
  Button,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
  Input,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Stack,
} from "@chakra-ui/react";
import { AddIcon, ArrowUpDownIcon, ChevronDownIcon } from "@chakra-ui/icons";
import { AiOutlineTeam, AiOutlineUser } from "react-icons/ai";
import { BsType, BsCardText } from "react-icons/bs";
// import { HiUser } from "react-icons/hi2";
import axios from "axios";
import React, { useEffect, useState} from "react";
import style from "./Projects.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
 
  ModalCloseButton,RadioGroup
} from "@chakra-ui/react";
import Timer from "../Timer/Timer";


const Projects = () => {
  const [user, setUser] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  // const {id}=useParams()
  
  const [user1, setUser1] = useState({
    name: "",
    client: "",
  });

  useEffect(() => {
    fetch("https://damp-oasis-99716.herokuapp.com/project")
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, [user1]);
  //  console.log(user)
  //  const handleDelete= async id => {
  //  await axios.delete(`https://damp-oasis-99716.herokuapp.com/project/${id}`);
    
  //   };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://damp-oasis-99716.herokuapp.com/project", user1);
   
  };

  // const { name, client } = user1;
  // const onInputChange = (e) => {
  //   setUser1({ ...user1, [e.target.name]: e.target.value });
  // };
  console.log(user1);

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={"50%"}>
          <ModalHeader> Create new project</ModalHeader>
          <ModalCloseButton />

          <form
            style={{ marginLeft: "3rem", marginTop: "10%" }}
            onSubmit={handleSubmit}
          >
            <label>NAME</label>
            <br />
            <Input
              type="text"
              w={"80%"}
              placeholder="Project Name"
              // value={name}
              onChange={(e) => setUser1({...user1,name:e.target.value})}
            />
            <br />
            <label>CLIENT</label>
            <br />
            <Input
              type="text"
              w={"80%"}
              placeholder="Client Name"
              // value={client}
              onChange={(e) => setUser1({...user1,client:e.target.value})}
            />
            <br />
            <br />
            <Button colorScheme="pink" w={"80%"} mr={3} type="submit"
               onClick={onClose} >
              Create project
            </Button>
          </form>

          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
         
      <Flex justifyContent={"space-around"} mt={"2rem"}>
        <Box>Projects</Box>
        {/* <Spacer /> */}
        <Box>
          <Button
            colorScheme={"#C463BA"}
            className={style.btn}
            onClick={onOpen}
          >
            {" "}
            <AddIcon mr={"0.5rem"} h={"0.85rem"} /> New Project
          </Button>
        </Box>
      </Flex>
          <Timer/>
      {/* <Divider mt={"1rem"} /> */}

      {/* 2nd */}
      <Box boxShadow="dark-lg">
        <Flex mt={"2rem"} mb={"2rem"} pb={"1rem"} pt={"1rem"} ml={"2rem"}>
          {/* <Button
            colorScheme={"white"}
            color={"black"}
            border={"1px solid black"}
            ml={"2rem"}
          >
            Show Active <ChevronDownIcon ml={"0.5rem"} />
          </Button> */}

<Menu >
  <MenuButton  ml={8} as={Button}  rightIcon={<ChevronDownIcon /> } >
  Show Active
  </MenuButton>
  <MenuList>
    <MenuItem>Active</MenuItem>
    <MenuItem>Archived</MenuItem>
    <MenuItem>Both</MenuItem>
 
  </MenuList>
</Menu>
          <Text ml={"2rem"}>Filter by:</Text>
          <Box
            _hover={{ bg: "gray.500" }}
            borderRadius={"0.5rem"}
            h={"1.7rem"}
            w={"4rem"}
            ml={"2rem"}
            display={"flex"}
          >
            {" "}
            <AiOutlineUser />
            Client
          </Box>
          <Box
            _hover={{ bg: "gray.500" }}
            borderRadius={"0.5rem"}
            h={"1.7rem"}
            ml={"2rem"}
            w={"5rem"}
            display={"flex"}
          >
            {" "}
            <AiOutlineTeam />
            Team
          </Box>
          <Box
            _hover={{ bg: "gray.500" }}
            borderRadius={"0.5rem"}
            h={"1.7rem"}
            w={"8rem"}
            ml={"2rem"}
            display={"flex"}
          >
            <BsType />
            Project name
          </Box>
        </Flex>
      </Box>

      {/* 3rd section */}
      <Box boxShadow="dark-lg" >
        <Box display={"flex"}>
      <Menu >
  <MenuButton  ml={8} as={Button}  rightIcon={<ChevronDownIcon /> } leftIcon={<BsCardText />}>
  Bulk edit
  </MenuButton>
  <MenuList>
    <MenuItem>Edit</MenuItem>
    <MenuItem>Archive</MenuItem>
    <MenuItem>Delete</MenuItem>
 
  </MenuList>
</Menu></Box>
          
          
        

        <TableContainer ml={"3rem"}>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>
                  PROJECT
                  <ArrowUpDownIcon h={"0.9rem"} />
                </Th>
                <Th>
                  CLIENT <ArrowUpDownIcon h={"0.9rem"} />
                </Th>
                <Th>
                  TIME STATUS <ArrowUpDownIcon h={"0.9rem"} />
                </Th>
                <Th>TEAM </Th>
              </Tr>
            </Thead>
            <Tbody>
            <RadioGroup defaultValue='2'>
  <Stack spacing={5} direction='row'>
    
    
  </Stack>
</RadioGroup>
              {user.map((data) => (
                
                <Tr key={data._id}>
                 
                 
                  <Td> {data.name}</Td>
                  <Td>{data.client}</Td>
                  <Td>{data.__v}h</Td>
                  <Td>{data.name}</Td>
                  <Button>DELETE</Button>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </>
  );
};

export default Projects;
