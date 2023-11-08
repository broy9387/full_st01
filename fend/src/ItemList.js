import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ItemList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/')
      .then(response => {
        setItems(response.data);
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // Empty dependency array ensures the effect runs once after the initial render

  return (
    <div>
      <h2>Item List</h2>
      <ul>
       {
        items.map((item)=>(

                <li key={item.id}>{item.id} {item.name}</li>
            
            )
        )
       }
      </ul>
    </div>
  );
};

export default ItemList;
