import { Provider } from 'react-redux'
import { store } from './redux-toolkit/store'

// import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import * as ReactDOM from 'react-dom/client'
import './global.css'
import {RouterProvider} from 'react-router-dom';
import { router } from './routes/root';
import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: false,
}

const theme = extendTheme({ config })

const rootElement = document.getElementById('root')
ReactDOM.createRoot(rootElement!).render(
  <Provider store={store}>
      {/* <React.StrictMode> */}
        <ChakraProvider>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <RouterProvider router={router} />
        </ChakraProvider>
      {/* </React.StrictMode> */}
  </Provider>
)