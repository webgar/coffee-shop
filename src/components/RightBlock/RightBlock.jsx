import AboutTitle from '../AboutTitle/AboutTitle'
import styles from './RightBlock.module.css'

export const RightBlock = ({children}) => {
	return (
		<div className={styles.rightBlock}>
						<AboutTitle>{children}</AboutTitle>
						<p>
							Extremity sweetness difficult behaviour he of. On disposal of as
							landlord horrible.
						</p>
						<p>
							Afraid at highly months do things on at. Situation recommend
							objection do intention so questions.
						</p>
						<p>
							As greatly removed calling pleased improve an. Last ask him old
							feel met spot shy want. Children me laughing we prospect answered
							followed. At it went is song that held help face.
						</p>
					</div>
	)
}
