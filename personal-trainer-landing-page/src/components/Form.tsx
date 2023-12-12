'use client';
import { useEffect, useState } from 'react';
import { useForm } from '@formspree/react';
import classes from './css/Form.module.css';
import toast from 'react-hot-toast';

function Form() {
	const [state, handleSubmit] = useForm(`${process.env.NEXT_PUBLIC_FORMSPREE_KEY!}`);
	const [canSendEmail, setCanSendEmail] = useState<boolean>(true);
	const [formData, setFormData] = useState({
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prevData => ({ ...prevData, [name]: value }));
	};

	useEffect(() => {
		if (state.succeeded) {
			setFormData({ email: '', subject: '', message: '' });
			toast.success('Pomyślnie wysłano wiadomość!', {
				style: {
					background: '#2e2e2e',
					color: '#e4e4e4',
				},
			});

			setCanSendEmail(false);

			setTimeout(() => {
				setCanSendEmail(true);
			}, 10000);
		}
	}, [state.succeeded]);

	useEffect(() => {
		if (state.errors) {
			setFormData({ email: '', subject: '', message: '' });
			toast.error('Wystąpił problem z wysyłaniem wiadomości!', {
				style: {
					background: '#2e2e2e',
					color: '#e4e4e4',
				},
			});

			setCanSendEmail(false);

			setTimeout(() => {
				setCanSendEmail(true);
			}, 10000);
		}
	}, [state.errors]);

	return (
		<form className={classes.formContainer} onSubmit={handleSubmit}>
			<p className={classes.formTitleText}>Napisz już teraz!</p>

			<div className={classes.inputContainer}>
				<label className={classes.inputLabel}>Email</label>
				<input type='email' name='email' value={formData.email} onChange={handleChange} className={classes.input} />
			</div>

			<div className={classes.inputContainer}>
				<label className={classes.inputLabel}>Temat</label>
				<input type='text' name='subject' value={formData.subject} onChange={handleChange} className={classes.input} />
			</div>

			<div className={classes.inputContainer}>
				<label className={classes.inputLabel}>Treść</label>
				<textarea
					name='message'
					value={formData.message}
					onChange={handleChange}
					className={`${classes.input} ${classes.formTextarea}`}
				/>
			</div>

			{canSendEmail ? (
				<button type='submit' className={classes.formButton}>
					Wyślij
				</button>
			) : (
				<button disabled={true} className={classes.disabledFormButton}>
					Wyślij
				</button>
			)}
		</form>
	);
}

export default Form;
