import { useState,useEffect } from "react";
import "../styles/bookList.css"
import { useNavigate,useLocation } from "react-router-dom";
const BookList = () => {
    let [books,setBooks] = useState([])
    let navigate = useNavigate()
    let location = useLocation()

    useEffect(()=>{
        let fetchData = async() =>{
            let response = await fetch('http://localhost:3000/books');
            let data = await response.json();
            setBooks(data)
        }
        fetchData()
    },[books])

    let Read=(id)=>{
    if(location.pathname == `/admin/book-list/${id}`){
        navigate(`/admin/book-list/${id}`)
    }else{
        navigate(`/user/book-list/${id}`)
    }
    }

    //delete a book from server
    let handleDelete = (id,title) => {
        fetch(`http://localhost:3000/books/${id}`,{
            method:'DELETE'
        })
        alert(`${title} will be deleted permanently`)
    }
    return (
        <div className="bookList">
            <h1 style={{color:"white"}}>Book List : {books.length}</h1>
            <div className="books_section">
            {books.map((data)=>(
                <div className="books_card">
                 <div className="top">
                 <div className="ima">
                    <img src={data.thumbnailUrl} alt="" />
                    </div>
                   <div className="info">
                   <h3>Title : {data.title}</h3>
                    <hr />
                    <p>Authors : {data.authors.toString()}</p>
                    <p>Page Count : {data.pageCount}</p>
                    <button onClick={()=>Read(data.id)}>Read More</button>
                    {location.pathname == '/admin/book-list' && <button onClick={()=>handleDelete(data.id,data.title)}>Delete</button>}
                   </div>
                 </div>
               
                </div>
              ))}
            </div>
        </div>
     );
}
 
export default BookList;