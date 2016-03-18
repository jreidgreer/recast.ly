var VideoList = (props) => (
  <div className="video-list media">
    <VideoListEntry video={props.videoList[0]} />
    <VideoListEntry video={props.videoList[1]} />
    <VideoListEntry video={props.videoList[2]} />
    <VideoListEntry video={props.videoList[3]} />
    <VideoListEntry video={props.videoList[4]} />
  </div>
);

window.VideoList = VideoList;
