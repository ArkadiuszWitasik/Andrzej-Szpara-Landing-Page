'use client';

import classes from './css/Navbar.module.css';
import Image from 'next/image';
import logo from '../../public/logo.png';
import { useState } from 'react';

function Navbar() {
	const [opened, setOpened] = useState<boolean>(false);
	const handleOpenMobileMenu = () => {
		setOpened(!opened);
	};
	return (
		<>
			<nav className={classes.navbarContainer}>
				<a href='#main'>Strona głowna</a>
				<a href='#plans'>Plany</a>
				<Image src={logo} alt='Website logo of man lifting and barbell.' width={90} />
				<a href='#about'>O mnie</a>
				<a href='#contact'>Kontakt</a>
			</nav>

			<nav className={classes.mobileNavbarContainer}>
				<div className={classes.mobileNavLeftSection}>
					<Image src={logo} alt='Website logo of man lifting and barbell.' width={60} />
					<div className={classes.mobileNavDivider}>&nbsp;</div>
					<p>Andrzej Szpara</p>
				</div>
				<button className={classes.menuIcon} onClick={handleOpenMobileMenu}>
					{opened ? <i className='ti ti-x'></i> : <i className={`ti ti-menu-deep`} />}
				</button>

				<div
					className={classes.mobileNavContent}
					style={{
						display: opened ? 'flex' : 'none',
					}}>
					<a href='#main' onClick={handleOpenMobileMenu}>
						Strona głowna
					</a>
					<a href='#plans' onClick={handleOpenMobileMenu}>
						Plany
					</a>
					<a href='#about' onClick={handleOpenMobileMenu}>
						O mnie
					</a>
					<a href='#contact' onClick={handleOpenMobileMenu}>
						Kontakt
					</a>
				</div>
			</nav>
		</>
	);
}

export default Navbar;
