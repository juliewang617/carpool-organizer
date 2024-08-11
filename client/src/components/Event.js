import React from "react";
import { useState } from "react";

export default function Event(props) {
  // an Event has the following props: name, date, description, list of rides,
  // and waitlist

  // need to organize the list of rides into return and depart.

  // state that handles whether the Event is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div class="my-5 m-auto">
      <div
        class="text-light p-3 rounded d-flex"
        style={{ height: "6rem", backgroundColor: "#3977ab" }}
      >
        <button
          class="bg-light"
          style={{ width: "2rem", marginRight: "0.5rem" }}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          ^
        </button>
        <div class="h-100 d-flex flex-column" style={{ flexGrow: 1 }}>
          <div class="d-flex mb-1" style={{ height: "2rem" }}>
            <h5 class="me-3 my-auto fw-bold">{props.eventName}</h5>
            <p class="my-auto">{props.eventDate}</p>
          </div>
          <i class="text-start">{props.eventDescription}</i>
        </div>
        <div class="h-100 d-flex flex-column" style={{ width: "7rem" }}>
          <button class="bg-light mb-1">Add Car</button>
          <button class="bg-light">Join Carpool</button>
        </div>
      </div>

      {isExpanded && props.eventRides.length != 0 && (
        <div class="w-100 h-auto" style={{ display: "flex" }}>
          <div
            class="w-50 border border-dark border-top-0 
                    border-bottom-0 border-start-0 p-3 d-flex flex-column 
                    align-items-center"
          >
            <i>Depart</i>
            <p>{props.eventRides}</p>
          </div>
          <div class="w-50 p-3 d-flex flex-column align-items-center">
            <i>Return</i>
          </div>
        </div>
      )}
    </div>
  );
}
