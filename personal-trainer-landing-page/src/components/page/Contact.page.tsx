'use client';
import classes from '../css/Contact.page.module.css';
import Form from '../Form';
import SubHeading from '../SubHeading';

function ContactPage() {
	return (
		<section id='contact'>
			<SubHeading title='kontakt' subtitle='kontakt' />
			<div className={classes.contactContainer}>
				<div className={classes.contactInfoContainer}>
					<div>
						<div className={classes.contactInfoTitleText}>telefon</div>
						<div className={classes.contactInfoContent}>
							<div className={classes.contactInfoBar}></div>
							<p>534 958 464</p>
						</div>
					</div>
					<div>
						<div className={classes.contactInfoTitleText}>instagram</div>
						<div className={classes.contactInfoContent}>
							<div className={classes.contactInfoBar}></div>
							<p>andrzejszpara</p>
						</div>
					</div>
					<div>
						<div className={classes.contactInfoTitleText}>email</div>
						<div className={classes.contactInfoContent}>
							<div className={classes.contactInfoBar}></div>
							<p>andrzej.szpara@onet.pl</p>
						</div>
					</div>
					<div>
						<div className={classes.contactInfoTitleText}>adres</div>
						<div className={classes.contactInfoContent}>
							<div className={classes.contactInfoBar}></div>
							<p>adres siłki ul. miodowa</p>
						</div>
					</div>
				</div>
				<Form />
			</div>
		</section>
	);
}

export default ContactPage;
