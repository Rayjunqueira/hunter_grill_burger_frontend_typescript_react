import styled from "styled-components";

export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: "Ultra", sans-serif;
    background-color: black;
`;

export const BackgroundImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(40%);
    z-index: 1;
`;

export const MessageContainer = styled.div`
    position: relative;
    z-index: 2;
    color: white;
    top: -30%;

    h3 {
        margin: 0;
        margin-top: 3vh;
    }

     h4 {
        margin: 0;
     }
`;
