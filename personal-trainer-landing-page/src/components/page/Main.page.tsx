'use client';
import Heading from '../Heading';
import classes from '../css/Main.page.module.css';
import mainPhoto from '../../../public/glowna.webp';
import bars from '../../../public/bars.svg';
import Image from 'next/image';
import { useState, useEffect } from 'react';

function MainPage() {
	if (typeof window === 'undefined') {
		return null;
	}
	const [width, setWidth] = useState<number>(window.innerWidth || 0);

	const handleResize = () => {
		setWidth(window.innerWidth);
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	return (
		<section id='main' className={classes.mainSection}>
			<Heading title='treningi' subtitle='personalne' />
			<div className={classes.mainSectionContent}>
				{width > 320 && width < 766 && (
					<div className={classes.freeConsultationContainer}>
						<div className={classes.xIconContainer}>
							<i className={`ti ti-x ${classes.iconX}`}></i>
							<p>
								Plany&nbsp;<span className={classes.uppercaseBoldText}>treningowe</span>&nbsp;i&nbsp;
								<span className={classes.uppercaseBoldText}>żywieniowe</span>
							</p>
						</div>
						<div className={classes.xIconContainer}>
							<i className={`ti ti-x ${classes.iconX}`}></i>
							<p>
								Współpraca&nbsp;<span className={classes.uppercaseBoldText}>online</span>
							</p>
						</div>
						<a href='#contact' className={classes.contactRef}>
							Umów się na&nbsp;<span className={classes.uppercaseBoldText}>&nbsp;bezpłatną&nbsp;</span>konsultację&nbsp;
						</a>
					</div>
				)}
				<div className={classes.plansRedirectContainer}>
					<div className={classes.plansRedirectText}>
						{width > 767 && width < 1200 && (
							<div className={classes.tabletFreeConsultationContainer}>
								<div className={classes.xIconContainer}>
									<i className={`ti ti-x ${classes.iconX}`}></i>
									<p>
										Plany&nbsp;<span className={classes.uppercaseBoldText}>treningowe</span>&nbsp;i&nbsp;
										<span className={classes.uppercaseBoldText}>żywieniowe</span>
									</p>
								</div>
								<div className={classes.xIconContainer}>
									<i className={`ti ti-x ${classes.iconX}`}></i>
									<p>
										Współpraca&nbsp;<span className={classes.uppercaseBoldText}>online</span>
									</p>
								</div>
								<a href='#contact' className={`${classes.tabletContactRef} ${classes.contactRef}`}>
									Umów się na&nbsp;<span className={classes.uppercaseBoldText}>&nbsp;bezpłatną&nbsp;</span>
									konsultację&nbsp;
								</a>
							</div>
						)}
						<a href='#plans' className={classes.checkOffer}>
							<p style={{ textTransform: 'capitalize' }}>poznaj</p>
							<p className={classes.uppercaseBoldText}>ofertę</p>
							<i className={`ti ti-arrow-down`}></i>
						</a>
					</div>
					{width > 1200 && (
						<div className={classes.desktopConsultationContainer}>
							<div className={classes.desktopConsultationTextContainer}>
								<p className={classes.desktopConsultationTrenerCredentials}>Andrzej Szpara</p>
								<div className={classes.xIconContainer}>
									<i className={`ti ti-x ${classes.iconX}`}></i>
									<p>
										Plany&nbsp;<span className={classes.uppercaseBoldText}>treningowe</span>&nbsp;i&nbsp;
										<span className={classes.uppercaseBoldText}>żywieniowe</span>
									</p>
								</div>
								<div className={classes.xIconContainer}>
									<i className={`ti ti-x ${classes.iconX}`}></i>
									<p>
										Współpraca&nbsp;<span className={classes.uppercaseBoldText}>online</span>
									</p>
								</div>
								<a href='#contact' className={classes.contactRef}>
									Umów się na&nbsp;<span className={classes.uppercaseBoldText}>bezpłatną</span>&nbsp;konsultację
								</a>
							</div>
							<div className={classes.desktopBarsImage}>
								<Image
									src={bars}
									alt='Obraz svg prezentujący żółte paski'
									style={{ objectFit: 'contain', objectPosition: 'center bottom' }}
									sizes='(max-width: 768px) 100vw, 33vw'
								/>
							</div>
						</div>
					)}
					<div className={classes.mainPhoto}>
						<Image
							src={mainPhoto}
							alt='Pozujący trener personalny'
							fill
							style={{ objectFit: 'contain', objectPosition: 'right' }}
							sizes='(max-width: 768px) 100vw, 33vw'
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default MainPage;
