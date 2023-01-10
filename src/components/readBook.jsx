import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadBook = () => {
    let [books,setBooks] = useState([]) 

    let params = useParams()

    useEffect(()=>{
        let fetchData = async() =>{
            let response = await fetch(`http://localhost:3000/books/${params.id}`)
            let data = await response.json()
            setBooks(data)
        }
        fetchData()
    },[])
    return ( 
        <div className="readBook_container">
            <div className="card">
                <h2>{books.title}</h2>
                <div className="card-footer">
                    <p>{books.shortDescription}</p>
                    <p>{books.longDescription}</p>
                </div>
            </div>
        </div>
     );
}
 
export default ReadBook;