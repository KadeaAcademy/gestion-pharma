import {useNavigate} from "react-router-dom";

function Login() {

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home');
    }

    return <div>
        <h1>Login Page</h1>

        <button onClick={handleClick}>
            Connexion
        </button>
    </div>
}

export default Login;