import React, { useState } from 'react';
import * as C from './styles';
import soda1 from '../../Assets/section/coke.png';
import soda2 from '../../Assets/section/fantagreen.png';
import soda3 from '../../Assets/section/fanta.png';
import { useCart } from '../../Contexts/CartContext';

const Drinkpage: React.FC = () => {
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
      id: index + 3,
      title: `Coca Cola 500 ml ${index + 1}`,
      image: [soda1, soda2, soda3][index],
      quantity: 1,
      price: 8.90,
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
      <C.DrinkTitle>
        <hr />
        <h3>Bebidas</h3>
        <hr />
      </C.DrinkTitle>
      {[soda1 ].map((soda, index) => (
        <C.DrinkContainer key={index}>
          <C.ImgCard>
            <img src={soda} alt={`Coca Cola 500 ml ${index + 1}`} />
          </C.ImgCard>
          <div>
            <C.TitleCard>
              <h3>Coca Cola 500 ml {index + 1}</h3>
            </C.TitleCard>
            <C.DescCard>
              <h5>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore doloribus sit
                nobis ipsum repellendus.
              </h5>
            </C.DescCard>
            <C.PriceCard>
              <h4>R$ 8.90</h4>
            </C.PriceCard>
            <C.CartBuy>
              <button onClick={() => addToCart(index)}>Adicionar +</button>
            </C.CartBuy>
          </div>
        </C.DrinkContainer>
      ))}
    </C.Container>
  );
};

export default Drinkpage;
