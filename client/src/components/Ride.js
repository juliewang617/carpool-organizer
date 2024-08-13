import React from "react";
import BlueCar from "../assets/BlueCar.png";
import GrayCar from "../assets/BlueCar.png";
import "./Ride.css";
import { useState } from "react/cjs/react.production.min";

export default function Ride(props) {
  // driver -> driver obj with name, email, phone, address
  // passengerList -> list of passenger obj with name, email, phone, address
  // passengerSeats -> int
  // vehicleDescription -> str
  // departureTime -> str
  // departureLocation -> str
  // returnTime -> str
  // returnLocation -> str

  const {
    type,
    departureLocation,
    departureTime,
    driver,
    notes,
    passengerList,
    passengerSeats,
    returnLocation,
    returnTime,
    vehicleDescription,
  } = props.props;

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div class="w-100 d-flex flex-md-row flex-column">
      <div class="car">
        <img src={BlueCar} />
        <div class="overlay-text">
          {passengerSeats - passengerList.length}/{passengerSeats} Open
        </div>
      </div>

      <div class="text-start flex-grow-1">
        <ul class="ride-info">
          <li>
            Driver: <p class="ride-info-text">{driver.name}</p>{" "}
          </li>
          <li>
            Passengers:
            {passengerList.map((p) => (
              <p class="ride-info-text"> {p.name}</p>
            ))}
          </li>
          <li>
            Pick up time:{" "}
            <p class="ride-info-text">
              {type == "depart" ? departureTime : returnTime}
            </p>
          </li>
          <li>
            Pick up location:
            <p class="ride-info-text">
              <i> {type == "depart" ? departureLocation : returnLocation}</i>
            </p>
          </li>

          {isExpanded && (
            <span>
              <li>
                Vehicle Description:{" "}
                <p class="ride-info-text">
                  <i>{vehicleDescription}</i>
                </p>
              </li>
              <li>
                Phone: <p class="ride-info-text">{driver.phone}</p>
              </li>
              <li>
                Email: <p class="ride-info-text">{driver.email}</p>
              </li>
              <li>
                Notes:{" "}
                <p class="ride-info-text">
                  <i>{notes}</i>
                </p>
              </li>
            </span>
          )}
          <button class="expand-btn" onClick={() => setIsExpanded(!isExpanded)}>
            {!isExpanded ? "...see more" : "close"}
          </button>
        </ul>
      </div>
    </div>
  );
}
