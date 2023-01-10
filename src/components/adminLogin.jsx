import { getDefaultNormalizer } from "@testing-library/react";
import "../styles/adminLogin.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AdminLogin = () => {
let [email, setEmail] = useState("")
let [password, setPassword] = useState("")
let navigate = useNavigate()

    let handleLogin = (e) => {
        e.preventDefault();
        let data = {email,password} //data from input

        //admin validates
        if(email == "rakshitha@gmail.com" && password=="Rsp@123"){
            navigate('/admin/')
        }
        else{
            alert("Invalid credentials")
        }
    }
    return(
        <div className="adminLogin">
           <div className="form_container_card">
            <h1>Login as Admin</h1>
            <div className="form_input">
                <form onSubmit={handleLogin}>
                    <div className="email">
                        <label htmlFor="">Email : </label>
              
                    <input type="email" onChange={(e)=>setEmail(e.target.value)} 
                    placeholder="email adress" className="form_email" value={email} required/>
                    </div>
                    <br />
                    <div className="password">
                        <label htmlFor="">Password : </label>
 
                        <input type="password" onChange={(e)=>setPassword(e.target.value)} 
                        value={password} placeholder="enter password" className="form_password" required/>
                    </div>
                    <br />
                    <button className="btn1">Login</button>
                </form>
            </div>
           </div>

        </div>
    )
}
export default AdminLogin;

