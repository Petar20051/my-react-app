import {AuthForm} from '../../components/Auth/AuthForm';
import {signupFormConfig} from '../../constants/formConfig';
import {useAuth} from '../../context/AuthContext';
import {SignUpSchema, type SignUpData} from '../../validation/Auth';

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
