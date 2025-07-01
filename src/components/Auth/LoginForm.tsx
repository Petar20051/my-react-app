import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';
import {FormContainer, FormTitle, StyledForm, Input, Button, ErrorText, SwitchLink} from './AuthStyles';
import {LoginSchema, type LoginData} from '../../types/Auth';

const LoginForm = () => {
	const {login} = useAuth();
	const navigate = useNavigate();
	const [formData, setFormData] = useState<LoginData>({email: '', password: ''});
	const [error, setError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, [e.target.name]: e.target.value});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const result = LoginSchema.safeParse(formData);
		if (!result.success) {
			setError(result.error.issues[0].message);
			return;
		}

		const success = login(formData.email, formData.password);
		if (!success) return setError('Invalid credentials');

		setError('');
		navigate('/');
	};

	return (
		<FormContainer>
			<FormTitle>Login</FormTitle>
			<StyledForm onSubmit={handleSubmit}>
				<Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
				<Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
				{error && <ErrorText>{error}</ErrorText>}
				<Button type="submit">Login</Button>
			</StyledForm>
			<SwitchLink>
				Don’t have an account? <Link to="/signup">Sign up</Link>
			</SwitchLink>
		</FormContainer>
	);
};

export default LoginForm;
