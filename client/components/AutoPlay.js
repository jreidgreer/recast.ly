class AutoPlay extends React.Component {
  constructor(props) {
    super(props);
  }

  setAutoPlay() {
    
  }

  render() {
    return (
      <div>Autoplay <input type="checkbox" defaultChecked="checked" onChange={this.setAutoPlay} /> </div>
   );
  }
}

window.AutoPlay = AutoPlay;
