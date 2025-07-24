import {AuthForm} from '../../components/organisms/Auth/AuthForm';
import {useAuth} from '../../context/AuthContext';
import {signupFormConfig, SignUpSchema, type SignUpData} from '../../components/organisms/Auth/Auth.static';

const SignupForm = () => {
	const {signup} = useAuth();

	return (
		<AuthForm<SignUpData>
			title="Sign Up"
			switchText="Already have an account?"
			switchLink="/login"
			switchLinkText="Login"
			initialData={signupFormConfig.initialData}
			schema={SignUpSchema}
			onSubmit={(data) => signup(data)}
			fields={signupFormConfig.fields}
		/>
	);
};

export default SignupForm;
