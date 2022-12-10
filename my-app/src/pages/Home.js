import '../styles/Home.css'

const Home = () => {
    return (
        <div className='wrapper'>
            <a href='/' className='box a'>
                <span className='box-title'>Double Stack<br />Attack</span>
            </a>
            <a href='/' className='box b'>
                <span className='box-titleb'>Feast<br />For<br />One</span>
            </a>
            <a href='/' className='box c'>
                <span className='box-titlec'>Milkshakes<br />&<br />Ice Cream</span>
            </a>
            <a href='/' className='box d'>
                <span className='box-titled'>Feast<br />For<br />Three</span>
            </a>
        </div>
    );
}
 
export default Home;