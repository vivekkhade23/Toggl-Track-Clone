import { HStack, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import Calander from '../Calander/Calander'
import SideBar from '../Sidebar/SideBar'
import Timer from '../Timer/Timer'
import styles from "./Timerpage.module.css"

const Timerpage = () => {
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