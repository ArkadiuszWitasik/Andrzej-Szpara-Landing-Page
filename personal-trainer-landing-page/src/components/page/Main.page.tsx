import Heading from '../Heading';
import classes from './Main.page.module.css';
import mainPhoto from '../../../public/glowna.webp';
import Image from 'next/image';

function MainPage() {
	return (
		<section id='main' style={{ height: '100vh', border: '1px solid blue' }}>
			<Heading title='treningi' />

			<div className={classes.container}>
				<div className={classes.heroInfoContainer}>
					<p>Andrzej Szpara</p>
					<p>Plany TRENINGOWE i ŻYWIENIOWE</p>
					<p>Współpraca ONLINE</p>
				</div>
				<Image src={mainPhoto} alt='' className={classes.heroImg} height={570} />
			</div>
		</section>
	);
}

export default MainPage;
