import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/router.config'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient , QueryClientProvider} from '@tanstack/react-query'

const App = () => {
  const queryClient = new QueryClient()

  return (
    <>
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router}/>
          <h2>haloo</h2>
        </QueryClientProvider>
      </ChakraProvider>
    </>
  )
}

export default App
