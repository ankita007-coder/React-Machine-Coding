import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Modal from './components/Modal/Modal'

function App() {
  const [count, setCount] = useState(0)
  const [isOpen, setIsOpen]= useState(false)
  const handleClose=()=>{
    setIsOpen(false)
  }
  const handleOpen=()=>{
    setIsOpen(true)
  }
  return (
    <>
     <button onClick={handleOpen}>Open Modal</button>
     <Modal isOpen={isOpen} title="hello" onClose={handleClose}>
      <button>Modal</button>
      <button>Modal</button>
      <button>Modal</button>
     </Modal>
    </>
  )
}

export default App
