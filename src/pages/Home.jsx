import { Link } from 'react-router-dom'
import AboutTitle from '../components/AboutTitle/AboutTitle'
import Beans from '../components/Beans/Beans'
import Card from '../components/Card/Card'
import Description from '../components/Description/Description'
import Header from '../components/Header/Header'
import styles from './Home.module.css'

const Home = ({ data, onCardClick }) => {
	const recommended = data.filter(item => item.recommended)
	return (
		<>
			<header className={styles.homeHeader}>
				
				<Header
					additionalClass={styles.homeHeaderTitle}
					children={`Everything You Love About Coffee`}
				/>
				<Beans additionalClass={styles.homeBeans} />
				<Description />
			</header>
			<main>
				<section className={styles.about}>
					<AboutTitle>Our Coffee</AboutTitle>
					<p>
						Extremity sweetness difficult behaviour he of. On disposal of as
						landlord horrible. Afraid at highly months do things on at.
						Situation recommend objection do intention so questions. As greatly
						removed calling pleased improve an. Last ask him cold feel met spot
						shy want. Children me laughing we prospect answered followed. At it
						went is song that held help face
					</p>
					<p>
						Now residence dashwoods she excellent you. Shade being under his bed
						her, Much read on as draw. Blessing for ignorant exercise any
						yourself unpacked. Pleasant horrible but confined day end marriage.
						Eagerness furniture set preserved far recommend. Did even but nor
						are most gave hope. Secure active living depend son repair day
						ladies now.
					</p>
				</section>
				<section className={styles.ourBest}>
					<h2 className={styles.ourBestTitle}>Our best</h2>
					<div className={styles.ourBestCards}>
						{recommended.map(card => (
							<Link
								to={`/about/${card.id}`}
								key={card.id}
								className={styles.link}
							>
								<Card key={card.id} {...card} onCardClick={onCardClick} />
							</Link>
						))}
					</div>
				</section>
			</main>
		</>
	)
}
export default Home
