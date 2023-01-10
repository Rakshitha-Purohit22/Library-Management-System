import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addUsers.css'

const AddUser = () => {
    let [name,setName] = useState("")
    let [age,setAge] = useState("")
    let [email,setEmail] = useState("")
    let [phoneNumber,setPhoneNumber] = useState("")

    let navigate = useNavigate()

    let handleUser = (e) =>{
        e.preventDefault();
        let userData = {name,age,email,phoneNumber}
        fetch('http://localhost:3000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userData)
        })
        alert('new user added successfully')
        navigate('/admin/user-list')
    }
    return ( 
        <div className="addUser">
            <h1 style={{color:"white"}}>Add a new User</h1>
            <div className="form">
                <form action="" onSubmit={handleUser}>
                    <div className="name">
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="enter name of the user"/>
                    </div>
                    <div className="age">
                        <input value={age} onChange={(e)=>setAge(e.target.value)} type="number" placeholder="enter user age"/>
                    </div>
                    <div className="email">
                        <input value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="user email"/>
                    </div>
                    <div className="phoneNumber">
                        <input value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)} type="tel" placeholder="user phone number"/>
                    </div>
                    <button className="addbtn" type="submit">Add User</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddUser;