import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Notification = styled.div`
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #f13131;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  font-family: "Arial", sans-serif;
  z-index: 1000;
`;

export const MenuTitle = styled.div `
  text-align: center;

  h3 { 
      font-family: "Ultra", sans-serif;
      color: #f13131;
  }

  hr {
      width: 50%;
      border: 1px solid #f13131;
  }
`;

export const MenuContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  padding: 20px;
  margin: 20px 0;
  width: 100%;
  max-width: 600px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  
  @media(min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

export const ImgCard = styled.div `
  img {
    width: 100%;
    max-width: 200px;
    height: auto;
    border-radius: 10px;
  }

  @media(min-width: 768px) {
    margin-right: 20px;
  }
`;

export const TitleCard = styled.div `
  h3 {
    font-family: "Ultra", sans-serif;
    color: #333;
    margin: 10px 0;

    @media(min-width: 768px) {
      margin: 0;
    }
  }
`;

export const DescCard = styled.div `
  h5 {
    font-family: "Arial", sans-serif;
    color: #666;
    text-align: center;
    
    @media(min-width: 768px) {
      text-align: left;
    }
  }
`;

export const PriceCard = styled.div `
    text-align: center; 

  h4 {
    font-family: "Ultra", sans-serif;
    color: green;
    margin: 10px 0;
    text-transform: uppercase;
  }
`;

export const CartBuy = styled.div `
  margin-top: 10px;
    text-align: center;

  button {
    background-color: #f13131;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-family: "Arial", sans-serif;
    font-size: 16px;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #d12b2b;
    }
  }
`;

export const AddCart = styled.div `
  display: flex;
  align-items: center;
  margin-top: 10px;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s ease-in-out;

  svg {
    cursor: pointer;
    color: #f13131;
    font-size: 30px;
  }

  input {
    width: 40px;
    text-align: center;
    margin: 0 10px;
    font-size: 16px;
  }

  &.active {
    visibility: visible;
    opacity: 1;
  }
`;
