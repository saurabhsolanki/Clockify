import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Input,
  } from '@chakra-ui/react'
import { useState } from 'react'
const Sidebar = () => {
    // const { isOpen, onOpen, onClose } = useDisclosure()
    const [isOpen,setOpen]=useState(true)
    const onClose=()=>{
        setOpen(false)
    }

    const onOpen=()=>{
        setOpen(true)
    }
    const btnRef = React.useRef()
  return (
    <div>
       <>
      <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
    </div>
  )
}

export default Sidebar
