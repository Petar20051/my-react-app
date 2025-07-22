import {AuthForm} from '../../components/organisms/Auth/AuthForm';
import {loginFormConfig} from '../../constants/authFormConfig';
import {useAuth} from '../../context/AuthContext';
import {LoginSchema, type LoginData} from '../../validation/Auth';

const LoginForm = () => {
	const {login} = useAuth();

	return (
		<AuthForm<LoginData>
			title="Login"
			switchText="Don’t have an account?"
			switchLink="/signup"
			switchLinkText="Sign up"
			initialData={loginFormConfig.initialData}
			schema={LoginSchema}
			onSubmit={(data) => login(data)}
			fields={loginFormConfig.fields}
		/>
	);
};

export default LoginForm;
