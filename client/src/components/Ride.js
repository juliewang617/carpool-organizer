import React from "react";
import BlueCar from "../assets/BlueCar.png";
import GrayCar from "../assets/BlueCar.png";
import "./Ride.css";

export default function Ride(props) {
  // driver -> driver obj with name, email, phone, address
  // passengerList -> list of passenger obj with name, email, phone, address
  // passengerSeats -> int
  // vehicleDescription -> str
  // departureTime -> str
  // departureLocation -> str
  // returnTime -> str
  // returnLocation -> str

  return (
    <div class="w-100 d-flex flex-md-row flex-column">
      <div class="car">
        <img src={BlueCar} />
        <div class="overlay-text">3/5 Open</div>
      </div>

      <div class="text-start">
        <ul class="ride-info">
          <li>Driver: </li>
          <li>Passengers:</li>
          <li>Pick up time: </li>
          <li>Pick up location:</li>
          <li>Phone:</li>
          <li>Email:</li>
          <li>Notes:</li>
          <li>Vehicle Description:</li>
        </ul>
      </div>
    </div>
  );
}
