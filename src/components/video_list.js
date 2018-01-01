import React from 'react';
import VideoListItem from './video_list_item';


const VideoList = (props) => {
  const videos = props.videos;
  const videoItems = videos.map((video, idx)=>{
    return (
      <VideoListItem 
        key={idx} 
        video={video}
        onVideoSelect={props.onVideoSelect} 
      />
      )
  });

  return (
  <ul className="col-md-4 list-group">
    {videoItems}          
  </ul>
  );
}

export default VideoList;