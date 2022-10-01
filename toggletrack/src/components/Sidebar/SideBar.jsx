import React from 'react'
import {HStack, Stack, Text, VStack} from "@chakra-ui/react"
import "./Sidebar.css";
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
    <div>
        <Stack className='stack'>
<VStack className='vstack'>
    <HStack>
        <img src={logo} className="img" alt="toogle"/>
        <BsBell className='icons'/>
    </HStack>
    <br />
    <Text   className='Text'>TRACK</Text>
 
    <HStack className='hStack'>
        <HiClock/>
        <Text>Timer</Text>
    </HStack>
    <br />
    <Text   className='Text'>ANALYZE</Text>
    {/* <br /> */}
    <HStack className='hStack'>
        <HiDocumentText/>
        <Text>Report</Text>
    </HStack>
    <HStack className='hStack'>
        <DiGoogleAnalytics/>
        <Text>Insights</Text>
    </HStack>
    <br />
    <Text   className='Text'>MANAGE</Text>
    {/* <br /> */}
    <HStack className='hStack'>
        <BsFillCreditCardFill/>
        <Text>Projects</Text>
    </HStack>
    <HStack className='hStack'>
        <FaAddressBook/>
        <Text>Clients</Text>
    </HStack>
    <HStack className='hStack'>
        <RiGroupFill/>
        <Text>Team</Text>
    </HStack>
    <HStack className='hStack'>
        <BsTagsFill/>
        <Text>Tags</Text>
    </HStack>
    <HStack className='hStack'>
        <IoMdHelpCircle/>
        <Text>Help</Text>
    </HStack>
    <HStack className='hStack'>
        <BsCreditCard2BackFill/>
        <Text>Subscription</Text>
    </HStack>
    <HStack className='hStack'>
        <BsPlugFill/>
        <Text>Integrations</Text>
    </HStack>
    <br />
    <Text   className='Text'>ADMIN</Text>
    {/* <br /> */}
    <HStack className='hStack'>
        <CgOrganisation/>
        <Text>Organizations</Text>
    </HStack>
    <HStack className='hStack'>
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
