import { useState, useRef, useEffect } from "react";

//Blogging App using Hooks
export default function Blog(){

    // const [title,setTitle] = useState("");
    // const [content,setContent] = useState("");
    const [formData,setFormData] = useState({title : "",content : ""})
    const [blogs,setBlogs] = useState([]);
    const titleRef = useRef(null);


    useEffect(() =>{
        titleRef.current.focus();
    },[]);

    useEffect(() => {

        if(blogs.length && blogs[0].title){
            document.title = blogs[0].title;
        }else{
            document.title = "No blogs!"
        }
    }, [blogs]);
    
    //Passing the synthetic event as argument to stop refreshing the page on submit
    function handleSubmit(e){
        e.preventDefault();

        // setBlogs([{title,content},...blogs]);
        setBlogs([{title : formData.title,content :formData.content}, ...blogs]);

        //Empyting last typed on input fields
        // setTitle("");
        // setContent("");
        setFormData({title : "", content : ""})
        titleRef.current.focus();
    }

    const RemoveBlog = (i) => {
        //removes the particular blog with specific index
        setBlogs(blogs.filter((blog,index)=> i!==index));
    }


    return(
        <>
        {/* Heading of the page */}
        <h1>Write a Blog!</h1>

        {/* Division created to provide styling of section to the form */}
        <div className="section">

        {/* Form for to write the blog */}
            <form onSubmit={handleSubmit}>

                {/* Row component to create a row for first input field */}
                <Row label="Title">
                        <input className="input"
                                placeholder="Enter the Title of the Blog here.."
                                // value={title}
                                // onChange={(e) => {setTitle(e.target.value)}}
                                ref={titleRef}
                                value={formData.title}
                                onChange={(e) => {setFormData({title : e.target.value, content : formData.content})}}
                                />
                                
                </Row >

                {/* Row component to create a row for Text area field */}
                <Row label="Content">
                        <textarea className="input content"
                                placeholder="Content of the Blog goes here.."
                                // value={content}
                                // onChange={(e) => {setContent(e.target.value)}}
                                required
                                value={formData.content}
                                onChange={(e) => {setFormData({title : formData.title, content : e.target.value})}}/>
                </Row >

                {/* Button to submit the blog */}            
                <button className = "btn">ADD</button>
            </form>
                     
        </div>

        <hr/>

        {/* Section where submitted blogs will be displayed */}
        <h2> Blogs </h2>
        {blogs.map((b,index) => 
            <div className="blog" key={index}>
            <h3>{b.title}</h3>
            <p>{b.content}</p>
            <div className="blog-btn">
                <button className="btn remove" onClick={() => RemoveBlog(index)}>Delete <img alt ="" src="https://cdn-icons-png.flaticon.com/128/1828/1828843.png"/></button>
            </div>  
            </div>
        )}
        
        
        </>
        )
    }

//Row component to introduce a new row section in the form
function Row(props){
    const{label} = props;
    return(
        <>
        <label>{label}<br/></label>
        {props.children}
        <hr />
        </>
    )
}
