import { useEffect, useState } from 'react'

import image from '../assets/img/our/about-our-beans.jpg'
import AboutPic from '../components/AboutPic/AboutPic'

import Button from '../components/Button/Button'
import CardList from '../components/CardList/CardList'
import OurHeader from '../components/OurHeader/OurHeader'
import Wrapper from '../components/Wrapper/Wrapper'
import styles from './OurCoffee.module.css'
import { RightBlock } from '../components/RightBlock/RightBlock'
const OurCoffee = ({ data, onCardClick }) => {
	const [searchTerm, setSearchTerm] = useState('')
	const [filteredCards, setFilteredCards] = useState(data)
	const [originalData] = useState(data)

	useEffect(() => {
		setFilteredCards(data)
	}, [data])
	const handleInputChange = e => {
		const value = e.target.value
		setSearchTerm(value)
		const filteredCards = data.filter(card =>
			card.title.toLowerCase().includes(value.toLowerCase())
		)
		setFilteredCards(filteredCards)
	}
	const handleFilterButtonClick = country => {
		let updatedFilteredCards = originalData.filter(
			card => card.country === country
		)
		const isSameFilter =
			JSON.stringify(updatedFilteredCards) === JSON.stringify(filteredCards)
		if (isSameFilter) {
			setFilteredCards(originalData)
		} else {
			setFilteredCards(updatedFilteredCards)
		}
	}

	return (
		<>
			<OurHeader />
			<main>
				<Wrapper aboutClasses={styles.aboutWrapper}>
					<AboutPic src={image} alt='girl' width='272px' height='355px' />
					<RightBlock>About our beans</RightBlock>
				</Wrapper>

				<section className={styles.filterBlock}>
					<div className={styles.inputWrapper}>
						<span className={styles.inputLabel}>Lookiing for</span>
						<input
							type='text'
							value={searchTerm}
							onChange={handleInputChange}
							placeholder='start typing here...'
						/>
					</div>
					<div className={styles.buttonsBlock}>
						<span className={styles.buttonsLabel}>Or filter</span>
						<div className={styles.buttonsWrapper}>
							<Button
								filterBtn={styles.filterBtn}
								child={'Brazil'}
								onClick={() => handleFilterButtonClick('Brazil')}
							/>
							<Button
								child={'Kenya'}
								onClick={() => handleFilterButtonClick('Kenya')}
							/>
							<Button
								filterBtn={styles.filterBtn2}
								child={'Columbia'}
								onClick={() => handleFilterButtonClick('Columbia')}
							/>
						</div>
					</div>
				</section>
				<section className={styles.cardSection}>
					<CardList
						data={filteredCards}
						onCardClick={onCardClick}
					/>
				</section>
			</main>
		</>
	)
}

export default OurCoffee
