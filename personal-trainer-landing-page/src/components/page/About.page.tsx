'use client';
import classes from '../css/About.page.module.css';
import SubHeading from '../SubHeading';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import car0 from '../../../public/car0.webp';
import car1 from '../../../public/car1.webp';
import car2 from '../../../public/car2.webp';
import car3 from '../../../public/car3.webp';
import Image from 'next/image';
import { Carousel } from 'react-responsive-carousel';

interface CustomArrowProps {
	onClick: () => void;
}

const CustomLeftArrow = ({ onClick }: CustomArrowProps) => {
	return (
		<button className={`${classes.customArrow} ${classes.customLeftArrow}`} onClick={onClick}>
			<i className='ti ti-chevron-left'></i>
		</button>
	);
};

const CustomRightArrow = ({ onClick }: CustomArrowProps) => {
	return (
		<button className={`${classes.customArrow} ${classes.customRightArrow}`} onClick={onClick}>
			<i className='ti ti-chevron-right'></i>
		</button>
	);
};

function AboutPage() {
	return (
		<section id='about' style={{marginTop: '110px'}}>
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
				<div className={classes.carouselWrapper}>
					<a target='_blank' href='https://www.instagram.com/andrzejszpara/' className={classes.carouselTitle}>
						INSTAGRAM
					</a>
					<Carousel
						autoPlay
						infiniteLoop
						showStatus={false}
						width={'100%'}
						dynamicHeight={false}
						showThumbs={false}
						renderArrowPrev={(onClickHandler, hasPrev, label) =>
							hasPrev && <CustomLeftArrow onClick={onClickHandler} />
						}
						renderArrowNext={(onClickHandler, hasNext, label) =>
							hasNext && <CustomRightArrow onClick={onClickHandler} />
						}
						renderIndicator={(onClickHandler, isSelected, index, label) => {
							const indicatorClasses = isSelected ? classes.selectedIndicator : classes.unselectedIndicator;
							return (
								<li
									className={indicatorClasses}
									onClick={onClickHandler}
									onKeyDown={onClickHandler}
									role='button'
									tabIndex={0}
									title={`${label || 'Slide'} ${index + 1}`}
									aria-label={`${label || 'Slide'} ${index + 1}`}
								/>
							);
						}}>
						<div className={classes.carouselPhotoContainer}>
							<Image
								src={car0}
								alt='Dwóch trenerów stojących obok siebie'
								fill
								style={{ objectFit: 'cover' }}
								loading='lazy'
								sizes='(max-width: 768px) 100vw, 33vw'
							/>
						</div>
						<div className={classes.carouselPhotoContainer}>
							<Image
								src={car1}
								alt='Trener personalny na stoku narciarskim'
								fill
								style={{ objectFit: 'cover' }}
								loading='lazy'
								sizes='(max-width: 768px) 100vw, 33vw'
							/>
						</div>
						<div className={classes.carouselPhotoContainer}>
							<Image
								src={car2}
								alt='Zdjęcie roweru na molo'
								fill
								style={{ objectFit: 'cover' }}
								loading='lazy'
								sizes='(max-width: 768px) 100vw, 33vw'
							/>
						</div>
						<div className={classes.carouselPhotoContainer}>
							<Image
								src={car3}
								alt='Trener personalny pozujący na siłowni'
								fill
								style={{ objectFit: 'cover' }}
								loading='lazy'
								sizes='(max-width: 768px) 100vw, 33vw'
							/>
						</div>
					</Carousel>
				</div>
			</div>
		</section>
	);
}

export default AboutPage;
