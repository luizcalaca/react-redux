import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectProductsCount } from "../../redux/cart/cart.selectors";
import { loginUser, logoutUser } from "../../redux/user/actions";

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);
  const { currentUser } = useSelector((rootReducer)=> rootReducer.userReducer)
  const productsCount = useSelector(selectProductsCount)

  const dispatch = useDispatch()

  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({name: 'calaca', email: '@teste.com'}))
  }

  const handleLoginOutClick = () => {
    dispatch(logoutUser())
  }

  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <div onClick={handleLoginOutClick}>Sair</div>
        ): (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productsCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
