class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  searchVideos(e) {
    e.data = e.target.value;
  }

  render() {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" type="text" onKeyUp={this.searchVideos} />
        <button className="btn hidden-sm-down" onClick={this.searchVideos} >
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>);
  }
}

window.Search = Search;
