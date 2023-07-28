import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './style/cart.css';
import { obj } from './Card';

const Cart = () => {
  const [item, setItem] = useState([]);

  // for first time adding the items to cart
  useEffect(() => {
    setItem((prevItem) => prevItem.concat(obj));
  }, []);

  const removeItem = (id) => {
    const updatedItems = item.filter((item) => item.id !== id);
    setItem(updatedItems);
  };

  // total amount
  const totalAmount = item.reduce((prev, item) =>  prev + item.price, 0);

  return (
    <>
      <Navbar />
      <div className="container" style={{ height: 'auto' }}>
      {item.length > 0 ? (
        <div className="totalVal container-fluid">
        <h2>
          Total Amount : <i className="fa fa-rupee"></i> {totalAmount}{' '}
        </h2>
        <h2>
          Total Number of Products in Cart: {item.length}
        </h2>
      </div>
      ) : null}
        {item.length > 0 ? (
          item.map((item) => (
            <div className="container cartItem" key={item.id}>
              <div className="itemimg col-md-5 col-lg-5 col-sm-12 col-xs-12">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="itemdetail col-md-7 col-lg-7 col-sm-12 col-xs-12">
                <h1>Title : {item.name}</h1>
                <h2>
                  Price : <i className="fa fa-rupee"></i>
                  {item.price}
                </h2>
                <button
                  className="btn btn-danger"
                  onClick={() => removeItem(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h1>OOOPPSS...!!! Your Cart is empty..! :-(</h1>
          </div>
        )}
      </div>
      
    </>
  );
};

export default Cart;
