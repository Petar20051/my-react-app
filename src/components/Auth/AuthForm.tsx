import {FormContainer, FormTitle, StyledForm, Input, Button, ErrorText, SwitchLink} from './AuthStyles';
import {Link, useNavigate} from 'react-router-dom';
import {useAuthForm} from '../../hooks/useAuthForm';
import type {AuthFormProps} from '../../types/formProps';

export function AuthForm<T extends Record<string, string>>({
	title,
	switchText,
	switchLink,
	switchLinkText,
	initialData,
	schema,
	onSubmit,
	fields,
}: AuthFormProps<T>) {
	const navigate = useNavigate();
	const {formData, error, handleChange, validateAndSubmit} = useAuthForm(initialData, schema, onSubmit);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		const success = validateAndSubmit();
		if (success) navigate('/');
	};

	return (
		<FormContainer>
			<FormTitle>{title}</FormTitle>
			<StyledForm onSubmit={handleSubmit}>
				{fields.map((field) => (
					<Input
						key={field.name as string}
						type={field.type}
						name={field.name as string}
						placeholder={field.placeholder}
						value={formData[field.name]}
						onChange={handleChange}
					/>
				))}
				{error && <ErrorText>{error}</ErrorText>}
				<Button type="submit">{title}</Button>
			</StyledForm>
			<SwitchLink>
				{switchText} <Link to={switchLink}>{switchLinkText}</Link>
			</SwitchLink>
		</FormContainer>
	);
}
