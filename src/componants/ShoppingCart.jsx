import React, { useEffect, useState } from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/shopingCartContext";
import CartItem from "./CartItem";
import axios from "axios";

const ShoppingCart = ({ isOpen }) => {
  const [storeItems, setstoreItems] = useState([]);

  const getProductData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      const products = response.data;
      setstoreItems(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <button className="btn btn-info ">
            Total :{"  "}
            {cartItems.reduce((total, cartItem) => {
              const item = storeItems.find((i) => i.id === cartItem.id);
              return Math.ceil(total + (item?.price || 0) * cartItem.quantity);
            }, 0)}
            {" "}$
          </button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
