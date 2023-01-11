import { useNavigate } from "react-router-dom";
import "../styles/userLogin.css"

const UserLogin = () => {
    let navigate = useNavigate()
    let handleLogin = () => {
        navigate('/user/')
    }
    return (
        <div className="userLogin">
            <div className="form_container_card">
                <h1>Login as User</h1>
                <div className="form_input">
                    <form onSubmit={handleLogin}>
                        <div className="email">
                            <label htmlFor="">Email : </label>
                            <input type="email" placeholder="email adress" className="form_email" required />
                        </div>
                        <br />
                        <div className="password">
                            <label htmlFor="">Password : </label>
                            <input type="password" placeholder="enter password" className="form_password" required />
                        </div>
                        <br />
                        <button className="btn">Login</button>
                    </form>
                </div>
            </div>

        </div>
    );
}

export default UserLogin;