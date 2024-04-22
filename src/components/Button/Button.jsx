import classNames from 'classnames'
import styles from './Button.module.css'
const Button = ({ filterBtn, child, onClick }) => {
	const classes = classNames(styles.button, filterBtn)
	return (
		<button className={classes} onClick={onClick} type='button'>
			{child}
		</button>
	)
}

export default Button
