import React from 'react';
import { useParams } from 'react-router-dom';

function MainAttraction() {
  const { id } = useParams();  // Получаем параметр id из URL
  return (
    <div>
      <h2>Достопримечательность: {id}</h2>
      <p>Информация о достопримечательности с ID: {id}</p>
    </div>
  );
}

export default MainAttraction;
