import { Box, Button, Flex, Heading,Input,SimpleGrid,Text,Image } from '@chakra-ui/react'
import React from 'react'
import "./home.css"
import { SocialIcon } from 'react-social-icons';
import download from "./100+int.jpg"
import myimage from "./employee-time-tracking-short.png"
import HomeTwo from './HomeTwo';


const Home = () => {
  return (
    <Box sx={{backgroundColor:"rgb(44,19,56)",height:"800px",width:"100%",margin:"auto"}}>
        <Heading id="phead">Simple time tracking to save your <em id="pb">time</em> and <em id="pb">money </em> .</Heading>

    <SimpleGrid columns={[1,1,2,2]}>
    <Box class="pbox">
        <Text id="ptext">Bill accurately, measure profitability, manage workloads  — and spend less time on it all.</Text>
        <Box id="more">
        <Input sx={{height:"60px"}}  className="pinput"  type="email" placeholder="Email"/>
        
        <br/>
        <br/>
        
        <Input sx={{height:"60px"}} className="pinput" type="password" placeholder="Password"/>
        </Box>
        <Flex id="fl">
            <Button id="pbtn">Sign with e-mail</Button>
            <Flex sx={{gap:"10px"}}>
                <p style={{marginTop:"10px"}}>or sign up with :</p>
                <button  type="button" color="#FCE5D8"><svg width="28" height="28" viewBox="0 0 20 20"><g fill="none"><path d="M17.876 10.284c0-.574-.052-1.127-.147-1.657H10.1v3.134h4.36a3.726 3.726 0 01-1.617 2.444v2.033h2.618c1.531-1.41 2.415-3.487 2.415-5.954z" fill="#FCE5D8"></path><path d="M10.1 18.2c2.187 0 4.02-.725 5.36-1.962l-2.617-2.033c-.725.486-1.653.773-2.743.773-2.11 0-3.895-1.424-4.532-3.339H2.862v2.099A8.097 8.097 0 0010.1 18.2z" fill="#FCE5D8"></path><path d="M5.568 11.639a4.869 4.869 0 01-.254-1.539c0-.534.092-1.053.254-1.539V6.462H2.862A8.097 8.097 0 002 10.1c0 1.307.313 2.544.862 3.638l2.706-2.099z" fill="#FCE5D8"></path><path d="M10.1 5.222c1.19 0 2.257.408 3.096 1.21L15.52 4.11C14.117 2.803 12.283 2 10.1 2a8.097 8.097 0 00-7.238 4.462l2.706 2.099c.637-1.915 2.422-3.34 4.532-3.34z" fill="#FCE5D8"></path></g></svg></button>
                <button type="button" color="#FCE5D8"><svg viewBox="0 0 20 20" version="1.1"><g><path d="M15.027 9.67a4.048 4.048 0 011.916-3.392 4.112 4.112 0 00-3.244-1.763c-1.365-.144-2.688.82-3.384.82-.709 0-1.78-.806-2.933-.782a4.317 4.317 0 00-3.636 2.229c-1.571 2.735-.399 6.756 1.107 8.967.753 1.083 1.634 2.293 2.786 2.25 1.127-.047 1.548-.723 2.91-.723 1.347 0 1.742.723 2.918.696 1.21-.02 1.972-1.088 2.699-2.181a8.975 8.975 0 001.234-2.527 3.908 3.908 0 01-2.373-3.594zm-2.285-6.826A3.873 3.873 0 0013.685 0a4.25 4.25 0 00-2.714 1.352 3.69 3.69 0 00-.968 2.739 3.523 3.523 0 002.739-1.247z" fill="#FCE5D8"></path></g></svg></button>
               
            </Flex>
        
        </Flex>
      <p  className="tag">By signing up, you agree to our<a href="/track/legal/terms/"><span class="css-pqp2z0-Root eze9oxr1">terms of service</span></a>, <a href="/track/legal/privacy/"><span class="css-pqp2z0-Root eze9oxr1">privacy policy</span></a> and to receiving marketing communication from Toggl Track. You can opt out anytime.</p>
  <br/>
  <br/>
 
      <p  class="billion">Trusted by over 6 million users across 120 countries</p>

      <br/>
    </Box>

    <Box></Box>
</SimpleGrid>

<Box sx={{backgroundColor:"rgb(254,246,243)",height:"auto",width:"100%",marginBottom:"50px",paddingTop:"50px"}}>
      <h2 color="#412A4C" class="tracking">Time tracking for all your productivity and profitability needs</h2>

      <Flex className='pa'>
        <Button class='cpa' >Employee time tracking</Button>
        <Button class='cpa'>Billing & invoicing</Button>
        <Button class='cpa'>Project budgeting</Button>
        <Button class='cpa'>Reporting</Button>
        <Button class='cpa'>Payroll</Button>
      </Flex>

      <Flex className="paid">
        <div>  <h3  class="css-1sgylmh-H3">Get paid for every billable hour.</h3>

        <ul>
          <li class="list">Track billable hours for projects and clients as you go. Invoice clients for the exact time you put in.</li>
          <li class="list">Keep clients happy with transparent records of how biilable hours were spent.</li>
          </ul>

          <Button id="learn">Learn more</Button>
        </div>
        <Image id="back" src={myimage} />
      </Flex>
  
    </Box>
    
    
    <Box id="pbox">
      <Heading id="hum">Why do teams  <em>love</em> Toggl Track?</Heading>
      <SimpleGrid sx={{gap:"18px",marginLeft:"40px"}} columns={[1,1,2,2]}>
        <Box id="sher1">
        <Text class="us">Users report up to 25% increase in billable hours with accurate time tracking that accounts for every minute spent on client work.</Text>
        <Image h={["auto","auto","auto"]} sx={{margin:"auto",background:"transparent"}} src="data:image/png;base64,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"/>
        </Box>

        <Box id="sher"> 
        <Text class="us">Speed up team adoption with an anti-surveillance platform that gets a "yes" from every employee.</Text>
        <Image h={["auto","auto","auto"]} sx={{margin:"auto",background:"transparent"}}  src="data:image/png;base64,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"  />
          
          </Box>

          <Box id="sher3">
          <Text class="us">No training necessary. Get started right away with intuitive and welcoming features.</Text>
           <Image h={["auto","auto","auto"]} sx={{margin:"auto",background:"transparent"}} src="data:image/png;base64,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"/>
          </Box>

          <Box id="sher4">
          <Text class="us">Make time tracking and reporting a breeze with a beautifully-designed app experience.</Text>
            <Image h={["auto","auto","auto"]} sx={{margin:"auto",background:"transparent"}} src="data:image/png;base64,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"/>
          </Box>

      </SimpleGrid>
      <br/>
      <br/>
      <Box sx={{padding:"2rem 0.50rem",height:"auto",backgroundColor:"#f7d8f3",margin:"auto",borderRadius:"12px",display:"flex",justifyContent:"space-between"}} w={["100%","100%","94%"]}>
        <div> <h3 class='only'>The only time tracking tool with over 100+ integrations</h3>
        <br/>
        
        <p id="from">From Asana to Zapier, Jira, Salesforce and much more — integrate Toggl Track with tools your team already uses.</p>

        <br/>
        <br/>
        <br/>
        <p id="explore">Explore Integration</p>
        </div>
   
        <Image w={["0%","0%","30%"]} src={download}/>
  
      </Box>

      <br/>
      <br/>

      <h3 color="#FFF3ED" class="join">Join 5 million users tracking their time to get results</h3>

      <p class="plans">All plans come with a free, 30-day trial of Toggl Track Premium. Upgrade at the end of the trial or continue using Track for free.</p>

      <br/>
      <a class="css-j3on6x-Button-Primary" href="/track/signup/">Start tracking for free</a>
    </Box>
<HomeTwo/>
    </Box>
  )
}

export default Home