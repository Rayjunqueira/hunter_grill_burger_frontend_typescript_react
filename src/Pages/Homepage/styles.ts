import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 50vh;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(40%);
    position: absolute; 
    top: 0;
    left: 0;
  }

  .text-overlay {
    position: relative;
    width: 100%;
    text-align: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 1; 
    
    h4 {
      color: #fff;
      text-transform: uppercase;
      font-size: 2vw;
    }
    
    i {
      color: red;
      font-family: "Ultra", sans-serif;
    }

    @media screen and (max-width: 801px) {
      h4 {
        font-size: 4vw;
      }
    }
  }

  button {
    position: relative;
    padding: 10px 20px;
    background-color: #ff0000;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    z-index: 1; 
    margin-top: 20px; 
  }
`;

export const MenuSectionMobile = styled.div`
  margin-top: 3vh;
  text-align: center;
  display: none;


  @media screen and (max-width: 776px) {
    display: inline;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;


export const SectionMobileItem = styled.div`
  box-sizing: border-box;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.7);
  margin: 0 4px;
  margin-top: 2vh;
  border-radius: 4px;
  text-align: center; 

  h4 {
    text-transform: uppercase;
    color: white;
    background-color: rgba(0, 0, 0, 0.7); 
    background-color: #5C4033;
;

    padding: 8px 12px; 
    border-radius: 4px;
    margin-top: 0px;
  }
`;

export const MenuSection = styled.div`
  margin-top: 3vh;
  text-align: center;
  display: flex;
  justify-content: center;
  gap: 20px; 
  position: relative;

  div {
    position: relative;
    display: inline-block;
  }

  img {
    height: 30vh;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
  }

  div:hover img {
    opacity: 0.4;
    transform: scale(1.05);
  }

  h4 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    color: white;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;
    pointer-events: none;
    font-family: "Ultra", sans-serif;
  }

  div:hover h4 {
    opacity: 1;
    transform: translate(-50%, -50%);
  }

  @media screen and (max-width: 776px) {
    display: none;
  }
`;

export const FindUs = styled.div`
  background-color: #ff3131;
  text-align: center;
  margin: 0 6px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vh;
  margin-bottom: 5vh;

  @media (min-width: 801px) {
    flex-direction: row;
    align-items: stretch;
  }
`;

export const ImgContainer = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 5px;
  }

  @media (min-width: 801px) {
    width: 50%;
  }
`;

export const FindUsContent = styled.div`
  width: 100%;
  padding: 2vh;

  @media (min-width: 801px) {
    width: 50%;
    padding: 2vh 4vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const FindTitle = styled.div`
  h4 {
    font-family: "Bebas Neue", sans-serif;
    color: #fff;
    text-transform: uppercase;
    font-size: 2.4vh;
    margin-top: 3vh;
  }
`;

export const FindText = styled.div`
  h5 {
    font-size: 2vh;
    margin-top: 3vh;
    color: #fff;
  }
`;

export const FindInputContainer = styled.div`
  margin-top: 3vh;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    height: 6vh;
    padding: 0 1vh;
    border: none;
    border-radius: 5px;
    margin-right: 1vh;
    width: 60%;
    font-size: 1.6vh;
    outline: none;
  }

  button {
    height: 6vh;
    width: 7vh;
    background-color: #fff;
    border: none;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    i {
      color: #ff3131;
    }
  }
`;
