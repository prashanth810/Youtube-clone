import logo from './logo.svg';
import './App.css';
import Banner from './Components/Banner';
import Youtubehome from './youtubeclone/Youtubehome';
import Navbarhome from './Components/Navbargomes/Navbarhome';
import { Route, Routes } from 'react-router-dom';
import Videohome from './youtubeclone/Videohome';
import { useState } from 'react';

function App() {
  const [sidebar, setSidebar] = useState(true);
  return (
    <>
      {/* <Banner /> */}
      {/* <Youtubehome /> */}
      <Navbarhome setSidebar={setSidebar} />

      <Routes>
        <Route path='/' element={<Youtubehome sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Videohome />} />
      </Routes>
    </>
  );
}

export default App;
