import React from "react";
import Event from "./Event";
import RulesModal from "./RulesModal";
import { eventData } from "../sampleData/eventData";
import AdminModal from "./AdminModal";

export default class extends React.Component {
  render() {
    return (
      <div class="w-100 min-vh-100">
        <div class="d-flex w-full justify-content-between">
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#rulesModal"
            style={{ background: "none", border: "none", color: "#3977ab" }}
          >
            Carpool Rules and Procedures
          </button>
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#adminModal"
            style={{ background: "none", border: "none", color: "#3977ab" }}
          >
            Manage Events (Admin only)
          </button>
          <div id="rulesModal" class="modal fade" role="dialog">
            <RulesModal />
          </div>
          <div id="adminModal" class="modal fade" role="dialog">
            <AdminModal />
          </div>
        </div>

        <div
          class="m-auto d-flex justify-content-center"
          style={{ width: "90%", maxWidth: "60rem" }}
        >
          <ul class="w-100" style={{ paddingLeft: 0 }}>
            {eventData.map((event) => (
              <Event
                eventName={event.eventName}
                eventDate={event.eventDate}
                eventDescription={event.eventDescription}
                eventRides={event.eventRides}
                key={event.eventName}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
