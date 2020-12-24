import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [shoeList, setShoeList] = useState([
    { name: 'Nike', id: 1 },
    { name: 'Jordan', id: 2 },
    { name: 'Toms', id: 3 },
  ]);

  // useEffect(() => {
  //   setShoeList()
  // }, [shoeList]);

  return (
    <div>
      <ul>
        {shoeList.map((shoe) => (
          <li key={shoe.id}>{shoe.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
