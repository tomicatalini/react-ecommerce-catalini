import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <main style={{width:'100%', height: 'calc(100vh - 4rem)',display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        Ecommerce de ropa de segunda mano
      </main>
    </>
  )
}

export default App
