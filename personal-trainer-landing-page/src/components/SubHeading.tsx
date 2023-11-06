import classes from './css/SubHeading.module.css';

interface SubHeadingProps {
	title: string;
	subtitle: string;
}

function SubHeading({ title, subtitle }: SubHeadingProps) {
	return (
		<div className={classes.headingContainer}>
			<h2 className={classes.headingText}>{title}</h2>
			<h3 className={classes.subHeadingTextBottom}>{subtitle}</h3>
		</div>
	);
}

export default SubHeading;
