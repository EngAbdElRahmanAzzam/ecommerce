import ViewIcon from '@/assets/icons/view'
import ViewOffIcon from '@/assets/icons/viewOffIcon'
import useThemeColors from '@/hooks/themes'
import { IUserLogin } from '@/interfaces/user'
import { loginService } from '@/store/features/login'
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
  FormHelperText,
} from '@chakra-ui/react'
import {useState , ChangeEvent} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { rootState } from '@/store/redux.config'


const SigninPage = () => {
  //states
  const [mainColor, _ , colorSchemBtn] = useThemeColors()
  const [showPassword, setShowPassword] = useState(false)
  const [userLogin, updateUserLogin] = useState<IUserLogin>({identifier:"", password:""})
  const [isEmailValid, updateIsEmailValid] = useState<boolean>(true)
  const [isPasswordValid, updateIsPasswordValid] = useState<boolean>(true)

  //redux state
  const loginSlice = useSelector(({login}:rootState) => login)

  //handlers 
  const dispatch = useDispatch()
  const onChangeHandler = (e:ChangeEvent<HTMLInputElement>)=>{
    const element = e.target
    updateUserLogin({...userLogin, [element.name]:element.value})
  }

  const onsubmit = ()=>{
    if(userLogin.identifier.trim() != "")
      {updateIsEmailValid(true)}
    else
      {updateIsEmailValid(false)}
    if(userLogin.password.trim() != "")
      { updateIsPasswordValid(true) }
    else
      {updateIsPasswordValid(false)}
    if(isEmailValid && isPasswordValid)
    {
      dispatch<any>(loginService(userLogin))
    }
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
              <Input 
              type="email" 
              name='identifier' 
              onChange={onChangeHandler} 
              isInvalid={!isEmailValid} 
              focusBorderColor={mainColor}
              />
              {!isEmailValid && <FormHelperText textColor="red.500">Email is required</FormHelperText>}
            </FormControl>

            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input 
                type={showPassword ? 'text' : 'password'} 
                name='password'  
                onChange={onChangeHandler} 
                isInvalid={!isPasswordValid}
                focusBorderColor={mainColor}
                />
                <InputRightElement
                    cursor="pointer"
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewOffIcon /> : <ViewIcon />}
                </InputRightElement>
              </InputGroup>
              {!isPasswordValid && <FormHelperText textColor="red.500">Password is required</FormHelperText>}
            </FormControl>

            <Stack spacing={10}>

              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Text color={mainColor}>Forgot password?</Text>
              </Stack> 

              <Button
                bg={(isEmailValid&&isPasswordValid)?`${mainColor}`:"red.600"}
                colorScheme={colorSchemBtn}
                _hover={{
                  opacity:.5
                }}
                onClick={onsubmit}
                isLoading={loginSlice.loader}
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