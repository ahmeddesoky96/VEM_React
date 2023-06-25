import React from "react";
import { Button, Card } from "react-bootstrap";
import { useShoppingCart } from "../context/shopingCartContext";
import "./CSS/StoreItem.css";

const StoreItem = ({ id, price, title, image }) => {
  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity(id);
  return (
    <Card className="h-100" key={id}>
      <Card.Img
        src={image}
        alt="cardImage"
        variant="top"
        style={{ height: "250px", objectFit: "contain" }}
      ></Card.Img>
      <Card.Body>
        <Card.Title
          className="d-flex justify-content-between align-items-baseline"
          id="cardTitle"
        >
          <h3>{title}</h3>
          <h5 className="text-muted me-2">{price} $</h5>
        </Card.Title>
        <div className="mt-auto">
          {quantity === 0 ? (
            <Button className="w-100" onClick={() => increaseCartQuantity(id)}>
              Add To Cart
            </Button>
          ) : (
            <div className="d-flex flex-column align-items-center">
              <div className="d-flex align-items-center justify-content-center">
                <Button size="sm" onClick={() => decreaseCartQuantity(id)}>
                  -
                </Button>
                <span className="fs-3 mx-2">{quantity}</span>
                <Button size="sm" onClick={() => increaseCartQuantity(id)}>
                  +
                </Button>
              </div>
              <Button
                onClick={() => removeFromCart(id)}
                className="mt-2"
                variant="danger"
              >
                Remove
              </Button>
            </div>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default StoreItem;
