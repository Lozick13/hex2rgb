import classes from './rgb.module.css';

export const RGB = ({ text }: { text: string | null }) => {
	return (
		<>
			<div className={classes['container']}>
				<span className={classes['container__text']}>
					{text === null ? 'Введите HEX' : text}
				</span>
			</div>
		</>
	);
};
