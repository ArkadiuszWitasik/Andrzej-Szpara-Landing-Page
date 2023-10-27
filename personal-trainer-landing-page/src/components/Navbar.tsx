import classes from './css/Navbar.module.css';
import Image from 'next/image';
import logo from '../../public/logo.png';

function Navbar() {
	return (
		<nav className={classes.navbarContainer}>
			<a className={classes.navLink} href='#main'>
				Strona głowna
			</a>
			<a className={classes.navLink} href='#plans'>
				Plany
			</a>
			<Image src={logo} alt='Website logo of man lifting and barbell.' width={90} />
			<a className={classes.navLink} href='#about'>
				O mnie
			</a>
			<a className={classes.navLink} href='#contact'>
				Kontakt
			</a>
		</nav>
	);
}

export default Navbar;
