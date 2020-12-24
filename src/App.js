import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [shoeList, setShoeList] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:8000/api/shoe/')
      .then((res) => setShoeList(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <ul>
        {shoeList.map((shoe) => (
          <div key={shoe.id}>
            <li>Brand Name: {shoe.brand_name}</li>
            <li>Color: {shoe.color}</li>
            <li>Fasten Type: {shoe.fasten_type}</li>
            <li>Manufacturer: {shoe.manufacturer}</li>
            <li>Material: {shoe.material}</li>
            <li>Shoe Type: {shoe.shoe_type}</li>
            <li>Size: {shoe.size}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default App;
