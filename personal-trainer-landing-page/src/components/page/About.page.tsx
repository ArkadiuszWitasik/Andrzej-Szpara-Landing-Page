import classes from '../css/About.page.module.css';
import SubHeading from '../SubHeading';
import Image from 'next/image';
import mainPhoto from '../../../public/glowna.webp';

function AboutPage() {
	return (
		<section id='about' style={{ height: '100vh', border: '1px solid green' }}>
			<SubHeading title='o mnie' subtitle='o mnie' />
		</section>
	);
}

export default AboutPage;
