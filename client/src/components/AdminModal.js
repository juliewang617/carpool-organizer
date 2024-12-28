import React from "react";

export default function AdminModal(props) {
  return (
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-bs-dismiss="modal">
            &times;
          </button>
          <h4 class="modal-title mx-auto">Admin portal</h4>
        </div>
        <div class="modal-body">
          <p>You are not authorized to view this page.</p>
        </div>
      </div>
    </div>
  );
}
