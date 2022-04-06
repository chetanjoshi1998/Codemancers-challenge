import { useState } from "react";
import "./gif.css"
const Gify_url = 'https://api.giphy.com/v1/gifs/search?api_key=86z6V9wIjKyMDy2HNyoL92pcJvZvmRWq&q=20&limit=25&offset=0&rating=g&lang=en'

const Gifs = () => {

    let [search, setSearch] = useState("");
    let [gifs, setGifs] = useState([]);
  
    let searchGif = () => {
        if (search.length > 0) {
          
            fetch(Gify_url + search)
                .then((res) => {
                   
                    return res.json();
                })
                .then((result) => {
                    console.log(result);
                    setGifs(result.data.map((gif) => {
                        return gif.images.fixed_height.url;
                    }))
                })
                
        }
    }
    return (
        <div className="gif_search">
            <div className="header">
                <div>
                    <input
                        type="text"
                        placeholder="Search GIF"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className="btn-outline-primary " onClick={searchGif}>
                        Search
                    </button>
                </div>
            </div>
            <div className="list">
                            {
                                gifs.map((gif) => {
                                    return (
                                        <div className="item">
                                            <img  src={gif} />
                                        </div>
                                    )
                                })
                            }
                        </div>
        </div>
    )
}
        
    
;
export default Gifs;