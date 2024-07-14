import styled, { keyframes } from "styled-components";

// Definição das animações slideIn e slideOut
const slideIn = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;

const slideOut = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`;

export const Container = styled.div`
    width: 100%;
    background-color: black;
`;

export const NavContainer = styled.div`
    text-align: center;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%; 
    padding: 0 3vh;
    box-sizing: border-box;
    box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    width: 100%;

    @media screen and (max-width: 776px) {
        display: none;
    }
`;

export const Logo = styled.div`
    img {
        height: 10vh;
        cursor: pointer;
    }
`;

export const Titles = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0; 
    list-style-type: none;
    
    li {
        margin-left: 2vh;
        font-family: "Bebas Neue", sans-serif;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
        font-size: 1.6vh;
    }

    #cartitem {
        margin-left: 2vh;
        font-size: 3vh;
        color: #fff;
        cursor: pointer;
    }
`;

export const NavMobileContainer = styled.div`
    display: none;

    @media screen and (max-width: 776px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    }
`;

export const burgerMobile = styled.div`
    margin: 0 2vh;

    #menuicon {
        font-size: 3.8vh;
        color: #fff;
    }
`;

export const LogoMobile = styled.div`
    img {
        height: 9vh;
    }
`;

export const MobileCart = styled.div`
    margin: 0 2vh;

    #cartitemmobile {
        font-size: 3.3vh;
        color: #fff;
    }
`;

export const MobileOpen = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: black;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    z-index: 1000;
    color: white;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
    animation: ${({ isOpen }) => (isOpen ? slideIn : slideOut)} 0.5s forwards;
`;

export const CloseIconContainer = styled.div`
    position: absolute;
    top: 2vh;
    left: 2vh;

    #closeicon {
        font-size: 3.8vh;
        color: #fff;
        cursor: pointer;
    }
`;

export const ListMobile = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
        margin-left: 2vh;
        font-family: "Bebas Neue", sans-serif;
        color: #fff;
        text-transform: uppercase;
        cursor: pointer;
        font-size: 2.3vh;
        margin-top: 1.5vh;
        list-style-type: none;
    }
`;

export const MobileOpenHeader = styled.div`
    width: 100%;
    height: 8vh;
`;

export const MobileOpenFooter = styled.div`
    width: 100%;
    height: 15vh;
`;

export const CartBadge = styled.span`
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: red;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: bold;

    @media screen and (max-width: 776px) {
        width: 15px;
        height: 15px;
        font-size: 10px;
    }
`;
