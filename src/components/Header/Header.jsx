import { useState } from 'react'
import classNames from 'classnames'
import { GiHamburgerMenu } from 'react-icons/gi'
import Navigation from '../Navigation/Navigation'
import styles from './Header.module.css'
const Header = ({ additionalClass, children }) => {
	const [isOpen, setIsOpen] = useState()
	const beansClasses = classNames(styles.headerTitle, additionalClass)
	return (
		<div className={styles.headerWrapper} >
			<button className={styles.menuButton} onClick={() => setIsOpen(!isOpen)}>
				<GiHamburgerMenu className={styles.hamburger} />
			</button>
			<Navigation isOpen={isOpen} />
			<h1 className={beansClasses}>{children}</h1>
		</div>
	)
}

export default Header
