import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeBlockPreviewModal } from "../redux/slices/uiSlice";

const BlockDetailModal = () => {
  const dispatch = useDispatch();
  const selectedBlock = useSelector((state) => state.ui.selectedBlock);

  if (!selectedBlock) return null;

  return (
    <div className="modal">
      <h2>Block Details</h2>
      <p>
        <strong>Name:</strong> {selectedBlock.name}
      </p>
      <p>
        <strong>State:</strong> {selectedBlock.state}
      </p>
      <p>
        <strong>History:</strong>
      </p>
      <ul>
        {selectedBlock.history.map((state, index) => (
          <li key={index}>{state}</li>
        ))}
      </ul>
      <p>
        <strong>Description:</strong>{" "}
        {selectedBlock.additionalData?.description || "N/A"}
      </p>
      <p>
        <strong>Assignee:</strong>{" "}
        {selectedBlock.additionalData?.assignee || "N/A"}
      </p>
      <p>
        <strong>Due Date:</strong>{" "}
        {selectedBlock.additionalData?.dueDate || "N/A"}
      </p>
      <button onClick={() => dispatch(closeBlockPreviewModal())}>Close</button>
    </div>
  );
};

export default BlockDetailModal;
