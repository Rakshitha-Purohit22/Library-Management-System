import { Link } from "react-router-dom";
import "../styles/landingPage.css"
const LandingPage = () => {
    return ( 
        <div className="landingPage">
            <div className="selectLoginType">
                <h1>Library Management System</h1>
                <br /><br />
              <div className="main">
              <div className="admin">
               <img  height={200} width={200} src="/images/adminLogo.jpg" alt="" />
                <br />
                <button><Link to='/admin-login'>Admin Login</Link></button>
               </div>
                <div className="user">
                <img  height={200} width={200} src="/images/userr.png" alt="" />
                <br />
                <button><Link to='/user-login'>User Login</Link></button>
                </div>
              </div>
            </div>
        </div>
     );
}
 
export default LandingPage;