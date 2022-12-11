import { NavLink } from "react-router-dom";
import './styles/OMenu.css'

const OrderMenu = () => {
    return (
        <div className="ordermenu">
            <div className="menuitems">
                <NavLink to='/pages/Menu' className='menuitem'>Burgers</NavLink>
                <NavLink to='/pages/Combos' className='menuitem'>Combos</NavLink>
                <NavLink to='/pages/Sides' className='menuitem'>Sides</NavLink>
                <NavLink to='/pages/Drinks' className='menuitem'>Drinks</NavLink>
                <NavLink to='/pages/Desserts' className='menuitem'>Desserts</NavLink>
            </div>
        </div>
    );
}
 
export default OrderMenu;