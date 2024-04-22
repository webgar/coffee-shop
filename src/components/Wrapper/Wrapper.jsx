import classNames from 'classnames'
import styles from './Wrapper.module.css'

const Wrapper = ({ children, aboutClasses }) => {
	const classes = classNames(styles.wrapper, aboutClasses)
	return <section className={classes}>{children}</section>
}

export default Wrapper
