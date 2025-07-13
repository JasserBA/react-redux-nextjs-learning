import React from "react";

class AppMain extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "lisbon" };
    this.fetchWeather = this.fetchWeather.bind(this);
    console.log(this.state.location);
  }

  fetchWeather() {
    console.log(this.state.location);
  }
  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input
            type="text"
            placeholder="Search from location..."
            onChange={(e) => this.setState({ location: e.currentTarget.value })}
          />
        </div>
        <button onMouseEnter={this.fetchWeather}>Get Weather 🔍</button>
      </div>
    );
  }
}
export default AppMain;
