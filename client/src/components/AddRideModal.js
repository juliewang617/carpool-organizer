import React from "react";
import "./AddRideModal.css";

export default function AddRideModal(props) {
  [passengerSeats, setPassengersSeats] = useState(0);
  [vehicleDesc, setVehicleDesc] = useState("");
  [departTime, setDepartTime] = useState("");
  [departLoc, setDepartLoc] = useState("");
  [returnTime, setReturnTime] = useState("");
  [returnLoc, setReturnLoc] = useState("");
  [notes, setNotes] = useState("");

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
            <div class="d-flex mb-4 gap-3 justify-content-center">
              <div>
                <input
                  type="checkbox"
                  id="depart"
                  name="depart_and_or_return"
                  value="depart"
                  checked
                />
                <label class="mx-1" for="depart">
                  Depart
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="return"
                  name="depart_and_or_return"
                  value="return"
                  checked
                />
                <label class="mx-1" for="return">
                  Return
                </label>
              </div>
            </div>

            <ul class="add-ride-ul">
              <li class="add-ride-li">
                <label for="passenger-seats">Passenger Seats</label>
                <input
                  type="text"
                  id="passenger-seats"
                  name="passenger-seats"
                  value={passengerSeats}
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
