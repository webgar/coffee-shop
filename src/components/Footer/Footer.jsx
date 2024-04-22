import Beans from '../Beans/Beans'
import Navigation from '../Navigation/Navigation'
import styles from './Footer.module.css'

const Footer = () => {
	return (
		<footer className={styles.footer}>
			<Navigation />
			<Beans />
		</footer>
	)
}

export default Footer
