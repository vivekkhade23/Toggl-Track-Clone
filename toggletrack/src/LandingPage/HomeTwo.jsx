import { Box, SimpleGrid,Heading ,Image,Flex,Button} from '@chakra-ui/react';
import React from 'react'
import "./hometwo.css"
import team from "./cs-team-sweatandco.jpg"
import down from "./download.jpg"

const HomeTwo = () => {
  return (
    <Box>
    <Box sx={{backgroundColor:"#fdf1ec",width:"auto",height:"auto",padding:"2rem"}}>
        <h2 color="#412A4C" class="css-4fjy7e-H2-H2CenterTitle">Companies that use Toggl Track see<em class="css-1c0gnig-Rotalic"> results </em> in profit and productivity</h2>
        <SimpleGrid columns={[1,1,2,3]}>
          <Box sx={{marginLeft:"auto"}}>
            <h4 className="incr">20% increase in profitability</h4>
            <p class="sweat">at Sweat+Co PR agency, with accurate billable hours tracking.</p>
          <br/>
          <br/>
          
            <p class="read">Read case study</p>
            <br/>
         
          <Image sx={{borderRadius:"12px"}} w={["auto","auto","93%"]} h={["auto","auto","40%"]} src={team}/>
          </Box>
          <Box sx={{marginLeft:"auto"}}>
          <h4 className="incr">20% increase in profitability</h4>
            <p class="sweat">at Sweat+Co PR agency, with accurate billable hours tracking.</p>
          <br/>
          <br/>
          
            <p class="read">Read case study</p>
            <br/>
         
          <Image sx={{borderRadius:"12px"}} w={["auto","auto","93%"]} h={["auto","auto","40%"]} src={team}/>
          </Box>
          <Box sx={{marginLeft:"auto"}}>
          <h4 className="incr">20% increase in profitability</h4>
            <p class="sweat">at Sweat+Co PR agency, with accurate billable hours tracking.</p>
          <br/>
          <br/>
          
            <p class="read">Read case study</p>
            <br/>
         
          <Image sx={{borderRadius:"12px"}} w={["auto","auto","93%"]} h={["auto","auto","40%"]} src={team}/>
          </Box>


        </SimpleGrid>

       <Box sx={{backgroundColor:"#fce5d8",width:"90%",margin:"auto",padding:"2rem 1rem",borderRadius:"12px"}}>
            <Flex sx={{display:"flex",justifyContent:"space-around"}}>
                <Box>
                <h3 color="#412A4C" class="css-d1d45o-H3Small">Onboarding a large team? We’d love to show you around.</h3>
                <p color="#6B5A74" class="css-1bl7hqx-P2 ">Teams of 10+ are eligible for a custom demo to see how Toggl Track works at scale.</p>
                </Box>
                <Box>
                <a class="Button-Primary" href="/track/demo-request/">Book a demo</a>
                </Box>

            </Flex>
            <br/>
            <br/>
            <Flex sx={{paddingTop:"40px",borderTop:"1px solid #f5cbef",width:"100%",margin:"auto",gap:"5px"}}>
                <Box sx={{display:"flex",justifyContent:"space-around",width:"auto"}}>
                    <Image sx={{height:"34px",}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAkFBMVEUAAADlfNjfeNPie9fme9jjfNflfNjlfdnlfNnkfNfkfNjketflfNnmfNjkfNjmfdjjfNfkfdfketfngNfifNnietbkgNrkfdjke9fke9fkftjmfdrme9jlfNj+9vPyueboi9z75/D1yOnrld797/Lmg9rzwOfwseTsoeD63+753+742OznhNruquL20Or0weisAFfWAAAAHXRSTlMAoBAg4ECA7+/AvzDPv7DfgGBgIFBQMHBwkF+Pj9s76gEAAAPjSURBVGjezZvbctowFEUlX7ABYwwBQtocY+6UlPT//67JNJPdiSJblyMn6zUPK0fa2mMLEPZE43klyyJJ6JU8GY1ktRyL4MRrmdDnFHIe7h+IljKndhK5jAKI01FORpRL5qUemIgxfcxmTkdkS5n2bwaj9AvMsMd+CZPkg8++3+fkRzJ3DfeI/JnEvQ8NcvvRo5/ExWNkud4F8ZFYrfs4J06Ssbn6B3Hzw1Q9IH4GrGp+OdT9y6Hml7PFjD9wYwpJ61GLEwpJHuvVUUJhKfT1+pNC86hTzyk8a81m56Qh/JaPqA8m/a84WPd+vECuZl1SX0hlbOqP1DVo/HFLqU/S3scGE7ex+QcviZvj7bTb7EnDJGTIL4f6leeGPicOd7bP9Rtbjbx6dyfES1O/80QAoNwWxEuzrYFmz9MwSTu+qMGJVJC2iHh5rv9nRwpYdO4l39QmbloypxwRB2f6HMmf8n39Ad0Jz3lfBxBxsCEdMe+zkqp+Ii1r5u2+wtpSa9jwgtg4fVAfoFZJXtzEA04XuFAbEWPULrVJzsCYr1mawwf1idqZi4pUWCK+PVI7FVfMj1vDiAPJ9ZT4XH9gT12UPG414mfqpOBp87NNxHHAM/JnX5tUqepuD+/+6BTxhkxocR83ryf2ejNXo0o93c3WsCOuapX6ujHNjto4qTnzdd9qsLE5XScyRXvGnsxGudSWVQpyrftgtI7NwTbiINE+OhhtYrO1rlIwFKUuagbyo6I+k41besT32SHiQIqqoyfBpjPiV7Kh0j8ib7rk59olZ2ApxuQo39eOVYrntYjc5GrEL2QHXscs5VDjT3YUeC+xk6P2UPrG4L3knhzkJ9cqBbMX9x3ZyzceEUfUXsis5ZfatUrB1OTe4Y8iOh2cqxRIo/uWnSL3jTjuW6LMU34lB94u9ybkJkfO7Clxg+0kR5U6LTkW3UGOKnVJ+RsVdbJjzBk+K0K9uMh3ZA/uz5E2Wzmq1DVpSFuXnCXiuMG2Gfz3L78qBUPzz8cg961SjG08OOT+EcfY6uDm8is5Ett9Dgy5b85wtgHKzUx+2JMbU2Vs5dmp42HiqSFHZlCaxg0c97ebixlBU7nLKDwZVlxZ9dDMhIYHCs2D0BEVFJZpBJn/lnsfL7CikKxEKzMKx+wbf18xnHzwzb+fCnnvagSu15iB1ZQ4yVbCgjtOeRELK6IHvg6PhC2zjGe918KBuwn5M4yFG7Np/0NjdEk+SOy0k33ovtwMv2YafoEZ9vIrzNh3m9Rlg1iwsigNxcM0EuxEi87pM7mAmJvVTBYabyLvYxGc1aKSw2GS/VMmRSmr+cph3r+YI0Wjt4i4VAAAAABJRU5ErkJggg=="/>
                <p color="#412A4C" class="css-9zrape-P3"><strong class="css-bcngxs-Strong">Cross-platform apps</strong> for all time tracking preferences.</p>
                </Box>

                <Box sx={{display:"flex",justifyContent:"space-around",width:"auto"}}>
                <Image sx={{height:"34px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAkFBMVEUAAADlfNjfeNPie9fme9jjfNflfNjlfdnlfNnkfNfkfNjketflfNnmfNjkfNjmfdjjfNfkfdfketfngNfifNnietbkgNrkfdjke9fke9fkftjmfdrme9jlfNj+9vPyueboi9z75/D1yOnrld797/Lmg9rzwOfwseTsoeD63+753+742OznhNruquL20Or0weisAFfWAAAAHXRSTlMAoBAg4ECA7+/AvzDPv7DfgGBgIFBQMHBwkF+Pj9s76gEAAAPjSURBVGjezZvbctowFEUlX7ABYwwBQtocY+6UlPT//67JNJPdiSJblyMn6zUPK0fa2mMLEPZE43klyyJJ6JU8GY1ktRyL4MRrmdDnFHIe7h+IljKndhK5jAKI01FORpRL5qUemIgxfcxmTkdkS5n2bwaj9AvMsMd+CZPkg8++3+fkRzJ3DfeI/JnEvQ8NcvvRo5/ExWNkud4F8ZFYrfs4J06Ssbn6B3Hzw1Q9IH4GrGp+OdT9y6Hml7PFjD9wYwpJ61GLEwpJHuvVUUJhKfT1+pNC86hTzyk8a81m56Qh/JaPqA8m/a84WPd+vECuZl1SX0hlbOqP1DVo/HFLqU/S3scGE7ex+QcviZvj7bTb7EnDJGTIL4f6leeGPicOd7bP9Rtbjbx6dyfES1O/80QAoNwWxEuzrYFmz9MwSTu+qMGJVJC2iHh5rv9nRwpYdO4l39QmbloypxwRB2f6HMmf8n39Ad0Jz3lfBxBxsCEdMe+zkqp+Ii1r5u2+wtpSa9jwgtg4fVAfoFZJXtzEA04XuFAbEWPULrVJzsCYr1mawwf1idqZi4pUWCK+PVI7FVfMj1vDiAPJ9ZT4XH9gT12UPG414mfqpOBp87NNxHHAM/JnX5tUqepuD+/+6BTxhkxocR83ryf2ejNXo0o93c3WsCOuapX6ujHNjto4qTnzdd9qsLE5XScyRXvGnsxGudSWVQpyrftgtI7NwTbiINE+OhhtYrO1rlIwFKUuagbyo6I+k41besT32SHiQIqqoyfBpjPiV7Kh0j8ib7rk59olZ2ApxuQo39eOVYrntYjc5GrEL2QHXscs5VDjT3YUeC+xk6P2UPrG4L3knhzkJ9cqBbMX9x3ZyzceEUfUXsis5ZfatUrB1OTe4Y8iOh2cqxRIo/uWnSL3jTjuW6LMU34lB94u9ybkJkfO7Clxg+0kR5U6LTkW3UGOKnVJ+RsVdbJjzBk+K0K9uMh3ZA/uz5E2Wzmq1DVpSFuXnCXiuMG2Gfz3L78qBUPzz8cg961SjG08OOT+EcfY6uDm8is5Ett9Dgy5b85wtgHKzUx+2JMbU2Vs5dmp42HiqSFHZlCaxg0c97ebixlBU7nLKDwZVlxZ9dDMhIYHCs2D0BEVFJZpBJn/lnsfL7CikKxEKzMKx+wbf18xnHzwzb+fCnnvagSu15iB1ZQ4yVbCgjtOeRELK6IHvg6PhC2zjGe918KBuwn5M4yFG7Np/0NjdEk+SOy0k33ovtwMv2YafoEZ9vIrzNh3m9Rlg1iwsigNxcM0EuxEi87pM7mAmJvVTBYabyLvYxGc1aKSw2GS/VMmRSmr+cph3r+YI0Wjt4i4VAAAAABJRU5ErkJggg=="/>
                <p color="#412A4C" class="css-9zrape-P3"><strong class="css-bcngxs-Strong">GDPR-compliant.</strong>  Your security is our priority..</p>
                    </Box>

                    <Box sx={{display:"flex",justifyContent:"space-around",width:"auto"}}>
                    <Image sx={{height:"34px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAkFBMVEUAAADlfNjfeNPie9fme9jjfNflfNjlfdnlfNnkfNfkfNjketflfNnmfNjkfNjmfdjjfNfkfdfketfngNfifNnietbkgNrkfdjke9fke9fkftjmfdrme9jlfNj+9vPyueboi9z75/D1yOnrld797/Lmg9rzwOfwseTsoeD63+753+742OznhNruquL20Or0weisAFfWAAAAHXRSTlMAoBAg4ECA7+/AvzDPv7DfgGBgIFBQMHBwkF+Pj9s76gEAAAPjSURBVGjezZvbctowFEUlX7ABYwwBQtocY+6UlPT//67JNJPdiSJblyMn6zUPK0fa2mMLEPZE43klyyJJ6JU8GY1ktRyL4MRrmdDnFHIe7h+IljKndhK5jAKI01FORpRL5qUemIgxfcxmTkdkS5n2bwaj9AvMsMd+CZPkg8++3+fkRzJ3DfeI/JnEvQ8NcvvRo5/ExWNkud4F8ZFYrfs4J06Ssbn6B3Hzw1Q9IH4GrGp+OdT9y6Hml7PFjD9wYwpJ61GLEwpJHuvVUUJhKfT1+pNC86hTzyk8a81m56Qh/JaPqA8m/a84WPd+vECuZl1SX0hlbOqP1DVo/HFLqU/S3scGE7ex+QcviZvj7bTb7EnDJGTIL4f6leeGPicOd7bP9Rtbjbx6dyfES1O/80QAoNwWxEuzrYFmz9MwSTu+qMGJVJC2iHh5rv9nRwpYdO4l39QmbloypxwRB2f6HMmf8n39Ad0Jz3lfBxBxsCEdMe+zkqp+Ii1r5u2+wtpSa9jwgtg4fVAfoFZJXtzEA04XuFAbEWPULrVJzsCYr1mawwf1idqZi4pUWCK+PVI7FVfMj1vDiAPJ9ZT4XH9gT12UPG414mfqpOBp87NNxHHAM/JnX5tUqepuD+/+6BTxhkxocR83ryf2ejNXo0o93c3WsCOuapX6ujHNjto4qTnzdd9qsLE5XScyRXvGnsxGudSWVQpyrftgtI7NwTbiINE+OhhtYrO1rlIwFKUuagbyo6I+k41besT32SHiQIqqoyfBpjPiV7Kh0j8ib7rk59olZ2ApxuQo39eOVYrntYjc5GrEL2QHXscs5VDjT3YUeC+xk6P2UPrG4L3knhzkJ9cqBbMX9x3ZyzceEUfUXsis5ZfatUrB1OTe4Y8iOh2cqxRIo/uWnSL3jTjuW6LMU34lB94u9ybkJkfO7Clxg+0kR5U6LTkW3UGOKnVJ+RsVdbJjzBk+K0K9uMh3ZA/uz5E2Wzmq1DVpSFuXnCXiuMG2Gfz3L78qBUPzz8cg961SjG08OOT+EcfY6uDm8is5Ett9Dgy5b85wtgHKzUx+2JMbU2Vs5dmp42HiqSFHZlCaxg0c97ebixlBU7nLKDwZVlxZ9dDMhIYHCs2D0BEVFJZpBJn/lnsfL7CikKxEKzMKx+wbf18xnHzwzb+fCnnvagSu15iB1ZQ4yVbCgjtOeRELK6IHvg6PhC2zjGe918KBuwn5M4yFG7Np/0NjdEk+SOy0k33ovtwMv2YafoEZ9vIrzNh3m9Rlg1iwsigNxcM0EuxEi87pM7mAmJvVTBYabyLvYxGc1aKSw2GS/VMmRSmr+cph3r+YI0Wjt4i4VAAAAABJRU5ErkJggg=="/>
                <p color="#412A4C" class="css-9zrape-P3"><strong class="css-bcngxs-Strong">Top-rated support</strong>  with a response time of 3 hours!.</p>
                    </Box>

                    <Box sx={{display:"flex",justifyContent:"space-around",width:"auto"}}>
                    <Image sx={{height:"34px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHsAAAB7CAMAAABjGQ9NAAAAkFBMVEUAAADlfNjfeNPie9fme9jjfNflfNjlfdnlfNnkfNfkfNjketflfNnmfNjkfNjmfdjjfNfkfdfketfngNfifNnietbkgNrkfdjke9fke9fkftjmfdrme9jlfNj+9vPyueboi9z75/D1yOnrld797/Lmg9rzwOfwseTsoeD63+753+742OznhNruquL20Or0weisAFfWAAAAHXRSTlMAoBAg4ECA7+/AvzDPv7DfgGBgIFBQMHBwkF+Pj9s76gEAAAPjSURBVGjezZvbctowFEUlX7ABYwwBQtocY+6UlPT//67JNJPdiSJblyMn6zUPK0fa2mMLEPZE43klyyJJ6JU8GY1ktRyL4MRrmdDnFHIe7h+IljKndhK5jAKI01FORpRL5qUemIgxfcxmTkdkS5n2bwaj9AvMsMd+CZPkg8++3+fkRzJ3DfeI/JnEvQ8NcvvRo5/ExWNkud4F8ZFYrfs4J06Ssbn6B3Hzw1Q9IH4GrGp+OdT9y6Hml7PFjD9wYwpJ61GLEwpJHuvVUUJhKfT1+pNC86hTzyk8a81m56Qh/JaPqA8m/a84WPd+vECuZl1SX0hlbOqP1DVo/HFLqU/S3scGE7ex+QcviZvj7bTb7EnDJGTIL4f6leeGPicOd7bP9Rtbjbx6dyfES1O/80QAoNwWxEuzrYFmz9MwSTu+qMGJVJC2iHh5rv9nRwpYdO4l39QmbloypxwRB2f6HMmf8n39Ad0Jz3lfBxBxsCEdMe+zkqp+Ii1r5u2+wtpSa9jwgtg4fVAfoFZJXtzEA04XuFAbEWPULrVJzsCYr1mawwf1idqZi4pUWCK+PVI7FVfMj1vDiAPJ9ZT4XH9gT12UPG414mfqpOBp87NNxHHAM/JnX5tUqepuD+/+6BTxhkxocR83ryf2ejNXo0o93c3WsCOuapX6ujHNjto4qTnzdd9qsLE5XScyRXvGnsxGudSWVQpyrftgtI7NwTbiINE+OhhtYrO1rlIwFKUuagbyo6I+k41besT32SHiQIqqoyfBpjPiV7Kh0j8ib7rk59olZ2ApxuQo39eOVYrntYjc5GrEL2QHXscs5VDjT3YUeC+xk6P2UPrG4L3knhzkJ9cqBbMX9x3ZyzceEUfUXsis5ZfatUrB1OTe4Y8iOh2cqxRIo/uWnSL3jTjuW6LMU34lB94u9ybkJkfO7Clxg+0kR5U6LTkW3UGOKnVJ+RsVdbJjzBk+K0K9uMh3ZA/uz5E2Wzmq1DVpSFuXnCXiuMG2Gfz3L78qBUPzz8cg961SjG08OOT+EcfY6uDm8is5Ett9Dgy5b85wtgHKzUx+2JMbU2Vs5dmp42HiqSFHZlCaxg0c97ebixlBU7nLKDwZVlxZ9dDMhIYHCs2D0BEVFJZpBJn/lnsfL7CikKxEKzMKx+wbf18xnHzwzb+fCnnvagSu15iB1ZQ4yVbCgjtOeRELK6IHvg6PhC2zjGe918KBuwn5M4yFG7Np/0NjdEk+SOy0k33ovtwMv2YafoEZ9vIrzNh3m9Rlg1iwsigNxcM0EuxEi87pM7mAmJvVTBYabyLvYxGc1aKSw2GS/VMmRSmr+cph3r+YI0Wjt4i4VAAAAABJRU5ErkJggg=="/>
                <p color="#412A4C" class="css-9zrape-P3"><strong class="css-bcngxs-Strong">99% uptime</strong>  for your peace of mind..</p>
                    </Box>
            </Flex>

            </Box>
        
    </Box>
    <Box sx={{background:"#fefbfa",margin:"auto",width:"100%",height:"auto",padding:"4rem 1rem"}}>
    <h2  class="css-wlgyu8-H2">The right feature set for <span class="css-1c0gnig-Rotalic">every</span> team</h2>

    <br/>
    <div class="css-19nzmxl-Tabs"><button class="css-9pbf95-Tab">Freelancers</button><button class="css-9pbf95-Tab">Agencies &amp; professional services</button><button class="css-9pbf95-Tab">Enterprise teams</button></div>
   <SimpleGrid columns={[1,1,2,2]}>
        <Box id="need1">
        <h3 class="need">Need time tracking that helps you stay productive and bill clients accurately?</h3>
       <br/>
        <a caretdirection="right" color="#EA96E0" class="Button-Secondary" href="/track/freelance-time-tracking/">Learn how Toggl Track can help you</a>
        <br/>
        <Flex sx={{borderLeft:"5px solid black",height:"auto",marginLeft:"70px"}}>
        <p  class="toggl ">"Toggl Track is indispensable for keeping track of my hours by project so I can create invoices. It makes it easy to calculate the time I need for certain types of work. All in all, it is the best way to accurately prepare your financial claims."<strong class="writer">Ema N. (Editor)</strong></p>
        </Flex>
        </Box>

        <Image h={["auto","auto","100%"]} sx={{margin:"auto"}} src={down}/>
   </SimpleGrid>
   
    </Box>

    <Box sx={{background:"#412A4C",height:"auto",padding:"2rem",width:"100%"}}>
        <Heading class="swit">Switch to the time tracking tool 70,000+ teams across the world swear by</Heading>
        <br/>
        <br/>
       <Box id="priya">
        <Heading class="swits">Sign up for free</Heading>
        <p id="all">All plans come with a free, 30-day trial of Toggl Track Premium—no credit card required. Upgrade at the end of the trial or continue using Track for free.</p>
        <br/>
        <Flex>
        <button type="button" class="svg"><svg width="28" height="28" viewBox="0 0 20 20"><g fill="none"><path d="M17.876 10.284c0-.574-.052-1.127-.147-1.657H10.1v3.134h4.36a3.726 3.726 0 01-1.617 2.444v2.033h2.618c1.531-1.41 2.415-3.487 2.415-5.954z" fill="#4285F4"></path><path d="M10.1 18.2c2.187 0 4.02-.725 5.36-1.962l-2.617-2.033c-.725.486-1.653.773-2.743.773-2.11 0-3.895-1.424-4.532-3.339H2.862v2.099A8.097 8.097 0 0010.1 18.2z" fill="#34A853"></path><path d="M5.568 11.639a4.869 4.869 0 01-.254-1.539c0-.534.092-1.053.254-1.539V6.462H2.862A8.097 8.097 0 002 10.1c0 1.307.313 2.544.862 3.638l2.706-2.099z" fill="#FBBC05"></path><path d="M10.1 5.222c1.19 0 2.257.408 3.096 1.21L15.52 4.11C14.117 2.803 12.283 2 10.1 2a8.097 8.097 0 00-7.238 4.462l2.706 2.099c.637-1.915 2.422-3.34 4.532-3.34z" fill="#EA4335"></path></g></svg>Sign up via Google</button>
       
        </Flex>
        <br/>
        <Flex className="sirf">
          <Image height="99%" src="https://img.icons8.com/ios-filled/2x/circled-envelope.png"/>
        <Button className="sirf">Sign up with e-mail</Button>
        </Flex>
     
       </Box>
       <Box id="rajawat"></Box>

    </Box>


</Box>
  )
}

export default HomeTwo;