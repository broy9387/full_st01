import React, { useState } from 'react';
import axios from 'axios';

const AddItemForm = () => {
const[id,setId]=useState(0);
  const [name, setItem] = useState('');

  const handleAddItem = async () => {
    try {
      await axios.post('http://localhost:5000/items', { id,name });
      // You can optionally update the local state or fetch the updated item list from the server.
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  return (
    <div>
         <input
        type="number"
        placeholder="Enter id"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />

      <input
        type="text"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
};

export default AddItemForm;
