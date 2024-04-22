import Header from '../Header/Header'
import styles from './OurHeader.module.css'
const OurHeader = () => {
	return (
		<header className={styles.ourHeader}>
			<Header additionalClass={styles.headerTitle} children={`Our Coffee`} />
		</header>
	)
}

export default OurHeader
