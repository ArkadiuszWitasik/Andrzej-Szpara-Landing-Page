import classes from './css/Heading.module.css';

interface HeadingProps {
	title: string;
}

function Heading({ title }: HeadingProps) {
	return (
		<>
			<h2 className={classes.headingText}>{title}</h2>
		</>
	);
}

export default Heading;
