import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Calander from '../Calander/Calander'
import SideBar from '../Sidebar/SideBar'
import Timer from '../Timer/Timer'
import styles from "./Timerpage.module.css"

const Timerpage = () => {
  const navigate = useNavigate()
  const isAuth = useSelector((store) => store.isAuth);
if(!isAuth){
  navigate("/login")
}
  return (
    <div className={styles.displaytimer}>
        <div>
            <SideBar />
        </div>
        <div>
          <VStack>
            <HStack className={styles.hstack}>
                <Text className={styles.text} >What are you working on? </Text>
              <div style={{marginTop:"-30px"}}><Timer/></div>
            </HStack>
<Calander/>
</VStack>
        </div>

    </div>
  )
}

export default Timerpage