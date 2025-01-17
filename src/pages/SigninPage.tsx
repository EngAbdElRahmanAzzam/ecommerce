import ViewIcon from '@/assets/icons/view'
import ViewOffIcon from '@/assets/icons/viewOffIcon'
import { IUserLogin } from '@/interfaces/user'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'
import {useState , ChangeEvent} from 'react'

const SigninPage = () => {
  const [userLogin, updateUserLogin] = useState<IUserLogin>({email:"", password:""})
  const [showPassword, setShowPassword] = useState(false)


  //handlers 
  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    const element = e.target
    updateUserLogin({...userLogin, [element.name]:element.value})
  }

  const onsubmit = ()=>{
    console.log(userLogin)
  } 
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input type="email" isInvalid={false} name='email' onChange={onChangeHandler}/>
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} name='password'  onChange={onChangeHandler}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Stack spacing={10}>

              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={'blue.400'}>Forgot password?</Text>
              </Stack> 

              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={onsubmit}
                >
                Sign in
              </Button> 

            </Stack>

          </Stack>

        </Box>
      </Stack>
    </Flex>
  )
}

export default SigninPage