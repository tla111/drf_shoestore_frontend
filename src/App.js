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
      <table class='table table-hover'>
        <thead>
          <tr class='table-dark'>
            <th scope='col'>Brand Name</th>
            <th scope='col'>Color</th>
            <th scope='col'>Fasten Type</th>
            <th scope='col'>Manufacturer</th>
            <th scope='col'>Material</th>
            <th scope='col'>Shoe Type</th>
            <th scope='col'>Size</th>
          </tr>
        </thead>
        {shoeList.map((shoe) => (
          <tbody key={shoe.id}>
            <tr class='table-info'>
              <td>{shoe.brand_name}</td>
              <td>{shoe.color}</td>
              <td>{shoe.fasten_type}</td>
              <td>{shoe.manufacturer}</td>
              <td>{shoe.material}</td>
              <td>{shoe.shoe_type}</td>
              <td>{shoe.size}</td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default App;
