import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeDataEntryModal } from "../redux/slices/uiSlice";
import { updateBlockState } from "../redux/slices/blocksSlice";

const DataEntryModal = () => {
  const dispatch = useDispatch();
  const selectedBlock = useSelector((state) => state.ui.selectedBlock);
  const [formData, setFormData] = useState({
    description: "",
    assignee: "",
    dueDate: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      updateBlockState({
        blockId: selectedBlock.id,
        newState: selectedBlock.newState,
        additionalData: formData,
      }),
    );

    dispatch(closeDataEntryModal());
  };

  if (!selectedBlock) return null;

  return (
    <div className="modal">
      <h2>Enter Data for {selectedBlock.name}</h2>
      <form onSubmit={handleSubmit} className="form-group">
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Assignee:
          <input
            type="text"
            name="assignee"
            value={formData.assignee}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Due Date:
          <input
            type="date"
            name="dueDate"
            value={formData.dueDate}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Submit</button>
        <button type="button" onClick={() => dispatch(closeDataEntryModal())}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default DataEntryModal;
