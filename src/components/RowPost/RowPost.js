import React, { useCallback, useEffect, useState } from 'react';
import './RowPost.css';
import axios from '../../axios.js';
import { API_KEY, imgUrl } from '../../Constants';
import YouTube from 'react-youtube';

export const RowPost = (props) => {
  const [movies, setMoviesData] = useState([]);
  const [trailer, setTrailer] = useState("");
  const [scrollFront,setScrollFront] = useState(false);

  useEffect(() => {
    axios.get(props.url).then(response => {
      setMoviesData(response.data.results);
    });
    if(scrollFront){
    }
  }, [props.url]);

  const opts = {
    height: '390',
    width: '1250',
    playerVars: {
      autoplay: 1,
    },
  };

  const filimSelected = async (id) => {
    try {
      const trlr = await axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
      if (trlr.data.results.length !== 0) {
        const videoKey = trlr.data.results[0].key; // Assuming the first result is the correct trailer
        setTrailer(videoKey); // Set the trailer state with the video key
      } else {
        setTrailer(""); // Clear the trailer state if no trailer found
      }
    } catch (error) {
      console.error("Failed to fetch trailer:", error);
    }
 
    // setTrailer("");
  };

  const setIcon=(index)=>{
    if (index%5===0)
    {
      setScrollFront(true);
    }
  }
  return (
    <div className='col-12'>
      <div className='row'>
        <h4>{props.title}</h4>
        <div className='posters'>
          {movies.map((d,index) => (
            <img 
              key={d.id} // Add a unique key here
              className="poster" 
              src={`${imgUrl + d.poster_path}`} 
              onClick={() => filimSelected(d.id)}
              onMouseLeave={()=>{setTrailer("")}}
              onMouseEnter={()=>{setIcon(index)}}
            />

          ))}
        </div>

        {trailer ? <YouTube opts={opts} videoId={trailer} /> : ""}
      </div>
    </div>
  );
};
