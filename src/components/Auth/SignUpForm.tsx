import {useState} from 'react';
import {useNavigate, Link} from 'react-router-dom';
import {useAuth} from '../../context/AuthContext';
import {FormContainer, FormTitle, StyledForm, Input, Button, ErrorText, SwitchLink} from './AuthStyles';
import {SignUpSchema, type SignUpData} from '../../types/Auth';

const SignupForm = () => {
	const {signup} = useAuth();
	const navigate = useNavigate();
	const [formData, setFormData] = useState<SignUpData>({
		username: '',
		email: '',
		password: '',
	});
	const [error, setError] = useState('');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setFormData({...formData, [e.target.name]: e.target.value});

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		const result = SignUpSchema.safeParse(formData);
		if (!result.success) {
			setError(result.error.issues[0].message);
			return;
		}

		signup(formData);
		navigate('/');
	};

	return (
		<FormContainer>
			<FormTitle>Sign Up</FormTitle>
			<StyledForm onSubmit={handleSubmit}>
				<Input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
				<Input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
				<Input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
				{error && <ErrorText>{error}</ErrorText>}
				<Button type="submit">Sign Up</Button>
			</StyledForm>
			<SwitchLink>
				Already have an account? <Link to="/login">Login</Link>
			</SwitchLink>
		</FormContainer>
	);
};

export default SignupForm;
