import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ModalProvider } from './providers/modaleProvider';

import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Error from "./components/Error/Error";
import Modal from '../src/components/Modal/Modal';
import CGU from '../src/components/CGU/CGU';

export default function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Ajouté pour gérer l'état de chargement

  useEffect(() => {
    axios.get('http://localhost:8800/api/project')
        .then(response => {
            console.log(response);
            setData(response.data);
            setLoading(false); // Mise à jour de l'état de chargement
        })
        .catch(error => {
            console.log(error);
            setLoading(false); // Mise à jour de l'état de chargement
        });
  }, []);

  // Ajouter ici la gestion de l'état de chargement si nécessaire
  if (loading) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="app">
      <ModalProvider>
        <Modal />
        <div className='light'></div>
        <Header />
        <Routes>
          <Route path="/" element={<Home data={data}/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/CGU" element={<CGU/>}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </ModalProvider>
    </div>
  );
}
