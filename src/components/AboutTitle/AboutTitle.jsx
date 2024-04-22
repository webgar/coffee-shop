import Beans from '../Beans/Beans'
import styles from './AboutTitle.module.css'

const AboutTitle = ({ children }) => {
	return (
		<>
			<h2 className={styles.aboutTitle}>{children}</h2>
			<Beans />
		</>
	)
}

export default AboutTitle
