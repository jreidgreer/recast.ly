var App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer/>
    </div>
    <div className="col-md-5">
      <VideoList videoList={exampleVideoData} />
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));