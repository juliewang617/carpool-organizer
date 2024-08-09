import React from "react";
import Event from "./Event";

export default class extends React.Component {
  render() {
    return (
      <div>
        <div class="d-flex w-full justify-content-between">
          <button type="button" class="btn btn-link">
            Carpool Rules and Procedures
          </button>
          <button type="button" class="btn btn-link">
            Manage Events (Admin only)
          </button>
        </div>
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
