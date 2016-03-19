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

// window.placeholderData = [
//   {
//     'id': {
//       'videoId': ''
//     },
//     'snippet': {
//       'title': 'No video loaded',
//       'description': 'Please search for a video to watch',
//       'thumbnails': {
//         'default': {
//           'url': '',
//           'width': 120,
//           'height': 90
//         }
//       }
//     }
//   }
// ];

ReactDOM.render(<App videoData={placeholderData} />, document.getElementById('app'));