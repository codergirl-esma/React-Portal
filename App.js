import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Giris from './Giris';
import Kayit from './Kayit';
import Anasayfa from './Anasayfa';
import BasvuruFormu from './component/BasvuruFormu';
import BasvuruDetay from './component/BasvuruDetay';
import SifreDegistirme from './component/SifreDegistirme';
import Iletisim from './component/Iletisim';

function App() {


  
  return (
   <Router>
    <Routes>
      <Route path='/' element={<Giris />}/>
      <Route path='/kayit' element={<Kayit />}/>
      <Route path='/anasayfa' element={<Anasayfa />}/>
      <Route path='/anasayfa/BasvuruFormu' element={<BasvuruFormu />}/>
      <Route path='/anasayfa/BasvuruDetay' element={<BasvuruDetay />}/>
      <Route path='/anasayfa/SifreDegistirme' element = {<SifreDegistirme/>} />
      <Route path='/anasayfa/Iletisim' element = {<Iletisim/>} />
    </Routes>
   </Router>
  );
}

export default App;
