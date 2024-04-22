import styles from './Description.module.css'

const Description = () => {
	return (
		<div className={styles.description}>
			<p>We makes every day full of energy and taste</p>
			<p>Want to try our beans?</p>
			<a href='#' className={styles.linkMore}>
				More
			</a>
		</div>
	)
}

export default Description
