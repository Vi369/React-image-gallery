import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import ImageDetails from './Pages/ImageDetails'


function App() {


  return (
    <>
      <Routes>
        <Route path="/" element ={<HomePage/>} />
        <Route path="/:id" element={<ImageDetails />}/>
      </Routes>
    </>
  )
}

export default App
