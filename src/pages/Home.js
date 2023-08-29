import Header from "../components/Header";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:8080/products');
            setProducts(response.data);
        } catch (error) {
            console.error('Błąd podczas pobierania danych:', error);
        }
    }

    fetchData();
  }, []);

  return (

    <div>

      <Header/>

      <div className="content">

        {products.map(product => (
          <div className="product" key={product.id}>
            <h2>{product.name}</h2>
            <p>Description: {product.description}</p>
            <p>Price: {product.price} $</p>
          </div>
        ))}

      </div>
    </div>
  );
}
