import classes from '../css/About.page.module.css';
import SubHeading from '../SubHeading';
import mainPhoto from '../../../public/glowna.webp';
import Image from 'next/image';

function AboutPage() {
	return (
		<section id='about'>
			<SubHeading title='o mnie' subtitle='o mnie' />
			<div className={classes.aboutContainer}>
				<p className={classes.aboutDescription}>
					Cześć, mam na imię Andrzej i jestem Twoim nowym Trenerem. Od zawsze byłem bardzo aktywny, a od 12-tego roku
					życia zacząłem trenować dwubój olimpijki i interesować się szeroko pojętą branżą fitness. Ta dyscyplina
					towarzyszyła mi przez następne 10 lat życia i w tym czasie udało się zdobyć kilka medali Mistrzostw Polski.
					Aktualnie, mój własny trening wygląda troszkę inaczej i pojawiło się dodatkowo kolarstwo szosowe. Poprzez
					dwubój trafiłem również do KS AZS AWF Biała Podlaska i Akademii Wychowania Fizycznego w Białej Podlaskiej,
					gdzie ukończyłem licencjat Trener Personalny. Dziś jestem Trenerem dzielącym się swoimi pasjami i energią do
					życia, wspierając swoich podopiecznych w tworzeniu ich najlepszych wersji siebie.
				</p>
			</div>
		</section>
	);
}

export default AboutPage;
