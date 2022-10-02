import { Box, SimpleGrid,Heading ,Image,Flex,Button} from '@chakra-ui/react';
import React from 'react'
import "./hometwo.css"
import team from "./cs-team-sweatandco.jpg"
import news from  "./cs-newlogic.jpg"
import teamss from "./case-study-perception-engineering.jpg"
import down from "./download.jpg"
import LargeWithLogoCentered from '../components/footer/footer';

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
         
          <Image sx={{borderRadius:"12px"}} w={["auto","auto","93%"]} h={["auto","auto","40%"]} src={news}/>
          </Box>
          <Box sx={{marginLeft:"auto"}}>
          <h4 className="incr">20% increase in profitability</h4>
            <p class="sweat">at Sweat+Co PR agency, with accurate billable hours tracking.</p>
          <br/>
          <br/>
          
            <p class="read">Read case study</p>
            <br/>
         
          <Image sx={{borderRadius:"12px"}} w={["auto","auto","93%"]} h={["auto","auto","40%"]} src={teamss}/>
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

    <Box sx={{background:"#412A4C",height:"auto",padding:"4rem 2rem",width:"100%"}}>
        <Heading class="swit">Switch to the time tracking tool 70,000+ teams across the world swear by</Heading>
        
        
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

    <LargeWithLogoCentered/>

</Box>
  )
}

export default HomeTwo;