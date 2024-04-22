import { LazyLoadImage } from 'react-lazy-load-image-component'
import styles from './AboutPic.module.css'
const AboutPic = ({ src, alt, width, height }) => {
	return (
		<>
			<LazyLoadImage
				className={styles.aboutPic}
				alt={alt}
				src={src}
				width={width}
				height={height}
			/>
		</>
	)
}

export default AboutPic
