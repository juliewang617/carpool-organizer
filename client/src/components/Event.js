import React from "react";
import { useState } from "react";
import Arrow from "../assets/Arrow.svg";

export default function Event(props) {
  // an Event has the following props: name, date, description, list of rides,
  // and waitlist

  // need to organize the list of rides into return and depart.

  // state that handles whether the Event is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div class="my-4 m-auto">
      <div
        class="text-light p-3 rounded d-flex"
        style={{ backgroundColor: "#3977ab" }}
      >
        <button
          class="d-flex align-items-start"
          style={{
            height: "48px",
            width: "2rem",
            marginRight: "0.5rem",
            background: "none",
            border: "none",
          }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <img
            src={Arrow}
            style={{ transform: isExpanded ? "rotate(180deg)" : "none" }}
          />
        </button>
        <div class="h-100 d-flex flex-column" style={{ flexGrow: 1 }}>
          <div class="d-flex mb-1 flex-column flex-md-row">
            <h5 class="me-3 my-auto fw-bold text-start">{props.eventName}</h5>
            <p class="my-auto text-start">{props.eventDate}</p>
          </div>
          <i class="text-start">{props.eventDescription}</i>
        </div>
        <div class="h-100 d-flex flex-column" style={{ width: "7rem" }}>
          <button
            style={{ border: "none", color: "#3977ab" }}
            class="rounded bg-light mb-2"
          >
            Add Car
          </button>
          <button
            style={{ border: "none", color: "#3977ab" }}
            class="rounded bg-light"
          >
            Join Carpool
          </button>
        </div>
      </div>

      {isExpanded && props.eventRides.length != 0 && (
        <div class="w-100 h-auto" style={{ display: "flex" }}>
          <div
            class="w-50 border border-dark border-top-0 
                    border-bottom-0 p-3 d-flex flex-column 
                    align-items-center"
          >
            <i>Depart</i>
            <p>{JSON.stringify(props.eventRides)}</p>
          </div>
          <div
            class="w-50 border border-dark border-top-0 border-bottom-0 
          border-start-0 p-3 d-flex flex-column align-items-center"
          >
            <i>Return</i>
          </div>
        </div>
      )}
    </div>
  );
}
