import { useState } from 'react'
import './App.css'
import { ElearningSection } from './Elearning'
import { ChakraProvider } from '@chakra-ui/react'
import Header2 from './components/Header'

function App() {
  return (
    <>
      <ChakraProvider>
        <Header2 />
     <ElearningSection />
      </ChakraProvider>
    </>
  )
}

export default App
