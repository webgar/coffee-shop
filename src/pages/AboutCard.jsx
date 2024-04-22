import { useParams } from 'react-router-dom'
import AboutPic from '../components/AboutPic/AboutPic'
import AboutTitle from '../components/AboutTitle/AboutTitle'
import OurHeader from '../components/OurHeader/OurHeader'
import Wrapper from '../components/Wrapper/Wrapper'
import styles from './AboutCard.module.css'

const AboutCard = ({ data }) => {
	const { id } = useParams() 

	const card = data.find(card => card.id === parseInt(id))
	if (!card) return null
	return (
		<>
			<OurHeader />
			<main>
				<Wrapper aboutClasses={styles.aboutItWrapper}>
					<AboutPic src={card.src} alt='coffee' width='329px' height='355px' />
					<div className={styles.rightBlock}>
						<AboutTitle>About our beans</AboutTitle>
						<div className={styles.countryInfo}>
							<span>Country: </span>
							<span>{card.country}</span>
						</div>
						<p className={styles.description}>
							<span>Description: </span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</p>
						<div className={styles.priceInfo}>
							<span>Price: </span>
							<span>{card.price}$</span>
						</div>
					</div>
				</Wrapper>
			</main>
		</>
	)
}

export default AboutCard
