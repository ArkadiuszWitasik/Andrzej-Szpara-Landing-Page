import classes from './css/Heading.module.css';

interface HeadingProps {
	title: string;
	subtitle: string;
}

function Heading({ title, subtitle }: HeadingProps) {
	return (
		<div className={classes.headingContainer}>
			<h2 className={classes.headingText}>{title}</h2>
			<h3 className={classes.subHeadingTextBottom}>{subtitle}</h3>
		</div>
	);
}

export default Heading;
