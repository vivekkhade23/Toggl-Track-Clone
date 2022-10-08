import React from 'react'
import {HStack, Stack, Text, VStack} from "@chakra-ui/react"
import styles from "./Sidebar.module.css";
import logo from "./img/togglt-Logo.jpg"
import { HiClock, HiDocumentText } from 'react-icons/hi';
import { BsBell, BsCreditCard2BackFill, BsFillCreditCardFill, BsPlugFill, BsTagsFill } from 'react-icons/bs';
import { DiGoogleAnalytics } from 'react-icons/di';
import { FaAddressBook } from 'react-icons/fa';
import { RiGroupFill } from 'react-icons/ri';
import { IoMdHelpCircle } from 'react-icons/io';
import { AiTwotoneSetting} from 'react-icons/ai';
import { CgOrganisation } from 'react-icons/cg';


const SideBar = () => {
  return (
    <div className={styles.globle}>
        <Stack className={styles.stack}>
<VStack className={styles.vstack}>
    <HStack>
        <img src={logo} className={styles.img} alt="toogle"/>
        <BsBell className={styles.icons}/>
    </HStack>
    <br />
    <Text   className={styles.Text}>TRACK</Text>
 
    <HStack className={styles.hStack}>
        <HiClock/>
        <Text>Timer</Text>
    </HStack>
    <br />
    <Text className={styles.Text}>ANALYZE</Text>
    {/* <br /> */}
    <HStack className={styles.hStack}>
        <HiDocumentText/>
        <Text>Report</Text>
    </HStack>
    <HStack className={styles.hStack}>
        <DiGoogleAnalytics/>
        <Text>Insights</Text>
    </HStack>
    <br />
    <Text  className={styles.Text}>MANAGE</Text>
    {/* <br /> */}
    <HStack className={styles.hStack}>
        <BsFillCreditCardFill/>
        <Text>Projects</Text>
    </HStack>
    <HStack className={styles.hStack}>
        <FaAddressBook/>
        <Text>Clients</Text>
    </HStack>
    <HStack className={styles.hStack}>
        <RiGroupFill/>
        <Text>Team</Text>
    </HStack>
    <HStack className={styles.hStack}>
        <BsTagsFill/>
        <Text>Tags</Text>
    </HStack>
    <HStack className={styles.hStack}>
        <IoMdHelpCircle/>
        <Text>Help</Text>
    </HStack>
    <HStack className={styles.hStack}>
        <BsCreditCard2BackFill/>
        <Text>Subscription</Text>
    </HStack>
    <HStack className={styles.hStack}>
        <BsPlugFill/>
        <Text>Integrations</Text>
    </HStack>
    <br />
    <Text className={styles.Text}>ADMIN</Text>
    {/* <br /> */}
    <HStack className={styles.hStack}>
        <CgOrganisation/>
        <Text>Organizations</Text>
    </HStack>
    <HStack className={styles.hStack}>
        <AiTwotoneSetting/>
        <Text>Settings</Text>
    </HStack>
    <HStack>
        
    </HStack>
</VStack>
        </Stack>
    </div>
  )
}

export default SideBar
