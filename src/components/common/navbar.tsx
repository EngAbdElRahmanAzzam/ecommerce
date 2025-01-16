import {
    Box,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    Divider,
    Center
  } from '@chakra-ui/react'
  import { useColorMode } from '@chakra-ui/react'
  import CloseIcon from '@/assets/icons/closeIcon'
  import HamburgerIcon from '@/assets/icons/hamborgIcon'
  import MoonIcon from '@/assets/icons/moonIcon'
  import SunIcon from '@/assets/icons/sunIcon'
import { NavLink } from 'react-router-dom'
  
  
  const Links = ['Home', 'Products', 'Team']
    
  export default function NotFound() {
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    return (
      <>
        <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Box>Logo</Box>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <NavLink key={link} to={"/"+link}>{link}</NavLink>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
  
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
  
                <Menu>
  
                  <MenuButton
                    as={Button}
                    rounded={'full'}
                    variant={'link'}
                    cursor={'pointer'}
                    minW={0}>
                    <Avatar
                      size={'sm'}
                      src={'https://avatars.dicebear.com/api/male/username.svg'}
                    />
                  </MenuButton>
  
                  <MenuList alignItems={'center'}>
                    <br />
                    <Center>
                      <Avatar
                        size={'2xl'}
                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                      />
                    </Center>
                    <br />
                    <Center>
                      <p>Username</p>
                    </Center>
                    <br />
                    <MenuDivider />
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>Wishlist</MenuItem>
                    <MenuItem>Cart</MenuItem>
                    <Divider />
                    <MenuItem>Logout</MenuItem>
                  </MenuList>
  
                </Menu>
              </Stack>
            </Flex>
          </Flex>
  
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {Links.map((link) => (
                  <NavLink key={link} to={"/"+link}>{link}</NavLink>
                ))}
              </Stack>
            </Box>
          ) : null}
        </Box>

      </>
    )
  }