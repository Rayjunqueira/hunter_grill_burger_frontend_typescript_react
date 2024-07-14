import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  min-height: 100vh;
  position: relative;
`;

export const ContactContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
  padding: 20px;
  box-sizing: border-box;
  position: absolute;
  top: 10%; 

  @media (max-width: 768px) {
    padding: 15px;
    top: 10%; 
  }
`;

export const ContactTitle = styled.div`
  margin-bottom: 20px;
  text-align: center;

  h3 {
    font-size: 24px;
    color: #333;
    margin: 0;
    font-family: "Ultra", sans-serif;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }
`;

export const ContactInput = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 16px;
    color: #555;
    margin-bottom: 8px;

    @media (max-width: 768px) {
      font-size: 14px;
    }
  }

  input,
  textarea {
    width: 100%;
    padding: 10px;  
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
 
    &:focus {
      border-color: #aaa;
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    height: 100px;
  }
`;

export const SentContainer = styled.div `
  text-align: center;

  button {
    padding: 10px 20px;
    background-color: #f13131;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    z-index: 1; 
    margin-top: 20px; 
    }
`;