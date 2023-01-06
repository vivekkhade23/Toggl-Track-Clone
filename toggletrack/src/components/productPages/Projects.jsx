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
import { TiSortAlphabetically } from "react-icons/ti";
import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./Projects.module.css";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,

  ModalCloseButton, RadioGroup
} from "@chakra-ui/react";
import Timer from "../Timer/Timer";
import SideBar from "../Sidebar/SideBar";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


const Projects = () => {
  const isAuth = useSelector((store) => store.isAuth);
  const navigate = useNavigate()
  const [user, setUser] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [client, setClient] = useState([]);
  const [team, setTeam] = useState([]);


  useEffect(() => {
    fetch("https://toggleapi.onrender.com/client")
      .then((res) => res.json())
      .then((res) => {
        let bag = {};
        for (let i = 0; i < res.length; i++) {
          if (bag[res[i].client] === undefined) {
            bag[res[i].client]++;
          } else {
            bag[res[i].client]++;
          }
        }
        let arr = [];
        for (let key in bag) {
          console.log(key)
          arr.push(key)
        }
        console.log("arrr", arr)
        setClient(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [])

  const [user1, setUser1] = useState({
    name: "",
    client: "",
    private: false,
    team: "",
  });

  useEffect(() => {
    fetch(`https://toggleapi.onrender.com/project/unarchieved`)
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });


    fetch("https://toggleapi.onrender.com/team")
      .then((res) => res.json())
      .then((res) => {
        let bag = {};
        for (let i = 0; i < res.length; i++) {
          if (bag[res[i].team] === undefined) {
            bag[res[i].team]++;
          } else {
            bag[res[i].team]++;
          }
        }
        let arr = [];
        for (let key in bag) {
          console.log(key)
          arr.push(key)
        }
        setTeam(arr);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);

  const fetchUser = () => {
    console.log("clicked")

    fetch(`https://toggleapi.onrender.com/project/unarchieved`)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const Fetchclient = () => {
    fetch("https://toggleapi.onrender.com/client")
      .then((res) => res.json())
      .then((res) => {
        let bag = {};
        for (let i = 0; i < res.length; i++) {
          if (bag[res[i].client] === undefined) {
            bag[res[i].client]++;
          } else {
            bag[res[i].client]++;
          }
        }
        let arr = [];
        for (let key in bag) {
          console.log(key)
          arr.push(key)
        }
        setClient(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  const fetchTeam = () => {
    fetch("https://toggleapi.onrender.com/team")
      .then((res) => res.json())
      .then((res) => {
        let bag = {};
        for (let i = 0; i < res.length; i++) {
          if (bag[res[i].team] === undefined) {
            bag[res[i].team]++;
          } else {
            bag[res[i].team]++;
          }
        }
        let arr = [];
        for (let key in bag) {
          console.log(key)
          arr.push(key)
        }
        console.log("arrr", arr)
        setTeam(arr);
      })
      .catch((err) => {
        console.log(err);
      });
  }


  const handleAll = () => {
    console.log("clicked")

    fetch("https://toggleapi.onrender.com/project")
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handlePrivate = (e) => {
    if (e.target.checked) {
      setUser1({ ...user1, private: true })
    } else {
      setUser1({ ...user1, private: false })
    }
    console.log(user1)
  }

  const handleClient = async (value) => {
    let u = await axios.get(`https://toggleapi.onrender.com/project/client/${value}`)


    setUser(u.data)

  }

  const handleTeam = async (value) => {
    let u = await axios.get(`https://toggleapi.onrender.com/project/team/${value}`)


    setUser(u.data)

  }

  const handleArchieve = async (id, Archieve) => {
    await axios.put(`https://toggleapi.onrender.com/project/updatearchieve/${id}`, {
      isArchieved: Archieve
    })
    fetchUser();

  }
  const handleinactiveUser = () => {
    console.log("clicked")
    fetch(`https://toggleapi.onrender.com/project/archieved`)
      .then((res) => res.json())
      .then((res) => {
        setUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("https://toggleapi.onrender.com/project/create", user1);
    await axios.post("https://toggleapi.onrender.com/client", { client: user1.client });
    await axios.post("https://toggleapi.onrender.com/team", { team: user1.team })
    fetchUser();
    Fetchclient();
    fetchTeam();
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://toggleapi.onrender.com/project/delete/${id}`);
    fetchUser();
    Fetchclient();
    fetchTeam();

  }
if(!isAuth){
  navigate("/login")
}


  return (
    <div className={style.box}>
      <SideBar />
      <div className={style.display}>
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
                onChange={(e) => setUser1({ ...user1, name: e.target.value })}
              />
              <br />
              <label>CLIENT</label>
              <br />
              <Input
                type="text"
                w={"80%"}
                placeholder="Client Name"
                // value={client}
                onChange={(e) => setUser1({ ...user1, client: e.target.value })}
              />
              <br />
              <Box display={"flex"}>

                <label>Private</label>
                <br />
                <input
                  type="checkbox"
                  w={"80%"}
                  placeholder="Project Name"
                  // value={name}
                  onChange={handlePrivate}
                />
              </Box>
              <br />
              <label>Team</label>
              <br />
              <Input
                type="text"
                w={"80%"}
                placeholder="Team Name"
                // value={client}
                onChange={(e) => setUser1({ ...user1, team: e.target.value })}
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
        <Timer />

        <Box boxShadow="dark-lg">
          <Flex mt={"2rem"} mb={"2rem"} pb={"1rem"} pt={"1rem"} ml={"2rem"}>
            <Menu >
              <MenuButton ml={8} as={Button} rightIcon={<ChevronDownIcon />} >
                Show Active
              </MenuButton>
              <MenuList>
                <MenuItem onClick={fetchUser}>Active</MenuItem>
                <br />
                <MenuItem onClick={handleinactiveUser}>Archived</MenuItem>
                <br />
                <MenuItem onClick={handleAll}>Both</MenuItem>

              </MenuList>
            </Menu>
            <Text ml={"2rem"}>Filter by:</Text>
            <Box
              _hover={{ bg: "gray.500" }}
              borderRadius={"0.5rem"}
              h={"1.7rem"}
              w={"150px"}
              ml={"2rem"}
              display={"flex"}

            >    <ArrowUpDownIcon h={"0.9rem"} />
              <Menu>
                <MenuButton  >
                  CLIENT
                </MenuButton>
                <MenuList>

                  <Box>
                    {client?.map((el) => {
                      return (
                        <MenuList key={el} onClick={() => handleClient(el)}>{el}</MenuList>

                      )
                    })}

                  </Box>
                </MenuList>
              </Menu>
            </Box>
            <Box
              _hover={{ bg: "gray.500" }}
              borderRadius={"0.5rem"}
              h={"1.7rem"}
              ml={"2rem"}
              w={"150px"}
              display={"flex"}
              gap="20px"

            >
              <AiOutlineTeam h={"0.9rem"} />
              <Menu>
                <MenuButton>
                  Team
                </MenuButton>
                <MenuList>
                  <Box>
                    {team?.map((el) => {
                      return (
                        <MenuList key={el} onClick={() => handleTeam(el)}>{el}</MenuList>

                      )
                    })}

                  </Box>
                </MenuList>
              </Menu>
            </Box>
            <Box
              _hover={{ bg: "gray.500" }}
              borderRadius={"0.5rem"}
              h={"1.7rem"}
              w={"150px"}
              ml={"2rem"}
              display={"flex"}
              gap="20px"

            >
              <  BsType h={"0.9rem"} />

              <Menu>
                <MenuButton >
                  Project name  </MenuButton>
                <MenuList>

                </MenuList>
              </Menu>
            </Box>
            <Box
              _hover={{ bg: "gray.500" }}
              borderRadius={"0.5rem"}
              h={"1.7rem"}
              w={"150px"}
              ml={"2rem"}
              display={"flex"}
              gap="20px"
              onClick={handleAll}
            >
              <TiSortAlphabetically />
              All
            </Box>
          </Flex>
        </Box>

        {/* 3rd section */}
        <Box boxShadow="dark-lg" >
          <Box display={"flex"}>
            <Menu >
              <MenuButton ml={8} as={Button} rightIcon={<ChevronDownIcon />} leftIcon={<BsCardText />}>
                Bulk edit
              </MenuButton>
              <MenuList>
                <MenuItem>Edit</MenuItem>
                <MenuItem>Archive</MenuItem>
                <MenuItem>Delete</MenuItem>

              </MenuList>
            </Menu></Box>




          <TableContainer overflowY={"scroll"} height="350px" ml={"3rem"}>
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
                  <Th>Delete </Th>
                  <Th>Archieve </Th>
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
                    <Td>{data.team}</Td>
                    <Td>
                      <Button onClick={() => handleDelete(data._id)}>DELETE</Button>
                    </Td>
                    <Td>
                      <Button onClick={() => handleArchieve(data._id, !data.isArchieved)}>{data.isArchieved ? "Archieved" : "Active"}</Button>
                    </Td>

                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </div>
    </div>
  );
};

export default Projects;
