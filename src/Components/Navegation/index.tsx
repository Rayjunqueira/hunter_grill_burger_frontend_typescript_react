import React, { useState } from 'react';
import * as C from './styles';

import logo from '../../Assets/logo/logo.png';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../Contexts/CartContext';

const Navegation = () => {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { cartCount } = useCart();

  const handleOnHome = () => {
    navigate("/");
    setIsMobileOpen(false);
  }

  const handleMenuClick = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  const handleCloseClick = () => {
    setIsMobileOpen(false);
  };

  const handleContactClick = () => {
    navigate("/contact");
    setIsMobileOpen(false);
  }

  const handleMenupage = () => {
    navigate("/menu");
    setIsMobileOpen(false);
  } 

  const handleDrinkpage = () => {
    navigate("/drinks");
    setIsMobileOpen(false);
  }

  const handleErrorfind = () => {
    navigate("/errorfind");
    setIsMobileOpen(false);
  }

  const handleCart = () => {
    navigate("/cart");
  }

  return (
    <C.Container>
      <C.NavContainer> 
        <C.Logo>
          <img src={logo} alt="" onClick={handleOnHome} /> 
        </C.Logo>
        <C.Titles>
          <li onClick={handleOnHome}>Página inicial</li>
          <li onClick={handleMenupage}>Lanches</li>
          <li onClick={handleDrinkpage}>Bebidas</li>
          <li onClick={handleErrorfind}>Retirada</li>
          <li onClick={handleContactClick}>Contato</li>
          <i onClick={handleCart} style={{ position: 'relative' }}>
            <LocalMallIcon id='cartitem' />
            <C.CartBadge>{cartCount}</C.CartBadge>
          </i>
        </C.Titles>
      </C.NavContainer>
      <C.NavMobileContainer>
        <C.burgerMobile onClick={handleMenuClick}>
          <i><MenuIcon id='menuicon' /></i>
        </C.burgerMobile>
        <C.LogoMobile>
          <img src={logo} alt="" onClick={handleOnHome} /> 
        </C.LogoMobile>
        <C.MobileCart>
          <i onClick={handleCart} style={{ position: 'relative' }}>
            <LocalMallIcon id='cartitemmobile' />
            <C.CartBadge>{cartCount}</C.CartBadge>
          </i>
        </C.MobileCart>
      </C.NavMobileContainer>
      <C.MobileOpen isOpen={isMobileOpen}>
        <C.MobileOpenHeader />
        <C.CloseIconContainer onClick={handleCloseClick}>
          <i><ClearIcon id='closeicon' /></i>
        </C.CloseIconContainer>
        <C.ListMobile> 
          <li onClick={handleOnHome}>Menu principal</li>
          <li onClick={handleMenupage}>Lanches</li>
          <li onClick={handleDrinkpage}>Bebida</li>
          <li onClick={handleErrorfind}>Retirada</li>
          <li onClick={handleContactClick}>Contato</li>
        </C.ListMobile>
        <C.MobileOpenFooter />
      </C.MobileOpen>
    </C.Container>
  )
}

export default Navegation;
