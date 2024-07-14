import React from 'react';
import * as C from './styles';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useCart } from '../../Contexts/CartContext';

const Cartpage: React.FC = () => {
  const { cartItems, total, updateItemQuantity } = useCart();
  const discount: number = 5;
  const shippingCost: number = 10;

  return (
    <C.Container>
      {cartItems.length === 0 ? (
        <C.EmptyCartMessage>
          <p>Ainda não há itens adicionados ao carrinho.</p>
        </C.EmptyCartMessage>
      ) : (
        <>
          {cartItems.map((item) => (
            <C.CartItem key={item.id}>
              <C.CartItemImage src={item.image} alt={item.title} />
              <C.CartItemInfo>
                <h3>{item.title}</h3> 
                <p>Preço: R${item.price.toFixed(2)}</p>
                <div>
                  <RemoveCircleOutlineIcon onClick={() => updateItemQuantity(item.id, item.quantity - 1)} />
                  <input type="text" value={item.quantity} readOnly />
                  <AddCircleOutlineIcon onClick={() => updateItemQuantity(item.id, item.quantity + 1)} />
                </div>
              </C.CartItemInfo>
            </C.CartItem>
          ))}

          <C.OrderSummary>
            <h2>Resumo do Pedido</h2>
            <div>
              <p>Total: R${total.toFixed(2)}</p>
              <p>Desconto: R${discount.toFixed(2)}</p>
              <p>Frete: R${shippingCost.toFixed(2)}</p>
              <p>Total com Desconto e Frete: R${(total - discount + shippingCost).toFixed(2)}</p>
            </div>
            <button>Finalizar Pedido</button>
          </C.OrderSummary>
        </>
      )}
    </C.Container>
  );
};

export default Cartpage;
