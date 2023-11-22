import {useNavigate} from "react-router-dom";

function LoginButton() {

    const navigate = useNavigate();

    return <button onClick={
        () => {
            navigate('/');
        }
    }>
        Connexion
    </button>
}

export default LoginButton;