import { useState,useEffect } from "react";
import '../styles/userList.css'

const UserList = () => {
    let [users,setUsers] = useState([])

    useEffect(()=>{
        let userfetch = async()=>{
            let response = await fetch('http://localhost:3000/users')
            let data = await response.json()
            setUsers(data)
        }
        userfetch()
    },[])
    let handleDelete = (id,name) => {
        setUsers(users.filter(x=>x.id != id))
        alert(`${name} has been deleted`)
    }
    return ( 
    <div className="userList">
        <h1 style={{color:"white"}}>User List : {users.length}</h1>
        <br /><br />
        <div className="user_section">
            {users.map((data)=>(
                <div className="user_card">
                <h1>{data.name}</h1>
                <h5>{data.id}</h5>
                <p>{data.age}</p>
                <p>{data.email}</p>
                <p>{data.phoneNumber}</p>
                <button onClick={()=>handleDelete(data.id,data.name)}>Delete</button>
                </div>
            ))}
        </div>
    </div>
    )
}
 
export default UserList;