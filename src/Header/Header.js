import Logo from '../images/logo2.png';
import {Link} from 'react-router-dom';


function Header() {
  return (
    <div className="App">
        <div id="header">
		<a title="inicio"  class="logo">
			<img src={Logo} alt=""/>
		</a>
		<ul id="navigation">
			
			<li>

				<a> <Link to={"/"}> home</Link></a>
			</li>
			<li>
			<a> <Link to={"/"}> about</Link></a>			
			</li>
			<li>
			<a> <Link to={"/"}>Shoes</Link></a>			
			</li>
			<li>
			<a> <Link to={"/"}> blog</Link></a>			
			</li>
			<li>
			<a> <Link to={"/"}> contact us</Link></a>			
			</li>

			<li>
				<a title='carrito' > <Link to={"/carrito"}> 🛒</Link></a>
			</li>
		</ul>
	</div>
    </div>
  );
}

export default Header;
