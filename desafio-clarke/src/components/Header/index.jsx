import './styles.css';
import Menu from '../../assets/barra-de-menu.png';
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header>
           <div className='menu'>
           <img
                src={Menu}
                alt='Menu'
                className='menu-bar'
            />
            <img
                src={Logo}
                alt='Logo Clarke'
                className='logo'
            />
            <button
                type='button'
            >
                Seja nosso cliente
                </button>
           </div>
        </header>
    )
}

export default Header;