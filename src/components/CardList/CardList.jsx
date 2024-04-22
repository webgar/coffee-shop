import Card from '../Card/Card'
import styles from './CardList.module.css'

const CardList = ({ data, onCardClick }) => {
	return (
		<div className={styles.cardList}>
			{data.map(item => (
				<Card
					key={item.id}
					{...item}
					onCardClick={() => onCardClick(item.id)}
				/>
			))}
		</div>
	)
}

export default CardList
