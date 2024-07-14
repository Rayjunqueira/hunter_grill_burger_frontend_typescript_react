import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
  margin-bottom: 70vh;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CartItem = styled.div`
  display: flex;
  align-items: center;
  background-color: #f9f9f9;
  padding: 10px;
  border-radius: 8px;
  width: 300px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const CartItemImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
`;

export const CartItemInfo = styled.div`
  flex: 1;
  margin-left: 10px;

  h3 {
    margin-bottom: 5px;
    font-size: 18px;
  }

  p {
    margin-bottom: 5px;
    font-size: 14px;
    color: #666;
  }

  div {
    display: flex;
    align-items: center;

    svg {
      cursor: pointer;
    }

    input {
      width: 30px;
      text-align: center;
      margin: 0 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
  }
`;

export const OrderSummary = styled.div`
  background-color: #e0e0e0;
  padding: 20px;
  border-radius: 8px;
  width: 300px;

  h2 {
    margin-bottom: 10px;
    font-size: 24px;
  }

  div {
    p {
      margin-bottom: 8px;
    }
  }

  button {
    background-color: #4caf50;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const EmptyCartMessage = styled.div`
  text-align: center;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  width: 100%;
  margin-top: 20px;
`;
