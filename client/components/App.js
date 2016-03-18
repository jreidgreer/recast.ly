class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (<div>
              <Nav />
              <div className="col-md-7">
                <VideoPlayer video={this.props.videoData[0]} />
              </div>
              <div className="col-md-5">
                <VideoList videoList={this.props.videoData} />
              </div>
            </div>);
  }
}

ReactDOM.render(<App videoData={exampleVideoData} />, document.getElementById('app'));