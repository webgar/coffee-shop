import image from '../assets/img/for-you/about-our.png'
import AboutPic from '../components/AboutPic/AboutPic'
import CardList from '../components/CardList/CardList'
import Header from '../components/Header/Header'
import { RightBlock } from '../components/RightBlock/RightBlock'
import Wrapper from '../components/Wrapper/Wrapper'
import { data } from '../data/data'
import styles from './ForYou.module.css'

const ForYou = ({ onCardClick }) => {
	return (
		<>
			<header className={styles.forYouHeader}>
				<Header
					additionalClass={styles.headerTitle}
					children={`For your pleasure`}
				/>
			</header>
			<main>
				<Wrapper aboutClasses={styles.forYouWrapper}>
					<AboutPic src={image} alt='coffee' width='272px' height='355px' />
					<RightBlock>About our goods</RightBlock>
				</Wrapper>
				<section className={styles.forYouSection}>
					<CardList onCardClick={onCardClick} data={data} />
				</section>
			</main>
		</>
	)
}

export default ForYou
