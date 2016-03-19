class VideoList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="video-list media">
        <VideoListEntry video={this.props.videoList[0]} />
        <VideoListEntry video={this.props.videoList[1]} />
        <VideoListEntry video={this.props.videoList[2]} />
        <VideoListEntry video={this.props.videoList[3]} />
        <VideoListEntry video={this.props.videoList[4]} />
      </div>);
  }
}

window.VideoList = VideoList;
