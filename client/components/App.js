class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: props.videoData,
      currentVideo: props.videoData[0]
    };
  }

  videoTitleOnClick(e) {
    this.setState({
      currentVideo: e.data
    });
  }

  render() {
    return (<div>
              <Nav />
              <div className="col-md-7">
                <VideoPlayer video={this.state.currentVideo} />
              </div>
              <div onClick={this.videoTitleOnClick.bind(this)} className="col-md-5">
                <VideoList videoList={this.state.videos} />
              </div>
            </div>);
  }
}

ReactDOM.render(<App videoData={exampleVideoData} />, document.getElementById('app'));