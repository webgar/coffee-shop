import {Link} from 'react-router-dom'
import styles from './Description.module.css'

const Description = () => {
	return (
		<div className={styles.description}>
			<p>We makes every day full of energy and taste</p>
			<p>Want to try our beans?</p>
			<Link to='/for-you' className={styles.linkMore}>
				More
			</Link>
		</div>
	)
}

export default Description
