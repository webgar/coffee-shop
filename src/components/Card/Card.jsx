import { useContext } from 'react'
import { CardContext } from '../context/Context'
import styles from './Card.module.css'

function Card({ id, src, title, country, price }) {
	const { handleCardClick } = useContext(CardContext)
	return (
		<div className={styles.card} onClick={() => handleCardClick(id)}>
			<div className={styles.cardImg}>
				<img src={src} alt={title} />
			</div>
			<div className={styles.cardInfo}>
				<span className={styles.cardTitle}>{title}</span>
				<span className={styles.cardCountry}>{country}</span>
				<span className={styles.cardPrice}>${price}</span>
			</div>
		</div>
	)
}

export default Card
