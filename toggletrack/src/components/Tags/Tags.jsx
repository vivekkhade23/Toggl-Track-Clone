import { Button, FormControl, FormLabel, HStack, Input, InputGroup, InputLeftElement, Stack, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import styles from "./Tags.module.css"
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import SideBar from '../Sidebar/SideBar'

const Tags = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
 
  return (
    <div className={styles.container}>
      <div>
<SideBar className={styles.sidebar}/>
    </div>
      <div className={styles.color}>
        <HStack backgroundImage={"white"}>
            <div className={styles.display}>
                <Text className={styles.text}>Tags</Text>
     
        <Stack spacing={4}>
  <InputGroup className={styles.input} >
    <InputLeftElement
      pointerEvents='none'
      children={<Search2Icon color='gray.300' />}
    />
    <Input type='text' placeholder='...find Tags' />
  </InputGroup>
</Stack>
            
            </div>
         
          

    < div className={styles.Modal}>
      <Button  className={styles.modalbutton} colorScheme='#dd6fd1'marginLeft={"750px"}  onClick={onOpen}>+ New Tags</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
      <ModalOverlay />
        <ModalContent>
          <ModalHeader color={"black"}>New Tags</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel></FormLabel>
              <Input ref={initialRef} placeholder='Tags name' />
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button className={styles.modalbutton}  colorScheme='#dd6fd1'onClick={onClose} mr={3}>
              create
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
        </HStack>
        
        </div>
    </div>
  )
}

export default Tags
