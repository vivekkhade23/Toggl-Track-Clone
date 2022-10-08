import {
  Link,
  useDisclosure,
  useColorModeValue,
  Flex,
  useMediaQuery,

} from "@chakra-ui/react";
import styles from "./Navtop.module.css";


const Links = ["Dashboard", "Projects", "Team"];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    textDecoration={"none"}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
   
    href={"#"}
  >
    {children}
  </Link>
);

export default function WithAction() {

  const [Display] = useMediaQuery('(min-width: 800px)')

  return (
   <Flex>
   {Display?<FullScreen/>:<HalfScreen/>}
    </Flex>
  );
}
const FullScreen=()=>{
  return (  
      <div className={styles.topnavbar}>
        <div className={styles.topnavbarsecond}>
        <div><NavLink>Back to Toggl Global</NavLink></div>
        <div><NavLink>Products</NavLink></div>
        <div> <NavLink>Blog</NavLink></div>
        <div> <NavLink>Our mission</NavLink></div>
        <div> <NavLink>Working at Toggl!</NavLink></div>
        </div>
      </div>
    
  )
  
}
const HalfScreen=()=>{
  return (
  <div className={styles.topnavbar}>
  <div  className={styles.topnavbarsecond}>
  <div><NavLink>Back to Toggl Global</NavLink></div>
  <div><NavLink>Products</NavLink></div>
  <div> <NavLink>Blog</NavLink></div>
  </div>
  </div>
  )
}