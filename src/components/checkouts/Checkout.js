import React from "react";
import { Container, Card } from "react-bootstrap";
import CurrencyFormat from "react-currency-format";

import styled from "styled-components";
import { getBagTotal } from "../../context/Reducer";
import { useStateValue } from "../../context/State";
import Product from "./Product";

function Checkout() {
  const [{ bag }] = useStateValue();
  const bagLength = bag.length;
  return (
    <Container>
      {bagLength === 0 ? (
        <Emptybag>
          <div>
            <img
              alt="duhud"
              src="https://i.pinimg.com/originals/fa/90/cd/fa90cdab2a780306d0c350964c81e391.png"
            />
          </div>
        </Emptybag>
      ) : (
        <Styles>
          <div style={{ marginTop: "3.5rem" }}>
            {bag.map((item) => (
              <Product
                key={item.id}
                id={item.id}
                image={item.image}
                pName={item.pName}
                price={item.price}
                rating={item.rating}
                originalPrice={item.originalPrice}
              />
            ))}
          </div>

          <Price>
            <Card>
              <CurrencyFormat
                value={getBagTotal(bag)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
                renderText={(value) => (
                  <Card.Header>
                    <strong>Subtotal</strong> (<em>{bagLength} items</em>):
                    <small> Rs. </small>
                    <strong>{value}</strong>
                  </Card.Header>
                )}
              />

              <Card.Body>
                <Card.Title>Special title treatment</Card.Title>
                <Card.Text>
                  With supporting text below as a natural lead-in to additional
                  content.
                </Card.Text>
                <button className="neumorphism">Place Order</button>
              </Card.Body>
            </Card>
          </Price>
        </Styles>
      )}
    </Container>
  );
}

export default Checkout;

const Emptybag = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10%;
  @media (max-width: 990px) {
    margin-top: 20%;
  }
  img {
    object-fit: contain;
    width: 100%;
  }
`;

const Styles = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4rem;
  @media (max-width: 990px) {
    display: block;
  }

  .neumorphism {
    color: #fff;
    font-weight: 600;
    border: none;
    text-transform: uppercase;
    border-radius: 8px;
    padding: 0.5rem 2rem;
    background: #1e1c19;
    box-shadow: inset 24px 24px 58px #0c0b0a, inset -24px -24px 58px #c5b8a3;
    &:hover {
      box-shadow: 3px 1px 13px #bfbfbf, -3px -1px 13px #ffffff;
    }
    &:focus {
      background-color: #1e1c19;
      outline: none;
    }
    &:active {
      background: #1e1c19;
      box-shadow: 3px 1px 13px #bfbfbf, -3px -1px 13px #ffffff;
      transform: translateY(3px);
    }
  }
`;

const Price = styled.div`
  width: 35%;
  margin-top: 4rem;
  @media (max-width: 990px) {
    width: 100%;
  }
`;

