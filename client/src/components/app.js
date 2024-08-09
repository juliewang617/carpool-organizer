import React from "react";
import Event from "./Event";

export default class extends React.Component {
  render() {
    return (
      <div>
        <h1>Your JS-Scaffold is up and running</h1>
        <Event
          eventName="LigerBots DCMP"
          eventDate="8/8/2024"
          eventDescription="Pack lightly"
          eventRides={["Hello"]}
        />
      </div>
    );
  }
}
