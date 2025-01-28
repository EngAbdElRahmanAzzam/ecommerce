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
    Stack,
    Divider,
    Center,
    Image
  } from '@chakra-ui/react'

import { useColorMode } from '@chakra-ui/react'
import CloseIcon from '@/assets/icons/closeIcon'
import HamburgerIcon from '@/assets/icons/hamborgIcon'
import MoonIcon from '@/assets/icons/moonIcon'
import SunIcon from '@/assets/icons/sunIcon'
import { NavLink } from 'react-router-dom'
import useThemeColors from '@/hooks/themes'
import {ReactNode, useState} from 'react'
import cookieApi from '@/utilits/cookieApi'
  
const Links = ['Home', 'Products', 'Team']
interface INav{
  color:string;
  to:string;
  children:ReactNode
}
const Nav = ({to,color,children}:INav)=>{
    return (
    <Button as={NavLink} to={to} color={color} fontSize={'sm'} fontWeight={400} variant={'link'}>
      {children}
    </Button>
    )
}  
const Navbar = () => {
    const [isAuth , updateIsAuth] = useState(cookieApi.get("jwt"))
    const { colorMode, toggleColorMode } = useColorMode()
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [mainColor,] = useThemeColors()

    //handlers
    const logout = () => {
        cookieApi.remove('jwt')
        updateIsAuth(false)
    }

    return (
      <>
        <Box bg={"white"} px="5">
          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <IconButton
              size={'md'}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={'Open Menu'}
              display={{ md: 'none' }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={'center'}>
              <Image src="/logo.png" w="200px"/>
              <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
                {Links.map((link) => (
                  <Nav key={link} color={mainColor} to={`/${link}`}>{link}</Nav>
                ))}
              </HStack>
            </HStack>
            <Flex alignItems={'center'}>
              <Stack direction={'row'} spacing={7}>
  
                <Button onClick={toggleColorMode}>
                  {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                </Button>
  
                {isAuth?(
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
                      <MenuItem onClick={() => logout()}>Logout</MenuItem>
                    </MenuList>
                 
                </Menu>):
                (
                  <Flex align="center" gap="3">
                      <Button as={NavLink} to="/signin" color={mainColor} fontSize={'sm'} fontWeight={400} variant={'link'}>
                        Sign In
                      </Button>
                      <Button
                        as={NavLink}
                        to="/signup"
                        display={{ base: 'none', md: 'inline-flex' }}
                        fontSize={'sm'}
                        fontWeight={600}
                        color={"white"}
                        bg={mainColor}
                        _hover={{
                          bg: 'white',
                          color:mainColor
                        }}>
                        Sign Up
          </Button>
                  </Flex>
                )}

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

  export default Navbar