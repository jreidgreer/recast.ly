class VideoListEntry extends React.Component {
  constructor(props) {
    super(props);
  }

  videoTitleOnClick(e) {
    e.data = this.props.video;
  }

  render() {
    return (
      <div className="video-list-entry">
        <div className="media-left media-middle">
          <img className="media-object" src={this.props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div onClick={this.videoTitleOnClick.bind(this)} className="video-list-entry-title">{this.props.video.snippet.title}</div>
          <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
        </div>
      </div>);
  }
}

window.VideoListEntry = VideoListEntry;
