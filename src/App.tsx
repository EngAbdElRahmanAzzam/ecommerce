import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './router/router.config'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClient , QueryClientProvider} from '@tanstack/react-query'
import { Provider } from 'react-redux'
import { store } from './store/redux.config'


const App = () => {
  const queryClient = new QueryClient()

  return (
    <>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider>
            <RouterProvider router={router}/>
          </ChakraProvider>
        </QueryClientProvider>
      </Provider>
    </>
  )
}

export default App
