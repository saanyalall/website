import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Carousel } from 'react-bootstrap';
import './ProductCards.css'; // Import CSS file for styling

const ProductCards = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const groupedProducts = products.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 4);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }

    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);

  return (
    <div style={{backgroundColor:"#22262a",color:"white",fontFamily:"initial"}}>
    <h1 style={{fontWeight:"bolder",marginLeft:"5rem"}}>New Products</h1>
      <div className="product-categories">
      <p>Apparel</p>
      <p style={{fontWeight:"bold"}}>Accessories</p>
      <p>Best Sellers</p>
      <p>50% OFF</p>
      </div>
      <Carousel interval={null} prevLabel="" nextLabel="">
        {groupedProducts.map((group, index) => (
          <Carousel.Item key={index}>
            <div className="d-flex justify-content-between product-group">
              {group.map((product) => (
                <Card key={product.id} className="product-card">
                  <Card.Img variant="top" src={product.image} />
                  <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                      Price: ${product.price}
                      <br />
                      Category: {product.category}
                    </Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCards;





