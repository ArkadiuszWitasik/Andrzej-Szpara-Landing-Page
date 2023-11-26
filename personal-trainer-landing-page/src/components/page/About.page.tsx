'use client';
import { useEffect, useState } from 'react';
import classes from '../css/About.page.module.css';
import SubHeading from '../SubHeading';
import { InstagramData, InstagramPhoto } from '@/types/ResponseTypes';
import mainPhoto from '../../../public/glowna.webp';
import Image from 'next/image';

interface AboutPageProps {
	instagramData: InstagramData;
}

function AboutPage({ instagramData }: AboutPageProps) {
	// const [photos, setPhotos] = useState<InstagramPhoto[]>([]);

	// useEffect(() => {
	// 	if (instagramData && instagramData.data) {
	// 		setPhotos(instagramData.data);
	// 	}
	// }, [instagramData]);

	return (
		<section id='about'>
			<SubHeading title='o mnie' subtitle='o mnie' />
			<div className={classes.aboutWrapper}>
				<div className={classes.photoContainer}>
					<p className={classes.instagramTitle}>instagram</p>
					<div className={classes.instagramPhotoGrid}>
						<div className={classes.instagramPhoto}>
							<Image src={mainPhoto} alt='test' fill style={{ filter: 'brightness(0.55)' }} />
						</div>
						<div className={classes.instagramPhoto}>
							<Image src={mainPhoto} alt='test' fill style={{ filter: 'brightness(0.55)' }} />
						</div>
						<div className={classes.instagramPhoto}>
							<Image src={mainPhoto} alt='test' fill style={{ filter: 'brightness(0.55)' }} />
						</div>
						<div className={classes.instagramPhoto}>
							<Image src={mainPhoto} alt='test' fill style={{ filter: 'brightness(0.55)' }} />
						</div>
						<div className={classes.instagramPhoto}>
							<Image src={mainPhoto} alt='test' fill style={{ filter: 'brightness(0.55)' }} />
						</div>
						<div className={classes.instagramPhoto}>
							<Image src={mainPhoto} alt='test' fill style={{ filter: 'brightness(0.55)' }} />
						</div>
						<div className={classes.instagramPhoto}>
							<Image src={mainPhoto} alt='test' fill style={{ filter: 'brightness(0.55)' }} />
						</div>
					</div>
				</div>
				<div className={classes.descriptionContainer}>
					<h3 className={classes.description}>Cześć, mam na imię Andrzej i jestem Twoim nowym Trenerem.</h3>
					<p className={classes.description}>
						Od zawsze byłem bardzo aktywny, a od 12-tego roku życia zacząłem trenować dwubój olimpijki i interesować się
						szeroko pojętą branżą fitness. Ta dyscyplina towarzyszyła mi przez następne 10 lat życia i w tym czasie
						udało się zdobyć kilka medali Mistrzostw Polski. Aktualnie, mój własny trening wygląda troszkę inaczej i
						pojawiło się dodatkowo kolarstwo szosowe. Po przez dwubój trafiłem również do KS AZS AWF Biała Podlaska i
						Akademii Wychowania Fizycznego w Białej Podlaskiej, gdzie ukończyłem licencjat Trener Personalny.
					</p>
					<p className={classes.description}>
						Dziś jestem Trenerem dzielącym się swoimi pasjami i energią do życia, wspierając swoich podopiecznych w
						tworzeniu ich najlepszych wersji siebie.
					</p>
				</div>
			</div>
		</section>
	);
}

export async function getStaticProps() {
	try {
		const response = await fetch('http://localhost:3000/api/instagram');
		const { data } = await response.json();

		return {
			props: {
				instagramData: { data },
			},
		};
	} catch (error) {
		console.error('Error fetching Instagram data:', error);
		return {
			props: {
				instagramData: { data: [] },
			},
		};
	}
}

export default AboutPage;
