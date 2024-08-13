import React from "react";
import "./AddRideModal.css";

export default function AddRideModal(props) {
  return (
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-bs-dismiss="modal">
            &times;
          </button>
          <h4 class="modal-title mx-auto">Add Ride</h4>
        </div>
        <div class="modal-body">
          <form>
            <ul class="add-ride-ul">
              <li class="add-ride-li">
                <label for="passenger-seats">Passenger Seats</label>
                <input
                  type="text"
                  id="passenger-seats"
                  name="passenger-seats"
                  class="add-ride-input"
                ></input>
              </li>
              <li class="add-ride-li">
                <label for="vehicle-desc">Vehicle description</label>
                <input
                  type="text"
                  id="vehicle-desc"
                  name="vehicle-desc"
                  class="add-ride-input"
                ></input>
              </li>
            </ul>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
}
