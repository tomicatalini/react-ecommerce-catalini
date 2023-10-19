import './App.css'
import { ThemeProvider } from '@mui/material';
import CartContext from './context/CartContext';
import Navigation from './routes/Navigation';
import { theme } from './themes';

function App() {

  return (
      <CartContext>
        <ThemeProvider theme={theme}>
          <Navigation />
        </ThemeProvider>
      </CartContext>    
  )
}

export default App
