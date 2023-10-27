import Navbar from '@/components/Navbar';
import AboutPage from '@/components/page/About.page';
import ContactPage from '@/components/page/Contact.page';
import MainPage from '@/components/page/Main.page';
import PlansPage from '@/components/page/Plans.page';

function Home() {
	return (
		<>
			<Navbar />
			<MainPage />
			<PlansPage />
			<AboutPage />
			<ContactPage />
		</>
	);
}

export default Home;
