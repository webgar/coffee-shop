import { Link } from 'react-router-dom'
import styles from './Card.module.css'

function Card({ id, src, title, country, price, onCardClick }) {
	return (
		<Link
			to={`/coffee/${id}`}
			className={styles.link}
			onClick={() => onCardClick(id)}
		>
			<div className={styles.card}>
				<div className={styles.cardImg}>
					<img src={src} alt={title} />
				</div>
				<div className={styles.cardInfo}>
					<span className={styles.cardTitle}>{title}</span>
					<span className={styles.cardCountry}>{country}</span>
					<span className={styles.cardPrice}>${price}</span>
				</div>
			</div>
		</Link>
	)
}

export default Card
