import { useState } from 'react';
import { HEX } from '../HEX';
import { RGB } from '../RGB';
import classes from './hex2rgb.module.css';

interface IStyles {
	backgroundColor: string;
}

export const HEX2RGB = () => {
	const [background, setBackground] = useState<string>('#ffffff');
	const [colorRGB, setColorRGB] = useState<string>('Введите HEX');
	const styles: IStyles = { backgroundColor: background };

	// Форматирование HEX в RGB
	const formattingColor = (color: string): string => {
		const colorArray: RegExpMatchArray | null = color.match(/\w{2}/g);

		if (colorArray) {
			const r: number = parseInt(colorArray[0], 16);
			const g: number = parseInt(colorArray[1], 16);
			const b: number = parseInt(colorArray[2], 16);

			if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
				return `rgb(${r}, ${g}, ${b})`;
			}
		}

		return 'ОШИБКА!!';
	};

	// Проверка на валидность HEX и его установка
	const validateColor = (color: string): void => {
		const regex: RegExp = /^#([0-9A-Fa-f]{6})$/;

		setColorRGB(formattingColor(color));

		if (regex.test(color)) {
			setBackground(color);
			return;
		}

		setBackground('#ff0000');
	};

	return (
		<>
			<div className={classes['container']} style={styles}>
				<HEX setColor={validateColor}></HEX>
				<RGB text={colorRGB}></RGB>
			</div>
		</>
	);
};
