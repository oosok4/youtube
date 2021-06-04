//import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBu8Ybq4j_Ju38xXD3ZnmFpc8o_BAcmhbQ", requestOptions)
      .then(response => response.json())
      .then(result => setVideos(result.items))
      .catch(error => console.log('error', error));
  } , []); // useEffect에서 저렇게 두번째 인자값으로 빈 배열을 입력하면
           // 마운트가 되었을 때만 useEffect가 호출된다.

  
  return <VideoList videos = {videos}/>

}

export default App;
