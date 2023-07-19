import CartItem from "./CartItem";
import { useGlobalContext } from "./context";
const CartContainer = () => {
  const { cart, clearCart, totalCost, reset } = useGlobalContext();

  const cartArray = Array.from(cart.entries());
  // const cartArray = [...cartItems];
  // console.log(cartArray_2, cartArray);

  if (cartArray.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
        <button
          className="btn btn-hipster"
          style={{ display: "flex", margin: "auto", marginTop: "3rem" }}
          onClick={reset}
        >
          reset
        </button>
      </section>
    );
  }
  return (
    <section className="cart">
      {/* cart header */}
      <header>
        <h2>your bag</h2>
      </header>
      {/* cart items */}
      <div>
        {cartArray.map((cartItem) => {
          const [id, item] = cartItem;
          return <CartItem key={id} {...item} />;
        })}
      </div>
      {/* cart footer */}
      <footer>
        <hr />
        <div>
          <h5 className="cart-total">
            total <span>${totalCost.toFixed(2)}</span>
          </h5>
        </div>
        <button className="btn btn-hipster" onClick={clearCart}>
          clear cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
