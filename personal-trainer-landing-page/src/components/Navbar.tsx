import classes from './css/Navbar.module.css';
import Image from 'next/image';
import logo from '../../public/logo.png';

function Navbar() {
	return (
		<nav className={classes.navbarContainer}>
			<a href='#main'>Strona głowna</a>
			<a href='#plans'>Plany</a>
			<Image src={logo} alt='Website logo of man lifting and barbell.' width={90} />
			<a href='#about'>O mnie</a>
			<a href='#contact'>Kontakt</a>
		</nav>
	);
}

export default Navbar;
