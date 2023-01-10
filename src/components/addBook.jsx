import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/addBook.css'
const AddBook = () => {
    let [title,setTitle]=useState("")
    let [categories,setCategories]=useState("")
    let [authors,setAuthors]=useState("")
    let [pageCount,setPageCount]=useState("")
    let [shortDescription,setShortDescription]=useState("")
    let [longDescription,setLongDescription]=useState("")
    let [thumbnailUrl,setThumbnailUrl]=useState("")

    let navigate = useNavigate()

    let handleSubmit = (e) =>{
        e.preventDefault();
        //data to be posted
        let booksData={title,categories,authors,pageCount,shortDescription,longDescription,thumbnailUrl}
        //posting to server
        fetch('http://localhost:3000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(booksData)
        })
        alert('book added successfully')
        navigate('/admin/book-list')
    }
    //title,categories,authors,pageCount,shortDescription,longDescription,tumbnailurl
    return ( 
        <div className="addbook">
            <h1 style={{color:"white"}}>Add a Book</h1>
            <div className="form">
                <form action="" className="form-group" onSubmit={handleSubmit}>
                    <div className="title">
                        <input value={title} onChange={(e)=>setTitle(e.target.value)} type="text" placeholder="title of the book" />
                    </div>
                    <div className="authors">
                        <input value={authors} onChange={(e)=>setAuthors(e.target.value)} type="text" placeholder="name of the author" />
                    </div>
                    <div className="categories">
                        <input value={categories} onChange={(e)=>setCategories(e.target.value)} type="text" placeholder="category of the book" />
                    </div>
                    <div className="pageCount">
                        <input value={pageCount} onChange={(e)=>setPageCount(e.target.value)} type="text" placeholder="" />
                    </div>
                    <div className="shortDescription">
                        <textarea value={shortDescription} onChange={(e)=>setShortDescription(e.target.value)} name="" id="" cols="130" rows="5" placeholder="short decription"></textarea>
                    </div>
                    <div className="longDescription">
                   <textarea value={longDescription} onChange={(e)=>setLongDescription(e.target.value)} name="" id="" cols="130" rows="10" placeholder="long description"></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input type="text"value={thumbnailUrl} onChange={(e)=>setThumbnailUrl(e.target.value)} placeholder="Tumb nail url"/>
                    </div>
                    <button className="add" type='submit'>Add Book</button>
                </form>
            </div>
        </div>
     );
}
 
export default AddBook;
