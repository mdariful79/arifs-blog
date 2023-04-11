const BlogList = ({blogs,title, handleDelete}) => {

    return ( 
        <div className="blog-list">
            <h2> {title} </h2>
            {blogs.map((blogs) => (
            <div className="blog-preview" key={blogs.id}>
                <h2>{blogs.title}</h2>
                <p>written by {blogs.author}</p>
                <button onClick={() => handleDelete(blogs.id)}>Delete Blog</button>
            </div>
           ))}
        </div>
     );
}
 
export default BlogList;