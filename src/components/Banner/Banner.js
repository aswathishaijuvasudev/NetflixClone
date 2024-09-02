import React, { useEffect,useState } from 'react';
import './Banner.css';
import YouTube from 'react-youtube';
import { imgUrl,API_KEY } from '../../Constants';
// import axios from 'axios';
import axios from '../../axios';
export const Banner = ({url}) => {
  const [banner,setBanner] = useState([]);
  const [trailer,setTrailer] = useState();

 


  useEffect(()=>{
    axios.get(url).then(response =>setBanner(response.data.results.slice(0,5)) );

    
    
  },[]);
  const bannerStyle={
    // backgroundImage:`url(https://image.tmdb.org/t/p/w500${banner.poster_path})`
    
  }

  const opts = {
    height: '390',
    width: '800',
    playerVars: {
      autoplay: 1,
    },
  };
  const trilerShow=async(id)=>{
    const trlr = await axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`);
    if(trlr.data.results.length!==0)
    {
      setTrailer(trlr.data.results[0].key);
    }
  }
 
  return (
    <div className='banners'>
    {banner.map((d)=>(
    <div className='banner' style={{backgroundImage:`url(${imgUrl+d.poster_path})`}} onMouseEnter={()=>{trilerShow(d.id)}} onMouseLeave={()=>setTrailer("")}>
      <div className='content d-flex  flex-column align-items-start  '>
        <h1>{d.title}</h1>
        <div className='banner_buttons'>
          <button><i class="bi bi-play-fill"></i>Play</button>
          <button><i class="bi bi-plus"></i>My List</button>
        </div>
        <div className='description'>{d.overview}</div>
        
      </div>
      {trailer ? <YouTube opts={opts} videoId={trailer} /> : ""}

    <div className='fade_bottom'></div>
      
    </div>
    ))
    }

    </div>
  )
}
