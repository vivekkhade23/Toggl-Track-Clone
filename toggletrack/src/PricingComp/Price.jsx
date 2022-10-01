import { Box ,Heading,SimpleGrid,Text,Button, Flex,Image, Input} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'
import {ChevronDownIcon} from '@chakra-ui/icons'
import mobile from "./icon-mobile.jpg"
import dekstop from "./icon-desktop (1).png"
import browser from "./icon-browser.png"
import web from "./icon-webapp.png"

import React from 'react'
import "./price.css"
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from '@chakra-ui/react'
import image from "./cs-team-sweatandco.jpg"
import Toggle from './Toggle/Toggle'
import EmployeeFAQ from './Employee_FAQ/EmployeeFAQ'

const Price = () => {
  return (
    <Box >

        <Box sx={{background:"#2c1338",width:"100%",height:"auto",padding:"4rem"}}>
            <Heading sx={{color:"#fff2d3",margin:"auto",textAlign:"center"}}>Pricing Plan</Heading>
            <Text sx={{color:"#fff2d3",marginTop:"30px",textAlign:"center"}}>No credit card required. All plans come with a free, 30-day trial of our Premium features.</Text>

            <Text sx={{color:"white",marginTop:"30px",textAlign:"center"}}>Choose your billing:</Text>
            <br/>
            <Toggle/>
            <br/>
            <SimpleGrid sx={{padding:"4rem 2rem",gap:"14px"}} columns={[1,2,2,4]}>
              <Box sx={{background:"#412a4c",height:"auto",padding:"2rem 1rem",marginTop:"20px"}}>
                <Text sx={{fontWeight:"500",color:"#fff2d3",marginLeft:"30px",textAlign:"left",fontSize:"29px"}}>Free</Text>
                <p style={{color:"#fff2d3",marginLeft:"30px",textAlign:"left",marginTop:"10px"}}>Seamless time tracking and reporting designed with freelancers in mind</p>
                <div class="Wrapper">
                  <div>$0</div>
                  <div>Free for up to 5 users.</div>
                  </div>
                  <ul class="peatures"><li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Unlimited time tracking</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Unlimited projects, clients, and tags</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Exportable reports</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Web app, mobile apps, and desktop apps<span data-title="Keep your time tracking synced across multiple devices, online or offline. Track syncs your data the moment you come online."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Automated time tracking triggers</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Idle time detection</li><li><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Pomodoro timer</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>CSV imports<span data-title="Easily upload project and client data to your workspace from a CSV file."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Personal desktop activity tracking<span data-title="Turn on the Timeline feature to automatically record every application or website you use for more than 10 seconds. Available on our desktop apps."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Track time in 100+ popular tools<span data-title="Track time in 100+ online tools with Toggl Track’s Google Chrome and Firefox browser extensions. Enabling specific permissions within the extension settings embeds a Toggl Track timer into the interface of the enabled apps."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li></ul>
              </Box>


              <Box sx={{background:"#412a4c",height:"auto",padding:"2rem 1rem",marginTop:"20px"}}>
              <Text sx={{fontWeight:"500",color:"#fff2d3",marginLeft:"30px",textAlign:"left",fontSize:"29px"}}>Starter</Text>
                <p style={{color:"#fff2d3",marginLeft:"30px",textAlign:"left",marginTop:"10px"}}>Seamless time tracking and reporting designed with freelancers in mind</p>
                <div class="Wrapper">
                  <div>$9</div>
                  <div>per user per month.</div>
                  </div>
                  <ul class="peatures"><li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Unlimited time tracking</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Unlimited projects, clients, and tags</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Exportable reports</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Web app, mobile apps, and desktop apps<span data-title="Keep your time tracking synced across multiple devices, online or offline. Track syncs your data the moment you come online."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Automated time tracking triggers</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Idle time detection</li><li><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Pomodoro timer</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>CSV imports<span data-title="Easily upload project and client data to your workspace from a CSV file."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Personal desktop activity tracking<span data-title="Turn on the Timeline feature to automatically record every application or website you use for more than 10 seconds. Available on our desktop apps."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Track time in 100+ popular tools<span data-title="Track time in 100+ online tools with Toggl Track’s Google Chrome and Firefox browser extensions. Enabling specific permissions within the extension settings embeds a Toggl Track timer into the interface of the enabled apps."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li></ul>
              </Box>
<Box>  
      <Box sx={{backgroundColor:"#e57cd8",height:"auto",display:"flex",alignItems:"center",marginTop:"-20px",justifyContent:"center",padding:"0rem 0rem"}}>
        <Text sx={{fontWeight:"500",color:"white",backgroundColor:"#e57cd8",textAlign:"center",fontSize:"20px"}}>Best value</Text>
        </Box>
              <Box sx={{background:"#fff3ed",height:"auto",padding:"2rem 1rem",border:"6px solid #e57cd8"}}>
              
              <Text sx={{fontWeight:"500",color:"#e57cd8",marginLeft:"30px",textAlign:"left",fontSize:"29px"}}>Premium</Text>
                <p style={{color:"#e57cd8",marginLeft:"30px",textAlign:"left",marginTop:"10px"}}>Seamless time tracking and reporting designed with freelancers in mind</p>
                <div class="Wrappers">
                  <div>$ 18</div>
                  <div>per user per month.</div>
                  </div>
                  <ul class="peatures"><li class="plip"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Unlimited time tracking</li>
                  <li class="plip"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Unlimited projects, clients, and tags</li>
                  <li class="plip"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Exportable reports</li>
                  <li class="plip"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Web app, mobile apps, and desktop apps<span data-title="Keep your time tracking synced across multiple devices, online or offline. Track syncs your data the moment you come online."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li>
                  <li class="plip"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Automated time tracking triggers</li>
                  <li class="plip"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Idle time detection</li><li><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Pomodoro timer</li>
                  <li class="plip"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>CSV imports<span data-title="Easily upload project and client data to your workspace from a CSV file."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li>
                  <li class="plip"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Personal desktop activity tracking<span data-title="Turn on the Timeline feature to automatically record every application or website you use for more than 10 seconds. Available on our desktop apps."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li>
                  <li class="plip"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Track time in 100+ popular tools<span data-title="Track time in 100+ online tools with Toggl Track’s Google Chrome and Firefox browser extensions. Enabling specific permissions within the extension settings embeds a Toggl Track timer into the interface of the enabled apps."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li></ul>

              </Box>
              </Box>
              <Box sx={{background:"#412a4c",height:"auto",padding:"2rem 1rem",marginTop:"20px"}}>
              <Text sx={{fontWeight:"500",color:"#fff2d3",marginLeft:"30px",textAlign:"left",fontSize:"29px"}}>Free</Text>
                <p style={{color:"#fff2d3",marginLeft:"30px",textAlign:"left",marginTop:"10px"}}>Seamless time tracking and reporting designed with freelancers in mind</p>
                <div class="Wrapper">
                  <div>$0</div>
                  <div>Free for up to 5 users.</div>
                  </div>
                  <ul class="peatures"><li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Unlimited time tracking</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Unlimited projects, clients, and tags</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Exportable reports</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Web app, mobile apps, and desktop apps<span data-title="Keep your time tracking synced across multiple devices, online or offline. Track syncs your data the moment you come online."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Automated time tracking triggers</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Idle time detection</li><li><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Pomodoro timer</li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>CSV imports<span data-title="Easily upload project and client data to your workspace from a CSV file."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Personal desktop activity tracking<span data-title="Turn on the Timeline feature to automatically record every application or website you use for more than 10 seconds. Available on our desktop apps."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li>
                  <li class="pli"><svg width="17" height="14" viewBox="0 0 17 14"><path d="M14.914 0l2.121 2.121L5.721 13.435l-.055-.055-.01.01L0 7.731l2.121-2.121L5.712 9.2 14.914 0z" stroke="#E57CD8" fill="#E57CD8"></path></svg>Track time in 100+ popular tools<span data-title="Track time in 100+ online tools with Toggl Track’s Google Chrome and Firefox browser extensions. Enabling specific permissions within the extension settings embeds a Toggl Track timer into the interface of the enabled apps."><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="#ABA0AF"><path d="M8.5 0C3.8131 0 0 3.81315 0 8.50005C0 13.187 3.8131 17 8.5 17C13.1869 17 17 13.187 17 8.50005C17 3.81315 13.1869 0 8.5 0ZM8.5 15.4545C4.66521 15.4545 1.54545 12.3348 1.54545 8.50005C1.54545 4.66532 4.66521 1.54545 8.5 1.54545C12.3348 1.54545 15.4545 4.66532 15.4545 8.50005C15.4545 12.3348 12.3347 15.4545 8.5 15.4545Z"></path><path d="M8.49885 3.60596C7.93084 3.60596 7.46875 4.06836 7.46875 4.63672C7.46875 5.20458 7.93084 5.66656 8.49885 5.66656C9.06685 5.66656 9.52894 5.20458 9.52894 4.63672C9.52894 4.06836 9.06685 3.60596 8.49885 3.60596Z"></path><path d="M8.50027 7.21216C8.07351 7.21216 7.72754 7.55813 7.72754 7.98489V12.6212C7.72754 13.048 8.07351 13.394 8.50027 13.394C8.92702 13.394 9.27299 13.048 9.27299 12.6212V7.98489C9.27299 7.55813 8.92702 7.21216 8.50027 7.21216Z"></path></svg></span></li></ul>

              </Box>




            </SimpleGrid>
            <p style={{color:"#fff2d3",width:"50%",textAlign:"center",marginTop:"10px",margin:"auto"}}>All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required. You can choose to upgrade at the end of the trial or continue using Track for free.</p>

<p style={{color:"#fff2d3",width:"50%",textAlign:"center",marginTop:"10px",margin:"auto",paddingTop:"20px"}}>Still unsure?</p>

<br/>

<Button id="compare">Compare all plan feature</Button>

<br/>
<br/>
<Box id="phastag">
<Box sx={{background:"#fdf1ec" ,width:"100%",height:"auto",padding:"2rem 4rem"}}>
  <Flex>
    <Box>  <Heading sx={{color:"#2c1338",fontSize:"24px",lineHeight:"32px",fontFamily:"GT Haptik Medium, sans-serif",width:"78%",textAlign:"left"}}>“Toggl Track increased our profitability by at least 20%. We found out where the team was spending too much time on clients. Toggl Track gave us the ability to restrategize, find out what’s wrong, and fix it.”</Heading> 
    <br/>
    <Flex sx={{gap:"7px"}}>
      <Text sx={{}}>— Sweat+Co on Toggl Track’s Premium plan</Text>
      <p style={{color:"#2c1338",fontWeight:"bold"}}>Read the case study</p>
    </Flex>

     </Box>
    <Image id="has" w={["100%","80%","25%"]} src={image}/>
  

  </Flex>

</Box>

<Box sx={{backgroundColor:"#fce5d8",width:"100%",height:"auto",padding:"2rem 4rem",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
  
  <Heading sx={{color:"2c1338",fontFamily:"GT Haptik Medium , sans-serif",fontSize:"24px",fontWeight:"400",textAlign:"left"}}>Toggl Track is trusted by Sweat+Co and 70,000+ teams</Heading>

<Button id="try">Try Toggle Track</Button>
  

</Box>


</Box>




        </Box>

       <Box sx={{background:"#412a4c",width:"100%",height:"auto",padding:"15rem 2rem"}}>
        <Heading sx={{color:"#e57cd8"}}>FAQs</Heading>
        <EmployeeFAQ/>

  <br/>
  <br/>
  <br/>
  <br/>


            <Box sx={{background:"#fce5d8",height:"auto",width:"85%",padding:"2rem",margin:"auto"}}>
              <Heading sx={{fontFamily:"GT Haptik Medium, sans-serif",fontSize:"30px",color:"#412a4c",fontWeight:"600",textAlign:"left"}}>Sign up for free. No credit card required.</Heading>
              <br/>
              <Flex id="sans">
               <input style={{border:"1px solid #412a4c",background:"#fce5d8",padding:"7px 20px"}} placeholder='Email'/>
               <input  style={{border:"1px solid #412a4c",background:"#fce5d8",padding:"7px 20px"}} placeholder='Password' />
               <Button class='with'>Sign up with email</Button>
               <p>Or Signup with:</p>
               <Image src=""/>
               <Image src=""/>
              </Flex>
              <br/>
              <p style={{fontSize:"16px",color:"#000000",fontFamily:"Inter, sans-serif"}}>By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.</p>
              
              
            </Box>
            <br/>
            <Flex >
                <Text sx={{margin:"auto",color:"#fce5d8",fontSize:"17px",fontFamily:"Inter, sans-serif",fontWeight:"400"}}>Onboarding a large team?</Text>
                <Text sx={{margin:"auto",color:"#e57cd8",fontWeight:"bold"}}>Book a demo</Text>
              </Flex>
       </Box>

       <Box sx={{background:"#2c1338",width:"100%",height:"auto",padding:"4rem 2rem"}}>
        <Heading sx={{color:"white",fontSize:"41px",lineHeight:"51px",fontWeight:"600",width:"50%",margin:"auto"}}>Full Plan Comparison</Heading>
  <br/>
     <Box sx={{padding:"1rem 3rem"}}>
     <table>
  <tr >
    <th style={{background:"#fff3ed",width:"45%",height:"100px"}}></th>
    <th style={{background:"#fff3ed",width:"15%",height:"100px",padding:"0rem 1rem",color:"#2c1338",fontSize:"19px"}}>Free
    <Button sx={{background:"#2c1338 ",color:"white",borderRadius:"33px",border:"none"}}>Get Started</Button>
    </th>


    <th style={{background:"#fff3ed",width:"15%",height:"100px",padding:"0rem 1rem",color:"#2c1338",fontSize:"19px"}}>Starter
    <Button sx={{background:"#2c1338 ",color:"white",borderRadius:"33px",border:"none"}}>Get Started</Button>
    </th>


    <th style={{background:"#fce5d8",width:"15%",height:"100px",padding:"0rem 2rem",color:"#2c1338",fontSize:"19px"}}>Premium
    <Button sx={{background:"#e57cd8",color:"white",borderRadius:"33px",border:"none"}}>Get Started</Button>
    </th>


    <th style={{background:"#fff3ed",width:"15%",height:"100px",padding:"0rem 3rem",color:"#2c1338",fontSize:"19px"}}>Enterprise
    <Button sx={{background:"#2c1338 ",color:"white",borderRadius:"33px",border:"none"}}>Get Started</Button>
    </th>
    
  </tr>
  <td class="bich">Time Tracking</td>
  <td class="bich"></td>
  <td class="bich"></td>
  <td class="bich"></td>
  <td class="bich"></td>
  <tr>
    <td>Web app, mobile apps, and desktop apps</td>
    <td class="td">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  
  </tr>
  <tr>
    <td>Pomodoro timer</td>
    <td class="td">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Idle time detection</td>
    <td class="td">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Personal time tracking reminders</td>
    <td class="td">   </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Favorite time entries</td>
    <td class="td">   </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Automated time tracking triggers</td>
    <td class="td">  </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Personal desktop activity tracking</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>

  <td class="bich">Team Management</td>
  <td class="bich"></td>
  <td class="bich"></td>
  <td class="bich"></td>
  <td class="bich"></td>


  <tr>
    <td>Overview of team activity</td>
    <td class="td">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  
  </tr>
  <tr>
    <td>User groups</td>
    <td class="td">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Team access level management</td>
    <td class="td">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Team member, project, and client audits</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Team time tracking reminder emails</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Add time for team members</td>
    <td class="td">  </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Manage team member billable rates and labor costs</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>

  <tr>
    <td>Single Sign-On (SSO)</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>

  <td class="bich">Reporting</td>
  <td class="bich"></td>
  <td class="bich"></td>
  <td class="bich"></td>
  <td class="bich"></td>


  <tr>
    <td>Exportable Summary, Detailed, and Weekly reports</td>
    <td class="td">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  
  </tr>
  <tr>
    <td>CSV imports</td>
    <td class="td">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>XLS export</td>
    <td class="td">   </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Billable rates</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Time rounding for reports</td>
    <td class="td">   </td>
    <td class="td"> <CheckIcon />   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Custom company logo</td>
    <td class="td">  </td>
    <td class="td">  <CheckIcon />   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Saved Reports</td>
    <td class="td">   </td>
    <td class="td"> <CheckIcon />  </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>

  <tr>
    <td>Single Sign-On (SSO)</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>

  <tr>
    <td>Manage team member billable rates and labor costs</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>

  <tr>
    <td>Schedule saved reports via email</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>

  
  <tr>
    <td>Set required fields for time entries</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>

  <tr>
    <td>Limit tag access</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>

  <tr>
    <td>Lock time entries</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>

  <td class="bich">Project Management</td>
  <td class="bich"></td>
  <td class="bich"></td>
  <td class="bich"></td>
  <td class="bich"></td>


  <tr>
    <td>Overview of team activity</td>
    <td class="td">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  
  </tr>
  <tr>
    <td>User groups</td>
    <td class="td">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Team access level management</td>
    <td class="td">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Team member, project, and client audits</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Team time tracking reminder emails</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Add time for team members</td>
    <td class="td">  </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Manage team member billable rates and labor costs</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>

  <tr>
    <td>Single Sign-On (SSO)</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>


  <td class="bich">Integrations</td>
  <td class="bich"></td>
  <td class="bich"></td>
  <td class="bich"></td>
  <td class="bich"></td>
  <tr>
    <td>Web app, mobile apps, and desktop apps</td>
    <td class="td">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  
  </tr>
  <tr>
    <td>Pomodoro timer</td>
    <td class="td">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Idle time detection</td>
    <td class="td">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Personal time tracking reminders</td>
    <td class="td">   </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Favorite time entries</td>
    <td class="td">   </td>
    <td class="td">  <CheckIcon /> </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Automated time tracking triggers</td>
    <td class="td">  </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>
  <tr>
    <td>Personal desktop activity tracking</td>
    <td class="td">   </td>
    <td class="td">   </td>
    <td class="pink">  <CheckIcon /> </td>
    <td class="td">  <CheckIcon /> </td>
  </tr>

</table>

     </Box>

       </Box>

       <Box sx={{background:"#f7d8f3",width:"100%",height:"auto",padding:"3rem 2rem"}}>
        
        <Heading sx={{color:"#2c1338",fontSize:"41px",lineHeight:"51px",fontWeight:"600",width:"50%",margin:"auto"}}> Online, offline or on the go?
We <em style={{color:"#e57cd8"}}>have an app</em> for that!</Heading>
<br/>
<Text sx={{color:"#2c1338",lineHeight:"51px",fontWeight:"600",width:"60%",margin:"auto"}}>Your data instantly syncs across all apps and devices</Text>
<SimpleGrid sx={{padding:" 3rem 2rem"}} columns={[1,1,2,4]}>
  <Box>
    <Image class="mob" src={mobile} />
    <div>
    <p class="ProductType">MOBILE APPS</p>
    <p color="#564260" class="st">Start and stop tracking from anywhere</p>
    <Flex>
      <Button class="or">
        <Image height="23px" width="24px" src="data:image/png;base64,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" />
        iOS

      </Button>

      <Button class="or">
      <Image height="20px" width="20px" src="data:image/png;base64,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" />
        Android

      </Button>
    </Flex>
    </div>
  </Box>

  <Box>
  <Image  class="mobs" src={dekstop} />
    <div>
    <p class="ProductType">DEKSTOP APPS</p>
    <p color="#564260" class="st">For users who want to work with minimal distractions</p>
    <Flex>
      <Button class="or">
        <Image height="20px" width="20px" src="data:image/jpeg;base64,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"/>
       Windows

      </Button>

      <Button class="or">
      <Image height="20px" width="20px" src="data:image/png;base64,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" />
        macOS

      </Button>
    </Flex>
    </div>
  </Box>

  <Box> <Image class="mobp" src={web} />
    <div>
    <p class="ProductType">WEB APP</p>
    <p color="#564260" class="st">To view time reports, manage projects, and teams</p>
    <Flex>
      <Button class="for">
    Sign up for free
      </Button>
    </Flex>
    </div></Box>

  <Box> <Image class="mob" src={browser} />
    <div>
    <p class="ProductType">BROWSER PLUGINS</p>
    <p color="#564260" class="st">100+ integrations with your favorite online tools</p>
    <Flex>
      <Button class="or">
        <Image src="data:image/jpeg;base64,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" height="20px" width="20px" />
        chrome

      </Button>

      <Button class="or">
      <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKcRMHDPCB_vvSDX0oSLuBiMwJdWiGeA2HkQ&usqp=CAU" height="20px" width="20px" />
        Firebox

      </Button>
    </Flex>
    </div></Box>

</SimpleGrid>


       </Box>

       <Box sx={{background:"#412A4C",height:"auto",padding:"4rem 2rem",width:"100%"}}>
        <Heading class="swit">Ready to get on <em style={{color:"#e57cd8 "}}>Track?</em> </Heading>
        
 
       <Box id="priya">
        <Heading class="swits">Sign up for free</Heading>
        <p id="all">All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required. Upgrade at the end of the trial or continue using Track for free.</p>
        <br/>
        <Flex sx={{gap:"20px"}}>
        <Flex sx={{display:"flex",justifyContent:"center"}}  className="svg">
        <Image width="30%" height="87%" src="data:image/png;base64,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"/>
        <Button class='up'>Sign up via Google</Button>
       </Flex>
        
       <Flex sx={{display:"flex",justifyContent:"center"}}  className="svg">
        <Image s height="91%" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGoAAAB8CAMAAAC2cNUjAAAAaVBMVEUAAAD////7+/vr6+vx8fHJycni4uI4ODj4+Pjo6Oi1tbUUFBTNzc0oKCg7OzvX19dhYWF3d3dVVVWWlpZoaGgeHh5vb2+rq6uioqLAwMBKSkqIiIhPT08jIyMZGRlcXFwLCwsvLy9/f38XEoGUAAAD+UlEQVRoge2ba5eiMAyGK5Q7ioCIgPf//yNXLo60TanWZM7uOft+mznEx5a0TdLIVr8m9h+1JMfLfgXF423Cdr+ASvcJeyggR3ktG7UmRmUFe4p4VCV76UKJ4sWMxDpClB/MSSymQ/lrgcTo1lUojomdTQb2qK1IMq5ge1QskVhDheIyqQqpULmMuhtNLFGRTGI+Feouk/ZmGzuUowwqokLVMunwhpEdSlq9rH3HyAoVyoNyyVDy8k3fsrJCdSKpfs/KCrX52CWsUTZjskMJ+5/3/he0QGUvUPHG0v0G1TxBt/kZz6Mocpe29wVUlDV1WR7qJvPFTxj3iqqIp387ftNd2uBUVetNsasz/hHKybri/JqnzbZMX8s0Pu66OJv+5t69ZaKCHAwzQBSvZeuHkkvpy/PDvf1affKhFjiTIVQMm/ffdx9HT5zjxvuT7kHGjsrIVJR/1NsPk5mXTeodcmDgojrHgFLCE3sd3UVUaf6E95X4C6jObP+RMi0KmySwBNQBnTQPOuYoj4DEEg6g+JUCxXIAdSEhvaLeFwpxQc1UAm7BFzYZe82DgR8U6tqFSD8oN6Em/aAoBiWl/BPK0Z4b9pIz1gnVmC0/1UmOrhnZmlLO4RFFsFGouR2jmj81YR1RShL9tXKFNKHwdwogCx9Qar7+rQqVNKLwXxWUCA0o/NMXylgZiVfcHB1KTti/FuB/E+qKjSp1KAcdBdZWe5SLTYKz1h7lo6PAQkaPysy2H0qbyqXoKO2o8FFgHZcGBRZoaN4VeGdBgwJr7j0K/ww5QaWSHqXUzL8XVJ+m2QP151WFjoKuzQZUYbb9VLrYAj/bhtx9QFFkceqRP6Ao8m11WAOKJOFW3tYYcuK7IGNHGIUfSDM1wBhRNNm9B6Hwj/xeCVikI6kksIoDKIJF3EtIUicUSSXroXOqoBwKdx9Uyigadx8UNBIKP5SZwepwjlrdCFlMGBVNOWtSJ6L8Kx0qE1FKUwOegpWEonOMWkatjJcclnrWpGcogurPoOd5PEM5G7OZjSIVRXRqQXV2omH5EIrkbUElfRonvMLXLxRrC7o9GLVDJt1CLQo7q5vn36R3jWKiKqNwHd5dQqF6htiKoV5B403hdmVAoU2hFNxCd/hYUbVc/QHbBVBISqUTbILACKt1dyKyvt80WrUeA6NCQyOEUQFQaNc0rHzJgkjaNpxQP4ebY16W3a7Vx8NHsBFH3/ED+ka1jbPnW+BZfQFTwBy6O1hsLvLO8me0sTwxvNnJTyW6BuallqmwnF8Wn+5wZzKPtzNaUmq7ppa7s3jdDrQkKJd6AEPvcKmSJKl28UJ7lrERzMnSVOlfAnnc8NS/+OONvwr1B3V4MQgU8bqCAAAAAElFTkSuQmCC"/>
        <Button class='up'>Sign up via Apple</Button>
       </Flex>
        </Flex>
        <br/>
        <Flex className="sirf">
          <Image height="99%" src="https://img.icons8.com/ios-filled/2x/circled-envelope.png"/>
        <Button class='up'>Sign up with e-mail</Button>
        </Flex>
        <br/>
        <br/>
        <br/>

        <p >By signing up, you agree to our terms of service, privacy policy and to receiving marketing communication from Toggl Track. You can opt out anytime.</p>
     
       </Box>
       <Box id="rajawat">
        <Heading className='prefer'>Prefer a product demo instead?</Heading>
        <br/>
        <p class="teamss">Teams of 10+ are eligible for a personalized demo to see how Toggl Track can meet your time tracking goals</p>
    <br/>
        <a class="demo" href="/track/demo-request/">Book a demo</a>
       </Box>

    </Box>


    
    </Box>
  )
}

export default Price