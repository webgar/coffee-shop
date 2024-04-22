import AboutPic from '../AboutPic/AboutPic'
import AboutTitle from '../AboutTitle/AboutTitle'
import Wrapper from '../Wrapper/Wrapper'
import styles from './AboutCard.module.css'

const AboutCard = ({ data, cardId }) => {
	const selectedCard = data.find(card => card.id === cardId)

	if (!selectedCard) return null
	return (
		<>
			<Wrapper aboutClasses={styles.aboutItWrapper}>
				<AboutPic src={selectedCard.src} alt='coffee' width='329px' height='355px' />
				<div className={styles.rightBlock}>
					<AboutTitle>About our beans</AboutTitle>
					<div className={styles.countryInfo}>
						<span>Country: </span>
						<span>{selectedCard.country}</span>
					</div>
					<p className={styles.description}>
						<span>Description: </span>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat.
					</p>
					<div className={styles.priceInfo}>
						<span>Price: </span>
						<span>{selectedCard.price}$</span>
					</div>
				</div>
			</Wrapper>
		</>
	)
}

export default AboutCard
