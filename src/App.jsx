import './App.css'
import Navigation from './routes/Navigation';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <ChakraProvider>
      <Navigation />
    </ChakraProvider>
    
  )
}

export default App
