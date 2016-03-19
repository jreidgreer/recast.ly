class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  setAutoPlay(e) {
    console.log(e);
  }

  render() {
    return (
      <div className="video-list media">
        {this.props.videoList.map( video => 
          <VideoListEntry video={video} />
        )}
      </div>);
  }
}



window.VideoList = VideoList;
