import {AuthForm} from '../../components/organisms/Auth/AuthForm';
import {useAuth} from '../../context/AuthContext';
import {loginFormConfig, LoginSchema, type LoginData} from '../../components/organisms/Auth/Auth.static';

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
