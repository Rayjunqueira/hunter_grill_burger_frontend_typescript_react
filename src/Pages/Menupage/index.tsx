import React, { useState } from 'react';
import * as C from './styles';
import burger1 from '../../Assets/section/burger1.png';
import burger2 from '../../Assets/section/burger2.png';
import burger3 from '../../Assets/section/burger3.png';
import { useCart } from '../../Contexts/CartContext';

const Menupage: React.FC = () => {
  const [showInput, setShowInput] = useState([false, false, false]);
  const { addItemToCart } = useCart();
  const [showNotification, setShowNotification] = useState(false);

  const toggleInput = (index: number) => {
    const newShowInput = [...showInput];
    newShowInput[index] = !newShowInput[index];
    setShowInput(newShowInput);
  };

  const addToCart = (index: number) => {
    const item = {
      id: index,
      title: ['MasterCraft Burgers', 'Gourmet Blend Burgers', 'Prime Cuts Burgers'][index],
      image: [burger1, burger2, burger3][index],
      quantity: 1,
      price: 49.90,
    };
    addItemToCart(item);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);
  };

  return (
    <C.Container>
      {showNotification && <C.Notification>Item adicionado ao carrinho</C.Notification>}
      <C.MenuTitle>
        <hr />
        <h3>Linha Hunter Grill</h3>
        <hr />
      </C.MenuTitle>
      {[burger1, burger2, burger3].map((burger, index) => (
        <C.MenuContainer key={index}>
          <C.ImgCard>
            <img src={burger} alt={`Burger ${index + 1}`} />
          </C.ImgCard>
          <div>
            <C.TitleCard>
              <h3>{['MasterCraft Burgers', 'Gourmet Blend Burgers', 'Prime Cuts Burgers'][index]}</h3>
            </C.TitleCard>
            <C.DescCard>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus sit
                nobis ipsum repellendus.
              </h5>
            </C.DescCard>
            <C.PriceCard>
              <h4>R$ 49.90</h4>
            </C.PriceCard>
            <C.CartBuy>
              <button onClick={() => addToCart(index)}>Adicionar +</button>
            </C.CartBuy>
          </div>
        </C.MenuContainer>
      ))}
    </C.Container>
  );
};

export default Menupage;
