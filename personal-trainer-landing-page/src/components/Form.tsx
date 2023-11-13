import { useState } from 'react';
import classes from './css/Form.module.css';

function Form() {
	const [formData, setFormData] = useState({
		email: '',
		subject: '',
		message: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData(prevData => ({ ...prevData, [name]: value }));
	};

	const handleSendForm = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log('Wysłano formularz:', formData);
	};

	return (
		<form className={classes.formContainer} onSubmit={handleSendForm}>
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
				<textarea name='message' value={formData.message} onChange={handleChange} className={classes.input} />
			</div>

			<button type='submit' className={classes.formButton}>
				Wyślij
			</button>
		</form>
	);
}

export default Form;
