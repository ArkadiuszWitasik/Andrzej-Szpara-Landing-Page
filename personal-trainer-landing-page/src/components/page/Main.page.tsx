import Heading from '../Heading';
import classes from '../css/Main.page.module.css';
import mainPhoto from '../../../public/glowna.webp';
import bars from '../../../public/bars.svg';
import Image from 'next/image';
import Navbar from '../Navbar';

function MainPage() {
	return (
		<section id='main' className={classes.mainSection} style={{ height: '100vh' }}>
			<Navbar />
			<Heading title='treningi' subtitle='personalne' />

			<div className={classes.wrapper}>
				<div className={classes.container}>
					<div className={classes.showMoreContainer}>
						<p className={classes.innerText}>Poznaj</p>
						<p className={`${classes.innerText} ${classes.innerHighlightedText}`}>Ofertę</p>
						<a href='#plans'>
							<i className={`ti ti-arrow-down ${classes.innerText}`}></i>
						</a>
					</div>
					<div className={classes.rightSection}>
						<div className={classes.infoContainer}>
							<div>
								<p className={classes.infoFullName}>Andrzej Szpara</p>
								<div className={classes.infoOfferContainer}>
									<i className={`ti ti-x ${classes.iconX}`}></i>
									<p className={classes.innerText}>
										Plany <span className={classes.innerHighlightedText}>TRENINGOWE</span> i&nbsp;
										<span className={classes.innerHighlightedText}>ŻYWIENIOWE</span>
									</p>
								</div>
								<div className={classes.infoOfferContainer}>
									<i className={`ti ti-x ${classes.iconX}`}></i>
									<p className={classes.innerText}>
										Współpraca <span className={classes.innerHighlightedText}>ONLINE</span>
									</p>
								</div>
							</div>
							<Image src={bars} alt='bars' width={600} />
						</div>
						<Image
							src={mainPhoto}
							alt='Mężczyzna stojący na siłowni przed lustrem'
							style={{ filter: 'brightness(0.55)', zIndex: '-1' }}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MainPage;
