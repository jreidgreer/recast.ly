class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: props.videoData,
      currentVideo: props.videoData[0],
      autoplay: 1
    };
    this.canSearch = false;
    this.searchVideos = window.debounce(this.triggerSearchVideos.bind(this), 400);
  }

  componentDidMount() {
    searchYouTube({query: 'Potatoes', key: window.YOUTUBE_API_KEY}, data => {
      this.setState({
        videos: data.items,
        currentVideo: data.items[0]
      });     
    });
    // ReactDOM.render(<App videoData={data.items} />, document.getElementById('app'));
  }

  setAutoPlay() {
    this.setState({
      autoplay: this.state.autoplay === 1 ? 0 : 1
    });
  }

  videoTitleOnClick(e) {
    this.setState({
      currentVideo: e.data
    });
  }

  triggerSearchVideos() {
    if (document.getElementById('search').value.length > 0) {
      searchYouTube({query: document.getElementById('search').value, key: window.YOUTUBE_API_KEY}, data => {
        this.setState({
          videos: data.items,
          currentVideo: data.items[0]
        });     
      });
    }
  }

  render() {
    return (<div onKeyUp={this.searchVideos.bind(this)} onClick={this.searchVideos.bind(this)}>
              <Nav />
              <div className="col-md-7">
                <VideoPlayer video={this.state.currentVideo} autoplay={this.state.autoplay} />
              </div>
              <div onClick={this.videoTitleOnClick.bind(this)} className="col-md-5">
                <div onChange={this.setAutoPlay.bind(this)}>
                  <AutoPlay />
                </div>
                <VideoList videoList={this.state.videos} />
              </div>
            </div>);
  }
}

window.placeholderData = [
  {
    'id': {
      'videoId': ''
    },
    'snippet': {
      'title': 'No video loaded',
      'description': 'Please search for a video to watch',
      'thumbnails': {
        'default': {
          'url': '',
          'width': 120,
          'height': 90
        }
      }
    }
  }
];

window.debounce = function(func, wait, immediate) {
  var timeout, args, context, timestamp, result;

  var later = function() {
    var last = Date.now - timestamp;

    if (last < wait && last >= 0) {
      timeout = setTimeout(later, wait - last);
    } else {
      timeout = null;
      if (!immediate) {
        result = func.apply(context, args);
        if (!timeout) { context = args = null; }
      }
    }
  };

  return function() {
    context = this;
    args = arguments;
    timestamp = Date.now;
    var callNow = immediate && !timeout;
    if (!timeout) { timeout = setTimeout(later, wait); }
    if (callNow) {
      result = func.apply(context, args);
      context = args = null;
    }

    return result;
  };
};

ReactDOM.render(<App videoData={placeholderData} />, document.getElementById('app'));
