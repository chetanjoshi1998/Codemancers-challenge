
import '../componants/post.css'
import { useState } from "react";






const Post = () => {
    const [post, setPost] = useState("")
    const [comment, Setcomment] = useState([])
    const allComments = () => {
        Setcomment((oldcomments) => {
            return [...oldcomments, post];
        });
        setPost('')
    }
    return (
        <>
            <div>

                <div className="post_area">
                    <div className="form-group">
                        <label htmlFor="comment">Comment:</label>
                        <textarea className="form-control" value={post} onChange={(e) => setPost(e.target.value)} rows="5" id="comment"></textarea>
                        <button type="button" onClick={allComments} className="btn-outline-primary">Post</button>
                    </div>
                    <div>

                        {comment.map((comments) => {
                            return <p>{comments}</p>
                        })}

                    </div>

                </div>

            </div>
        </>
    )
};
export default Post;