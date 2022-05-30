import React from 'react';
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
  } from '@chakra-ui/react'
  import { HamburgerIcon,CheckIcon,RepeatClockIcon,SearchIcon,StarIcon,SettingsIcon } from '@chakra-ui/icons'
  import styles from "./sidebar.module.css"

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <div>
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          <HamburgerIcon/>
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
          size="xs"
        >
          <DrawerOverlay />
          
          <DrawerContent>
            <DrawerHeader fontSize="25px">Logo</DrawerHeader>
  
            <DrawerBody marginRight="20px">
                {/* <div> */}
                
                    <Button colorScheme='black' variant='ghost' textAlign="start" _hover={{bg:"#61dafb",color:"white"}} 
                    size='lg' px={24} fontWeight="light"  marginBottom="15px">
                    <RepeatClockIcon marginRight="20px"/>Home
                    </Button>
                {/* </div> */}
                <Button colorScheme='black' variant='ghost'  size='lg' px={24} _hover={{bg:"#61dafb",color:"white"}}
                fontWeight="light" marginBottom="15px" >
                <CheckIcon marginRight="20px"/>Trending
                    </Button>
                    <Button colorScheme='black' variant='ghost'  size='lg' px={24} _hover={{bg:"#61dafb",color:"white"}}
                    fontWeight="light" marginBottom="15px" >
                    <SearchIcon marginRight="20px"/>Explore
                    </Button>
                    <Button colorScheme='black' variant='ghost'  size='lg' px={24} _hover={{bg:"#61dafb",color:"white"}} 
                    fontWeight="light" marginBottom="15px" >
                    <StarIcon marginRight="20px"/>Favourites
                    </Button>
                    <Button colorScheme='black' variant='ghost'  size='lg' px={24} _hover={{bg:"#61dafb",color:"white"}} 
                    fontWeight="light" marginBottom="15px" >
                    <SettingsIcon marginRight="20px"/>Settings
                    </Button>
            
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </div>
    )
  }

export default DrawerExample