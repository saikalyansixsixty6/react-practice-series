import { Link } from "react-router-dom";
import "./styles.css"
import { CartState } from "./context/Context";


function Header() {
  const { cart } = CartState();
    return (
        <div>
          <span className="header">React Context API</span>
          <ul className="nav">
            <li className="prod">
              <Link to="/">Home Page</Link>
            </li>
            <li className="prod1">
              <Link to="/cart">Cart</Link>
              {cart.length > 0 ? <div className="prod1">{cart.length}</div>:""}
            </li>
            
          </ul>
          
        </div>
      );
}

export default Header
