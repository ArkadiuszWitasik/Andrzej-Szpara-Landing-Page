import classes from '../css/Plans.page.module.css';
import SubHeading from '../SubHeading';
import Train from '../../../public/trening.webp';
import Diet from '../../../public/dieta.webp';
import Image from 'next/image';

function PlansPage() {
	return (
		<section id='plans'>
			<SubHeading title='plany' subtitle='plany' />
			<div className={classes.offersContainer}>
				<div className={classes.trainOfferContainer}>
					<div className={classes.imageContainer}>
						<Image src={Train} alt='' fill style={{ objectFit: 'contain', objectPosition: 'top' }} sizes='100vw' />
					</div>
					<div>
						<p className={`${classes.offerTitle} ${classes.trainOfferTitleOffset}`}>TRENING</p>
						<ul className={classes.offerList}>
							<li className={classes.offerListItem}>
								<i className={`ti ti-x ${classes.iconX}`}></i>
								<p>
									<span className={classes.offerListItemTitle}>Indywidualizm:</span> Twój plan treningowy będzie
									idealnie dopasowany do Twoich celów, umiejętności i ograniczeń.
								</p>
							</li>
							<li className={classes.offerListItem}>
								<i className={`ti ti-x ${classes.iconX}`}></i>
								<p>
									<span className={classes.offerListItemTitle}>Motywacja:</span> Zawsze będę tu, by Cię wspierać i
									dodawać energii do treningów, nawet w tych chwilach, gdy trudno jest ruszyć się z miejsca.
								</p>
							</li>
							<li className={classes.offerListItem}>
								<i className={`ti ti-x ${classes.iconX}`}></i>
								<p>
									<span className={classes.offerListItemTitle}>Efektywność:</span> Dzięki profesjonalnemu podejściu i
									wiedzy, osiągniesz lepsze wyniki w krótszym czasie.
								</p>
							</li>
							<li className={classes.offerListItem}>
								<i className={`ti ti-x ${classes.iconX}`}></i>
								<p>
									<span className={classes.offerListItemTitle}>Bezpieczeństwo:</span> Unikniesz kontuzji, trenując pod
									okiem doświadczonego trenera.
								</p>
							</li>
							<li className={classes.offerListItem}>
								<i className={`ti ti-x ${classes.iconX}`}></i>
								<p>
									<span className={classes.offerListItemTitle}>Zróżnicowanie:</span> Możemy dostosowywać treningi, by
									nie było nudy i monotonii - każdy dzień może być inny!
								</p>
							</li>
						</ul>
					</div>
				</div>
				<div className={classes.dietOfferContainer}>
					<div className={classes.dietRightAlign}>
						<p className={`${classes.offerTitle} ${classes.dietOfferTitleOffset}`}>DIETA</p>
						<ul className={classes.offerList}>
							<li className={classes.offerListItem}>
								<i className={`ti ti-x ${classes.iconX}`}></i>
								<p>
									<span className={classes.offerListItemTitle}>Indywidualizm:</span> Twój jadłospis będzie stworzony
									specjalnie dla Ciebie, uwzględniając Twoje cele, preferencje i potrzeby żywieniowe.
								</p>
							</li>
							<li className={classes.offerListItem}>
								<i className={`ti ti-x ${classes.iconX}`}></i>
								<p>
									<span className={classes.offerListItemTitle}>Zdrowie i energia:</span> Odpowiednie odżywianie wpływa
									nie tylko na sylwetkę, ale także na Twoje ogólne samopoczucie, energię i zdrowie.
								</p>
							</li>
							<li className={classes.offerListItem}>
								<i className={`ti ti-x ${classes.iconX}`}></i>
								<p>
									<span className={classes.offerListItemTitle}>Kontrola wagi:</span> Razem ustalimy, jakie ilości i
									rodzaje jedzenia pomogą Ci osiągnąć lub utrzymać wymarzoną wagę.
								</p>
							</li>
							<li className={classes.offerListItem}>
								<i className={`ti ti-x ${classes.iconX}`}></i>
								<p>
									<span className={classes.offerListItemTitle}>Wsparcie:</span> Jako trener, jestem tutaj, by Cię
									motywować, śledzić Twoje postępy i odpowiedzieć na wszystkie pytania.
								</p>
							</li>
							<li className={classes.offerListItem}>
								<i className={`ti ti-x ${classes.iconX}`}></i>
								<p>
									<span className={classes.offerListItemTitle}>Uniknij błędów:</span> Dzięki profesjonalnym wskazówkom
									unikniesz powszechnych błędów żywieniowych.
								</p>
							</li>
							<li className={classes.offerListItem}>
								<i className={`ti ti-x ${classes.iconX}`}></i>
								<p>
									<span className={classes.offerListItemTitle}>Kulinarna różnorodność:</span> Twój jadłospis będzie
									smaczny i różnorodny, bez nudzenia się tą samą dietą.
								</p>
							</li>
							<li className={classes.offerListItem}>
								<i className={`ti ti-x ${classes.iconX}`}></i>
								<p>
									<span className={classes.offerListItemTitle}>Niezależnie od Twoich celów</span> - od chudnięcia, przez
									budowanie masy mięśniowej, po poprawę ogólnego zdrowi - mogę Ci pomóc osiągnąć je poprzez odpowiednie
									odżywianie.
								</p>
							</li>
						</ul>
					</div>
					<div className={classes.imageContainer}>
						<Image src={Diet} alt='' fill style={{ objectFit: 'contain', objectPosition: 'top' }} sizes='100vw' />
					</div>
				</div>
			</div>
		</section>
	);
}

export default PlansPage;
