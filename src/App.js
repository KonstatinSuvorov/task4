import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CityInfo from './components/CityInfo';
import MainAttraction from './components/MainAttraction';
import OtherAttractions from './components/OtherAttractions';
import CityPhotos from './components/CityPhotos';
import PhotoUploadForm from './components/PhotoUploadForm';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Главная</Link></li>
            <li><Link to="/city-info">Информация о городе</Link></li>
            <li><Link to="/main-attraction">Главная достопримечательность</Link></li>
            <li><Link to="/other-attractions">Другие достопримечательности</Link></li>
            <li><Link to="/city-photos">Фотографии города</Link></li>
            <li><Link to="/upload-photo">Загрузить фотографию</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<h2>Добро пожаловать в мой город!</h2>} />
          <Route path="/city-info" element={<CityInfo />} />
          <Route path="/main-attraction" element={<MainAttraction />} />
          <Route path="/other-attractions" element={<OtherAttractions />} />
          <Route path="/city-photos" element={<CityPhotos />} />
          <Route path="/upload-photo" element={<PhotoUploadForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

