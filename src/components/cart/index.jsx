import * as Styles from "./styles";
import { useSelector } from "react-redux";
import CartItem from '../cart-item/index'

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);
  const {products} = useSelector((rootReducer)=>rootReducer.cartReducer);
  
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.map(product => <CartItem product={product}/> )}
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
