import { Link, useLocation } from 'react-router-dom'
import Card from '../Card/Card'
import styles from './CardList.module.css'

const CardList = ({ data, path }) => {
	const location = useLocation()

	return (
		<div className={styles.cardList}>
			{data.map(card => (
				<Link
					key={card.id}
					to={`${location.pathname}/${card.id}`}
					className={styles.link}
				>
					<Card
						path={path}
						key={card.id}
						{...card}						
					/>
				</Link>
			))}
		</div>
	)
}

export default CardList
