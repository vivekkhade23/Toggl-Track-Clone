import { Button, HStack, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

const Client = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <div>
        <HStack>
            <div>
                <h1>Client</h1>
        <input className='input'  />
                    
            
            </div>
            <div>
          

    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <Lorem count={2} /> */}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  

            </div>
        </HStack>
    </div>
  )
}

export default Client
