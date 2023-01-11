import UserNavbar from "./userNavbar";
import UserDashboard from "./userDashboard";
import { Routes,Route } from "react-router-dom";
import ReadBook from "./readBook";
import BookList from "./bookList";
const UserPortal = () => {
    return ( 
        <div className="userPortal">
            <UserNavbar/>
            <Routes>
                <Route path="/" element={<UserDashboard/>}/>
                <Route path="/book-list" element={<BookList/>}/>
                <Route path="/book-list/:id" element={<ReadBook/>}/>
            </Routes>
        </div>
     );
}
 
export default UserPortal;