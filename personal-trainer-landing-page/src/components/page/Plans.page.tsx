import classes from '../css/Plans.page.module.css';
import SubHeading from '../SubHeading';
import Image from 'next/image';
import train from '../../../public/trening.webp';
import diet from '../../../public/dieta.webp'

function PlansPage() {
	return (
		<section id='plans'>
			<SubHeading title='plany' subtitle='plany' />
			<div className={classes.trainWrapper}>
				<div className={classes.photoContainer}>
					<h2 className={classes.trainPlan}>trening</h2>
					<Image src={train} alt='Mężczyzna stojący ze sztangą' loading='lazy'/>
				</div>
				<div className={classes.trainInfo}>
					<h3>Gotowy na zmiany?</h3>
					<p>
						Jeśli jesteś gotowy na rewolucję w swoim życiu i chcesz zostać najlepszą wersję siebie, to jestem tu, by Ci
						pomóc! Jako trener, jestem twoim przewodnikiem w drodze do lepszej kondycji, zdrowia i samopoczucia.
					</p>
					<h3 style={{ marginTop: '10px' }}>Dlaczego warto trenować z trenerem personalnym? </h3>
					<p>
						<span className={classes.trainInfoListTitle}>Indywidualizm:</span> Twój plan treningowy będzie idealnie
						dopasowany do Twoich celów, umiejętności i ograniczeń.
					</p>
					<p>
						<span className={classes.trainInfoListTitle}>Motywacja:</span> Zawsze będę tu, by Cię wspierać i dodawać
						energii do treningów, nawet w tych chwilach, gdy trudno jest ruszyć się z miejsca.
					</p>
					<p>
						<span className={classes.trainInfoListTitle}>Motywacja:</span> Dzięki profesjonalnemu podejściu i wiedzy,
						osiągniesz lepsze wyniki w krótszym czasie.
					</p>
					<p>
						<span className={classes.trainInfoListTitle}>Bezpieczeństwo:</span> Unikniesz kontuzji, trenując pod okiem
						doświadczonego trenera.
					</p>
					<p>
						<span className={classes.trainInfoListTitle}>Motywacja:</span> Możemy dostosowywać treningi, by nie było
						nudy i monotonii - każdy dzień może być inny!
					</p>
				</div>
			</div>
			<div className={classes.dietWrapper}>
				<div className={classes.dietInfo}>
					<h3>Dlaczego warto skorzystać z konsultacji dietetycznych?</h3>
					<p>
						<span className={classes.dietInfoListTitle}>Indywidualizm:</span> Twój jadłospis będzie stworzony specjalnie
						dla Ciebie, uwzględniając Twoje cele, preferencje i potrzeby żywieniowe.
					</p>
					<p>
						<span className={classes.dietInfoListTitle}>Zdrowie i energia:</span> Odpowiednie odżywianie wpływa nie
						tylko na sylwetkę, ale także na Twoje ogólne samopoczucie, energię i zdrowie.
					</p>
					<p>
						<span className={classes.dietInfoListTitle}>Kontrola wagi:</span> Razem ustalimy, jakie ilości i rodzaje
						jedzenia pomogą Ci osiągnąć lub utrzymać wymarzoną wagę.
					</p>
					<p>
						<span className={classes.dietInfoListTitle}>Wsparcie:</span> Jako trener, jestem tutaj, by Cię motywować,
						śledzić Twoje postępy i odpowiedzieć na wszystkie pytania.
					</p>
					<p>
						<span className={classes.trainInfoListTitle}>Uniknij błędów:</span> Dzięki profesjonalnym wskazówkom
						unikniesz powszechnych błędów żywieniowych.
					</p>
					<p>
						<span className={classes.trainInfoListTitle}>Kulinarna różnorodność:</span> Twój jadłospis będzie smaczny i różnorodny, bez nudzenia się tą samą
						dietą.
					</p>
				</div>
				<div className={classes.photoContainer}>
					<h2 className={classes.dietPlan}>dieta</h2>
					<Image src={diet} alt='Owsianka ze szklanką mleka obok' loading='lazy'/>
				</div>
			</div>
		</section>
	);
}

export default PlansPage;
