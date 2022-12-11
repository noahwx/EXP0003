import '../index.css'
import OrderMenu from '../OrderMenu'

const Drinks = () => {
    return (
        <>
            <OrderMenu />
            <div className='container'>
               <a href='/pages/Menu' className='item img3'>
                <span className='menu-title'>Double Stack<br />Attack<br /><span className='menu-price'>$0.00</span></span>
               </a>
               <a href='/pages/Menu' className='item img3'>
                <span className='menu-title'>Double Stack<br />Attack<br /><span className='menu-price'>$0.00</span></span>
               </a>
               <a href='/pages/Menu' className='item img3'>
                <span className='menu-title'>Double Stack<br />Attack<br /><span className='menu-price'>$0.00</span></span>
               </a>
               <a href='/pages/Menu' className='item img3'>
                <span className='menu-title'>Double Stack<br />Attack<br /><span className='menu-price'>$0.00</span></span>
               </a>
               <a href='/pages/Menu' className='item img3'>
                <span className='menu-title'>Double Stack<br />Attack<br /><span className='menu-price'>$0.00</span></span>
               </a>
               <a href='/pages/Menu' className='item img3'>
                <span className='menu-title'>Double Stack<br />Attack<br /><span className='menu-price'>$0.00</span></span>
               </a>
            </div>
        </>
    );
}
 
export default Drinks;