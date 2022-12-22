import { BsCartPlus } from "react-icons/bs";
import CustomButton from "../custom-button/index";
import * as Styles from "./styles";
import { useDispatch } from "react-redux";
import { addProductToCart } from "../../redux/cart/slice";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch()

  const handleProductClick = () => {
    dispatch(addProductToCart(product))
  }

  return (
    <Styles.ProductContainer>
      <Styles.ProductImage imageUrl={product.imageUrl}>
        <CustomButton startIcon={<BsCartPlus />} onClick={handleProductClick}>
          Adicionar ao carrinho
        </CustomButton>
      </Styles.ProductImage>

      <Styles.ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </Styles.ProductInfo>
    </Styles.ProductContainer>
  );
};

export default ProductItem;
