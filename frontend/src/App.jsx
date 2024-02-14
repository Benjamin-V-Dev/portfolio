import {Routes, Route, useNavigate, useParams} from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import Modal from '../src/components/Modal/Modal'
import { ModalProvider } from './providers/modaleProvider'; // Assure-toi d'importer le ModalProvider correctement

export default function App() {
  return (
    <div className="app">
      <ModalProvider>
        <Modal></Modal>
        <div className='light'></div>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </ModalProvider>
    </div>
  )
}
