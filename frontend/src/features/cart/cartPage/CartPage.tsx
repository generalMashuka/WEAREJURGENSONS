import {
  incrementQuantity,
  decrementQuantity,
  removeItem,
} from "../../cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectCartItems } from "../../items/selectors";
import CartItemView from "../cartItem/CartItemView";

function CartPage(): JSX.Element {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  return (
          <div>
          <h3>Shopping Cart</h3>
          {cartItems?.map((item) => (
            <CartItemView
              key={item.item.id}
              cartItem={item}
            />
          ))}
        </div>
  );
}

export default CartPage;
