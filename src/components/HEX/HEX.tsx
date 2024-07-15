import { useState } from 'react';
import classes from './hex.module.css';

interface IProps {
	setColor: (color: string) => void;
}
interface IFormData {
	hex: string;
}

export const HEX = ({ setColor }: IProps) => {
	const [form, setForm] = useState<IFormData>({
		hex: '',
	});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setColor(form.hex);
	};

	const handleHexChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		interface IData {
			name: string;
			value: string;
		}

		const { name, value }: IData = e.target;

		setForm(prevForm => ({ ...prevForm, [name]: value }));
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					id='hex'
					name='hex'
					onChange={handleHexChange}
					value={form.hex}
					className={classes['input']}
					type='text'
					required
				/>
			</form>
		</>
	);
};
