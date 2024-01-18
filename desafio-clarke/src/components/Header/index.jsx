import './styles.css';
import Logo from '../../assets/logo.png';

const Header = () => {
    return (
        <header>
           <div className='menu'>
           
            <img
                src={Logo}
                alt='Logo Clarke'
                className='logo'
            />
            <ul className="custom-list">
  <li className="custom-item" onMouseOver="changeColor(this, '#3490dc')" onMouseOut="changeColor(this, '#000')">Sobre nós</li>
  <li className="custom-item" onMouseOver="changeColor(this, '#3490dc')" onMouseOut="changeColor(this, '#000')">Nossas soluções</li>
  <li className="custom-item" onMouseOver="changeColor(this, '#3490dc')" onMouseOut="changeColor(this, '#000')">Mercado Livre</li>
  <li className="custom-item" onMouseOver="changeColor(this, '#3490dc')" onMouseOut="changeColor(this, '#000')">Desperdiçômetro</li>
  <li className="custom-item" onMouseOver="changeColor(this, '#3490dc')" onMouseOut="changeColor(this, '#000')">Blog</li>
  <li className="selected">Fornecedores</li>
</ul>

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