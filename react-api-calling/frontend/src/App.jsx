import React, { useState, useEffect } from "react";
import axios from 'axios';
import './App.css'; // Import the CSS file

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        setProducts(res.data);
      }).catch((err) => {
        console.error("Failed to fetch products:", err);
      });
  }, []);

  return (
    <>
      <h2>Products List</h2>
      <div className="main">
        {products.map((product) => (
          <div key={product.id} className="product">
            <h3>{product.title}</h3>
            <img src={product.image} alt={product.title} />
            <p>${product.price}</p>
            <input type="button" value="Details" className="btn" />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;