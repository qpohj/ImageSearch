import { useAuth0 } from '@auth0/auth0-react';

const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    const handleLogin = async () => {
        await loginWithRedirect();
    };

    return <button onClick={handleLogin}>Log In</button>;
};

export default LoginButton;
