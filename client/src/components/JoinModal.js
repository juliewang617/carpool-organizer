import React, { useState } from "react";
import "./AddRideModal.css";

export default function AddRideModal(props) {
  const [isDepart, setIsDepart] = useState(true);
  const [isReturn, setIsReturn] = useState(true);

  const [rideData, setRideData] = useState({
    name: "",
    email: "",
    phone_number: "",
  });

  const handleSubmit = (e) => {
    console.log(rideData);
  };

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
                  onChange={(e) => setIsDepart(e.target.checked)}
                  defaultChecked="true"
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
                  onChange={(e) => setIsReturn(e.target.checked)}
                  defaultChecked="true"
                />
                <label class="mx-1" for="return">
                  Return
                </label>
              </div>
            </div>

            <ul class="add-ride-ul mb-3">
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
              {isDepart && (
                <span>
                  <li class="add-ride-li">
                    <label for="depart-time">Departure Time</label>
                    <input
                      type="text"
                      id="depart-time"
                      name="depart-time"
                      class="add-ride-input"
                    ></input>
                  </li>
                  <li class="add-ride-li">
                    <label for="depart-loc">Departure Location</label>
                    <input
                      type="text"
                      id="depart-loc"
                      name="depart-loc"
                      class="add-ride-input"
                    ></input>
                  </li>
                </span>
              )}
              {isReturn && (
                <span>
                  <li class="add-ride-li">
                    <label for="return-time">Return Time</label>
                    <input
                      type="text"
                      id="return-time"
                      name="return-time"
                      class="add-ride-input"
                    ></input>
                  </li>
                  <li class="add-ride-li">
                    <label for="return-loc">Return Location</label>
                    <input
                      type="text"
                      id="return-loc"
                      name="return-loc"
                      class="add-ride-input"
                    ></input>
                  </li>
                </span>
              )}
              <li class="add-ride-li">
                <label for="notes">Notes</label>
                <input
                  type="text"
                  id="notes"
                  name="notes"
                  class="add-ride-input"
                ></input>
              </li>
            </ul>
            <input type="submit" onSubmit={handleSubmit} />
          </form>
        </div>
      </div>
    </div>
  );
}
