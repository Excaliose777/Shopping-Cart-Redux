import Navbar from "./components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { calculateTotals } from "./features/cart/cartSlice";
import CartContainer from "./components/CartContainer";
import { useEffect } from "react";
import Modal from "./components/modal";

function App() {
  const {cartItems} = useSelector((store) => store.cart)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals())
  }, [cartItems])
  return (
    <main>
      <Modal/>
      <Navbar/>
      <CartContainer/>
    </main>
  );
}
export default App;
