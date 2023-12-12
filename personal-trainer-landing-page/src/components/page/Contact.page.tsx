'use client';
import classes from '../css/Contact.page.module.css';
import Form from '../Form';
import SubHeading from '../SubHeading';

function ContactPage() {
	return (
		<section id='contact' className={classes.contactPage}>
			<SubHeading title='kontakt' subtitle='kontakt' />
			<div className={classes.contactContainer}>
				<Form />
				<div className={classes.contactInfoContainer}>
					<div className={classes.contactInfoItem}>
						<p className={classes.contactInfoItemTitle}>TELEFON</p>
						<div className={classes.contactInfoItemDescription}>
							<div className={classes.verticalDivider} />
							<p className={classes.contactInfoItemDescriptionText}>534 958 464</p>
						</div>
					</div>
					<div className={classes.contactInfoItem}>
						<p className={classes.contactInfoItemTitle}>INSTAGRAM</p>
						<div className={classes.contactInfoItemDescription}>
							<div className={classes.verticalDivider} />
							<p className={classes.contactInfoItemDescriptionText}>andrzejszpara</p>
						</div>
					</div>
					<div className={classes.contactInfoItem}>
						<p className={classes.contactInfoItemTitle}>EMAIL</p>
						<div className={classes.contactInfoItemDescription}>
							<div className={classes.verticalDivider} />
							<p className={classes.contactInfoItemDescriptionText}>andrzej.szpara@onet.pl</p>
						</div>
					</div>
					<div className={classes.contactInfoItem}>
						<p className={classes.contactInfoItemTitle}>ADRES</p>
						<div className={classes.contactInfoItemDescription}>
							<div className={classes.verticalDivider} />
							<p className={classes.contactInfoItemDescriptionText}>Barcza 54, 10-001 Olsztyn</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactPage;
