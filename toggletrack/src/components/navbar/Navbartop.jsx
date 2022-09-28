import {
  Link,
  useDisclosure,
  useColorModeValue,

} from "@chakra-ui/react";
import "./Navtop.css";

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
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="topnavbar">
        {/* <div></div> */}
        <div className="topnavbar-second">
        <div><NavLink>Back to Toggl Global</NavLink></div>
        <div><NavLink>Products</NavLink></div>
        <div> <NavLink>Blog</NavLink></div>
        <div> <NavLink>Our mission</NavLink></div>
        <div> <NavLink>Working at Toggl!</NavLink></div>
        </div>
      </div>
    </>
  );
}