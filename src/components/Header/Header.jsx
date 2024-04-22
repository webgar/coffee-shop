import classNames from 'classnames'
import Navigation from '../Navigation/Navigation'
import styles from './Header.module.css'
const Header = ({ additionalClass, children }) => {
	const beansClasses = classNames(styles.headerTitle, additionalClass)
	return (
		<div className={styles.header}>
			<Navigation />
			<h1 className={beansClasses}>{children}</h1>
		</div>
	)
}

export default Header
