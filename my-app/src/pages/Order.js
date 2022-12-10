import '../index.css'
import OrderMenu from '../OrderMenu';
import '../styles/Order.css'

const Order = () => {
    return ( 
        <>
            <OrderMenu />
            <div className='container'>
                <div className='item'>
                    <span className='menu-title'>Double Stack<br />Attack</span>
                </div>
            </div>
        </>
    );
}
 
export default Order;