import '../index.css'
import OrderMenu from '../OrderMenu';
import '../styles/Menu.css'

const Order = () => {
    return ( 
        <>
            <OrderMenu />
            <div className='container'>
               <a href='/pages/Menu' className='item img0'>
                <span className='menu-title'>Double Stack<br />Attack<br /><span className='menu-price'>$0.00</span></span>
               </a>
               <a href='/pages/Menu' className='item img0'>
                <span className='menu-title'>Double Stack<br />Attack<br /><span className='menu-price'>$0.00</span></span>
               </a>
               <a href='/pages/Menu' className='item img0'>
                <span className='menu-title'>Double Stack<br />Attack<br /><span className='menu-price'>$0.00</span></span>
               </a>
               <a href='/pages/Menu' className='item img0'>
                <span className='menu-title'>Double Stack<br />Attack<br /><span className='menu-price'>$0.00</span></span>
               </a>
               <a href='/pages/Menu' className='item img0'>
                <span className='menu-title'>Double Stack<br />Attack<br /><span className='menu-price'>$0.00</span></span>
               </a>
               <a href='/pages/Menu' className='item img0'>
                <span className='menu-title'>Double Stack<br />Attack<br /><span className='menu-price'>$0.00</span></span>
               </a>
            </div>
        </>
    );
}
 
export default Order;